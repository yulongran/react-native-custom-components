import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Divider extends Component {
  render() {
    const {
      color,
      margin,
      width,
      height,
      style,
    } = this.props;

    const blockStyles = [
      styles.divider,
      margin && {margin: margin},
      width && {width: width},
      height && {height: height},
      color && {backgroundColor: color}, // custom backgroundColor
    ];

    return (
      <View
        style={blockStyles}
      />
    );
  }
}

const styles = StyleSheet.create({
  divider:{
    backgroundColor: '#C5CCD6',
    height: 1.5,
    width: 300,
    margin: 10,
  },  
});


Divider.propTypes = { 
    color: PropTypes.string,
    margin: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
};