import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './Style';

export default function Unique({route}) {
  const [data, setdata] = useState(route.params.item);

  return (
    <View style={styles.unique}>
      <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          <Text style={styles.text}>{data.item.id}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.new}>{data.item.body}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
