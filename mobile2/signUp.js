// Sign Up page
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Content from './Content';
import SignIn from './signIn';

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
    handleSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit({email, password}) {
    return (dispatch) => {
      axios.post('https://mobile-server-ii.herokuapp.com/users', { email, password })
        .then(() => {
          dispatch({
            type: 'USER_REGISTERED',
          });
          Async.setItem('token', response.data.token).then(() => {
            this.props.navigate('Content');
          });
        })
        .catch(() => {
          dispatch('error');
        });
    };
  }
  render() {
    return (
      <View>
        <Text>This is the sign up page.</Text>
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
          onPress={handleSubmit()}
          title="Submit"
          color="purple"
          accessibilityLabel="Press button to submit email and password to sign up"
        />
      </View>
    );
  }

}
