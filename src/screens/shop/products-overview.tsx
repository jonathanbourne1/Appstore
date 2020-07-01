import React, {FC} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
//redux
import {connect} from 'react-redux';
//COMPONENTS
import ItemProduct from '../../components/shop/itemProduct';
import Header from '../../components/shop/header';
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
  flatlist: {
    marginBottom: 60,
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
        <View style={styles.flatlist}>
          <FlatList
            data={LISTOFPRODUCTS}
            renderItem={(itemData) => (
              <ItemProduct item={itemData.item} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ProductsOverView);
