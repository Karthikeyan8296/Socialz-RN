import {View, Text, FlatList} from 'react-native';
import React from 'react';
import StoryComponent from './StoryComponent';
import {useState, useEffect} from 'react';

const UserStoriesComponents = () => {
  const userStoryPageSize = 5;
  const [userStoryCurrentPage, setuserStoryCurrentPage] = useState(1);
  const [userStoryRenderData, setuserStoryRenderData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const pagination = (database, currentPage, pagesize) => {
    console.log('current page', currentPage);
    const startIndex = (currentPage - 1) * pagesize;
    const endIndex = startIndex + pagesize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setisLoading(true);
    const getInitialData = pagination(userStories, 1, userStoryPageSize);
    setuserStoryRenderData(getInitialData);
    setisLoading(false);
  }, []);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={userStoryRenderData}
        renderItem={({item}) => (
          <StoryComponent
            key={'userStory' + item.id}
            userName={item.name}
            profileImage={item.profileImage}
          />
        )}
        contentContainerStyle={{paddingLeft: 8, paddingRight: 16}}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          // console.log('we have reached');
          if (isLoading) return;
          setisLoading(true);
          const contentToAppend = pagination(
            userStories,
            userStoryCurrentPage + 1,
            userStoryPageSize,
          );
          if (contentToAppend.length > 0) {
            setuserStoryCurrentPage(userStoryCurrentPage + 1);
            setuserStoryRenderData(prev => [...prev, ...contentToAppend]);
          }
          setisLoading(false);
        }}
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
