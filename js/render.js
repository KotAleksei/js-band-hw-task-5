import {
  transportListEl,
  costListEl,
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY,
} from './constants/common.constants';
import ItemOfCost from './templates/cost-item';
import ItemOfTransport from './templates/transport-item';


export default class Render {
  constructor(localStorage) {
    this.localStorage = localStorage;
  }

  renderItems() {
    const transportList = this.localStorage.getItem(TRANSPORT_LIST_STORAGE_KEY);
    const costList = this.localStorage.getItem(COST_LIST_STORAGE_KEY);

    transportList.forEach((el) => { Render.renderItem(el, 'Transport'); });
    costList.forEach((el) => { Render.renderItem(el, 'Cost'); });
  }

  static renderItem(item, name) {
    if (name === 'Transport') {
      transportListEl.insertAdjacentHTML('beforeend', ItemOfTransport(item));
    } else {
      costListEl.insertAdjacentHTML('beforeend', ItemOfCost(item));
    }
  }
}
