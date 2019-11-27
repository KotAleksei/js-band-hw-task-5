export default class LocalStorage {
  constructor() {
    if (LocalStorage.instance) return LocalStorage.instance;

    this.prefix = 'JS-Band-';
    LocalStorage.instance = this;
    return this;
  }

  getItem(key) {
    const hasItemInLS = localStorage.getItem(`${this.prefix}${key}`);
    return JSON.parse(hasItemInLS);
  }

  add(key, value) {
    try {
      const listArr = this.getItem(key);
      listArr.push(value);
      localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(listArr));
    } catch (error) {
      console.error(error);
    }
  }

  setKeys(arr) {
    arr.forEach((key) => {
      this.getItem(key) ? null : localStorage.setItem(`${this.prefix}${key}`, JSON.stringify([]));
    });
  }
}
