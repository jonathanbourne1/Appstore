import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
//navigation
import ProductsStack from './navigation/navigation';

const App: FC<{}> = () => {
  return <ProductsStack />;
};

const styles = StyleSheet.create({});

export default App;
