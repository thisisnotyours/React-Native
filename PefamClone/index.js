/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Pefam from './Screen/Pefam';
import Home from './Screen/Home';

AppRegistry.registerComponent(appName, () => Home);
