import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import Colors from '../../constants/colors';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  conatainer: {alignItems: 'center'},
  card: {
    shadowColor: 'black',
    textShadowOffset: {width: 0, height: 2},
    borderRadius: 20,
    shadowRadius: 10,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 10,
    paddingBottom: 20,
    alignItems: 'center',
    width: '95%',
    marginVertical: 10,

    height: 350,
  },
  containerImage: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageUrl: {
    width: '95%',
    height: '100%',
    marginHorizontal: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '95%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
  },
  detailsContainer: {
    margin: 10,
    backgroundColor: Colors.blueFb,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 70,
  },
  price: {fontSize: 17, color: Colors.blackmate60},
  details: {color: 'white'},
});
//INTERFACE
interface Props {
  item: {
    title: string;
    imageUrl: string;
    price: number;
  };
  navigation: {
    navigate: () => {};
    push: () => {};
    setOptions: () => {};
  };
}

const ItemProduct: FC<Props> = (props) => {
  console.log('PROPS :', props);
  return (
    <View style={styles.conatainer}>
      <View style={styles.card}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.push('shop.product-detail', {item: props.item});
          }}>
          <View style={styles.containerImage}>
            <Image
              source={{uri: props.item.imageUrl}}
              style={styles.imageUrl}
            />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.item.title}</Text>
        </View>
        <View>
          <Text style={styles.price}>${props.item.price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.detailsContainer}
            onPress={() => {
              props.navigation.push('shop.product-detail', {item: props.item});
            }}>
            <Text style={styles.details}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Icon name="ios-cart" size={37} color={Colors.blackmate80} />
            <Text style={{fontSize: 10}}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ItemProduct;
