// Sign Up page
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
import SignIn from './signIn';
import axios from 'axios';

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Sign Up Page'
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
    console.log(this.state);
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      if (response.data.code === 11000) {
        return this.setState({
          error: 'An account already exists with this email, please sign in',
        });
      }
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigate('Content');
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View>
        <Text>This is the sign up page.</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="Email"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          placeholder="Password"
        />
        <Button
          onPress={this.handleSubmit}
          title="Submit"
          color="purple"
          accessibilityLabel="Press button to submit email and password to sign up"
        />
      </View>
    );
  }

}
