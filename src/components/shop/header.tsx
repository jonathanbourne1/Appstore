import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Keyboard} from 'react-native';
import SearchBar from './searchBar';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Header: FC<{}> = (props) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Find your next Item!!!</Text>
          <View style={{flex: 0.2}}>
            <Image
              style={styles.imageprofile}
              source={require('../../assets/images/profile.jpg')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={{alignItems: 'center'}}>
        <SearchBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {flexDirection: 'row', paddingLeft: 20, width: '100%'},
  headerTitle: {fontSize: 35, fontWeight: 'bold', paddingTop: 20, flex: 0.8},

  imageprofile: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'flex-end',
    marginTop: 30,
  },
});
export default Header;
