import {View, Text} from 'react-native';
import React from 'react';
import UserProfileImage from './UserProfileImage';
import PropTypes from 'prop-types';

const StoryComponent = ({userName, profileImage}) => {
  return (
    <View className="flex items-center justify-center mx-2">
      <View>
        <UserProfileImage profileImage={profileImage} />
      </View>
      <Text className="text-black font-Inter_medium">{userName}</Text>
    </View>
  );
};

StoryComponent.prototype = {
  userName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default StoryComponent;
