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
      <View>
        <HeaderComponent Lable="Let's Explore" />
        <UserStoriesComponents />
      </View>
      <View>
        <UserPostComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
