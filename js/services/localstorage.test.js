import LocalStorage from './localstorage';
import {
  TRANSPORT_LIST_STORAGE_KEY,
} from '../constants/common.constants';

describe('localStorage', () => {
  it('should return null if can\'t take getItem(key)', () => {
    const nodeStore = new LocalStorage();

    expect(nodeStore.getItem('Key')).toBe(null);
    expect(nodeStore.getItem(TRANSPORT_LIST_STORAGE_KEY)).toBe(null);
  });
});
