import React, {memo} from 'react';
import {Text, View} from 'react-native';

// const movie = [
//   {
//     img: 'https://picsum.photos/200',
//     name: 'Movie 1',
//   },
//   {
//     img: 'https://picsum.photos/100',
//     name: 'Movie 2',
//   },
//   {
//     img: 'https://picsum.photos/400',
//     name: 'Movie 3',
//   },
//   {
//     img: 'https://picsum.photos/600',
//     name: 'Movie 4',
//   },
// ];
const Movie = memo(() => {
  // const renderItem = ({item}) => {
  //   return <View>{item.name}</View>;
  // };
  return (
    <View>
      <Text>c3s</Text>
      {/* <FlatList
        renderItem={renderItem}
        data={movie}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
});

export default Movie;
