<script>
  import { getContext } from 'svelte';
  import { L, esri, key } from './constants.js';

  const { getMap } = getContext(key);
  const map = getMap();
  
  var measureOptions = {
    primaryAreaUnit: 'sqfeet',
    secondaryAreaUnit: 'acres',
    activeColor: '#84bff0',
    completedColor: '#47a2ed',
    captureZIndex: 20000
  }
  var measureControl = new L.Control.Measure(measureOptions);
  measureControl.addTo(map);

</script>

