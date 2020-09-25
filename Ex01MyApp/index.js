 /**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';

//처음 실행되는 컴포넌트 설정
//첫번째 파라미터 : 앱 이름 (같은 폴더안에 있는 app.json문서안에 써있음)
//두번째 파라미터 : 첫번째로 실행한 컴포넌트를 리턴하는 콜백함수
// AppRegistry.registerComponent(appName, () => App);

//기존에 있던 App말고 내가만든 MyApp 컴포넌트를 첫번째 시작으로 지정
AppRegistry.registerComponent(appName, () => MyApp);

