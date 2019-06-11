import { Cat } from './listing.1.1';

describe('Test Cat getters and setters.', () => {
  it('The cat name should be Gracie', () => {
    const cat = new Cat();
    cat.name = 'Gracie';
    expect(cat.name).toEqual('Gracie');
  });
});
