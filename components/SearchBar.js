import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

class SearchBar extends PureComponent {
    render() {
        const {
            leftComponent,
            rightComponent,
            containerStyle,
            onChangeText,
            placeholder,
            textInputStyle,
            shadow,
            round,
        } = this.props;

        const inputContainerStyle = [
            styles.inputContainer,
            shadow && styles.shadow,
            round && { borderRadius: round },
            containerStyle,
        ];

        const inputStyle = [
            styles.textInput,
            textInputStyle,
        ];

        return (
            <View style={inputContainerStyle}>
                <View>
                    {leftComponent || null}
                </View>
                <TextInput style={inputStyle} placeholder={"" || placeholder} onChangeText={onChangeText} />
                <View>
                    {rightComponent || <Icon name="search" size={16} color={"black"} />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: width * 0.85,
        borderColor: '#000000',
        borderWidth: 1,
    },
    textInput: {
        height: 35,
        width: width * 0.7,
        fontSize: 16,
        color: "black",
    },
    shadow: {
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
});


SearchBar.propTypes = {
    leftComponent: PropTypes.object,
    rightComponent: PropTypes.object,
    containerStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    textInputStyle: PropTypes.object,
    shadow: PropTypes.bool,
    round: PropTypes.number,
};


export default SearchBar;