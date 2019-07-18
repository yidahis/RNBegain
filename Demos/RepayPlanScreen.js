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
    SectionList
} from 'react-native';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {

        return (
            <View style={HeaderStyles.con}>
                <Text style={HeaderStyles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const HeaderStyles = {
    con: {
        // flex: 1,
        backgroundColor: '#fff',
        height: 30,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: 13,
        //不写下面两个，Android系统上文字会偏下
        includeFontPadding: false,
        textAlignVertical: 'center',
        marginLeft: 15,
        color: '#333333'
    }
};

class SectionHeader extends React.Component {
    render() {
        return (
            <View style={SectionHeaderStyles.row}>
                <View style={SectionHeaderStyles.con}>
                    <Text style={SectionHeaderStyles.text}>分期详情(已选2期)</Text>
                </View>
                <View style={SectionHeaderStyles.con}>
                    <View style={SectionHeaderStyles.rightContainer}>
                        <Text style={SectionHeaderStyles.text}>还款计划</Text>
                    </View>
                </View>
                <Image
                    source={require('../assets/images/repay_btn_explain.png')}
                    style={SectionHeaderStyles.rightImage}/>
            </View>
        );
    }
}

const SectionHeaderStyles = {
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    con: {
        flex: 1,
        backgroundColor: '#fff',
        height: 36,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 3
    },
    rightImage: {
        marginRight: 15,
        alignSelf: 'center'
    },
    text: {
        fontSize: 13,
        //不写下面两个，Android系统上文字会偏下
        includeFontPadding: false,
        textAlignVertical: 'center',
        marginLeft: 15,
        color: '#333333'
    }
};

class Cell extends React.Component {
    render() {
        return (
            <View style={cellStyles.container}>
                <Image
                    source={require('../assets/images/repay_selectionbox_icon_selection.png')}
                    style={cellStyles.rightImage}/>
                <View style={cellStyles.rightCon}>
                    <View style={cellStyles.rightSubRow}>
                        <Text
                            style={{
                            fontSize: 14,
                            height: 17,
                            color: '#333333'
                        }}>{this.props.index}/3期</Text>
                        <Text
                            style={{
                            fontSize: 12,
                            height: 15.5,
                            color: '#ff4800'
                        }}>(已逾期1天)</Text>
                    </View>
                    <Text
                        style={{
                        fontSize: 12,
                        height: 17,
                        color: '#999999',
                        marginTop: 5
                    }}>3月11日待还</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginRight: 15,
                }}>
                    <Text style={{textAlign: 'right', color: '#333333', fontSize: 14}}>￥1982.56</Text>
                </View>

            </View>
        );
    }
}

const cellStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 55,
        flexDirection: 'row',
        marginTop: 1
    },
    rightCon: {
        marginLeft: 8,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    rightSubRow: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    rightImage: {
        marginLeft: 15,
        alignSelf: 'center'
    }
});

class BottomView extends React.Component {
    render() {
        return (
            <View style={bottomViewStyles.container}>
                <View style={bottomViewStyles.containerLeft}>
                    <View style={bottomViewStyles.containerLeftSelect}>
                        <Image
                            source={require('../assets/images/repay_selectionbox_icon_unselected.png')}
                            style={bottomViewStyles.containerLeftSelectImage}/>
                        <View style={bottomViewStyles.containerLeftSelectTextContainer}>
                            <Text style={bottomViewStyles.containerLeftSelectText}>全选</Text>
                        </View>
                    </View>

                    <View style={bottomViewStyles.containerLeftRightContainer}>
                        <Text style={bottomViewStyles.containerLeftRightText}>￥2682.25</Text>
                    </View>

                </View>
                <View style={bottomViewStyles.rightButtonContainer}>
                    <Button title='确定' color="#fff" style={bottomViewStyles.rightButton}/>
                </View>

            </View>
        );
    }
}

const bottomViewStyles = StyleSheet.create({
    container: {
        borderTopColor: '#e6e6e6',
        borderTopWidth: 0.5,
        height: 46,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    containerLeft: {
        flex: 6,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    containerLeftSelect: {
        flexDirection: 'row',
        marginLeft: 15
    },
    containerLeftSelectImage: {
        alignSelf: 'center'
    },
    containerLeftSelectTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 8
    },
    containerLeftSelectText: {
        includeFontPadding: false,
        textAlignVertical: 'center',
        color: '#999999'
    },
    containerLeftRightContainer: {
        flex: 1,
        marginRight: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 8
    },
    containerLeftRightText:{
        includeFontPadding: false,
        textAlign: 'right',
        textAlignVertical: 'center',
        color: '#04BF76',
        fontSize: 18,
    },
    rightButtonContainer: {
        flex: 4,
        backgroundColor: '#04BF76',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightButton: {}
});

export default class RepayPlanScreen extends React.Component {
    static navigationOptions = {
        title: '还款计划',
        tabBarVisible: false
    };
    render() {
        return (
            <SafeAreaView
                style={{
                flex: 1,
                backgroundColor: '#f5f5f5'
            }}>
                <Header title='2019年2月11日 借款5000元(3期)'/>
                <SectionList
                    style={styles.list}
                    renderItem={({item, index, section}) => <Cell index={index}/>}
                    renderSectionHeader={({section: {
                        title
                    }}) => (<SectionHeader/>)}
                    sections={[{
                        title: "Title1",
                        data: ["item1", "item2", "item3"]
                    }
                ]}
                    keyExtractor={(item, index) => item + index}/>
                <BottomView/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 8
    },
    sectionHeader: {
        height: 44,
        backgroundColor: '#fff'
    }

});