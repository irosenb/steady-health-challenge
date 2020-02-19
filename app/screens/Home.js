import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contacts from '../components/Contacts'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Contacts></Contacts>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
