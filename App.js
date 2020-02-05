import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Avatar } from './components';
class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
         <Avatar image={require("./assets/images/tiny_logo.png")}/>
         <Avatar image={require("./assets/images/tiny_logo.png")} width={200} height={200}/>
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