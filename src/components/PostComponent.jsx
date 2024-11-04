import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from './UserProfileImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PostComponent = ({
  firstName,
  lastName,
  location,
  likes,
  profileImage,
  image,
  comments,
  bookmark,
}) => {
  return (
    <View className="flex-col mx-4 items-start gap-y-2 my-3">
      {/* header */}
      <View className="flex-row items-center justify-start">
        <UserProfileImage profileImage={profileImage} />
        <View className="flex-1 mx-3">
          <Text className="text-black text-lg font-Inter_semiBold">
            {firstName} {lastName}
          </Text>
          <Text className="text-base font-Inter_medium text-gray-400">
            {location}
          </Text>
        </View>
        <MaterialCommunityIcons
          name="dots-horizontal"
          color={'gray'}
          size={32}
        />
      </View>

      {/* Post image */}
      <View className="bg-[#D9D9D9] w-full h-60 rounded-xl" />

      {/* Response section */}
      <View className="flex-row gap-x-4">
        <View className="flex-row items-center gap-1">
          <MaterialCommunityIcons
            name="cards-heart-outline"
            color={'gray'}
            size={28}
          />
          <Text className="text-black">{likes}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <AntDesign name="message1" color={'gray'} size={24} />
          <Text className="text-black">{comments}</Text>
        </View>
        <View className="flex-row items-center gap-1">
          <MaterialCommunityIcons
            name="bookmark-minus-outline"
            color={'gray'}
            size={28}
          />
          <Text className="text-black">{bookmark}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostComponent;
