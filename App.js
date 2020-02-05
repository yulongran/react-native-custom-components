import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {AvatarExample} from './example';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <AvatarExample/>
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