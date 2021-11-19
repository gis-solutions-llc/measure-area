<script>
  import { getContext, onMount } from 'svelte';
  import { L, esri, gcs, key } from './constants.js';

  const { getMap } = getContext(key);
  const map = getMap();


  
  const geocoder = gcs.geocodeServiceProvider({
    url: 'https://location.cabarruscounty.us/arcgisservices/rest/services/Locators/APO_Composite_Search/GeocodeServer',
  })

  var searchControl = gcs.geosearch({
    position: `topleft`,
    useMapBounds: false,
    placeholder: 'Search PIN, Owner, or Address...',
    providers: [geocoder]
  }).addTo(map);

 

</script>

