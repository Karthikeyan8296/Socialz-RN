import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  HeaderComponent,
  UserStoriesComponents,
  UserPostComponent,
} from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderComponent Lable="Instagram" />
      {/* //Stories component are given in the userPostcomponents as header// */}
      <View>
        <UserPostComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
