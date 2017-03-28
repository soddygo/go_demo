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


    /**
     * gojs init
     */
    $scope.init = function () {
        console.log("init active!");
        $ = go.GraphObject.make;  // for conciseness in defining templates
        $scope.firstInit();//gojs init
        // $scope.testInit();// test init
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
                childNode.latlong = data[i].latlong;//gis latlong
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

        /*
         Leaflet init
         */
        var defaultZoom = 6;
        var mapOrigin = [30.659499, 104.068306];//坐标定在成都，和百度地图的经纬度是反的
        myLeafletMap = L.map("map", {}).setView(mapOrigin, defaultZoom);
        // L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        //     maxZoom: 18,
        //     id: "mapbox.streets",
        //     accessToken: "pk.eyJ1IjoiZ29qcyIsImEiOiJjaXppcnNkbDgwMzQ3MnFsNDFnY2phb2QwIn0.7AuVKrWdxQnJxa_W7qC3-w"
        // }).addTo(myLeafletMap);
        L.tileLayer("http://localhost:8080/godemo/gis/getGis/{type}/{z}/{x}/{y}.png", {
            maxZoom: 10,
            minZoom: 1,
            type: 788865972
        }).addTo(myLeafletMap);

        //增加一个圆形标点，测试用
        // var circle = L.circle([30.659499, 104.068306], {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // }).addTo(myLeafletMap);

        myLeafletMap.on("move", function (e) {
            myUpdatingGoJS = true;
            myDiagram.updateAllTargetBindings("latlong"); // Without virtualization this can be slow if there are many nodes
            myDiagram.redraw(); // At the expense of performance, this will make sure GoJS positions are updated immediately
            myUpdatingGoJS = false;
        });

        var myUpdatingGoJS = false;  // prevent modifying data.latlong properties upon Leaflet "move" events

        //goJs init

        // nodeBlackGorundBrush = $(go.Brush, "Linear", {0: "lightgreen", 1: "rgb(254, 162, 0)"});//节点背景颜色笔刷


        myDiagram =
            $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                {
                    "animationManager.isEnabled": false,
                    scrollMode: go.Diagram.InfiniteScroll,
                    allowZoom: false,
                    allowHorizontalScroll: false,
                    allowVerticalScroll: false,
                    hasHorizontalScrollbar: false,
                    hasVerticalScrollbar: false,
                    initialPosition: new go.Point(0, 0),
                    padding: 0,
                    "toolManager.hoverDelay": 100  // how quickly tooltips are shown

                    // initialAutoScale: go.Diagram.Uniform,  // an initial automatic zoom-to-fit
                    // contentAlignment: go.Spot.Center,  // align document to the center of the viewport
                    // layout: $(go.ForceDirectedLayout,  // automatically spread nodes apart
                    //     {defaultSpringLength: 30, defaultElectricalCharge: 100}),
                    // "undoManager.isEnabled": true

                });

        //消息提示
        var toolTipTemplate =
            $(go.Adornment, "Auto",
                $(go.Shape, {fill: "#FFFFCC"}),
                $(go.TextBlock, {margin: 4},
                    new go.Binding("text", "", function (d) {
                        return d.key + "\nlocation: [" + d.latlong.join(", ") + "]"
                    }))
            );

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

                    },

                    toolTip: toolTipTemplate

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
                ),


                // A two-way data binding with an Array of latitude,longitude numbers.
                // Unfortunately the Leaflet conversion functions are not inverses of each other,
                // so we have to explicitly avoid updating the source data Array
                // when myUpdatingGoJS is true; otherwise there would be accumulating errors.
                new go.Binding("location", "latlong", function (data) {
                    var point = myLeafletMap.latLngToContainerPoint(data);
                    return new go.Point(point.x, point.y);
                }).makeTwoWay(function (pt, data) {
                    if (myUpdatingGoJS) {
                        return data.latlong; // no-op
                    } else {
                        var ll = (myLeafletMap.containerPointToLatLng([pt.x, pt.y]));
                        return [ll.lat, ll.lng];
                    }
                })
            );


        // replace the default Link template in the linkTemplateMap
        // myDiagram.linkTemplate =
        //     $(go.Link,  // the whole link panel
        //         { routing: go.Link.AvoidsNodes },
        //         $(go.Shape,  // the link shape
        //             {strokeWidth: 3, stroke: "black"}),
        //         $(go.Shape,  // the arrowhead
        //             {toArrow: "standard", stroke: "#555"}),
        //         $(go.Panel, "Auto",
        //             $(go.Shape,  // the label background, which becomes transparent around the edges
        //                 {
        //                     fill: $(go.Brush, "Radial", {
        //                         0: "rgb(240, 240, 240)",
        //                         0.3: "rgb(240, 240, 240)",
        //                         1: "rgba(240, 240, 240, 0)"
        //                     }),
        //                     stroke: null
        //                 }),
        //             $(go.TextBlock,  // the label text
        //                 {
        //                     textAlign: "center",
        //                     font: "10pt helvetica, arial, sans-serif",
        //                     stroke: "#555555",
        //                     margin: 4
        //                 },
        //                 new go.Binding("text", "text"))
        //         )
        //     );

        myDiagram.linkTemplate =
            $(go.Link,
                {
                    layerName: "Background",
                    curve: go.Link.Bezier,
                    curviness: 2
                },
                $(go.Shape, {strokeWidth: 3, stroke: "rgba(100,100,255,.7)"}),
                $(go.Shape,  // the arrowhead
                    {toArrow: "standard", stroke: "#555"})
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


        // Don't do normal GoJS panning.
        // Instead, this tool will pass the events along to Leaflet
        // as long as the mouseDown does not start on a GoJS node.
        function LeafletTool() {
            go.Tool.call(this);
            this.name = "Leaflet";
        }

        go.Diagram.inherit(LeafletTool, go.Tool);

        LeafletTool.prototype.canStart = function () {
            // Only start if we are not over any GoJS object
            if (myDiagram.findObjectAt(
                    myDiagram.lastInput.documentPoint,
                    function (x) {
                        return x.part;
                    },
                    function (x) {
                        return x.canSelect();
                    })) return false;
            return true;
        };

        LeafletTool.prototype.doMouseDown = function () {
            if (!this.isActive) {
                this.doActivate();
            }
            myDiagram.lastInput.bubbles = true;
        };

        LeafletTool.prototype.doMouseMove = function () {
            myDiagram.lastInput.bubbles = true;
        };

        LeafletTool.prototype.doMouseUp = function () {
            if (this.isActive) {
                this.standardMouseSelect();
                this.standardMouseClick();
            }
            myDiagram.lastInput.bubbles = true;
            this.stopTool();
        };
        // end LeafletTool

        // install the LeafletTool so that it can pass all non-GoJS-related events on to Leaflet
        myDiagram.toolManager.mouseDownTools.insertAt(0, new LeafletTool());


        //数据获取
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

        switch (type) {
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


    $scope.testInit = function () {
        /*
         Leaflet init
         */
        var defaultZoom = 6;
        var mapOrigin = [30.659499, 104.068306];//坐标定在成都，和百度地图的经纬度是反的

        // var mapOrigin = [50.02185841773444, 0.15380859375];
        myLeafletMap = L.map("map", {}).setView(mapOrigin, defaultZoom);
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken: "pk.eyJ1IjoiZ29qcyIsImEiOiJjaXppcnNkbDgwMzQ3MnFsNDFnY2phb2QwIn0.7AuVKrWdxQnJxa_W7qC3-w"
        }).addTo(myLeafletMap);

        myLeafletMap.on("move", function (e) {
            myUpdatingGoJS = true;
            myDiagram.updateAllTargetBindings("latlong"); // Without virtualization this can be slow if there are many nodes
            myDiagram.redraw(); // At the expense of performance, this will make sure GoJS positions are updated immediately
            myUpdatingGoJS = false;
        });

        var myUpdatingGoJS = false;  // prevent modifying data.latlong properties upon Leaflet "move" events

        /*
         GoJS init
         */
        var $ = go.GraphObject.make;
        myDiagram = $(go.Diagram, "myDiagramDiv",
            {
                "animationManager.isEnabled": false,
                scrollMode: go.Diagram.InfiniteScroll,
                allowZoom: false,
                allowHorizontalScroll: false,
                allowVerticalScroll: false,
                hasHorizontalScrollbar: false,
                hasVerticalScrollbar: false,
                initialPosition: new go.Point(0, 0),
                padding: 0,
                "toolManager.hoverDelay": 100  // how quickly tooltips are shown
            });

        var toolTipTemplate =
            $(go.Adornment, "Auto",
                $(go.Shape, {fill: "#FFFFCC"}),
                $(go.TextBlock, {margin: 4},
                    new go.Binding("text", "", function (d) {
                        return d.key + "\nlocation: [" + d.latlong.join(", ") + "]"
                    }))
            );

        // the node template describes how each Node should be constructed
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                {
                    toolTip: toolTipTemplate,
                    locationSpot: go.Spot.Center
                },
                $(go.Shape, "Circle",
                    {
                        fill: "rgba(0, 255, 0, .4)",
                        stroke: "#082D47",
                        width: 7,
                        height: 7,
                        strokeWidth: 1
                    }),
                // A two-way data binding with an Array of latitude,longitude numbers.
                // Unfortunately the Leaflet conversion functions are not inverses of each other,
                // so we have to explicitly avoid updating the source data Array
                // when myUpdatingGoJS is true; otherwise there would be accumulating errors.
                new go.Binding("location", "latlong", function (data) {
                    var point = myLeafletMap.latLngToContainerPoint(data);
                    return new go.Point(point.x, point.y);
                }).makeTwoWay(function (pt, data) {
                    if (myUpdatingGoJS) {
                        return data.latlong; // no-op
                    } else {
                        var ll = (myLeafletMap.containerPointToLatLng([pt.x, pt.y]));
                        return [ll.lat, ll.lng];
                    }
                })
            );

        myDiagram.linkTemplate =
            $(go.Link,
                {
                    layerName: "Background",
                    curve: go.Link.Bezier,
                    curviness: 2
                },
                $(go.Shape, {strokeWidth: 3, stroke: "rgba(100,100,255,.7)"})
            );

        // Don't do normal GoJS panning.
        // Instead, this tool will pass the events along to Leaflet
        // as long as the mouseDown does not start on a GoJS node.
        function LeafletTool() {
            go.Tool.call(this);
            this.name = "Leaflet";
        }

        go.Diagram.inherit(LeafletTool, go.Tool);

        LeafletTool.prototype.canStart = function () {
            // Only start if we are not over any GoJS object
            if (myDiagram.findObjectAt(
                    myDiagram.lastInput.documentPoint,
                    function (x) {
                        return x.part;
                    },
                    function (x) {
                        return x.canSelect();
                    })) return false;
            return true;
        };

        LeafletTool.prototype.doMouseDown = function () {
            if (!this.isActive) {
                this.doActivate();
            }
            myDiagram.lastInput.bubbles = true;
        };

        LeafletTool.prototype.doMouseMove = function () {
            myDiagram.lastInput.bubbles = true;
        };

        LeafletTool.prototype.doMouseUp = function () {
            if (this.isActive) {
                this.standardMouseSelect();
                this.standardMouseClick();
            }
            myDiagram.lastInput.bubbles = true;
            this.stopTool();
        };
        // end LeafletTool

        // install the LeafletTool so that it can pass all non-GoJS-related events on to Leaflet
        myDiagram.toolManager.mouseDownTools.insertAt(0, new LeafletTool());


        // create the model data that will be represented by Nodes and Links
        //数据获取
        var nodePromise = $scope.getNodeDatas();
        var linkPromise = $scope.getLinkDatas();

        // create the model for the concept map
        var nodeDataArray = null;
        var linkDataArray = null;
        $q.all([nodePromise, linkPromise]).then(function (result) {
            nodeDataArray = result[0];
            linkDataArray = result[1];

            //wait data
            // myDiagram.model = new go.GraphLinksModel(
            //     [
            //         // France
            //         { key: "Paris", latlong: [48.876569, 2.359017] },
            //         { key: "Brest", latlong: [48.387778, -4.479921] },
            //         { key: "Rennes", latlong: [48.103375, -1.672809] },
            //         { key: "Le Mans", latlong: [47.995562, 0.192413] },
            //         { key: "Nantes", latlong: [47.217579, -1.541839] },
            //         { key: "Tours", latlong: [47.388502, 0.694500] },
            //         { key: "Le Havre", latlong: [49.492755, 0.125278] },
            //         { key: "Rouen", latlong: [49.449031, 1.094128] },
            //         { key: "Lille", latlong: [50.636379, 3.070620] },
            //
            //         // Belgium
            //         { key: "Brussels", latlong: [50.836271, 4.333963] },
            //         { key: "Antwerp", latlong: [51.217495, 4.421204] },
            //         { key: "Liege", latlong: [50.624168, 5.566008] },
            //
            //         // UK
            //         { key: "London", latlong: [51.531132, -0.125132] },
            //         { key: "Bristol", latlong: [51.449541, -2.581118] },
            //         { key: "Birmingham", latlong: [52.477405, -1.898494] },
            //         { key: "Liverpool", latlong: [53.408396, -2.978809] },
            //         { key: "Manchester", latlong: [53.476346, -2.229651] },
            //         { key: "Leeds", latlong: [53.795480, -1.548345] },
            //         { key: "Glasgow", latlong: [55.863287, -4.250989] },
            //     ],
            //     [
            //         { from: "Brest", to: "Rennes" },
            //         { from: "Rennes", to: "Le Mans" },
            //         { from: "Nantes", to: "Le Mans" },
            //         { from: "Le Mans", to: "Paris" },
            //         { from: "Tours", to: "Paris" },
            //         { from: "Le Havre", to: "Rouen" },
            //         { from: "Rouen", to: "Paris" },
            //         { from: "Lille", to: "Paris" },
            //         { from: "London", to: "Lille" },
            //
            //         { from: "Lille", to: "Brussels" },
            //         { from: "Brussels", to: "Antwerp" },
            //         { from: "Brussels", to: "Liege" },
            //
            //         { from: "Bristol", to: "London" },
            //         { from: "Birmingham", to: "London" },
            //         { from: "Leeds", to: "London" },
            //         { from: "Liverpool", to: "Birmingham" },
            //         { from: "Manchester", to: "Liverpool" },
            //         { from: "Manchester", to: "Leeds" },
            //         { from: "Glasgow", to: "Manchester" },
            //         { from: "Glasgow", to: "Leeds" },
            //     ]);

            myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);


        });
    }

}
