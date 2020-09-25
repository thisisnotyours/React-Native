/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainBottomTab from './MainBottomTab';
import MainDrawer from './MainDrawer';
import MainMaterialTopTab from './MainMaterialTopTab';

// AppRegistry.registerComponent(appName, () => MainBottomTab);
// AppRegistry.registerComponent(appName, () => MainMaterialTopTab);
AppRegistry.registerComponent(appName, () => MainDrawer);
