// Home
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './signUp';
import SignIn from './signIn';
import Content from './Content';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home Page'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Home Page!</Text>
        <Button
          title="Sign Up"
          color="purple"
          accessibilityLabel="Sign up with this button"
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
          title="Sign In"
          color="purple"
          accessibilityLabel="Sign in with this button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
  Content: { screen: Content },
})

export default Routes;
