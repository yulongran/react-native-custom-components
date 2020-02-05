import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {SearchBarExample} from './example';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <SearchBarExample/>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default App;