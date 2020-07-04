import {Reducer, AnyAction} from 'redux';
import PRODUCTS from '../../dumy-data/products';

const initialState = {
  stateProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

//interface 
export interface ProductState {
  stateProducts: [
    {
      id: string;
      ownerId: string;
      title: string;
      imageUrl: string;
      description: string;
      price: number;
    },
  ];
  userProducts: {
    id: string;
    ownerId: string;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
  };
}

const ProductReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProductReducer as Reducer<ProductState>;
