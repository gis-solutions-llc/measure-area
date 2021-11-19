<script>
  import { getContext } from 'svelte';
  import { L, esri, propPrint, key } from './constants.js';

  const { getMap } = getContext(key);
  const map = getMap();


  L.control.browserPrint({
    title: 'Print this View',
    documentTitle: "Cabarrus County Property Report",
    manualMode: false
  }).addTo(map);

  // map.on("browser-print-end", function (e) {
  //   selElShowHide('#printData', 'is-hidden')
  // })

</script>