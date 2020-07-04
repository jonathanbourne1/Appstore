import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
//redux
import {connect} from 'react-redux';
//COMPONENTS
import ItemProduct from '../../components/shop/itemProduct';
import Header from '../../components/shop/header';
import {GlobalState} from 'src/redux/reducer';

//dimensions
const {width, height} = Dimensions.get('screen');
//INTERFACES
interface ItemData {
  item: {title: string};
}
interface Props {
  navigation: {
    push: () => {};
    navigate: () => void;
  };
  products: [
    {
      id: string;
      ownerId: string;
      title: string;
      imageUrl: string;
      description: string;
      price: number;
    },
  ];
  userProduct: {
    id: string;
    ownerId: string;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
  };
}
//STYLES
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

//FUNCTIONS FROM REDUX
const mapStateToProps = (state: GlobalState) => {
  return {
    products: state.products.stateProducts,
    userProducts: state.products.userProducts,
  };
};

//SCREEN
const ProductsOverView: FC<Props> = (props) => {
  console.log('products overview 50: ', props.perro);

  //console.log('PRODUCTS: ', props.products.product.products);
  //console.log('USERPRODUCTS: ', props.userProduct.product.userProducts);
  const LISTOFPRODUCTS = props.products;
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 1}}>
        <FlatList
          data={LISTOFPRODUCTS}
          renderItem={(itemdata) => (
            <ItemProduct item={itemdata.item} navigation={props.navigation} />
          )}
          numColumns={2}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {}}
              tintColor={'red'}
              title={'refersh'}
              titleColor={'black'}
              colors={['blue']}
            />
          }
        />
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ProductsOverView);
