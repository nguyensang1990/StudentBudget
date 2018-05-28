import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Card, FormInput, Button, CheckBox, Text, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { addToList, checkAsDone, deleteItem, putItBack } from '../actions';
import InputField from './InputField';

class BuyingList extends Component {
  
  state = { item: '', id: 1, visible: false };

  pushToList  = () => {
    if (this.state.item !== ''){
      let {id, item} = this.state
      const buyItem = {
        id,
        name: item
      }
      this.props.addToList(buyItem);
      id++;
      this.setState({item: '', id, visible: false})
    }
  }


  renderItemChecked({item}) {
    return (
      <ListItem
          containerStyle={{ backgroundColor: '#d38383' }}
          title={
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.name}</Text>
            </View>
          }
          leftIcon={{ name: 'delete', color: 'black', fontSize: 24, padding: 5 }}
          leftIconOnPress = {() => this.props.deleteItem(item.id)}
          rightIcon={{ name: 'check-box', color: 'black', fontSize: 24, padding: 5 }}
          onPressRightIcon= {()=>{this.props.putItBack(item.id)}}
        />
    )
  }
  renderItem({item}) {
    return (
      <ListItem
          containerStyle={{ backgroundColor: '#88d889' }}
          title={
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.name}</Text>
            </View>
          }
          rightIcon={{ name: 'check-box-outline-blank', color: 'black', fontSize: 24, padding: 5 }}
          onPressRightIcon = {() => this.props.checkAsDone(item.id)}
        />
    )
  }

  render () {
    return (
      <View style={{height: '100%'}}>
      <ScrollView style={{flex: 1, flexDirection: "column", flexGrow: 1, paddingLeft: 15, paddingRight: 15}}>
        <FlatList
          data={this.props.buyingData.list}
          key={item => item.id}
          renderItem={this.renderItem.bind(this)}
        />

        <FlatList
          data={this.props.buyingData.chekedList}
          key={item => item.id}
          renderItem={this.renderItemChecked.bind(this)}
          extraData={this.state}
        />
      </ScrollView>
        <Button
          title='Add something..'
          backgroundColor="#5d9cd3"
          onPress={() => this.setState({visible: true})}
        />
        <InputField
          onSubmit={this.pushToList}
          outPress={() => this.setState({visible: false})}
          budget={false}
          visible={this.state.visible}
          name={this.state.item}
          inputChangeName={(item) => this.setState({item})}
        />
      
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  buyingData: state.buyingListData
});

export default connect(mapStateToProps, {addToList, checkAsDone, deleteItem, putItBack})(BuyingList);
