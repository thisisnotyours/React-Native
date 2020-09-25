/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainComponent from './MainComponent';  //default라 {}필요없음

AppRegistry.registerComponent(appName, () => MainComponent);
