import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated, //创建动画的库
    Easing, //React Native创建动画的载体
} from 'react-native';

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class AnimatedDecay extends Component {

     constructor(props) {
        super(props);
        this.state = {
            bigDogeTrans : new Animated.ValueXY({
                x: 0,
                y: screenH
            })
        }
    }

    _startAnimated() {

        Animated.spring(this.state.bigDogeTrans, {
            toValue: {
                x : 0,
                y : screenH - 216 - 88
            },
            duration: 250
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.animationContainer, {transform: this.state.bigDogeTrans.getTranslateTransform()}]} >
                    
                    
                </Animated.View>

                
                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    doges: {
        position: 'absolute'
    },
    animationContainer:{
        height: 216, 
        width: screenW, 
        backgroundColor: '#33ff27'
    },
    touchStyle:{
        width:200,
        height:100,
        position:'absolute',
        bottom:100,
        left:screenW/2 - 100,
    },
});