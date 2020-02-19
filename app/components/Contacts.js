import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';

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
      <ScrollView>
      {this.state.contacts.map((contact) => (
        <ListItem
            title={contact.name}
            subtitle={contact.last_message.content}
            leftAvatar={{ source: { uri: 'https://placeimg.com/640/480/any'} }}
            bottomDivider
            chevron
            />
      ))}
      </ScrollView>
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