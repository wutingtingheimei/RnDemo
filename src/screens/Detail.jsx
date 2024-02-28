import React, {memo, useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useStyle, ScreenHeight, unitSize, cm} from '../Style';
import {OMDB_KEY} from '@env';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import {getMovie} from '../type/api';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const Detail = memo(({route, navigation}) => {
  // 这里最好做item判空处理
  const {item} = route.params;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});
  // id
  const imdbID = item.imdbID;
  async function getMovieDetail(id) {
    setLoading(true);
    const mvs = await getMovie(id);
    console.log(mvs, 'mvs');
    setMovies(mvs);
    setLoading(false);
  }
  useEffect(() => {
    getMovieDetail(imdbID);
  }, [imdbID]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true, // 设置为true 则导航栏背景为透明
      headerLeft: () => (
        <Pressable style={[sc.boxLink]} onPress={() => navigation.goBack()}>
          <AntIcon name="left" size={cm} color={'white'} />
        </Pressable>
      ),
    });
  });
  const {
    s,
    sc,
    Colors: {bg},
  } = useStyle();
  return (
    <SafeAreaView>
      <View style={{position: 'absolute', top: 0, left: 0}}>
        {/* <Pressable onPress={() => navigation.goBack()}> */}
        <Animated.Image
          style={{width: 32 * unitSize, height: 48 * unitSize}}
          source={{uri: movies.Poster}}
          sharedTransitionTag={movies.imdbID}
        />
        {/* </Pressable> */}
      </View>
      <View
        stye={[
          s.container,
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            // height: ScreenHeight - 35 * unitSize,
          },
        ]}>
        {/* <View> */}
        {/* <View> */}
        <Text style={[s.text]}>{movies.Title}</Text>
        <Text style={[s.text]}>{movies.Plot}</Text>
        {/* <Text style={[s.importantText]}>Detail</Text> */}

        <Pressable onPress={() => navigation.push('Detail', {movies})}>
          <Text style={[s.normalText]}>Go to Detail again</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={[s.normalText]}>Go to Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={[s.normalText]}>Go back 返回</Text>
        </Pressable>
        <Pressable onPress={() => navigation.popToTop()}>
          <Text style={[s.normalText]}>返回堆栈中的第一个屏幕</Text>
        </Pressable>
        {/* </View> */}
        {/* </View> */}
      </View>
      {/* 如果你想创建一个遮罩层或全屏背景图像，你可以使用 StyleSheet.absoluteFill 将元素的样式设置为填充整个屏幕 */}
      <LinearGradient
        style={[
          StyleSheet.absoluteFill,
          {top: 20 * unitSize, height: 28 * unitSize},
        ]}
        colors={['transparent', bg]}
      />
    </SafeAreaView>
  );
});

export default Detail;
