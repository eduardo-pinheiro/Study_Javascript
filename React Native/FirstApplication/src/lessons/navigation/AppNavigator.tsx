import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Friends from './Friends';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Friends: { screen: Friends }
  },
  { initialRouteName: 'Home' },
)

const App = createAppContainer( AppNavigator )

export default App