import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

interface props {}

interface state {
    text: string
}

export default class TextInputLesson extends Component< props, state > {
    
    constructor( props ) {
        
        super( props )
        
        this.state = {
            text: ''
        }
    }
    
    render() {
        return (
            <View style={{ padding: 10}}>
                
                <TextInput 
                    style = {{ fontSize: 42, marginTop: 30, }}
                    placeholder = "Escreve ai parça"
                    onChangeText = { ( text ) => this.setState({ text: text }) }
                />

                <Text style={{ padding: 10, fontSize: 42 }}>
                    { this.state.text.split(' ').map( ( word ) => word && '🍕').join(' ') }
                </Text>
            
            </View>
        )    
    }
}