import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useStyle} from '../Style';
const Detail = memo(({navigation}) => {
  const {s, sc} = useStyle();
  return (
    <View stye={[sc.card]}>
      <Text style={[s.importantText]}>Detail</Text>
      <Pressable onPress={() => navigation.push('Detail')}>
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
  );
});

export default Detail;
