import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeScreen} from './src/screens';

function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

export default App;
