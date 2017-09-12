// Home
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './signUp';
import SignIn from './signIn';
import Content from './Content';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={this.props.navigation.navigate('SignUp')}
          title="Sign Up"
          color="purple"
          accessibilityLabel="Sign up with this button"
        />
        <Button
          onPress={this.props.navigation.navigate('SignIn')}
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
  Home: { screen: App },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn },
  Content: { screen: Content },
})

export default Routes;
