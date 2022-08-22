import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigation = createStackNavigator({
    Search: SearchScreen

}, {
    initialRouteName: "Search",
    defaultNavigationOptions: {
        title: "Bussines Search"
    }
});

export default createAppContainer(navigation);