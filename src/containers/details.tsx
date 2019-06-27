import React from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends React.Component<any, {}> {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        const { navigation } = this.props;
        console.log(navigation)
        const itemId = navigation.getParam('itemId');
        const otherParam = navigation.getParam('otherParam');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            </View>
        );
    }
}

export default DetailsScreen;
