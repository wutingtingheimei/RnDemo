import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {useStyle} from '../Style';
const Wallet = memo(() => {
  const {s, sc} = useStyle();
  return (
    <View style={[sc.card]}>
      <Text style={[s.titleText]}>Wallet</Text>
    </View>
  );
});

export default Wallet;
