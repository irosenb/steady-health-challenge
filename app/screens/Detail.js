import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import Messages from '../components/Messages'

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Messages/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Detail;
