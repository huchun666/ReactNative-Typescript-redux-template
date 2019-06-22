import * as React from "react";
import {View, Text} from 'react-native';

interface propTypes {
    testInterface?: string
}

export default class AppContainer extends React.Component<propTypes, {}>{
    constructor (props: any) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>container</Text>
            </View>
        )
    }
}