import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import FeedScreen from "./screens/FeedScreen";
import CreatePostScreen from './screens/CreatePost';
import UsernameScreen from './screens/Username';
import ObjectNameScreen from './screens/ObjectName';
import ObjectTypeScreen from './screens/ObjectType';
import EnvironmentScreen from './screens/Environment';

import {createAppContainer, createSwitchNavigator} from "react-navigation";  






export default class App extends React.Component{
  constructor(props){
    super(props);
  }
}

const AppNavigator = createSwitchNavigator({
  FeedScreen: FeedScreen,
  CreatePost: CreatePost,
  UsernameScreen: UsernameScreen,
  ObjectNameScreen: ObjectNameScreen,
  ObjectTypeScreen: ObjectTypeScreen,
  EnvironmentScreen: EnvironmentScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});