import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default class Test extends Component {
    error( text:Array< string | number > ){
        console.log(text.push())
    }

    render() {
        return(
            <View>            
                <TouchableOpacity onPress={ ()=>this.error('asdas') } style={{ marginTop:100 }} >
                    <Text>Open up App.tsx to start working on your app!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}