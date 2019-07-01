import React from "react";
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from "./home";
import DetailsScreen from "./details";
import Flex from './flex';
import Test from "./test";
import FlatListScreen from './FlatListScreen'
import { Button, Platform, SafeAreaView, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const topNavigator = createMaterialTopTabNavigator(
	{
		Details: {
			screen: DetailsScreen,
			navigationOptions: {
				tabBarLabel: 'Details'
			}
		},
		Test: {
			screen: Test,
			navigationOptions: {
				tabBarLabel: 'Test'
			}
		},
		Flex: {
			screen: Flex,
			navigationOptions: {
				tabBarLabel: 'Flex'
			}
		}
	},
	{
		tabBarOptions: {
			tabStyle: { minWidth: 50 },
			upperCaseLabel: false,
			scrollEnabled: true,
			style: {
				backgroundColor: '#678'
			},
			indicatorStyle: {
				height: 2,
				backgroundColor: 'white'
			},
			labelStyle: {
				fontSize: 13,
				marginTop: 6,
				marginBottom: 6
			}
		}
	}
)

const bottomNavigator = createBottomTabNavigator(
	{
		Details: {
			screen: DetailsScreen,
			navigationOptions: {
				tabBarLabel: '最热',
				tabBarIcon: (props: any) => {
					const { tintColor } = props;
					return (
						<Ionicons
							name={'ios-home'}
							size={26}
							style={{ color: tintColor }}
						/>
					)
				}
			}
		},
		Test: {
			screen: Test,
			navigationOptions: {
				tabBarLabel: '趋势',
				tabBarIcon: (props: any) => {
					const { tintColor } = props;
					return (
						<Ionicons
							name={'ios-basketball'}
							size={26}
							style={{ color: tintColor }}
						/>
					)
				}
			}
		},
		Flex: {
			screen: Flex,
			navigationOptions: {
				tabBarLabel: '我的',
				tabBarIcon: (props: any) => {
					const { tintColor } = props;
					return (
						<Ionicons
							name={'ios-person'}
							size={26}
							style={{ color: tintColor }}
						/>
					)
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#333'
		}
	}
)

const MyDrawerNavigator = createDrawerNavigator(
	{
		Test: {
			screen: Test,
			navigationOptions: {
				drawerLabel: 'TestDrawerLabel',
				drawerIcon: (props: any) => {
					const { tintColor } = props;
					return (
						<Ionicons
							name={'ios-home'}
							size={26}
							style={{ color: tintColor }}
						/>
					)
				}
			}
		},
		DetailsScreen: {
			screen: DetailsScreen,
			navigationOptions: {
				drawerLabel: 'DetailDrawerLabel',
				drawerIcon: (props: any) => {
					const { tintColor } = props;
					return (
						<Ionicons
							name={'ios-person'}
							size={26}
							style={{ color: tintColor }}
						/>
					)
				}
			}
		},
	},
	{
		initialRouteName: 'Test',
		contentOptions: {
			activeTintColor: 'red'
		},
		contentComponent: (props: any) => (
			<ScrollView style={{backgroundColor: 'green'}}>
				<SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
					<DrawerItems {...props}/>
				</SafeAreaView>
			</ScrollView>
		)
	}
);

const AppNavigator = createStackNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: {
				title: 'Home',
				headerBackTitle: '返回是'
			}
		},
		Details: {
			screen: DetailsScreen,
			headerBackTitle: '返回是',
			navigationOptions: (props: any) => {
				const { navigation } = props;
				const { state, setParams } = navigation;
				const { params } = state;
				return {
					title: params.title ? params.title : 'this is details',
					headerRight: (
						<Button title={params.mode === 'edit' ? '保存' : '编辑'} onPress={() => {
							setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
						}} />
					)
				}
				// title: `DetailsScreenTitle`,
			},
		},
		Test: {
			screen: Test,
			headerBackTitle: '返回是',
			navigationOptions: (props: any) => ({
				title: `${props.navigation.state.params.name}页面名`
			}),
		},
		Bottom: {
			screen: bottomNavigator,
			navigationOptions: {
				title: 'bottomNavigator',
			}
		},
		Top: {
			screen: topNavigator,
			navigationOptions: {
				title: 'topNavigator',
			}
		},
		MyDrawerNavigator: {
			screen: MyDrawerNavigator,
			navigationOptions: {
				title: 'MyDrawerNavigator'
			}
		},
		FlatListScreen: {
			screen: FlatListScreen,
			navigationOptions: {
				title: 'FlatListScreen'
			}
		}
	}
);
AppNavigator.navigationOptions = (navigate: any) => {
	console.log(navigate)
}

export default createAppContainer(AppNavigator);

// export default class App extends React.Component {
// 	render() {
// 		return <AppContainer />;
// 	}
// }
