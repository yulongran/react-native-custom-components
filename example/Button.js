import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

class ButtonExample extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.App}>
        <View style={styles.exampleBlock}>
          <Text>Default Button</Text>
          <Button>
            <Text style={{ color: "white" }}>Hello World</Text>
          </Button>
        </View>
        <View style={styles.exampleBlock}>
          <Text>Outlined Button</Text>
          <Button outlined>
            <Text style={{ color: "blue" }}>Hello World</Text>
          </Button>
        </View>
        <View style={styles.exampleBlock}>
          <Text>Round Button with icon</Text>
          <Button outlined round={30}>
            <View style={{flexDirection:'row'}}>
              <Icon name="star" size={16} color={"blue"} />
              <Text style={{ color: "blue" }}>Hello World</Text>
            </View>
          </Button>
        </View>
        <View style={styles.exampleBlock}>
          <Text>Gradient Button</Text>
          <Button gradient={["#DE6262", "#FFB88C"]}>
            <Text style={{ color: "white" }}>Hello World</Text>
          </Button>
        </View>
        <View style={styles.exampleBlock}>
          <Text>Shadow Button</Text>
          <Button shadow>
            <Text style={{ color: "white" }}>Hello World</Text>
          </Button>
        </View>
        <View style={styles.exampleBlock}>
          <Text>Sample Button</Text>
          <Button round={30} shadow gradient={["#11998e", "#38ef7d"]} color={"#38ef7d"}>
            <Text style={{ color: "white", fontWeight: '900' }}>Hello World</Text>
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  exampleBlock: {
    alignItems: 'center',
  },
})

export default ButtonExample;