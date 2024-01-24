import React, {memo} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useStyle, cm} from '../Style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
const Detail = memo(({route, navigation}) => {
  const {item} = route.params;
  // 这里最好做判空处理
  console.log(item, 'book');
  const {s, sc} = useStyle();
  return (
    <SafeAreaView stye={[s.container]}>
      <View style={[sc.card]}>
        <Animated.Image
          style={{width: cm * 6, height: cm * 8}}
          source={{uri: item.data[0].poster}}
        />
        <Text style={[s.text]}>{item.data[0].name}</Text>
        <Text style={[s.text]}>{item.data[0].description}</Text>
        <Text style={[s.importantText]}>Detail</Text>
        <Pressable onPress={() => navigation.push('Detail', {item})}>
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
      </View>
    </SafeAreaView>
  );
});

export default Detail;
