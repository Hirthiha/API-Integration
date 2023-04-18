import axios from 'axios';
import React from 'react';
import styles from './Style';
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class Flatlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
    };
  }

  componentDidMount() {
    this.fetchDAta();
  }

  fetchDAta() {
    this.setState({refreshing: true});
    {
      const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
      });
      api.get('posts').then(res => {
        this.setState({data: res.data});
        console.log(this.state.data);
        this.setState({refreshing: false});
      });
    }
  }

  renderItemComponent = dat => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        this.props.navigation.navigate('unic', {item: dat});
        console.log(dat);
      }}>
      <Text style={styles.id}>{dat.item.id}</Text>
      <Text style={styles.font}>{dat.item.title}</Text>
    </TouchableOpacity>
  );

  ItemSeparator = () => <View style={styles.separator} />;

  handleRefresh = () => {
    this.setState({refreshing: false}, () => {
      this.fetchDAta();
    });
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={item => this.renderItemComponent(item)}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaView>
    );
  }
}
