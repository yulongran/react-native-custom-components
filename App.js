import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Avatar, SearchBar } from './components';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <SearchBar 
            shadow 
            round={10} 
            onChangeText={()=>{}}></SearchBar>
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