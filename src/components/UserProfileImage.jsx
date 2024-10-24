import {View, Image, Text} from 'react-native';
import React from 'react';

const UserProfileImage = ({profileImage}) => {
  return (
    <View className="border-pink-500 border-2 rounded-full p-1 w-[68px]">
      <Image source={profileImage} />
    </View>
  );
};

export default UserProfileImage;
