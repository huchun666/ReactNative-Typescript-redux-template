import React from 'react';
import { Button, View, Text } from 'react-native';

class Test extends React.Component<any, {}> {
    static navigationOptions = {
        headerTitle: 'Test'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Test</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="openDrawer"
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <Button
                    title="closeDrawer"
                    onPress={() => this.props.navigation.closeDrawer()}
                />
            </View>
        );
    }
}

export default Test;
