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
      outlined,
      color,
      round,
      shadow,
      children,
      disabled,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      round && {borderRadius: round},
      // If color is apply, default shadowColor is blue
      shadow && {...styles.shadow, shadowColor: color || "blue"},
      color && { backgroundColor: color },
      style
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          disabled={disabled || false}
          activeOpacity={opacity || 0.6}
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
    else if (outlined) {
      return (
        <TouchableOpacity
          // If color is not supplied, default outlined has white border
          style={[buttonStyles, styles.outlined, { borderColor: color || "blue" }]}
          disabled={disabled || false}
          activeOpacity={opacity || 0.8}
          {...props}
        >
          {children}
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
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: 'center',
    marginVertical: 10,
  },
  shadow: {
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10
  },
  outlined: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.7,
  },
  round:{
    borderRadius: 10,
  }
});


Button.propTypes = {
  style: PropTypes.object,
  opacity: PropTypes.number,
  gradient: PropTypes.array,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.object || PropTypes.array,
  disabled: PropTypes.bool,
};