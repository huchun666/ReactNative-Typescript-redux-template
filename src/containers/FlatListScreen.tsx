import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
const CITY_NAME = ['苏州', 'A', 'B', 'C', 'D', '苏州', 'A', 'B', 'C', 'D', '苏州', 'A', 'B', 'C', 'D', '苏州', 'A', 'B', 'C', 'D'];
export default class FlatListScreen extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAME,
        }
    }
    loadData(isRefresh?: Boolean) {
        if (isRefresh) {
            this.setState({
                isLoading: true
            })
        }
        setTimeout(() => {
            let dataArray: string[] = [];
            if (isRefresh) {
                CITY_NAME.map((item) => {
                    dataArray.push(item)
                })
            }else {
                dataArray = CITY_NAME;
                CITY_NAME.map((item, index) => {
                    dataArray.push(index+'')
                })
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000);
    }
    _renderItem(data: any) {
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }
    genIndicator() {
        return <View style={styles.bottomStyle}>
            <ActivityIndicator size={'large'} animating={true} color={'red'}/>
            <Text>正在加载更多...</Text>
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.dataArray} 
                    renderItem={(data) => this._renderItem(data)}
                    refreshControl={
                        <RefreshControl 
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'green'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(true);
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData();
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#ddd',
        height: 200,
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    bottomStyle: {
        alignItems: 'center'
    }
})