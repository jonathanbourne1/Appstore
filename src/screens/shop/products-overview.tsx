import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
//redux
import {connect} from 'react-redux';
//COMPONENTS
import ItemProduct from '../../components/shop/itemProduct';
import Header from '../../components/shop/header';
//dimensions
const {width, height} = Dimensions.get('screen');
//INTERFACES
interface ItemData {
  item: {title: string};
}
interface Props {
  navigation: {
    push: () => {};
    navigate: () => {};
  };
}
//STYLES
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
});
//FUNCTIONS FROM REDUX
const mapStateToProps = (state: any) => {
  return {
    products: state,
    userProduct: state,
  };
};

//SCREEN
const ProductsOverView: FC<Props> = (props) => {
  // console.log('PROPS: ', props);

  //console.log('PRODUCTS: ', props.products.product.products);
  //console.log('USERPRODUCTS: ', props.userProduct.product.userProducts);
  const LISTOFPRODUCTS: State = props.products.product.products;
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <View>
          <Header />
        </View>
        <View style={{height: height / 1.39}}>
          <FlatList
            data={LISTOFPRODUCTS}
            renderItem={(itemdata) => (
              <ItemProduct item={itemdata.item} navigation={props.navigation} />
            )}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ProductsOverView);
