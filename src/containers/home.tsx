import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FlexDirectionBasics from "./flex";

class HomeScreen extends React.Component<any, {}> {
    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: (
            <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="#333"
            />
        ),
        headerBackTitle: '返回是'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Test!"
                    onPress={() => this.props.navigation.navigate('Test', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="Go to Bottom!"
                    onPress={() => this.props.navigation.navigate('Bottom')}
                />
                <Button
                    title="Go to Top!"
                    onPress={() => this.props.navigation.navigate('Top')}
                />
                <Button
                    title="Go to MyDrawerNavigator!"
                    onPress={() => this.props.navigation.navigate('MyDrawerNavigator')}
                />
                <FlexDirectionBasics />
            </View>
        );
    }
}

export default HomeScreen;
