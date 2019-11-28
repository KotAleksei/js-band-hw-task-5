import LocalStorage from './localstorage';
import {
  TRANSPORT_LIST_STORAGE_KEY,
} from '../constants/common.constants';

describe('localStorage', () => {
  const nodeStore = new LocalStorage();
  
  it('should return null if can\'t take getItem(key)', () => {
    expect(nodeStore.getItem('Key')).toBe(null);
    expect(nodeStore.getItem(TRANSPORT_LIST_STORAGE_KEY)).toBe(null);
  });

  it('should be prefix', () => {
    expect(nodeStore.prefix).toBe('JS-Band-');
  });
});
