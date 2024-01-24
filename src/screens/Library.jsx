import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useStyle, cm} from '../Style';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeMessage} from '../store/feature/counter';
import {SafeAreaView} from 'react-native-safe-area-context';
import {searchMovies} from '../type/api';
import Animated from 'react-native-reanimated';
export const Books = [
  {
    title: 'The Great Gatsby',
    desc: 'A story of the American Dream.',
    cover: 'https://i.imgur.com/cUjyUeJ.jpg',
  },
  {
    title: 'Pride and Prejudice',
    desc: 'A classic novel of manners.',
    cover: 'https://i.imgur.com/dci09XA.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    desc: 'A story of racial injustice.',
    cover: 'https://i.imgur.com/2vXD0K7.jpg',
  },
  {
    title: '1984',
    desc: 'A dystopian novel.',
    cover: 'https://i.imgur.com/2vXD0K7.jpg',
  },
  {
    title: 'The Catcher in the Rye',
    desc: 'A story of teenage angst.',
    cover: 'https://i.imgur.com/u74eWGj.jpg',
  },
  {
    title: 'The Great Gatsby',
    desc: 'A story of the American Dream.',
    cover: 'https://i.imgur.com/cUjyUeJ.jpg',
  },
];
const Library = memo(({navigation}) => {
  const {sc, s} = useStyle();
  const {message} = useSelector(
    state => ({
      message: state.count.message,
    }),
    shallowEqual,
  );
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getMoviesFromCloud() {
    setLoading(true);
    const mvs = await searchMovies();
    setMovies(mvs);
    setLoading(false);
  }

  const renderItem = ({item}) => (
    <Pressable onPress={() => navigation.navigate('Detail', {item})}>
      <View
        style={[
          s.row,
          s.box,
          {padding: 0, marginBottom: cm, borderRadius: cm},
        ]}>
        {/* <Image
          source={{uri: item.data[0].poster}}
          style={{width: 50, height: 50}}
        /> */}

        <Animated.Image
          source={{uri: item.data[0].poster}}
          style={{
            width: cm * 6,
            height: cm * 8,
            borderTopLeftRadius: cm,
            borderBottomLeftRadius: cm,
          }}
          sharedTransitionTag={item.id}
        />
        <View style={{flexShrink: 1, marginRight: cm}}>
          <Text style={[s.titleText]}>{item.originalName}</Text>
          <Text style={[s.subTitleText]}>{item.year}</Text>
        </View>

        {/* <Text style={[s.text]}>{item}</Text> */}
      </View>
    </Pressable>
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getMoviesFromCloud();
    dispatch(changeMessage('hei mei'));
  }, [dispatch]);
  return (
    <SafeAreaView style={[s.container, sc.card]}>
      <View>
        <Text style={[s.subText]}>Library {message}</Text>
      </View>
      {/* {Books.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate('Detail', {item})}>
          <View style={[sc.card, s.borderbox]}>
            <Image source={{uri: item.cover}} style={{width: 50, height: 50}} />
            <Text style={[s.text]}>{item.title}</Text>
            <Text style={[s.text]}>{item.desc}</Text>
          </View>
        </Pressable>
      ))} */}
      {loading && <ActivityIndicator />}
      <View style={{marginHorizontal: cm}}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          ListEmptyComponent={() => {
            return <Text>No Data</Text>;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
});

export default Library;
