import React, {FC} from 'react';

//redux
import store from '../redux/store';
import {Provider} from 'react-redux';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//proincialNavigator creation
const ProductsStack = createStackNavigator();
//screens
import CartScreen from '../screens/shop/cart-screen';
import ProductDetail from '../screens/shop/products-detail';
import ProductsOverView from '../screens/shop/products-overview';

//principal navigator
const ProductsStackNav: FC<{}> = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ProductsStack.Navigator>
          <ProductsStack.Screen
            name="shop.products"
            component={ProductsOverView}
            options={{headerShown: false}}
          />
          <ProductsStack.Screen
            name="shop.product-detail"
            component={ProductDetail}
            options={{title: 'Products Details'}}
          />
        </ProductsStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default ProductsStackNav;
