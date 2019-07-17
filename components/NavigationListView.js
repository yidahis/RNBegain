import React from 'react'
import { PureComponent,View,FlatList, SectionList, Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { printAsync } from 'expo-print';


class MyListItem extends React.PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id);
      };
    
      render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
          <TouchableOpacity onPress={this._onPress}>
            <View>
              <Text style={styles.item}>
                {this.props.title}
              </Text>
              <View style={{backgroundColor: 'rgba(255,255,255,1.0)', height: 0.5}}/>
            </View>
            
          </TouchableOpacity>
        );
      }
};

export class MyExpoLinksScreen extends React.PureComponent{


  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;
  
  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      this.handleGreet(id);
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      style={styles.item}
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
        <View style={styles.container}>
        <SectionList
            sections={this.props.datas}
            renderItem={this._renderItem}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

  handleGreet(id){
    if(this.props.callback){
      this.props.callback(id);
   }
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(255,255,255,1.0)',
    },
    item: {
      paddingLeft: 10,
      paddingVertical: 15,
      fontSize: 14,
      height: 44,
      alignContent: 'center',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
  })


