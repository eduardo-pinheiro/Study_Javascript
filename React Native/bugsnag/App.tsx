import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import bugsnag from '@bugsnag/expo'
import Test from './Test'

//Assim caso a Key não esteja setada no app.json
//const bugsnagClient = bugsnag('126ba6446fad6a6245233882978fa46f')

const bugsnagClient = bugsnag()
const ErrorBoundary = bugsnagClient.getPlugin('react')


export default () =>
  <ErrorBoundary FallbackComponent={ ErrorView }>
    <App />
  </ErrorBoundary>

function App() { 
  return (
    <Test />
  );
}

class ErrorView extends React.Component {
  render() {
    return(
      <View>
        <Text>Errrooou</Text>
      </View>
    )
  }
}