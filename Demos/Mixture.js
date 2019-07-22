import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,//创建动画的库
    Easing,//React Native创建动画的载体
} from 'react-native';

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class Mixture extends Component {

    constructor(props) {
        super(props)

        this.state = {
            animatedValue: new Animated.Value(-0.2)
        }

        this.rotateAnimated = Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.in
        });
    }

    _startAnimated() {
        this
            .state
            .animatedValue
            .setValue(-0.2);
        this
            .rotateAnimated
            .start();
    }

    render() {

       

        const marginLeft = this
            .state
            .animatedValue
            .interpolate({
                inputRange: [
                    0, 0.5, 6
                ],
                outputRange: [0, 300, 0]
            });

        return (
            <View style={styles.mainStyle}>
                <Animated.View
                    style={{
                    marginTop: 10,
                    width: 100,
                    height: 100,
                    // marginLeft: marginLeft,
                    marginLeft: marginLeft,
                  
                    backgroundColor: 'red'
                }}/>

                <TouchableOpacity
                    style={styles.touchStyle}
                    onPress={this
                    ._startAnimated
                    .bind(this)}>
                    <Text
                        style={{
                        width: 200,
                        height: 100,
                        textAlign: 'center',
                        lineHeight: 100
                    }}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        width:screenW,
        backgroundColor:"#ffffff",
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:100,
    },
    touchStyle:{
        width:200,
        height:100,
        position:'absolute',
        bottom:100,
        left:screenW/2 - 100,
    },
});
