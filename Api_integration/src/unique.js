import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function Unique({route}) {
  const [data, setdata] = useState(route.params.item);

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.view}>
          <Text style={styles.text}>{data.item.id}</Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={[styles.text]}>{data.item.body}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '100',
  },
  view: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
  },
});
