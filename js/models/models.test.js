import Truck from './truck';

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