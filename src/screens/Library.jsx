import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {OMDB_KEY} from '@env';
import {useStyle, cm} from '../Style';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeMessage, reset} from '../store/feature/counter';
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
      message: state.counter.message,
    }),
    shallowEqual,
  );
  const [refreshing, setRefreshing] = useState(false);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMoviesFromCloud() {
    setLoading(true);
    const mvs = await searchMovies({
      apikey: OMDB_KEY,
      page: limit,
      plot: 'full',
      y: 2023,
      s: 'love',
    });
    console.log(mvs, 'mvs');
    setMovies(mvs.Search);
    setLoading(false);
  }
  // 触底加载
  const onEndReached = () => {
    console.log(refreshing, '触底');
    if (refreshing) return;
    setPage(page + 1);
    setLimit(limit * page);
  };
  // 下拉刷新
  const onRefresh = async () => {
    console.log('下拉刷新');
    setPage(1);
    setRefreshing(true);
    setLimit(6);
    await getMoviesFromCloud();
    setRefreshing(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getMoviesFromCloud();
    dispatch(changeMessage('hei mei'));
  }, [dispatch, page]);
  const renderItem = ({item}) => (
    // <Pressable onPress={() => navigation.navigate('Detail', {item})}>
    <View
      style={[s.row, s.box, {padding: 0, marginBottom: cm, borderRadius: cm}]}>
      {/* <Image
          source={{uri: item.data[0].poster}}
          style={{width: 50, height: 50}}
        /> */}
      <Pressable onPress={() => navigation.navigate('Detail', {item})}>
        {/* sharedTransitionTag 动画的唯一id, 不加的话动画不会生效 */}
        <Animated.Image
          source={{uri: item.Poster}}
          style={{
            width: cm * 6,
            height: cm * 8,
            borderTopLeftRadius: cm,
            borderBottomLeftRadius: cm,
          }}
          sharedTransitionTag={item.imdbID}
        />
      </Pressable>
      <View style={{flexShrink: 1, marginRight: cm}}>
        <Text style={[s.titleText]}>{item.Title}</Text>
        <Text style={[s.subTitleText]}>{item.Year}</Text>
      </View>

      {/* <Text style={[s.text]}>{item}</Text> */}
    </View>
    // </Pressable>
  );

  return (
    <View style={[s.container]}>
      <View>
        <Text style={[s.subText, s.textCenter, s.padding]}>
          Library {message}
        </Text>
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
          onEndReachedThreshold={0.5}
          renderItem={renderItem}
          onRefresh={onRefresh}
          refreshing={refreshing}
          onEndReached={onEndReached}
          ListEmptyComponent={() => {
            return <Text>No Data</Text>;
          }}
          keyExtractor={item => item.imdbID}
        />
      </View>
    </View>
  );
});

export default Library;
