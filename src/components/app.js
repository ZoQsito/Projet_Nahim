import{
    createAppContainer,
    createStacknavigator
} from "react-navigation"
import ContactListScreen from "./ContactsListScreen"
import ViewContactScreen from "./ViewContactScreen"

const Navigator = createStackNavigator({
    contactList: ContactListScreen,
    ViewContact: ViewContactScreen
})
const AppContainer = createAppContainer(Navigator)


export default AppContainer