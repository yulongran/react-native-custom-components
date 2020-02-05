import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Avatar} from '../components';

class AvatarExample extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
          <View style={styles.exampleBlock}>
              <Text>Avatar with default width and height</Text>
              <Avatar image={require("../assets/images/child-1837375_960_720.png")}/>
          </View>
          <View style={styles.exampleBlock}>
              <Text>Avatar with specific width and height</Text>
              <Avatar image={require("../assets/images/child-1837375_960_720.png")} width={200} height={200}/>
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

export default AvatarExample;