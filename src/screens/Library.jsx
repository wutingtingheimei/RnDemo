import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useStyle} from '../Style';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeMessage} from '../store/feature/counter';

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
];
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
