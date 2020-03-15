'use strict';

function initMap() {
  //Map location
  var MapLocation = {
    lat: 35.769653,
    lng: -91.640976,
  };

  // Map Zooming
  var MapZoom = 10;


  // Basic Map
  var MapWithMarker = new google.maps.Map(document.getElementById('map-with-marker'), {
    zoom: MapZoom,
    center: MapLocation
  });
  var marker_ = new google.maps.Marker({
    position: MapLocation,
    map: MapWithMarker,
    title: 'Gus3'
  });
 



  // Basic map with cutom marker
  var CutomMarker = new google.maps.Map(document.getElementById('cutom-marker'), {
    zoom: MapZoom,
    center: MapLocation
  });
  var iconBase = '../../images/file-icons/';
  var marker_2 = new google.maps.Marker({
    position: MapLocation,
    map: CutomMarker,
    icon: iconBase + 'flag.png'
  });

  // Map without controls
  var MinimalMap = new google.maps.Map(document.getElementById('map-minimal'), {
    zoom: MapZoom,
    center: MapLocation,
    disableDefaultUI: true
  });
  var marker_3 = new google.maps.Marker({
    position: MapLocation,
    map: MinimalMap
  });
} 