// Adding some interaction to the map

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Here we get access to the layer that was hovered through e.target,
// set a thick grey border on the layer as our highlight effect, also bringing
// it to the front so that the border doesn’t clash with nearby states
// (but not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover).

// Now we define what happens with the mouse out
// Reseting the style
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(kantons, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);




