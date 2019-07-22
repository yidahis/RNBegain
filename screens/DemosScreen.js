import React from 'react';
import {ScrollView, StyleSheet, TouchableHighlight, Image, Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from "react-navigation";
import {printAsync} from 'expo-print';

import RepayCenterScreen from '../Demos/RepayCenterScreen';
import RepayPlanScreen from '../Demos/RepayPlanScreen';
import {MyExpoLinksScreen} from '../components/NavigationListView';
import LayoutAnimationDemoScreen from '../Demos/LayoutAnimationDemoScreen'
import AnimationFadeInScreen from '../Demos/AnimationFadeInScreen'
import Mixture from '../Demos/Mixture'
import AnimatedDecay from '../Demos/AnimatedDecay'
import ModalDemo from '../Demos/ModalDemo'

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
            index: 0,
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
            title: '官方Demo',
            index: 1,
            data: [
                {
                    'id': 0,
                    'title': 'LayoutAnimation'
                }, {
                    'id': 1,
                    'title': 'AnimationFadeIn'
                }
            ]
        }, {
            title: 'J',
            index: 2,
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
            .push('RepayCenter');
        return (
            <ScrollView style={styles.container}>
                <MyExpoLinksScreen callback={this.clickDemo} datas={this._datas}/>
            </ScrollView>
        );

    }

    repayNavigationSwitch(id) {
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
    }

    demosNavigationSwitch(id) {
        let routeName = null;
        switch (id) {
            case 1:
                routeName = 'AnimationFadeIn';
                break;
            default:
                routeName = 'LayoutAnimationDemo';
                break;
        }

        this
            .props
            .navigation
            .push(routeName);
    }

    AnimationDemosSwitch(id){
        let routeName = null;
        switch (id) {
            case 1:
                routeName = 'AnimationFadeIn';
                break;
            default:
                routeName = 'Mixture';
                break;
        }

        this
            .props
            .navigation
            .push(routeName);
    }

    clickDemo(id, sectionIndex) {
        console.log('====================================');
        console.log('id1 ==> ' + id);
        console.log('sectionIndex' + sectionIndex);
        console.log('====================================');
        switch (sectionIndex) {
            case 0:
                this.repayNavigationSwitch(id);
                break;
            case 1:
                this.demosNavigationSwitch(id);
            case 2:
                this.AnimationDemosSwitch(id);

            default:
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
    },
    LayoutAnimationDemo: {
        screen: LayoutAnimationDemoScreen
    },
    AnimationFadeIn: {
        screen: AnimationFadeInScreen
    },
    Mixture: {
        screen: Mixture
    },
    AnimatedDecay: {
        screen: AnimatedDecay
    },
    ModalDemo :{
        screen: ModalDemo
    },
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
