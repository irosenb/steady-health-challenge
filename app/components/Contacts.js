import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    fetch('https://raw.githubusercontent.com/SteadyHealth/mobile-challenge-data/master/contacts.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({contacts: responseJson});
        console.log(responseJson);
    })
  }

  render() {
    return (
      this.state.contacts &&
      <FlatList
        data={this.state.contacts}
        style={styles.contacts}
        renderItem={({ contact }) => (
          <ListItem
            title={contact.name}
            subtitle={contact.last_message.content}
            />
        )}
        extraData={this.state.contacts}
        keyExtractor={contact => contact.id}
        />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profile_image: {
    width: 60,
    height: 60,
  },
  contacts: {
    width: '100%',
  },
  name: {
    fontSize: 20,
  },
  contact: {
    height: 90,
    backgroundColor: 'red',
  }
})

export default Contacts;
