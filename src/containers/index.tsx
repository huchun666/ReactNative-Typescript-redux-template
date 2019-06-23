import * as React from "react";
import {View, Text, Button} from 'react-native';
import { connect } from "react-redux";
import { addOne, test } from "../redux/actions";

interface IProps {
    testInterface?: string,
    addOne: Function,
    test: Function,
    goods: number,
    compiler: string
}
export interface IState {
    aaa: number,
}

class AppContainer extends React.Component<IProps, IState>{
    constructor (props: any) {
        super(props);
    }
    // 组件中使用默认的 Props
    static defaultProps = {
        compiler: 'TypeScript'
    };

    readonly state = {
        aaa: 1,
    }
    public handleAddOne = () => {
        this.props.addOne();
        this.setState((preState, preProps) => {
            return {aaa: preState.aaa + 1}
        })
        // this.props.test({
        //     username: 'huchun',
        //     password: '123456'
        // });
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>containers</Text>
                <Text>goods: {this.props.goods}</Text>
                <Text>state: {this.state.aaa}</Text>
                <Text>{this.props.compiler}</Text>
                <Button onPress={this.handleAddOne} title="Add One"/>
            </View>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        goods: state.goods
    }
};
const mapDispatchToProps = {addOne, test};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)