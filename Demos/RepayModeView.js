import React, {Component} from 'react'
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
import type {DialogProps}
from '../type';
import Animation from '../Animations/Animation';
import SlideAnimation from '../Animations/SlideAnimation'

var screenW = Dimensions
    .get('window')
    .width;
var screenH = Dimensions
    .get('window')
    .height;

type State = {
    dialogAnimation: Animation;
};

class Overlay extends Component < OverlayProps > {
    static defaultProps = {
        backgroundColor: '#000',
        opacity: 0.5,
        animationDuration: 2000,
        visible: false,
        useNativeDriver: true,
        onPress: () => {}
    };

    componentWillReceiveProps(nextProps : OverlayProps) {
        const {visible, useNativeDriver, animationDuration: duration} = this.props;
        if (visible !== nextProps.visible) {
            const toValue = nextProps.visible
                ? nextProps.opacity
                : 0;
            Animated
                .timing(this.opacity, {toValue, duration, useNativeDriver})
                .start();
        }
    }

    opacity = new Animated.Value(0)

    render() {
        const {onPress, pointerEvents, backgroundColor} = this.props;
        const {opacity} = this;

        return (
            <Animated.View
                pointerEvents={pointerEvents}
                style={[
                StyleSheet.absoluteFill, {
                    backgroundColor,
                    opacity
                }
            ]}>
                <TouchableOpacity onPress={onPress} style={StyleSheet.absoluteFill}/>
            </Animated.View>
        );
    }
}

class Cell extends React.Component {
    _onPressItem = () => {
        if(this.props.onPressItem){
            this.props.onPressItem(this.props.index)
        }
        
    }

    
    render() {
        return (
            <TouchableOpacity onPress={ this._onPressItem}>
                <View
                style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                backgroundColor: '#fff',
                height: 64,
                borderTopWidth: 1,
                borderTopColor: '#f5f5f5'
            }}>
                <Image
                    style={{
                    height: 35,
                    width: 35,
                    marginLeft: 15,
                    marginTop: 14.5
                }}
                    source={ this.props.item.icon }/>
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    flex: 1
                }}>
                    <View
                        style={{
                        flex: 1,
                        justifyContent: 'center',
                        marginLeft: 12
                    }}>
                        <View
                            style={{
                            flexDirection: 'row'
                        }}>
                            <Text
                                style={{
                                fontSize: 16,
                                color: '#333333'
                            }}>{this.props.item.title}</Text>
                            <Text
                                style={{
                                marginLeft: 6,
                                color: '#fff',
                                backgroundColor: '#CD853F'
                            }}>推荐</Text>
                        </View>
                        <Text
                            style={{
                            marginTop: 6,
                            fontSize: 12,
                            color: '#999999'
                        }}>{this.props.item.content}</Text>
                    </View>
                    <Image
                        style={{
                        height: 14,
                        width: 8,
                        marginRight: 15,
                        marginTop: 25
                    }}
                        source={require('../assets/images/gray_right_arrow.png')}/>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

export default class RepayModeView extends React.Component < DialogProps,
State > {

    static defaultProps = {
        visible: true
    }

    constructor(props : DialogProps) {
        super(props);
        this.state = {
            containerY: -screenH,
            animationType: 'fade', //none slide fade
            modalVisible: false, //模态场景是否可见
            transparent: true, //是否透明显示
            dialogAnimation: props.dialogAnimation || new SlideAnimation({animationDuration: props.animationDuration})
        };
    }

    componentDidUpdate(prevProps : DialogProps) {
        if (this.props.visible !== prevProps.visible) {
            if (this.props.visible) {
                this.show();
                return;
            }
            this.dismiss();
        }
    }

    componentWillUnmount(){
        this.clearTimer()
    }

    render() {
        let modalBackgroundStyle = {
            backgroundColor: this.state.transparent
                ? 'rgba(0, 0, 0, 0.5)'
                : 'red'
        };
        let innerContainerTransparentStyle = this.state.transparent
            ? {
                backgroundColor: '#fff',
                padding: 20
            }
            : null;

        const {dialogAnimation} = this.state;
         let data = [
             {
                icon: require('../assets/images/repay_mode_alipay.png'),
                title: '一键还款',
                content: '验证码支付安全快捷'
            },
            {
                icon: require('../assets/images/repay_mode_alipay.png'),
                title: '支付宝',
                content: '仅限有支付宝账号用户使用'
            }, {
                icon: require('../assets/images/repay_mode_weixin.png'),
                title: '支付宝',
                content: '仅限安装微信APP用户使用'
            }
        ]
        let cells = [];
        for (let i = 0; i < data.length; i++) {
            cells.push(<Cell item={data[i]}  index={i} onPressItem={(selectIndex) => { alert(selectIndex)}}/>)
        }
        return (
            <SafeAreaView>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    this._setModalVisible(false)
                }}>
                    <View
                        style={[
                        styles.container,
                        modalBackgroundStyle, {
                            marginBottom: this.state.containerY
                        }
                    ]}>
                        <View
                            style={{
                            backgroundColor: '#fff',
                            height: 93,
                            width: screenW,
                            flexDirection: 'row'
                        }}>
                            <View style={styles.topTextContainer}>
                                <Text
                                    style={{
                                    fontSize: 16,
                                    color: '#333333',
                                    textAlign: 'center'
                                }}>确认支付</Text>
                                <Text
                                    style={[
                                    styles.text, {
                                        fontSize: 30,
                                        fontWeight: 'bold',
                                        marginTop: 6
                                    }
                                ]}>￥2737.93</Text>
                            </View>

                            <TouchableOpacity
                                onPress={this._setModalVisible}
                                style={{
                                justifyContent: 'center',
                                height: 30,
                                width: 60,
                            }}>
                                <Image
                                    source={require('../assets/images/mask_close.png')}
                                    style={{
                                    marginLeft: 30,
                                    marginTop: 15
                                }}/>
                            </TouchableOpacity>
                        </View>
                        {cells}
                        <View
                            style={{
                            height: 34,
                            width: screenW,
                            backgroundColor: '#fff',
                            borderTopWidth: 1,
                            borderTopColor: '#f5f5f5'
                        }}/>

                    </View>

                </Modal>
            </SafeAreaView>

        );
    }

    show() : void {
        this.setState({modalVisible: true});
        this.timer = setTimeout(() => {
            LayoutAnimation.linear();
            this.setState({containerY: 0})
        }, 10)

    }

    _setModalVisible = () => {
        if (this.props.callback) {
            this
                .props
                .callback();
        }
    }

    dismiss() : void {
        LayoutAnimation.linear();
            this.setState({containerY: -screenH})
        this.timer = setTimeout(() => {
            this.setState({modalVisible: false});
        }, 100)
    }

    clearTimer(){
        alert('123')
        this.timer && clearTimeout(this.timer);
    }

}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        // alignItems: 'center', zIndex: 1000, elevation: 10,
    },
    view: {
        backgroundColor: '#f5f5'
    },
    topTextContainer: {
        width: screenW - 60 *2,
        height: 75,
        marginTop: 18,
        marginLeft: 60,
        // backgroundColor: '#f5f566'
    },
    text: {
        textAlign: 'center'
    }
});