import PRODUCTS from '../../dumy-data/products';
const initialState = {
  products: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
