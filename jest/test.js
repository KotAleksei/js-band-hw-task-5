import makeID from '../js/helpers/makeid';
import LocalStorage from '../js/services/localstorage';
import {
  TRANSPORT_LIST_STORAGE_KEY,
} from '../js/constants/common.constants';
import Truck from '../js/models/truck';

describe('makeID', () => {
  it('generation results checked', () => {
    expect(makeID().length).toBe(17);
    expect(typeof makeID() === 'string').toBe(true);
  });
});

describe('localStorage', () => {
  it('should return null if can\'t take getItem(key)', () => {
    const nodeStore = new LocalStorage();

    expect(nodeStore.getItem('Key')).toBe(null);
    expect(nodeStore.getItem(TRANSPORT_LIST_STORAGE_KEY)).toBe(null);
  });
});

describe('models', () => {
  const producedYear = 2014;
  const capacity = 100;
  const averageSpeed = 100;
  const model = 'MAN TGX';
  const licensePlate = 'AA0007AA';
  const typeOfGas = 'Gasoline';
  const newTruck = new Truck(
    model,
    licensePlate,
    typeOfGas,
    producedYear,
    capacity,
    averageSpeed,
  );

  it('convert method from kg to pounds should be work corectly', () => {
    expect(newTruck.showCapacityInPounds() > capacity).toBe(true);
  });
  it('showAverageSpeed method should be work', () => {
    expect(newTruck.showAverageSpeed()).toBe(`${averageSpeed}km`);
  });
});
