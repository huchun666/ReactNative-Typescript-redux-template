import React from 'react';
import { View, Text, Button } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    getActiveChildNavigationOptions
} from 'react-navigation';

const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{text}</Text>
    </View>
);

class A extends React.Component<any, {}> {
    static navigationOptions = {
        tabBarLabel: 'Home!',
        title: 'sadas'
    };

    render() {
        return (
            <View>
                <Placeholder text="A!" />
                <Button
                    title="Go to C"
                    onPress={() => this.props.navigation.navigate('C', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}

class B extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings!',
    };

    render() {
        return <Placeholder text="B!" />;
    }
}
class C extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'SettingsC!',
    };

    render() {
        return <Placeholder text="C!" />;
    }
}

let HomeStack = createStackNavigator({ A, C });
HomeStack.navigationOptions = {
    tabBarLabel: 'Homesss!',
  };
let SettingsStack = createStackNavigator({ B });
// HomeStack.navigationOptions = {
//     headerTitle: 'SHASJ'
// }
// HomeStack.navigationOptions = ({ navigation }) => {
//     console.log(navigation)
//     const { routeName } = navigation.state.routes[navigation.state.index];
//     console.log(routeName)
//     // You can do whatever you like here to pick the title based on the route name
//     const title = routeName;

//     return {
//         title,
//     };
// };
let TabNavigator = createBottomTabNavigator({
    HomeStack,
    SettingsStack,
})
TabNavigator.navigationOptions = {
    headerTitle: 'SHASJ'
}

export default createAppContainer(TabNavigator);
