import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SearchBar } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SearchBarExample extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.App}>
                <View>
                    <Text>Simple SearchBar</Text>
                    <SearchBar onChangeText={() => { }} placeholder="Hello World"/>
                </View>
                <View>
                    <Text>SearchBar with shadow and round border</Text>
                    <SearchBar
                        shadow
                        round={10}
                        onChangeText={() => { }} />
                </View>
                <View>
                    <Text>SearchBar with custom container style</Text>
                    <SearchBar
                        shadow
                        round={10}
                        containerStyle={{borderWidth:1, borderColor:'red'}}
                        onChangeText={() => { }} />
                </View>
                <View>
                    <Text>SearchBar with custom textInput style</Text>
                    <SearchBar
                        shadow
                        round={10}
                        textInputStyle={{color:'red'}}
                        onChangeText={() => { }} />
                </View>
                
                <View>
                    <Text>SearchBar with custom left component</Text>
                    <SearchBar
                        shadow
                        round={10}
                        leftComponent={<Icon name="star" size={16} color={"black"} />}
                        onChangeText={() => { }} />
                </View>
                <View>
                    <Text>SearchBar with custom right component</Text>
                    <SearchBar
                        shadow
                        round={10}
                        rightComponent={<Icon name="star" size={16} color={"black"} />}
                        onChangeText={() => { }} />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'space-evenly',
    }
})

export default SearchBarExample;