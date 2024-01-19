import React, {useEffect, useState} from 'react';
import {
  Image,
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';
import {getUser} from './tsDemo.ts';
const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
];
const Item = ({item, onPress, bg}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, bg]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [flexDirection, setflexDirection] = useState('column');
  const [isLoading, setisLoading] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  console.log(Config.API_URL, 'Config');
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return (
      <Item
        item={item}
        bg={{backgroundColor}}
        onPress={() => setSelectedId(item.id)}></Item>
    );
  };
  useEffect(() => {
    getUser({name: '123', id: 1});
    console.log('数据');
    setTimeout(() => {
      setisLoading(true);
    }, 3000);
  }, []);
  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectedValue={flexDirection}
      style={styles.bigBox}
      setSelectedValue={setflexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]}>
        {Config.API_URL}
      </View>
      <Button title="测试"></Button>
      <TouchableNativeFeedback
        onPress={onPressButtonClick}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : ''
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>
      <View>
        {isLoading ? (
          <View>
            <SafeAreaView>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                extraData={selectedId}
                ListEmptyComponent={() => {
                  return <Text>No Data</Text>;
                }}
                keyExtractor={item => item.id}></FlatList>
            </SafeAreaView>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </View>
        ) : (
          <ActivityIndicator size="small" color="0000ff"></ActivityIndicator>
        )}
      </View>
    </PreviewLayout>
  );
};

const HandleClicker = () => {
  console.log('2d2dd');
  // alert('点击');
};

const HandleClickerFeedback = () => {
  alert('点击');

  // Alert.prompt(
  //   'Enter password',
  //   'Enter your password to claim your $1.5B in lottery winnings',
  //   [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'OK',
  //       onPress: password => console.log('OK Pressed, password: ' + password),
  //     },
  //   ],
  //   'secure-text',
  // );

  // Alert.prompt(
  //   'Update username',
  //   null,
  //   text => console.log('Your username is ' + text),
  //   null,
  //   'default',
  // );
};

const onPressButtonClick = () => {
  // Alert('点击');
  // 第一个参数title， 第二参数message
  Alert.alert('Sync Complete', 'All your data are belong to us.', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'Install',
      onPress: () => console.log('Install'),
    },
  ]);
};
const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    padding: 10,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'auto',
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  bigBox: {
    // width: '100%',
    backgroundColor: 'blue',
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'lightblue',
    // alignSelf: 'center',
  },
  column: {
    flexDirection: 'row',
    flexWrap: 'noWrap',
    // justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  ltr: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: '#000',
  },
});

export default App;
