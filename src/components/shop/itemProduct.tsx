import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/colors';
import Icon from 'react-native-ionicons';
import ImageButton from './ImageButton';

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
//styles
const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {},
  imageUrl: {width: '90%', height: 250, borderRadius: 15},
});

const ItemProduct: FC<Props> = (props) => {
  console.log('PROPS :', props);
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: props.item.imageUrl}} style={styles.imageUrl} />
        <ImageButton
          title={props.item.title}
          price={props.item.price}
          navigation={props.navigation}
          item={props.item}
        />
      </View>
    </>
  );
};
export default ItemProduct;
