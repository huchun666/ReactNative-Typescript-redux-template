import React from 'react';
import { Button, View, Text } from 'react-native';

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
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
            </View>
        );
    }
}

export default HomeScreen;
