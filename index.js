import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import FormScreen  from './src/bundles/screens/FormScreen';

//Creating a component
const App = () =>{ (
{FormScreen}
);};

AppRegistry.registerComponent(appName, () => App);
