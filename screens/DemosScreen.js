import React from 'react';
import {ScrollView, StyleSheet, TouchableHighlight, Image, Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from "react-navigation";
import {printAsync} from 'expo-print';

import RepayCenterScreen from '../Demos/RepayCenterScreen';
import RepayPlanScreen from '../Demos/RepayPlanScreen';
import {MyExpoLinksScreen} from '../components/NavigationListView';

const Left = ({onPress}) => (
    <TouchableHighlight
        onPress={onPress}
        style={{
        width: 60,
        height: 32
    }}
        underlayColor='#ffffff'>
        <Image
            source={require('../assets/images/mask_back.png')}
            style={{
            width: 14,
            height: 14,
            marginLeft: 10,
            marginTop: 8
        }}></Image>
    </TouchableHighlight>
);

class DemosScreen extends React.Component {

    _datas = [
        {
            title: '还款',
            data: [
                {
                    'id': 0,
                    'title': '还款中心'
                }, {
                    'id': 1,
                    'title': '还款计划'
                }
            ]
        }, {
            title: 'D',
            data: [
                {
                    'id': 0,
                    'title': 'Devin'
                }, {
                    'id': 1,
                    'title': 'Jhon'
                }
            ]
        }, {
            title: 'J',
            data: [
                {
                    'id': 0,
                    'title': 'Jackson'
                }, {
                    'id': 1,
                    'title': 'James'
                }
            ]
        }
    ];

    constructor() {
        super()
        this.clickDemo = this
            .clickDemo
            .bind(this);
    }

    render() {
        this
            .props
            .navigation
            .push('RepayPlan');
        return (
            <ScrollView style={styles.container}>
                <MyExpoLinksScreen callback={this.clickDemo} datas={this._datas}/>
            </ScrollView>
        );

    }

    clickDemo(id) {
        console.log('====================================');
        console.log('id1 ==> ' + id);
        console.log('====================================');
        switch (id) {
            case 0:
                this
                    .props
                    .navigation
                    .push('RepayCenter');
                break;

            default:
                this
                    .props
                    .navigation
                    .push('RepayPlan');
                break;
        }
        this.props.navigation.tabBarVisible = false;

    }
}

DemosScreen.navigationOptions = {
    title: '用钱宝'
};

const AppNavigator = createStackNavigator({
    Demos: {
        screen: DemosScreen,
        navigationOptions: () => ({headerLeft: null})
    },
    RepayCenter: {
        screen: RepayCenterScreen
    },
    RepayPlan: {
        screen: RepayPlanScreen
    }
}, {
    initialRouteName: 'Demos',
    defaultNavigationOptions: ({navigation}) => ({
        headerLeft: (<Left onPress={() => {
            navigation.goBack()
        }}/>),
        headerTintColor: '#333333',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        tabBarVisible: true
    })
});

export default AppNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    }
});
