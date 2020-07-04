import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
interface Props {
  title: string;
  price: number;
  navigation: {push: (route: string, object) => void};
  item: object;
}

const ImageButton: FC<Props> = ({title, price, navigation, item}) => {
  console.log('image button: L18 ', navigation);
  return (
    <>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => {
          navigation.push('shop.product-detail', {item});
        }}>
        <Text style={styles.imageTitle}>{title}</Text>
        <Text style={styles.imagePrice}>${price}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  imageButton: {
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    width: '90%',
    height: '30%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginLeft: 10,
    marginBottom: 20,
  },
  imageTitle: {fontSize: 19, fontWeight: 'bold', color: '#fff'},
  imagePrice: {fontSize: 15, fontWeight: 'bold', color: '#fff', marginLeft: 10},
});
export default ImageButton;
