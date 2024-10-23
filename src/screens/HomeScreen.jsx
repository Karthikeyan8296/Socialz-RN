import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {HeaderComponent} from '../components';
import {getFontFamily} from './src/assets/fonts/helper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <HeaderComponent Lable="Let's Explore" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
