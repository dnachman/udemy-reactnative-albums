import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumList extends Component {
  
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json()
        .then(responseJson => {
          console.log(responseJson);
        })
      );
  }

  render() {
    return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

export default AlbumList;
