import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useStyle} from '../Style';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeMessage} from '../store/feature/counter';
const Library = memo(() => {
  const {sc, s} = useStyle();
  const {message} = useSelector(
    state => ({
      message: state.count.message,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeMessage('hei mei'));
  }, [dispatch]);
  return (
    <View style={[sc.card]}>
      <Text style={[s.subText]}>Library {message}</Text>
    </View>
  );
});

export default Library;
