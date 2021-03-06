import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

interface props {}

interface state {
  items: Array< { title: string, data: string[] } >
}

export default class SectionListBasics extends Component< props, state> {
  
  constructor( props ) {
    
    super( props )

    this.state = {
      items: [
        {title: 'D', data: ['Devin']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections = { this.state.items }
          renderItem={ ({ item }) => <Text style={ styles.item }>{ item }</Text> }
          renderSectionHeader={ ({ section }) => <Text style={ styles.sectionHeader }>{ section.title }</Text>}
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
