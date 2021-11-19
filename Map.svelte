<script>
  import { onMount, setContext } from "svelte";

  import { L, esri, key } from './constants.js';




  let mapElement;
  let map;


  setContext(key, {
		getMap: () => map
	});


  onMount(() => {
    map = L.map(mapElement, {
				center: [35.326907, -80.549980],
        zoom: 11,
        attributionControl: false,
      });

 
      
  });



	
</script>

<style>
  .map-container {
    height: 100%;
  }

  .map-frame {
    height: 100%;
    width: 100%;
  }

  #map-id {
    height: 100%;
  }

  @supports (display: flex) {
    .map-container {
      height: 0;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
    }

    .map-frame {
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
    }
  }



</style>


   
<div class="map-container">
        <div class="map-frame">  
          <div id="map-id" bind:this={mapElement}>
            {#if map}
              <slot></slot>
            {/if}
          </div>
        </div>
      </div>
        
