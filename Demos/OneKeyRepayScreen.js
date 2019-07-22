import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    SafeAreaView,
    Dimensions,
    Modal,
    Image,
    FlatList,
    LayoutAnimation
} from 'react-native'

export default class OneKeyRepayScreen extends React.Component{
    static navigationOptions={
        title: '一键还款'
    }
    
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>一键还款</Text>
                </View>
            </SafeAreaView>
        );
    }
}
