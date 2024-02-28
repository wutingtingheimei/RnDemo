import React, {memo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyle} from '../Style';
const Pay = memo(({navigation}) => {
  const {s, sc} = useStyle();
  return (
    <SafeAreaView style={[s.container, s.centered]}>
      <View style={[sc.card]}>
        <Text style={[s.titleText]}>请付款</Text>
        <Pressable style={[sc.boxAct]} onPress={() => navigation.goBack()}>
          <Text style={[s.normalText]}>Close</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
});

export default Pay;
