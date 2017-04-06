/**
 * Created by songgc on 2016/10/24.
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

var myDiagram = null;

function gojsCtrl($compile, $scope, $http, $q) {
    $scope.goObj = null;
    $scope.qqhm = "";
    $scope.layout = "TreeLayout";
    $scope.show = false;//是否显示节点详细信息

    $scope.title = "";
    $scope.key =  "";
    $scope.describe = "";    // layout:$(go.ForceDirectedLayout)
    // layout:$(go.LayeredDigraphLayout)
    // layout:$(go.TreeLayout)
    // layout:$(go.CircularLayout)
    // layout:$(go.GridLayout)

    /**
     * 更改布局
     */
    $scope.changeLayout = function () {
        myDiagram.startTransaction("change Layout");
        var layout = $scope.goObj(go.TreeLayout);
        switch ($scope.layout) {
            case "ForceDirectedLayout":
                layout = $scope.goObj(go.ForceDirectedLayout);
                break;
            case "LayeredDigraphLayout":
                layout = $scope.goObj(go.LayeredDigraphLayout);
                break;
            case "TreeLayout":
                layout = $scope.goObj(go.TreeLayout);
                break;
            case "CircularLayout":
                layout = $scope.goObj(go.CircularLayout);
                break;
            case "GridLayout":
                layout = $scope.goObj(go.GridLayout);
                break;
        }
        myDiagram.layout = layout;
        myDiagram.commitTransaction("change Layout");
    }

    /**
     * 节点信息显示
     * @param nodeData
     */
    $scope.showInfo = function (nodeData) {
        //显示节点信息
        $scope.title = nodeData.title;
        $scope.key = nodeData.key;
        $scope.describe = nodeData.describe;

        $("#data_key").val( $scope.key);
        $("#data_title").val($scope.title);
        $("#data_describe").val($scope.describe );
        $scope.show = true;//是否显示节点详细信息
    }

    /**
     * qq 关系图初始化
     */
    $scope.qqInit = function (data) {
        //gojs
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        $scope.goObj = $;
        var blues = ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B'];
        if (myDiagram == null) {
            myDiagram =
                $(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
                    {
                        initialAutoScale: go.Diagram.UniformToFill,
                        contentAlignment: go.Spot.Center,
                        layout: $(go.ForceDirectedLayout),
                        // moving and copying nodes also moves and copies their subtrees
                        "commandHandler.copiesTree": true,  // for the copy command
                        "commandHandler.deletesTree": true, // for the delete command
                        "draggingTool.dragsTree": true,  // dragging for both move and copy
                        "undoManager.isEnabled": true,
                        layout: $(go.TreeLayout)
                    });
        }

        // Define the Node template.
        // This uses a Spot Panel to position a button relative
        // to the ellipse surrounding the text.
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                {
                    selectionObjectName: "PANEL",
                    isTreeExpanded: false,
                    isTreeLeaf: false,
                    click: function (e, obj) {
                        //点击事件
                        var node = obj.part;  // get the Node containing this Button
                        var nodeData = node.data;

                        $scope.showInfo(nodeData);

                    }
                },
                $(go.Shape, {
                    fill: $(go.Brush, "Linear", {0: "white", 1: "lightblue"}),
                    stroke: "darkblue", strokeWidth: 2
                }),
                $(go.Panel, "Horizontal",
                    $(go.Picture, {name: 'Picture', desiredSize: new go.Size(40, 48), margin: 1},
                        new go.Binding("source", "type", pictureHandle)),
                    new go.Binding("background", "color", function (color) {
                        return color;
                    }),
                    $(go.Panel, "Table",
                        {defaultAlignment: go.Spot.Left, margin: 4},
                        $(go.RowColumnDefinition, {column: 1, width: 4}),
                        // the expand/collapse button, at the top-right corner
                        $("TreeExpanderButton",
                            {
                                name: 'TREEBUTTON',
                                width: 20, height: 20,
                                row: 0, column: 0,
                                alignment: go.Spot.TopRight,
                                alignmentFocus: go.Spot.Center,
                                // customize the expander behavior to
                                // create children if the node has never been expanded
                                click: function (e, obj) {  // OBJ is the Button
                                    var node = obj.part;  // get the Node containing this Button
                                    if (node === null) return;
                                    e.handled = true;
                                    expandNode(node, $http, $q);
                                }
                            }
                        ), // end TreeExpanderButton
                        $(go.TextBlock,
                            {
                                height: 15,
                                font: "10pt sans-serif",
                                row: 2, column: 0
                            },
                            new go.Binding("text", "title")),
                        $(go.TextBlock,
                            {
                                height: 15,
                                font: "10pt sans-serif",
                                row: 3, column: 0
                            },
                            new go.Binding("text", "key"))
                    )
                )
                // the node's outer shape, which will surround the text
            );  // end Node

        //右键菜单
        // myDiagram.nodeTemplate.contextMenu =
        //     $(go.Adornment, "Vertical",
        //         $("ContextMenuButton", $(go.TextBlock, "菜单1"), {
        //             click: function (e, obj) {
        //                 console.log("右键菜单");
        //             }
        //         })
        //     );
        // create the model with a root node data
        myDiagram.model = new go.TreeModel([
            {key: $scope.qqhm, type: 1, title: "本人QQ", color: "lightgreen", everExpanded: false}
        ]);

    }
    /**
     * 初始化
     */
    $scope.gojsInit = function () {
        // console.log("angularjs init");
    }

    /**
     * 初始化，查询qq号所拥有的qq群列表
     */
    $scope.searchQqhm = function () {
        //首先查询qq号码所拥有的qq群信息
        $http({
            url: "search/getPersionQqGroupList.gojs",
            method: "POST",
            data: {qqhm: $scope.qqhm}
        }).then(function (resp) {
            var data = resp.data;
            $scope.qqInit(data);
        }, function (resp) {
            var error = resp.data;
        });
    }
}

