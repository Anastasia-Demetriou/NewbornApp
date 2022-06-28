import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import DatePickerApp from '../DatePickerApp'
import CardContainer from '../CardContainer'

const screens = {
  Home: {
    screen: DatePickerApp,
  },
  Details: {
    screen: CardContainer,
  },
}

// home stack navigator screens
const NavigationStack = createStackNavigator(screens)

export default createAppContainer(NavigationStack)
