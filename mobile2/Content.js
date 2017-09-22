// Content page
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage,
  FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class Content extends React.Component {
  static navigationOptions = {
    title: 'Content Page'
  }
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => { // retrieve the token from localStorage
      axios.get('http://mobile-server-ii.herokuapp.com/users', {
        headers: {
          authorization: token, // attach the token as header
        }
      }).then((response) => {
        // update state here
        this.setState({
          users: response,
        })
      });
    });
  }

  render() {
    return (
      <View>
        <Text>I am the contents page</Text>
        <FlatList
          data={this.state.users}
          renderItem={({ user }) => {
            return <Text>{user.email}</Text>;
          }}
        />
      </View>
    );
  }
}
