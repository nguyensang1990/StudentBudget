import React, { Component } from "react";
import { View, FlatList, KeyboardAvoidingView, ScrollView } from "react-native";
import { Card, FormInput, Button, CheckBox, Text, ListItem } from "react-native-elements";
import { connect } from 'react-redux';
import {
  addIncome,
  addExpense,
  getTotalIncome,
  getTotalExpense,
  deleteIncome,
  deleteExpense
} from '../actions';

import InputField from './InputField';

class Overview extends Component {
  state = { idi: 1, ide: 1, name: "", amount: '', project: [], status: 'income', visible: false, error: '' };

  onSubmit() {
    this.handleFormshake()
    const { name, amount } = this.state;
    if (name !== '' && amount !== ''){
    let idi = this.state.idi;
    let ide = this.state.ide;
    if (this.state.status === 'income') {
      this.props.addIncome({ idi, name, amount })
      idi++;
    } else if (this.state.status === 'expense') {
      this.props.addExpense({ ide, name, amount })
      ide++;
    }
    this.setState({ idi, ide, name: '', amount: '', visible: false, error: '' });
    this.props.getTotalIncome()
    this.props.getTotalExpense()
    }
  }

  handleFormshake () {
    const { name, amount } = this.state;
    if (name === '') this.setState({error: 'text'},() => this.setState({error: ''}));
    if (amount === '') this.setState({error: 'amount'},() => this.setState({error: ''}))
    if (name === '' && amount === '')this.setState({error: 'both'},() => this.setState({error: ''}))
  }

  renderItem({ item }) {
    if (item.idi) {
      return (
        <ListItem
          containerStyle={{ backgroundColor: '#88d889' }}
          title={
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.name}</Text>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.amount}</Text>
            </View>
          }
          leftIcon={{ name: 'attach-money', color: 'black', fontSize: 24 }}
          rightIcon={{ name: 'delete-forever', color: 'black', fontSize: 24, padding: 5 }}
          onPressRightIcon= {()=>{this.props.deleteIncome(item.idi); this.props.getTotalIncome()}}
        />
      );
    }
    if (item.ide) {
      return (
        <ListItem
            containerStyle={{ backgroundColor: '#d38383' }}
            title={
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.name}</Text>
              <Text style={{ fontSize: 24, color: 'black' }}>{item.amount}</Text>
            </View>
          }
            leftIcon={{ name: 'money-off', color: 'black', fontSize: 24 }}
            rightIcon={{ name: 'delete-forever', color: 'black', fontSize: 24 }}
            onPressRightIcon={() => {this.props.deleteExpense(item.ide); this.props.getTotalExpense()}}
          />
          );
        }
      }
    
  render() {
    const {income, expense, totalExpense, totalIncome } = this.props.budgetData
          return (
      <KeyboardAvoidingView
            style={{ flex: 1, flexDirection: "column" }}
            enable
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginRight: 15,
                marginLeft: 15
              }}
            >
              <FlatList
                data={income.concat(expense)}
                key={item => item.id}
                renderItem={this.renderItem.bind(this)}
                extraData={this.state.project}
              />
            </View>
            <Button
              backgroundColor='#5d9cd3'
              title="Add"
              onPress={() => this.setState({ visible: true })}
            />

            <Card
              title="Total"
              containerStyle={{ marginBottom: 10 }}
            >
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text h4>Income</Text>
                  <Text h4>{totalIncome}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text h4>Expense</Text>
                  <Text h4>{totalExpense}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text h4>Remain</Text>
                  <Text h4>{totalIncome - totalExpense}</Text>
                </View>
              </View>
            </Card>
            <InputField
              visible={this.state.visible}
              outPress={() => this.setState({ visible: false })}
              inputChangeName={(name) => this.setState({ name })}
              inputChangeAmount={(amount) => this.setState({ amount })}
              onSubmit={this.onSubmit.bind(this)}
              status={this.state.status}
              imcomePress={() => this.setState({ status: 'income' })}
              expensePress={() => this.setState({ status: 'expense' })}
              error ={this.state.error}
              budget={true}
            />
          </KeyboardAvoidingView>
          );
        }
      }
      
const mapStateToProps = (state) => {
  return {
            budgetData: state.budgetData
        }
      }
      
      export default connect(mapStateToProps,
  {
            addIncome,
          addExpense,
          getTotalIncome,
          getTotalExpense,
          deleteIncome,
          deleteExpense
        })(Overview);
