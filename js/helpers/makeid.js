import {
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY,
} from '../constants/common.constants';
import LocaleStorage from '../services/localstorage';

function makeID() {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  const store = new LocaleStorage();
  const transportList = store.getItem(TRANSPORT_LIST_STORAGE_KEY);
  const costList = store.getItem(COST_LIST_STORAGE_KEY);

  // generate random (not unique) ID
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (i !== 2) {
      result += '-';
    }
  }

  // after it - ID is unique
  costList ? costList.forEach((el) => (el.id === result ? makeID() : null)) : null;
  transportList ? transportList.forEach((el) => (el.id === result ? makeID() : null)) : null;

  return result;
}

export default makeID;
