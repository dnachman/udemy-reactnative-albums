// import libraries
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
  const { testStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={testStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  testStyle: {
    fontSize: 20
  }
};

// make component available to other parts of the app
export default Header;
