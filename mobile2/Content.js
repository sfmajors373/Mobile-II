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
  render() {
    return (
      <Text>I am the contents page</Text>
    );
  }
}
