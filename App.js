import React from 'react';

import {StackNavigator} from 'react-navigation';

import { Provider } from 'react-redux';

import MainScreen from './js/screens/main';
import ResetScreen from './js/screens/user/ResetPassword';

import configureStore from './js/store';

const store = configureStore();

const MainNavigator = StackNavigator({
    MainScreen: {
        screen: MainScreen,
    },
    ResetScreen: {
        screen: ResetScreen,
    },
});

export default class Main extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
  }
}
