import React, {Component} from 'react';
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
import RepayModeView from '../Demos/RepayModeView'

class SectionHeader extends React.Component {
    render() {

        return (
            <View style={SectionHeaderStyles.con}>
                <Text style={SectionHeaderStyles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

class SectionFooter extends React.Component {
    render() {
        return (<View
            style={{
            backgroundColor: '#fff',
            height: 20
        }}/>);
    }
}

const SectionHeaderStyles = {
    con: {
        flex: 1,
        marginTop: 19,
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        //不写下面两个，Android系统上文字会偏下
        includeFontPadding: false,
        textAlignVertical: 'center',
        fontWeight: 'bold',

        color: '#333333'
    }
};

class RowText extends React.Component {
    render() {
        let questionImg = null;
        if (this.props.hasQuestion) {
            questionImg = <Image
                style={CellStyles.repayPlanCellLeftImage}
                source={require('../assets/images/repay_btn_explain.png')}/>;
        }
        return (
            <View
                style={[
                CellStyles.con, CellStyles.conJustifyContent(this.props.isRight)
            ]}>
                <Text
                    style={[
                    CellStyles.text, CellStyles.textColor(this.props.textColor)
                ]}>{this.props.content}</Text>

                {questionImg}
            </View>

        );
    };
}

class Cell extends React.Component {

    render() {
        let img = null;
        if (this.props.hasArr) {
            img = <Image
                style={CellStyles.repayPlanCellRightArrow}
                source={require('../assets/images/gray_right_arrow.png')}/>;
        }

        return (
            <View style={CellStyles.cell}>
                <TouchableHighlight >
                    <View style={CellStyles.repayPlanCell}>
                        <RowText
                            content={this.props.leftText}
                            textColor='#666666'
                            hasQuestion={this.props.hasQuestion}/>

                        <RowText content={this.props.rightText} isRight='true'/> 
                        
                        {img}

                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const CellStyles = {
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    con: {
        flex: 1,
        flexDirection: 'row'
    },
    conJustifyContent(arg) {
        let justifyContent = 'flex-start';
        if (arg) {
            justifyContent = 'flex-end';
        }
        return {justifyContent: justifyContent};
    },
    cell: {
        marginTop: 4,
        height: 24,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    repayPlanCell: {
        height: 20,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    repayPlanCellRightArrow: {
        marginTop: 2,
        marginLeft: 4,
        width: 7,
        height: 14
    },
    repayPlanCellLeftImage: {},
    text: {
        fontSize: 14,
        backgroundColor: '#fff',
        // 不写下面两个，Android系统上文字会偏下
        includeFontPadding: false,
        textAlignVertical: 'center'
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

    //还款方式
    state = {
        repayModeVisible: false,
        text: '100.00'
    };

    constructor(props) {
        super(props)
        // this.closeRepayMode=this.props.closeRepayMode.bind(this)
        this.setState = this
            .setState
            .bind(this)
    }

    static navigationOptions = {
        title: '还款',
        tabBarVisible: false
    };

    componentDidUpdate(prevProps) {
       
    }

    render() {
        return (
            <SafeAreaView
                style={{
                flex: 1,
                backgroundColor: '#f5f5f5'
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

                            <SectionHeader title='待还详情'/>

                            <View >
                                <Cell leftText='还款计划(偿还2期)' rightText='2313.23元' hasArr='true'/>
                                <Cell leftText='部分还款' rightText='-200.23元'/>
                                <Cell leftText='逾期费用' rightText='+46.2元' hasQuestion='true'/>
                                <SectionFooter/>
                            </View>

                            {/* <Button onPress={() => this.props.navigation.push('RepayCenter')} title='点我' style={{marginTop: 140}}/> */}

                        </View>
                        <View
                            style={{
                            backgroundColor: '#f5f5f5',
                            height: 8
                        }}/>
                        <View
                            style={{
                            backgroundColor: '#fff',
                            marginLeft: 15,
                            marginRight: 15
                        }}>
                            <SectionHeader title='优惠券详情'/>
                            <Cell leftText='还款现金券' rightText='-5元' hasArr='true'/>
                            <Cell leftText='借款免息券(每期结清生效)' rightText='-13.5元'/>
                            <SectionFooter/>
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
                    backgroundColor: '#f5f5f5',
                    justifyContent: 'flex-start',
                    height: 100
                }}>
                    <TouchableHighlight>
                        <View style={styles.bottomCallButtonContainer}>
                            <Image
                                source={require('../assets/images/repay_call_center.png')}
                                style={styles.bottomCallButtonImage}/>
                            <View style={styles.bottomCallButton}>
                                <Text style={styles.bottomCallText}>还款咨询电话10108818</Text>
                            </View>
                        </View>

                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                        this.setState({repayModeVisible: true})
                    }}
                        underlayColor='#f5f5f5'>
                        <View style={styles.bottomButton}>
                            <Text style={styles.bottomText}>确认还款2700.00元</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <RepayModeView
                    visible={this.state.repayModeVisible}
                    callback={() => {
                    this.setState({repayModeVisible: false})
                }}
                    selectCallBack={(selectIndex) => {
                
                        this.props.navigation.push('OneKeyRepay');
                    }}
                />
            </SafeAreaView>

        );
    }

    closeRepayMode() {
        // alert(12313)
        this.setState({repayModeVisible: false})
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
    bottomCallButtonContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#E6E6E6E6',
        borderWidth: 1,
        marginBottom: 15
    },
    bottomCallButtonImage: {
        marginLeft: 15,
        marginTop: 7
    },
    bottomCallButton: {
        alignSelf: 'center',
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    bottomCallText: {
        marginLeft: 8,
        marginRight: 15,
        color: 'gray',
        fontSize: 12,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
});
