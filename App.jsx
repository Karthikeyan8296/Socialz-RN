import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getFontFamily} from './src/assets/fonts/helper';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 50,
            fontFamily: getFontFamily('Inter_18pt', '100'),
          }}>
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
