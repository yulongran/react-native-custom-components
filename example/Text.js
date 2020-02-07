import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import { Text } from '../components';

class TextExample extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.App}>
                <View style={styles.exampleBlock}>
                    <Text h1 transform="uppercase">h1 text</Text>
                    <Text h2 transform="uppercase">h2 text</Text>
                    <Text h3 transform="uppercase">h3 text</Text>
                    <Text spacing={10} h1>Letter Spacing</Text>
                    <Text bold h2>Bold Text</Text>
                    <Text light h2>light Text</Text>
                    <Text color="blue" h2>Color Text</Text>
                    <Text h2 family="AvenirNext-BoldItalic">Family Text</Text>
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
        flex: 1,
        alignItems: 'center',
    },
})

export default TextExample;