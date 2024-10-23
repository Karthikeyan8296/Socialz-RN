import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getFontFamily} from './src/assets/fonts/helper';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <View>
          <Icon name="delete" size={50} color={'black'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
