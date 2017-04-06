/**
 * Created by soddygosongguochao on 2017/3/29.
 */

var leafletApp = angular.module("leafletApp", []);

//**http设置*//
leafletApp.config(['$httpProvider', function ($httpProvider) {
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

leafletApp.controller("leafletCtrl", leafletCtrl)

//controller
function leafletCtrl($compile, $scope, $http, $q) {


    /**
     * gojs init
     */
    $scope.init = function () {
        console.log("init active!");
        $scope.firstInit();// init
    }

    /**
     * init
     */
    $scope.firstInit = function () {

        /*
         Leaflet init
         */
        var defaultZoom = 6;
        var mapOrigin = [30.659499, 104.068306];//坐标定在成都
        myLeafletMap = L.map("mapid", {}).setView(mapOrigin, defaultZoom);

        L.tileLayer("https://api.mapbox.com/styles/v1/soddygo/cj0vs0lkq00pg2rqp5e78sbsj/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
            maxZoom: 13,
            minZoom: 1,
            type: 788865972,
            accessToken: "pk.eyJ1Ijoic29kZHlnbyIsImEiOiJjajBxdDE3MjEwMXVhMzNtd3J0em11YjJsIn0.HQ3Mu5SpqaOmr8awN4163w"
        }).addTo(myLeafletMap);

        //增加圆形
        // var circle = L.circle([30.659499, 104.068306], {
        //     color: 'red',
        //     fillColor: '#f03',
        //     fillOpacity: 0.5,
        //     radius: 500
        // }).addTo(myLeafletMap);

        //增加标记
        var marker = L.marker([30.659499, 104.068306]).addTo(myLeafletMap);

        marker.bindPopup("<b>Hello world!</b><br>I am a popup.");

        myLeafletMap.on('click', onMapClick);

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(myLeafletMap);
        }

        var LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: '../static/img/leaf-shadow.png',
                iconSize: [38, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
            }
        });

        var greenIcon = new LeafIcon({iconUrl: '../static/img/leaf-green.png'}),
            redIcon = new LeafIcon({iconUrl: '../static/img/leaf-red.png'}),
            orangeIcon = new LeafIcon({iconUrl: '../static/img/leaf-orange.png'});


        L.marker([30.659499, 105.068306], {icon: greenIcon}).addTo(myLeafletMap).bindPopup("网点1正常.");
        L.marker([30.759499, 105.068306], {icon: redIcon}).addTo(myLeafletMap).bindPopup("网点2异常");
        L.marker([30.659499, 105.078306], {icon: orangeIcon}).addTo(myLeafletMap).bindPopup("网点3警告");
        L.marker([31.659499, 105.078306], {icon: redIcon}).addTo(myLeafletMap).bindPopup("网点4警告");
        L.marker([30.659499, 106.078306], {icon: greenIcon}).addTo(myLeafletMap).bindPopup("网点4正常");
        L.marker([30.859499, 105.178306], {icon: greenIcon}).addTo(myLeafletMap).bindPopup("网点4正常");
        L.marker([30.859499, 105.378306], {icon: orangeIcon}).addTo(myLeafletMap).bindPopup("网点4警告");
        L.marker([30.459499, 105.478306], {icon: redIcon}).addTo(myLeafletMap).bindPopup("网点4警告");


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

}