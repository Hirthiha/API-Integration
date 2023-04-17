import axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
    };
  }

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats() {
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
      this.fetchCats();
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

const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
  separator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginLeft: 10,
    marginRight: 10,
  },
  id: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    color: 'darkblue',
    paddingTop: 10,
  },
  font: {
    fontSize: 15,
    textAlign: 'center',
  },
});
