import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
//constants
import Colors from '../../constants/colors';
//Icon
import Icon from 'react-native-ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  navigation: {setOptions: (props: StackNavigationOptions) => void};
  route: {
    params: {
      item: {
        title: string;
        imageUrl: string;
        description: string;
        price: number;
      };
    };
  };
}

const ProductDetails: FC<Props> = (props) => {
  let {imageUrl, title, description, price} = props.route.params.item;
  console.log('productDetails 11 :', props.route.params);
  //set the title header
  props.navigation.setOptions({
    title: title,
    headerStyle: {backgroundColor: Colors.blackmate80},
    headerTintColor: 'white',
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.imageUrl} />
        <Text style={styles.description}>{description}</Text>
        <View style={styles.priceIconContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.icon}>
            <Icon name="cart" size={45} />
            <Text>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, flex: 1, marginTop: 10},
  imageUrl: {width: '100%', height: 300, borderRadius: 15},
  description: {fontSize: 15, marginTop: 10},
  price: {fontSize: 25, color: Colors.blackmate80},
  priceIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    alignItems: 'center',
  },
  icon: {alignItems: 'center'},
});

export default ProductDetails;
