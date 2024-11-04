import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';

const UserPostComponent = () => {
  const userPostPageSize = 5;
  const [userPostCurrentPage, setuserPostCurrentPage] = useState(1);
  const [userPostRenderData, setuserPostRenderData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  return (
    <View>
      <Text>UserPostComponent</Text>
    </View>
  );
};

const userPost = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Christobar',
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
    likes: 890,
    comments: 15,
    bookmark: 30,
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Smith',
    location: 'Chicago, America',
    likes: 1450,
    comments: 35,
    bookmark: 40,
  },
  {
    id: 4,
    firstName: 'Sophia',
    lastName: 'Davis',
    location: 'New York, America',
    likes: 1020,
    comments: 20,
    bookmark: 60,
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Williams',
    location: 'Houston, America',
    likes: 660,
    comments: 10,
    bookmark: 25,
  },
  {
    id: 6,
    firstName: 'Olivia',
    lastName: 'Brown',
    location: 'Philadelphia, America',
    likes: 730,
    comments: 18,
    bookmark: 45,
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Garcia',
    location: 'Phoenix, America',
    likes: 540,
    comments: 22,
    bookmark: 12,
  },
  {
    id: 8,
    firstName: 'Ava',
    lastName: 'Martinez',
    location: 'San Antonio, America',
    likes: 930,
    comments: 28,
    bookmark: 34,
  },
  {
    id: 9,
    firstName: 'William',
    lastName: 'Hernandez',
    location: 'San Diego, America',
    likes: 1120,
    comments: 40,
    bookmark: 50,
  },
  {
    id: 10,
    firstName: 'Isabella',
    lastName: 'Lopez',
    location: 'Dallas, America',
    likes: 800,
    comments: 27,
    bookmark: 36,
  },
  {
    id: 11,
    firstName: 'Benjamin',
    lastName: 'Wilson',
    location: 'San Jose, America',
    likes: 400,
    comments: 5,
    bookmark: 20,
  },
  {
    id: 12,
    firstName: 'Mia',
    lastName: 'Anderson',
    location: 'Austin, America',
    likes: 550,
    comments: 17,
    bookmark: 29,
  },
  {
    id: 13,
    firstName: 'Lucas',
    lastName: 'Thomas',
    location: 'Jacksonville, America',
    likes: 1300,
    comments: 30,
    bookmark: 42,
  },
  {
    id: 14,
    firstName: 'Charlotte',
    lastName: 'Taylor',
    location: 'San Francisco, America',
    likes: 910,
    comments: 19,
    bookmark: 32,
  },
  {
    id: 15,
    firstName: 'Henry',
    lastName: 'Moore',
    location: 'Columbus, America',
    likes: 750,
    comments: 16,
    bookmark: 21,
  },
  {
    id: 16,
    firstName: 'Amelia',
    lastName: 'Jackson',
    location: 'Fort Worth, America',
    likes: 680,
    comments: 12,
    bookmark: 23,
  },
  {
    id: 17,
    firstName: 'Elijah',
    lastName: 'White',
    location: 'Charlotte, America',
    likes: 950,
    comments: 29,
    bookmark: 48,
  },
  {
    id: 18,
    firstName: 'Harper',
    lastName: 'Harris',
    location: 'Indianapolis, America',
    likes: 770,
    comments: 26,
    bookmark: 27,
  },
  {
    id: 19,
    firstName: 'James',
    lastName: 'Clark',
    location: 'Seattle, America',
    likes: 430,
    comments: 8,
    bookmark: 10,
  },
  {
    id: 20,
    firstName: 'Evelyn',
    lastName: 'Lewis',
    location: 'Denver, America',
    likes: 820,
    comments: 14,
    bookmark: 31,
  },
];

export default UserPostComponent;
