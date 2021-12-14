
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

  ], function(esriConfig,Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPK6c9ebe481fd04cbeb76fc572fffed508nJ19lp_SQ3eGS36fc24K2L_G9sjnARlspTBpUzAToVLQFDrFohlna5P4IvE1XcR2";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.80543,34.02700],
    zoom: 13
  });

//Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/"
  });

  map.add(trailheadsLayer);

  });