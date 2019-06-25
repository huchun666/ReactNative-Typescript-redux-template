import React from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends React.Component<any, {}> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.push('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;
