import React from 'react';
import { ScrollView, StyleSheet,View,Text,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";

class RepayComponet extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button 
            title="Navigate to Details"
            onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'} }>
                <Text>Details Screen</Text>
                <Button title="GO back"
                        onPress={() => this.props.navigation.goBack()}
                />
                <Button title='Push to Details again'
                        onPress={() => this.props.navigation.push('Details')} />
                <Button title='Navigate to Home'
                        onPress={() => this.props.navigation.navigate('Home')} />
                <Button title='Navigate to More Details'
                        onPress={() => this.props.navigation.navigate('MoreDetails')} />
                <Button title='push to more Details'
                        onPress={() => this.props.navigation.push('MoreDetails')} />
            </View>
        );
    }
}

class MoreDetailsScreen extends React.Component{
  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text >More Detail Screen</Text>
        <Button title='Go to Back'
                onPress={() => this.props.navigation.goBack()} />
        <Button title='Navigate to Home'
                onPress={() => this.props.navigation.navigate('Home')} />
        <Button title='Push to Details again'
                onPress={() => this.props.navigation.push('Details')} />
        <Button title='Navigate to Details '
                onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}

RepayComponet.navigationOptions = {
  title: 'RepayComponet',
};

DetailsScreen.navigationOptions = {
  title: 'DetailsScreen',
};

MoreDetailsScreen.navigationOptions = {
  title: 'MoreDetailsScreen',
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: RepayComponet
  },
  Details: {
      screen: DetailsScreen
  },
  MoreDetails:{
    screen: MoreDetailsScreen
  },
  
},{
    initialRouteName: 'Home',
}
);

export default createAppContainer(AppNavigator)

