// Sign In page
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Content from './Content';
import axios from 'axios';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Sign In Page'
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit() {
    axios.post('http://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigate('Content');
      });
    }).catch((error) => {
      console.log(error);
    });
  };
  render() {
    return (
      <View>
        <Text>This is the sign-in page.</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.password}
          placeholder="Password"
        />
        <Button
          onPress={this.handleSubmit}
          title="Sign In"
          color="purple"
          accessibilityLabel="Press button to submit login info"
        />
      </View>
    );
  }

}

