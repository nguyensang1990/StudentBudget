import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Overview from './components/Overview';
import AppHeader from './components/AppHeader';
import BuyingList from './components/BuyingList';
/*
const Tab = createBottomTabNavigator({
  BuyingList: {
    screen: BuyingList,
    navigationOptions: {
      title: 'Buying List',
      tabBarLabel: 'Buying List',
      tabBarIcon: ({ tintColor }) => <Icon name='shopping-cart' size={20} color={tintColor} />
    }
  },
  Overview: {
    screen: Overview,
    navigationOptions: {
      title: 'Budget Overview',
      tabBarLabel: 'Overview',
      header: <AppHeader />,
      tabBarIcon: ({ tintColor }) => <Icon name='home' size={20} color={tintColor} />
    }
  }
});

const Stack = createStackNavigator(
  {
    Home: {
      screen: Tab,
      navigationOptions: (screen) => ({

      })
    }
  }
);

export default Stack;
*/

// let OverviewStack = createStackNavigator({
//   OverView: {
//     screen: Overview,
//     navigationOptions: {
//       header: <AppHeader title='Budget Overview' />,
//       title: 'Budget Overview',
//       tabBarLabel: 'Overview',
//       tabBarIcon: ({ tintColor }) => <Icon name='home' size={20} color={tintColor} />
//     }
//   }
// });

let OverviewStack = createStackNavigator({ Overview }, {
  navigationOptions: {header: <AppHeader title='Budget Overview' />}
});

OverviewStack.navigationOptions = {
  title: 'Budget Overview',
  tabBarLabel: 'Overview',
  tabBarIcon: ({ tintColor }) => <Icon name='home' size={20} color={tintColor} />
};

let BuyingListStack = createStackNavigator({ BuyingList }, {
  navigationOptions: {header: <AppHeader title='Buying List' />}
});
BuyingListStack.navigationOptions = {
  title: 'Buying List',
  tabBarLabel: 'Buying List',
  tabBarIcon: ({ tintColor }) => <Icon name='shopping-cart' size={20} color={tintColor} />
};

export default createBottomTabNavigator({
  OverviewStack,
  BuyingListStack
});
