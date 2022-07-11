import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import AboutStack from './AboutStack'

const navigation = useNavigation()
const MenuDrawer = createDrawerNavigator({
   
    {
        onPress: () => navigation.navigate('About'),
    },

export default MenuDrawer;
