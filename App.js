import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {TextExample} from './example';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <TextExample/>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#EAEAEA',
  }
})

export default App;