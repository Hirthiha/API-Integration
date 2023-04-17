import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// export default function Flatlist({navigation}) {
//   const [data, setdata] = useState([]);
//   const [dat, setdat] = useState({});

//   useEffect(() => {
//     const api = axios.create({
//       baseURL: 'https://jsonplaceholder.typicode.com/',
//     });
//     api
//       .get('posts')
//       // .then(response => console.log(response.data));
//       .then(res => {
//         setdata(res.data);
//         console.log(data);
//       });
//   }, []);
//   const ItemSeprator = () => (
//     <View
//       style={{
//         height: 2,
//         width: '100%',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//       }}
//     />
//   );
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello, world!</Text>
//       <SafeAreaView>
//         <FlatList
//           data={data}
//           // horizontal
//           ItemSeparatorComponent={ItemSeprator}
//           onEndReached={}
//           renderItem={({item}) => (
//             <View>
//               <Pressable
//                 onPress={() => {
//                   navigation.navigate('unic', {item: item});
//                 }}
//                 style={{
//                   width: 350,
//                   height: 80,
//                   backgroundColor: 'lightblue',
//                   alignItems: 'center',
//                   borderRadius: 50,
//                   justifyContent: 'center',
//                   marginTop: '1%',
//                 }}>
//                 <Text style={{width: '100%', textAlign: 'center'}}>
//                   {item.id}
//                 </Text>
//                 <Text>{item.title}</Text>
//               </Pressable>
//             </View>
//           )}
//         />
//       </SafeAreaView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'rgb(59,108,212)',
//     fontSize: 42,
//     fontWeight: '100',
//     textAlign: 'center',
//   },
// });
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
      <Text style={{width: '100%', textAlign: 'center', fontSize: 25}}>
        {dat.item.id}
      </Text>
      <Text style={{fontSize: 15, textAlign: 'center'}}>{dat.item.title}</Text>
    </TouchableOpacity>
  );

  ItemSeparator = () => (
    <View
      style={{
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );

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
});
