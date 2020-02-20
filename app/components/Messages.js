import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ListItem, Input } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/SteadyHealth/mobile-challenge-data/master/chathistory.json')
      .then((response) => response.json())
      .then((responseJson) => {
        var messages = [];
        responseJson.forEach((item, i) => {
          var message = {}
          if (item.content_type == 'text') {
            message = {
              text: item.content,
              _id: i,
              createdAt: new Date(item.timestamp * 1000),
            }
          } else if (item.content_type == 'image') {
            message = {
              image: item.content,
              _id: i,
              createdAt: new Date(item.timestamp * 1000)
            }
          }

          if (item.type == 'outgoing') {
            message["user"] = {
              _id: 1,
              name: "First user",
              avatar: "https://placeimg.com/640/480/any"
            }
          } else {
            message["user"] = {
              _id: 2,
              name: "Second user",
              avatar: "https://placeimg.com/640/480/any"
            }
          }
          console.log(message);
          messages.push(message);
        });

        this.setState({messages: messages});
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    position: 'absolute',
    bottom: 0,
  },
  scrollView: {
    width: '100%'
  }
})

export default Messages;
