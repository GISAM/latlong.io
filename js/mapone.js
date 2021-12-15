
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
    center: [-0.754057,51.287855],
    zoom: 14
  });


// Define a pop-up for Trailheads
    const popupTrailheads = {
      "title": "Listed Buildings (National Designations)",
      "content": "<b>Address:</b> {ADDRESS}<br><b>Grade:</b> {LISBGDE}"
      }

//Trailheads feature layer (points)
  const trailheadsLayer = new FeatureLayer({
    url: "https://services7.arcgis.com/QVClNghUhmgiDmtr/arcgis/rest/services/Listed_Buildings_(National_Designations)/FeatureServer/0/",
    outFields: ["ADDRESS","LISBGDE"],
    popupTemplate: popupTrailheads
  });

  map.add(trailheadsLayer);

  });