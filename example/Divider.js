import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Divider } from '../components';

class DividerExample extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.App}>
                <View style={styles.exampleBlock}>
                    <Text>Default</Text>
                    <Divider />
                </View>
                <View style={styles.exampleBlock}>
                    <Text>Divider with margin</Text>
                    <Divider margin={20} />
                </View>
                <View style={styles.exampleBlock}>
                    <Text>Divider with color</Text>
                    <Divider color="purple" />
                    <Divider color="red" />
                </View>
                <View style={styles.exampleBlock}>
                    <Text>Divider with specific width and height</Text>
                    <Divider height={1} width={400} />
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

export default DividerExample;