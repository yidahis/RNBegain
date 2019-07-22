import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class AnimationDemosScreen extends React.Component {
    state = {
        w: 100,
        h: 100,
        y: 500
    };

    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({
            w: this.state.w + 15,
            h: this.state.h + 15,
            y: this.state.y - 500
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={[
                    styles.box, {
                        width: this.state.w,
                        height: this.state.h,
                        marginTop: this.state.y
                    }
                ]}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});