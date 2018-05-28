import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { FormInput, Button, CheckBox } from 'react-native-elements';

const InputField = ({
  visible,
  onSubmit,
  outPress,
  imcomePress,
  expensePress,
  status,
  name,
  amount,
  inputChangeName,
  inputChangeAmount,
  error,
  budget
}) => {
  return (
    <Modal
      animation='fade'
      visible={visible}
      transparent
    >
      <TouchableOpacity
        activeOpacity={1}
        style={{
          backgroundColor: 'rgba(85, 104, 135, 0.77)',
          flex: 1,
          transparent: 0.8,
          flexDirection: 'column',
          justifyContent: 'space-around'

        }}
        onPressOut={outPress}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: 'rgba(136, 191, 224, 0.9)',
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <View>
            <FormInput
              autoFocus
              textInputRef='incomeRef'
              returnKeyType='next'
              value={name}
              shake={error === 'text' | error === 'both'}
              placeholder={(!budget) ? 'What to buy' : (status === 'income') ? 'What is your income?' : 'What is your expense?'}
              onChangeText={name => inputChangeName(name)}
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              blurOnSubmit={false}
            />
            { budget && (
              <View>
                <FormInput
                  value={amount}
                  shake={error === 'amount' || error === 'both'}
                  keyboardType='numeric'
                  placeholder='How much you get from it?'
                  onChangeText={amount => inputChangeAmount(amount)}
                  ref={(input) => { this.secondTextInput = input; }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 15,
                    marginRight: 15
                  }}
                >
                  <CheckBox
                    containerStyle={{ flexBasis: '45%', flexGrow: 1, marginLeft: 0, backgroundColor: '#5d9cd3', borderWidth: 0 }}
                    center
                    title='Income'
                    uncheckedIcon='circle-o'
                    checkedIcon='dot-circle-o'
                    checked={status === 'income'}
                    onPress={imcomePress}
                  />
                  <CheckBox
                    containerStyle={{ flexBasis: '45%', flexGrow: 1, marginRight: 0, backgroundColor: '#5d9cd3', borderWidth: 0 }}
                    center
                    title='Expense'
                    uncheckedIcon='circle-o'
                    checkedIcon='dot-circle-o'
                    checked={status === 'expense'}
                    onPress={expensePress}
                  />
                </View>
              </View>
            )}
            <Button
              backgroundColor='#5d9cd3'
              title='Add'
              onPress={onSubmit}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal >
  );
};

export default InputField;
