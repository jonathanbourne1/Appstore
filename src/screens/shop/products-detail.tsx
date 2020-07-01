import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
interface Props {
  navigation: {setOptions: () => {}};
  route: {params: {item: {title: string; imageUrl: string}}};
}

const ProductDetails: FC<Props> = (props) => {
  //set the title header
  props.navigation.setOptions({title: props.route.params.item.title});

  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetails;
