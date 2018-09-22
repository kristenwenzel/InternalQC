/* js code by K Wenzel, 2018*/

var mymap = L.map('mapid').setView([36.042339, -89.363813], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia213ZW56ZWwiLCJhIjoiY2ptZGl1NWJmMDI3NDNwb2FlZXZqdDk5NiJ9.EDGXX-fhUY7EUqzMVKmyOA'
}).addTo(mymap);