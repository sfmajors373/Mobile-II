// Content page
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';

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
      });
    });
  }

  render() {
    return (
      <Text>I am the contents page</Text>
    );
  }
}
