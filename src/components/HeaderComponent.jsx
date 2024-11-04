import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent = ({Lable}) => {
  return (
    <>
      <View className="w-full h-20 flex-row items-center justify-between px-4 ">
        <Text className="text-black font-Inter_extraBold text-2xl">
          {Lable}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          className="h-14 w-14 bg-gray-200 rounded-full justify-center items-center">
          <IonIcons name="chatbubbles-outline" color={'black'} size={26} />
          <View className="h-4 w-4 bg-pink-500 items-center justify-center rounded-xl absolute right-3 top-3">
            <Text className="font-Inter_semiBold text-white text-[10px]">
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderComponent;
