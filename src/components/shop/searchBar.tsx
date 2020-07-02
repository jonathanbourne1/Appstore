import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors';
import Icon from 'react-native-ionicons';
import {TextInput} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
const SearchBar: FC<{}> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{marginTop: 10}}>
          <Icon name="search" size={20} />
        </View>

        <TextInput placeholder="seacrh your item" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    width: width / 1.1,
    padding: 7,
    shadowColor: '#000',
    marginTop: 10,
    borderRadius: 20,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 15,
    // paddingBottom: 20,
    textShadowOffset: {width: 2, height: 2},
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: 'black',
    // borderWidth: 0.5,
    // height: height / 13,
  },
});
export default SearchBar;
