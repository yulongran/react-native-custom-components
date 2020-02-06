import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      color,
      shadow,
      children,
      disabled,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && !styles[color] && { backgroundColor: color },
      style
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          disabled={disabled || false}
          activeOpacity={opacity}
          {...props}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.9]}
            style={buttonStyles}
            colors={gradient}
          >
            {children}
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        disabled={disabled || false}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: 'center',
    marginVertical: 10,
  },
  shadow: {
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
});


Button.propTypes = {
  style: PropTypes.object,
  opacity: PropTypes.number,
  gradient: PropTypes.array,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.array,
  disabled: PropTypes.bool,
};