import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getFontFamily} from './src/assets/fonts/helper';

function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text
          className="text-black"
          style={{
            fontSize: 50,
            fontFamily: getFontFamily('Inter_18pt', '300'),
          }}>
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