/**
 * 展开节点
 * @param node
 * @param $http
 * @param $q
 */
function expandNode(node, $http, $q) {
    var diagram = node.diagram;
    diagram.startTransaction("CollapseExpandTree");
    // this behavior is specific to this incrementalTree sample:
    var data = node.data;
    if (!data.everExpanded) {
        // only create children once per node
        diagram.model.setDataProperty(data, "everExpanded", true);
        createSubTree(data, $http, $q).then(function (numchildren) {
            if (numchildren === 0) {  // now known no children: don't need Button!
                node.findObject('TREEBUTTON').visible = false;
            }
        });
    }
    // this behavior is generic for most expand/collapse tree buttons:
    if (node.isTreeExpanded) {
        diagram.commandHandler.collapseTree(node);
    } else {
        diagram.commandHandler.expandTree(node);
    }
    diagram.commitTransaction("CollapseExpandTree");
    // myDiagram.zoomToFit();
}

/**
 * 请求数据
 * @param parentdata
 * @param $http
 * @param $q 异步函数对象
 * @param degrees 距离根节点的距离
 * @return promise
 */
function getRemoteData(parentdata, $http, $q, degrees) {
    var deferred = $q.defer();
    var dataPromise = deferred.promise;
    //请求子节点
    var childNodeList = new Array();
    if (parentdata.type == 1) {
        $http({
            url: "search/getPersionQqGroupList.gojs",
            method: "POST",
            data: {qqhm: parentdata.key}
        }).then(function (resp) {
            var data = resp.data;
            for (var i in data) {
                var childNode = new Object();
                childNode.title = data[i].title;
                childNode.key = data[i].qhm;//qq群号码
                childNode.describe = data[i].describe;
                childNode.parent = parentdata.key;
                childNode.rootdistance = degrees;
                childNode.type = 2;
                childNodeList.push(childNode);
            }
            deferred.resolve(childNodeList);
        })
    } else {
        $http({
            url: "search/getQqGroupInfo.gojs",
            method: "POST",
            data: {qhm: parentdata.key}
        }).then(function (resp) {
            var data = resp.data;
            for (var i in data) {
                var childNode = new Object();
                childNode.title = data[i].title;
                childNode.key = data[i].qqhm;
                childNode.describe = data[i].describe;
                childNode.parent = parentdata.key;
                childNode.rootdistance = degrees;
                childNode.type = 1;
                childNodeList.push(childNode);
            }
            deferred.resolve(childNodeList);
        })
    }
    return dataPromise;
}

// This dynamically creates the immediate children for a node.
// The sample assumes that we have no idea of whether there are any children
// for a node until we look for them the first time, which happens
// upon the first tree-expand of a node.
function createSubTree(parentdata, $http, $q) {
    // create several node data objects and add them to the model
    var model = myDiagram.model;
    var parent = myDiagram.findNodeForData(parentdata);

    var degrees = 1;
    var grandparent = parent.findTreeParentNode();
    while (grandparent) {
        degrees++;
        grandparent = grandparent.findTreeParentNode();
    }
    var defer = $q.defer();
    var promise = defer.promise;


    var childNodesPromise = getRemoteData(parentdata, $http, $q, degrees);
    childNodesPromise.then(function (childNodeList) {
        myDiagram.startTransaction("create childNode");
        for (var i = 0; i < childNodeList.length; i++) {
            var childdata = childNodeList[i];
            // add to model.nodeDataArray and create a Node
            model.addNodeData(childdata);
            // position the new child node close to the parent
            var child = myDiagram.findNodeForData(childdata);
            child.location = parent.location;
        }
        myDiagram.commitTransaction("create childNode");

        defer.resolve(childNodeList.length)
    })
    return promise;
}

function expandAtRandom() {
    var eligibleNodes = [];
    myDiagram.nodes.each(function (n) {
        if (!n.isTreeExpanded) eligibleNodes.push(n);
    })
    var node = eligibleNodes[Math.floor(Math.random() * (eligibleNodes.length))];
    expandNode(node);
}

/**
 * 节点图片处理
 * @param key
 * @returns {string}
 */
function pictureHandle(type) {
    var src = "";
    if (type == 1) {
        src = "static/images/qqIcon/persion.png";
    } else {
        src = "static/images/qqIcon/group.png";
    }
    return src;
}