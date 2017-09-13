// Sign In page
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
    handleSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit((email, password) => {
    return (dispatch) => {
      axios.post('https://mobile-server-ii.herokuapp.com/signin', { email, password })
        .then(() => {
          dispatch({
            type: 'USER_AUTHENTICATED',
          });
          AsyncStorage.setItem('token', response.data.token).then(() => {
            this.props.navigate('Content');
          });
        })
        .catch(() => {
          dispatch('Incorrect email/password combination');
        });
    };
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
          onPress={handleSubmit()}
          title="Sign In"
          color="purple"
          accessibilityLabel="Press button to submit login info"
        />
      </View>
    );
  }

}

