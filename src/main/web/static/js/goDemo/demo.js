/**
 * Created by soddygosongguochao on 2017/3/13.
 */

var gojsApp = angular.module("gojsApp", []);

//**http设置*//
gojsApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // OvApperride $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '='
                        + encodeURIComponent(value) + '&';
                }
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
}]);

gojsApp.controller("gojsCtrl", gojsCtrl)

//controller
function gojsCtrl($compile, $scope, $http, $q) {

    var $ = null;//gojs 全局对象
    var myDiagram = null;//图形对象
    $scope.layout = "TreeLayout";
    $scope.nodeColor = "blue";

    $scope.nodeData = null;//点击的节点数据对象
    $scope.nodeDataShow = false;//点击的节点数据对象
    $scope.menuText = null;//菜单点击提示信息演示


    var nodeBlackGorundBrush = null;//节点背景颜色笔刷


    $scope.init = function () {
        console.log("init active!");
        $ = go.GraphObject.make;  // for conciseness in defining templates
        $scope.firstInit();
    }

    /**
     * 更改布局
     */
    $scope.changeLayout = function () {
        myDiagram.startTransaction("change Layout");
        var layout = $(go.TreeLayout);
        switch ($scope.layout) {
            case "ForceDirectedLayout":
                layout = $(go.ForceDirectedLayout);
                break;
            case "LayeredDigraphLayout":
                layout = $(go.LayeredDigraphLayout);
                break;
            case "TreeLayout":
                layout = $(go.TreeLayout);
                break;
            case "CircularLayout":
                layout = $(go.CircularLayout);
                break;
            case "GridLayout":
                layout = $(go.GridLayout);
                break;
        }
        myDiagram.layout = layout;
        myDiagram.commitTransaction("change Layout");
    }

    /**
     * 获取节点信息
     */
    $scope.getNodeDatas = function () {
        var deferred = $q.defer();
        var dataPromise = deferred.promise;

        var childNodeList = new Array();
        $http({
            url: "getNodeDatas",
            method: "POST",
            data: {}
        }).then(function (resp) {
            var data = resp.data;
            for (var i in data) {
                var childNode = new Object();
                childNode.key = data[i].nodeKey;
                childNode.text = data[i].text;
                childNode.name = data[i].name;
                childNode.type = data[i].type;
                childNode.ip = data[i].ip;
                childNode.os = data[i].os;
                childNode.mark = data[i].mark;
                childNodeList.push(childNode)
            }
            deferred.resolve(childNodeList);

        });
        return dataPromise;
    }

    /**
     * 获取线信息
     */
    $scope.getLinkDatas = function () {
        var deferred = $q.defer();
        var dataPromise = deferred.promise;

        var childNodeList = new Array();
        $http({
            url: "getLinkDatas",
            method: "POST",
            data: {}
        }).then(function (resp) {
            var data = resp.data;
            for (var i in data) {
                var childNode = new Object();
                childNode.from = data[i].fromId;
                childNode.to = data[i].toId;
                childNode.text = data[i].text;
                childNode.color = data[i].color;
                childNodeList.push(childNode)
            }
            deferred.resolve(childNodeList);

        });
        return dataPromise;
    }


    /**
     * 更改节点背景色
     * @param color
     */
    $scope.changeNodeColor = function () {
        myDiagram.startTransaction("change NodeColor");
        // switch ($scope.layout) {
        //     case "lightgreen":
        //         layout = $(go.ForceDirectedLayout);
        //         break;
        //     case "yellow":
        //         layout = $(go.LayeredDigraphLayout);
        //         break;
        //     case "blue":
        //         layout = $(go.TreeLayout);
        //         break;
        // }
        // var brush =  $(go.Brush, "Linear", {0: "blue", 1: "rgb(254, 162, 0)"});
        // myDiagram.nodeTemplate.node.shape.fill = brush;
        // nodeBlackGorundBrush.darken("blue");
        myDiagram.commitTransaction("change NodeColor");
    }

    /**
     * 展示节点信息
     * @param node
     */
    $scope.showNodeInfo = function (node) {

        $scope.nodeData = new Object();
        $scope.nodeData['key'] = node.key;
        $scope.nodeData.text = node.text;
        $scope.nodeData.name = node.name;
        $scope.nodeData.type = node.type;
        $scope.nodeData.ip = node.ip;
        $scope.nodeData.os = node.os;
        $scope.nodeData.mark = node.mark;

        $scope.nodeDataShow = true;//显示节点信息

    }


    /**
     * 图形初始化
     */
    $scope.firstInit = function () {

        // nodeBlackGorundBrush = $(go.Brush, "Linear", {0: "lightgreen", 1: "rgb(254, 162, 0)"});//节点背景颜色笔刷


        myDiagram =
            $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                {
                    initialAutoScale: go.Diagram.Uniform,  // an initial automatic zoom-to-fit
                    contentAlignment: go.Spot.Center,  // align document to the center of the viewport
                    layout: $(go.ForceDirectedLayout,  // automatically spread nodes apart
                        {defaultSpringLength: 30, defaultElectricalCharge: 100}),
                    "undoManager.isEnabled": true

                });

        // define each Node's appearance
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",  // the whole node panel
                {
                    locationSpot: go.Spot.Center,
                    click: function (e, obj) {
                        //点击事件
                        var node = obj.part;  // get the Node containing this Button
                        var nodeData = node.data;

                        $scope.showNodeInfo(nodeData);
                        $scope.$apply();//需要手动刷新

                    }
                },
                // define the node's outer shape, which will surround the TextBlock
                $(go.Shape, "Rectangle",
                    // {fill: $(go.Brush, "Linear", {0: "lightgreen", 1: "rgb(254, 162, 0)"}), stroke: "black"}
                    {fill: $(go.Brush, "Linear", {}), stroke: null}
                    ),
                $(go.Panel, "Vertical",
                    $(go.Picture, {name: 'Picture', desiredSize: new go.Size(40, 48), margin: 1},
                        new go.Binding("source", "type", pictureHandle)),
                    $(go.TextBlock,
                        {font: "bold 10pt helvetica, bold arial, sans-serif", margin: new go.Margin(4, 4, 3, 20)},
                        new go.Binding("text", "name")),
                    $(go.TextBlock,
                        {font: "bold 10pt helvetica, bold arial, sans-serif", margin: new go.Margin(4, 4, 3, 20)},
                        new go.Binding("text", "ip")),
                    $(go.TextBlock,
                        {font: "bold 10pt helvetica, bold arial, sans-serif", margin: new go.Margin(4, 4, 3, 20)},
                        new go.Binding("text", "os"))
                )
            );

        // replace the default Link template in the linkTemplateMap
        myDiagram.linkTemplate =
            $(go.Link,  // the whole link panel
                //{ routing: go.Link.AvoidsNodes },
                $(go.Shape,  // the link shape
                    {strokeWidth: 3, stroke: "black"}),
                $(go.Shape,  // the arrowhead
                    {toArrow: "standard", stroke: "#555"}),
                $(go.Panel, "Auto",
                    $(go.Shape,  // the label background, which becomes transparent around the edges
                        {
                            fill: $(go.Brush, "Radial", {
                                0: "rgb(240, 240, 240)",
                                0.3: "rgb(240, 240, 240)",
                                1: "rgba(240, 240, 240, 0)"
                            }),
                            stroke: null
                        }),
                    $(go.TextBlock,  // the label text
                        {
                            textAlign: "center",
                            font: "10pt helvetica, arial, sans-serif",
                            stroke: "#555555",
                            margin: 4
                        },
                        new go.Binding("text", "text"))
                )
            );

        //右键菜单
        myDiagram.nodeTemplate.contextMenu =
            $(go.Adornment, "Vertical",
                $("ContextMenuButton", $(go.TextBlock, "菜单1"), {
                    click: function (e, obj) {
                        $scope.menuText = "你点击了右键菜单1";
                        $scope.$apply();
                    }
                }),
                $("ContextMenuButton", $(go.TextBlock, "菜单2"), {
                    click: function (e, obj) {
                        $scope.menuText = "你点击了右键菜单2";
                        $scope.$apply();

                    }
                })
            );

        myDiagram.nodeTemplateMap.add("token",
            $(go.Part,
                {locationSpot: go.Spot.Center, layerName: "Foreground"},
                $(go.Shape, "Circle",
                    {width: 12, height: 12, fill: "green", strokeWidth: 0},
                    new go.Binding("fill", "color"))
            ));

        var nodePromise = $scope.getNodeDatas();
        var linkPromise = $scope.getLinkDatas();

        // create the model for the concept map
        var nodeDataArray = null;
        var linkDataArray = null;
        $q.all([nodePromise, linkPromise]).then(function (result) {
            nodeDataArray = result[0];
            linkDataArray = result[1];

            //wait data
            myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
            initTokens();

        });


    }


    function initTokens() {
        var oldskips = myDiagram.skipsUndoManager;
        myDiagram.skipsUndoManager = true;
        myDiagram.model.addNodeDataCollection([
            {category: "token", at: 1, color: "green"},
            {category: "token", at: 2, color: "blue"},
            {category: "token", at: 4, color: "yellow"},
            {category: "token", at: 5, color: "purple"},
            {category: "token", at: 7, color: "red"},
            {category: "token", at: 8, color: "black"},
            {category: "token", at: 9, color: "green"},
            {category: "token", at: 11, color: "blue"},
            {category: "token", at: 12, color: "yellow"},
            {category: "token", at: 17, color: "purple"},
            {category: "token", at: 18, color: "red"}
        ]);
        myDiagram.skipsUndoManager = oldskips;
        window.requestAnimationFrame(updateTokens);
    }

    function updateTokens() {
        var oldskips = myDiagram.skipsUndoManager;
        myDiagram.skipsUndoManager = true;
        var temp = new go.Point();
        myDiagram.parts.each(function (token) {
            var data = token.data;
            var at = data.at;
            if (at === undefined) return;
            var from = myDiagram.findNodeForKey(at);
            if (from === null) return;
            var frac = data.frac;
            if (frac === undefined) frac = 0.0;
            var next = data.next;
            var to = myDiagram.findNodeForKey(next);
            if (to === null) {  // nowhere to go?
                positionTokenAtNode(token, from);  // temporarily stay at the current node
                data.next = chooseDestination(token, from);  // and decide where to go next
            } else {  // proceed toward the
                var link = from.findLinksTo(to).first();
                if (link !== null) {
                    var pt = link.path.geometry.getPointAlongPath(frac, temp);
                    pt.x += link.routeBounds.x;
                    pt.y += link.routeBounds.y;
                    token.location = pt;
                } else {  // stay at the current node
                    positionTokenAtNode(token, from);
                }
                if (frac >= 1.0) {  // if beyond the end, it's "AT" the NEXT node
                    data.frac = 0.0;
                    data.at = next;
                    data.next = undefined;  // don't know where to go next
                } else {  // otherwise, move fractionally closer to the NEXT node
                    data.frac = frac + 0.01;
                }
            }
        });
        myDiagram.skipsUndoManager = oldskips;
        window.requestAnimationFrame(updateTokens);
    }

// determine where to position a token when it is resting at a node
    function positionTokenAtNode(token, node) {
        // these details depend on the node template
        token.location = node.position.copy().offset(4 + 6, 5 + 6);
    }

    function chooseDestination(token, node) {
        var dests = new go.List().addAll(node.findNodesOutOf());
        if (dests.count > 0) {
            var dest = dests.elt(Math.floor(Math.random() * dests.count));
            return dest.data.key;
        }
        var arr = myDiagram.model.nodeDataArray;
        // choose a random next data object that is not a token and is not the current Node
        var data = null;
        while (data = arr[Math.floor(Math.random() * arr.length)],
        data.category === "token" || data === node.data) {
        }
        return data.key;
    }

    /**
     * 节点图片处理
     * @returns {string}
     */
    function pictureHandle(type) {

        var src = "../static/img/icon_test.png";

        switch (type){
            case "1":
                src = "../static/img/route.gif"
                break;
            case "2" :
                src = "../static/img/firewall.jpg"
                break;
            case "3":
                src = "../static/img/pc.jpg"
                break;
        }
        return src;
    }

}
