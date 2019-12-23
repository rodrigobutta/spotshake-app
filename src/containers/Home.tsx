import React, { Component } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import strings from '../constants/strings';
import { User } from '../types';

import {
  Platform,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export interface Props {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser('1');
  }

  onSetLanguageTo(lang: string) {
    console.log('Current Language:', strings.getInterfaceLanguage());
    strings.setLanguage(lang);
    this.setState({});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.hello}. Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit Home.tsx OK2
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="English" onPress={() => this.onSetLanguageTo('en')} />
        <Button title="Spanish" onPress={() => this.onSetLanguageTo('es')} />
        <Button title="French" onPress={() => this.onSetLanguageTo('fr')} />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
