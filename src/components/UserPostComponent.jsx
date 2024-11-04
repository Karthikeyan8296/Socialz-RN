import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useState} from 'react';
import PostComponent from './PostComponent';
import {HeaderComponent, UserStoriesComponents} from '../components';

const UserPostComponent = () => {
  const userPostPageSize = 5;
  const [userPostCurrentPage, setuserPostCurrentPage] = useState(1);
  const [userPostRenderData, setuserPostRenderData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  return (
    <View>
      <FlatList
        //in this we can use header component in the flatlist as single item//
        ListHeaderComponent={
          <>
            <UserStoriesComponents />
          </>
        }
        data={userPost}
        renderItem={({item}) => (
          <PostComponent
            firstName={item.firstName}
            lastName={item.lastName}
            location={item.location}
            image={item.image}
            profileImage={item.profileImage}
            likes={item.likes}
            comments={item.comments}
            bookmark={item.bookmark}
          />
        )}
      />
    </View>
  );
};

const userPost = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Christobar',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Boston, America',
    likes: 1220,
    comments: 24,
    bookmark: 55,
  },
  {
    id: 2,
    firstName: 'Emily',
    lastName: 'Johnson',
    location: 'Los Angeles, America',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    likes: 890,
    comments: 15,
    bookmark: 30,
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Smith',
    location: 'Chicago, America',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    likes: 1450,
    comments: 35,
    bookmark: 40,
  },
  {
    id: 4,
    firstName: 'Sophia',
    lastName: 'Davis',
    location: 'New York, America',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    likes: 1020,
    comments: 20,
    bookmark: 60,
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Williams',
    location: 'Houston, America',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    likes: 660,
    comments: 10,
    bookmark: 25,
  },
  {
    id: 6,
    firstName: 'Olivia',
    lastName: 'Brown',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Philadelphia, America',
    likes: 730,
    comments: 18,
    bookmark: 45,
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Garcia',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Phoenix, America',
    likes: 540,
    comments: 22,
    bookmark: 12,
  },
  {
    id: 8,
    firstName: 'Ava',
    lastName: 'Martinez',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'San Antonio, America',
    likes: 930,
    comments: 28,
    bookmark: 34,
  },
  {
    id: 9,
    firstName: 'William',
    lastName: 'Hernandez',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'San Diego, America',
    likes: 1120,
    comments: 40,
    bookmark: 50,
  },
  {
    id: 10,
    firstName: 'Isabella',
    lastName: 'Lopez',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Dallas, America',
    likes: 800,
    comments: 27,
    bookmark: 36,
  },
  {
    id: 11,
    firstName: 'Benjamin',
    lastName: 'Wilson',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'San Jose, America',
    likes: 400,
    comments: 5,
    bookmark: 20,
  },
  {
    id: 12,
    firstName: 'Mia',
    lastName: 'Anderson',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Austin, America',
    likes: 550,
    comments: 17,
    bookmark: 29,
  },
  {
    id: 13,
    firstName: 'Lucas',
    lastName: 'Thomas',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Jacksonville, America',
    likes: 1300,
    comments: 30,
    bookmark: 42,
  },
  {
    id: 14,
    firstName: 'Charlotte',
    lastName: 'Taylor',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'San Francisco, America',
    likes: 910,
    comments: 19,
    bookmark: 32,
  },
  {
    id: 15,
    firstName: 'Henry',
    lastName: 'Moore',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Columbus, America',
    likes: 750,
    comments: 16,
    bookmark: 21,
  },
  {
    id: 16,
    firstName: 'Amelia',
    lastName: 'Jackson',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Fort Worth, America',
    likes: 680,
    comments: 12,
    bookmark: 23,
  },
  {
    id: 17,
    firstName: 'Elijah',
    lastName: 'White',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Charlotte, America',
    likes: 950,
    comments: 29,
    bookmark: 48,
  },
  {
    id: 18,
    firstName: 'Harper',
    lastName: 'Harris',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Indianapolis, America',
    likes: 770,
    comments: 26,
    bookmark: 27,
  },
  {
    id: 19,
    firstName: 'James',
    lastName: 'Clark',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Seattle, America',
    likes: 430,
    comments: 8,
    bookmark: 10,
  },
  {
    id: 20,
    firstName: 'Evelyn',
    lastName: 'Lewis',
    profileImage: require('../assets/images/default_profile.png'),
    image: require('../assets/images/default_post.png'),
    location: 'Denver, America',
    likes: 820,
    comments: 14,
    bookmark: 31,
  },
];

export default UserPostComponent;
