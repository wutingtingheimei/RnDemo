import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {sc, s} from '../Style';
const Library = memo(() => {
  return (
    <View style={[sc.card]}>
      <Text style={[s.subText]}>Library</Text>
    </View>
  );
});

export default Library;
