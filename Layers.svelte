<script>
import { getContext, onMount } from 'svelte';
import { L, esri, queryLayer, baseURLRestEndPoint, dataExplorerDataset, gisWebDatasets, geocodeService, key } from './constants.js';

const { getMap } = getContext(key);
const map = getMap();
esri.basemapLayer('Topographic').addTo(map)


esri.dynamicMapLayer({
  url: gisWebDatasets,
  useCors: true,

  layers: [0],
  // pane: 'overlay',
  minZoom: 16,
  
}).addTo(map);

// Layer Controller
  var layerController = L.control
    .layers("", "", {
      collapsed: false
    })
    .addTo(map);

  fetch(
    "https://location.cabarruscounty.us/arcgisservices/rest/services/DataExplorerDatasets/MapServer/?f=json"
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.warn(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        var controllerData;
        for (var i = 0; i < data.layers.length; i++) {
          controllerData = esri.dynamicMapLayer({
            url: dataExplorerDataset,
            useCors: true,
            layers: [data.layers[i].id]

            // pane: 'overlay'
          });
          layerController.addOverlay(controllerData, data.layers[i].name);
        }
      });
    })
    .catch(function(err) {
      console.warn("Fetch Error : ", err);
    });



</script>