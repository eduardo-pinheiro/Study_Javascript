import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListLesson extends Component {

  constructor( props ) {
    
    super( props )

    this.state = {
      items: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Gavin'},
        {key: 'Jacson'},
        {key: 'Jame'},
        {key: 'Joely'},
        {key: 'Johny'},
        {key: 'Jilian'},
        {key: 'Jimi'},
        {key: 'Juli'},
        {key: 'Devan'},
        {key: 'Marcos'},
        {key: 'Jam'},
        {key: 'Tina'},
        {key: 'Lucia'},
        {key: 'Julia'},
        {key: 'Carlos'},
        {key: 'Miguel'},
      ]  
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
