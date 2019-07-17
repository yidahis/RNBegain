import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

class VerticalText extends React.Component {
    render() {
        return (
            <View style={CellStyles.con}>
                <Text
                    style={[
                    CellStyles.text, CellStyles.textAlign(this.props.textAlign),
                    CellStyles.textColor(this.props.textColor)
                ]}>{this.props.content}</Text>
            </View>
        );
    };
}

class Cell extends React.Component {
    render() {
        return (
            <View style={CellStyles.cell}>
                <TouchableHighlight >
                    <View style={CellStyles.repayPlanCell}>
                        <VerticalText content={this.props.leftText} textColor='#666666'></VerticalText>
                        <VerticalText content={this.props.rightText} textAlign='right'></VerticalText>
                        <Image
                            style={CellStyles.repayPlanCellRightArrow}
                            source={require('../assets/images/gray_right_arrow.png')}></Image>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const CellStyles = {
    con: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#123456'
    },
    cell: {
        //   flex: 1,
        height: 28,
        //   width:50,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    repayPlanCell: {
        height: 20,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF'
    },
    repayPlanCellRightArrow: {
        //   justifyContent:'center',
        marginTop: 2,
        marginLeft: 4,
        width: 7,
        height: 14
    },
    text: {
        fontSize: 14,
        backgroundColor: '#fff',
        // textAlign: 'right', 不写下面两个，Android系统上文字会偏下
        includeFontPadding: false,
        textAlignVertical: 'center'
    },
    textAlign(arg) {
        let algin = 'left';
        if (arg) {
            algin = arg;
        }
        return {textAlign: algin};
    },
    textColor(arg) {
        let color = '#333333';
        if (arg) {
            color = arg;
        }
        return {color: color};
    }
};

export default class RepayCenterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '100.00'
        };
    }

    static navigationOptions = {
        title: '还款',
        tabBarVisible: false
    };

    render() {
        return (
            <SafeAreaView
                style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <ScrollView contentInsetAdjustmentBehavior="never">
                    <View
                        style={{
                        backgroundColor: '#fff',
                        flex: 1
                    }}>
                        <View
                            style={{
                            backgroundColor: '#fff',
                            paddingLeft: 15,
                            paddingRight: 15
                        }}>
                            <Text
                                style={{
                                paddingTop: 16,
                                color: '#666666'
                            }}>本次还款(元)</Text>
                            <TextInput
                                style={{
                                height: 41,
                                borderBottomWidth: 1,
                                borderBottomColor: '#E6E9EB',
                                color: '#333333',
                                fontWeight: 'bold',
                                fontSize: 30
                            }}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}/>
                            <Text
                                style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginTop: 28,
                                height: 22,
                                color: '#333333'
                            }}>待还详情</Text>

                            <View >
                                <Cell leftText='还款计划(偿还2期)' rightText='2313.23元'/>
                                <Cell leftText='部分还款' rightText='-200.23元'/>
                                <Cell leftText='逾期费用' rightText='+46.2元'/>
                                <View
                                    style={{
                                    backgroundColor: '#fff',
                                    height: 23
                                }}/>
                            </View>

                            {/* <Button onPress={() => this.props.navigation.push('RepayCenter')} title='点我' style={{marginTop: 140}}/> */}

                        </View>
                        <View
                            style={{
                            backgroundColor: '#e6e6e6',
                            height: 8
                        }}/>
                        <View
                            style={{
                            backgroundColor: '#fff',
                            marginLeft: 15
                        }}>
                            <Text
                                style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginTop: 16,
                                height: 22,
                                color: '#333333'
                            }}>优惠券详情</Text>
                            <Cell leftText='还款现金券' rightText='-5元'/>
                            <Cell leftText='借款免息券(每期结清生效)' rightText='-13.5元'/>
                        </View>
                        <View
                            style={{
                            backgroundColor: '#e6e6e6',
                            justifyContent: 'flex-end',
                            flex: 1
                        }}></View>
                    </View>
                </ScrollView>
                <View
                    style={{
                    backgroundColor: '#e6e6e6',
                    justifyContent: 'flex-start',
                    height: 180
                }}>
                    <TouchableHighlight>
                        <View style={styles.bottomCallButton}>
                            <Text style={styles.bottomCallText}>还款咨询电话10108818</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.bottomButton}>
                            <Text style={styles.bottomText}>确认还款2700.00元</Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    bottomButton: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        height: 44,
        backgroundColor: '#04BF76',
        borderRadius: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bottomText: {
        color: '#fff',
        fontSize: 18,
        includeFontPadding: false,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    bottomCallButton: {
        alignItems: 'center',
        height: 30,
        borderColor: 'gray',
    },
    bottomCallText: {
        color: 'gray',
        fontSize: 12,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
});
