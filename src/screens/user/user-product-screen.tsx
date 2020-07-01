import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserProductScreen: FC<{}> = (props) => {
  console.log(props);
  return (
    <View>
      <Text>UserProductScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default UserProductScreen;
