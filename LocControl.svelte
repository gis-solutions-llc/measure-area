<script>
  import { getContext, onMount } from 'svelte';
  import { L, esri, locControl, key } from './constants.js';

  const { getMap } = getContext(key);
  const map = getMap();
  // LOCATE USER
  const locateOptions = {
    drawCircle: false,
    position: 'topleft',
    icon: 'locateMe fa fa-compass',
    setView: 'once',
    flyTo: true,
    cacheLocation: true,
    enableHighAccuracy: true,
  }
  L.control.locate(locateOptions).addTo(map);

</script>