require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView"
   ], function (esriConfig,Map, MapView) {

     esriConfig.apiKey = "AAPK6c9ebe481fd04cbeb76fc572fffed508nJ19lp_SQ3eGS36fc24K2L_G9sjnARlspTBpUzAToVLQFDrFohlna5P4IvE1XcR2";
     const map = new Map({
       basemap: "arcgis-topographic" // Basemap layer
     });

     const view = new MapView({
       map: map,
       center: [-118.805, 34.027],
       zoom: 13, // scale: 72223.819286
       container: "viewDiv",
       constraints: {
         snapToZoom: false
       }
     });

   });