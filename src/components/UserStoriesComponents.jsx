import {View, Text, FlatList} from 'react-native';
import React from 'react';
import StoryComponent from './StoryComponent';

const UserStoriesComponents = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={userStories}
        renderItem={({item}) => (
          <StoryComponent
            userName={item.name}
            profileImage={item.profileImage}
          />
        )}
        contentContainerStyle={{paddingLeft: 8}}
      />
    </View>
  );
};

const userStories = [
  {
    id: 1,
    name: 'Arjun',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 2,
    name: 'Sanjay',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 3,
    name: 'Priya',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 4,
    name: 'Nisha',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 5,
    name: 'Vikram',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 6,
    name: 'Rohit',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 7,
    name: 'Sneha',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 8,
    name: 'Anjali',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 9,
    name: 'Manoj',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 10,
    name: 'Kiran',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 11,
    name: 'Meera',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 12,
    name: 'Aditya',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 13,
    name: 'Ravi',
    profileImage: require('../assets/images/default_profile.png'),
  },
  {
    id: 14,
    name: 'Divya',
    profileImage: require('../assets/images/default_profile.png'),
  },
];

export default UserStoriesComponents;
