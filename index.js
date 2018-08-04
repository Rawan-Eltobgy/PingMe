/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FormScreen  from './src/bundles/components/FormScreen'

//Creating a component
const App = () => (
<FormScreen/>
);

AppRegistry.registerComponent(appName, () => App);
