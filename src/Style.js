import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },

  separator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginLeft: 10,
    marginRight: 10,
  },
  id: {
    width: 67,
    marginLeft: 190,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ab249c',
    paddingTop: 10,
    marginTop: 10,
  },
  font: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  text: {
    color: '#ab249c',
    fontSize: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  view: {
    width: 65,
    marginLeft: 180,
    marginTop: 220,
  },
  unique: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 320,
    alignSelf: 'center',
  },
  new: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
  },
  scroll: {
    width: 400,
  },
});

export default styles;
