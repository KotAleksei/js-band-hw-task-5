import '../style/style.css';
import {
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY,
} from './constants/common.constants';
import Render from './render';
import LocalStorage from './services/localstorage';
import TransportForm from './createforms/transport';
import CostForm from './createforms/cost';

function init() {
  const localStorage = new LocalStorage();
  const renderApp = new Render(localStorage);
  new CostForm('Cost');
  new TransportForm('Truck');
  new TransportForm('Ship');

  localStorage.setKeys([
    TRANSPORT_LIST_STORAGE_KEY,
    COST_LIST_STORAGE_KEY,
  ]);

  renderApp.renderItems();
}

init();
