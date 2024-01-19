import React, {memo} from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {s, sc} from '../Style';
const Home = memo(() => {
  return (
    <SafeAreaView style={[s.container, s.centered]}>
      <View style={[sc.card]}>
        <Text style={[s.titleText]}>Home Title</Text>
        <Text style={[s.subText]}>sub Title</Text>
        <Text style={[s.normalText]}>normal content</Text>
      </View>
      <View style={[s.row]}>
        <Pressable style={[sc.buttonAct]}>
          <Text style={[s.normalText, {color: '#FFF'}]}>点击</Text>
        </Pressable>
        <Pressable style={[sc.buttonLink]}>
          <Text style={[s.normalText]}>点击</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

export default Home;
