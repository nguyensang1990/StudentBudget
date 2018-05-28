import React, { Component } from 'react';
import { Header } from 'react-native-elements';

class AppHeader extends Component {
  render () {
    return (
      <Header
        centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 24, fontWeight: 'bold' } }}
      />
    );
  }
}

export default AppHeader;
