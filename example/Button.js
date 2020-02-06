import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

class ButtonExample extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <View style={styles.exampleBlock}>
              <Text>Avatar with default width and height</Text>
              <Button gradient={["red","green"]}>
                <Text style={{color:'white'}}>Hello World</Text>
              </Button>
          </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent:'space-evenly',
  },
  exampleBlock:{
    alignItems:'center',
  },
})

export default ButtonExample;