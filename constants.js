import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import * as gcs from 'esri-leaflet-geocoder';
import * as locControl from 'leaflet.locatecontrol';
import 'leaflet.browser.print/dist/leaflet.browser.print'
import 'leaflet-measure'

var baseURLRestEndPoint = 'https://location.cabarruscounty.us/arcgisservices/rest/services/';
var queryLayer = baseURLRestEndPoint + 'Website/MapCabarrusPropertyData/MapServer/0';
var gisWebDatasets = baseURLRestEndPoint + 'Parcels/MapServer';
var geocodeService = baseURLRestEndPoint + 'Locators/APO_Composite_Search_2/GeocodeServer';
var dataExplorerDataset = baseURLRestEndPoint + 'DataExplorerDatasets/MapServer/';

const key = {};

export { 
  L, 
  esri, 
  gcs, 
  locControl,  
  queryLayer,
  baseURLRestEndPoint,
  gisWebDatasets,
  geocodeService,
  dataExplorerDataset, 
  key 
};