import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class TextExample extends PureComponent {
    
    render() { 
        const { 
            h1,
            h2,
            h3,
            title,
            body,
            small,
            size,
            transform,
            align,
            regular,
            bold,
            semibold,
            medium,
            weight,
            light,
            center,
            right,
            spacing, 
            height,
            family,
            // colors
            color,
            white,
            style,
            children,
            ...props
         } = this.props;

         const textStyles = [
            styles.text,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            title && styles.title,
            body && styles.body,
            small && styles.small,
            size && { fontSize: size },
            transform && { textTransform: transform },
            align && { textAlign: align },
            height && { lineHeight: height },
            family && { fontFamily: family || "Open Sans"},
            spacing && { letterSpacing: spacing },
            weight && { fontWeight: weight },
            regular && styles.regular,
            bold && styles.bold,
            semibold && styles.semibold,
            medium && styles.medium,
            light && styles.light,
            center && styles.center,
            right && styles.right,
            color && {color: color || "black"},
            white && styles.white,
            style // Custom Style
          ];

        return (
            <Text style={textStyles} {...props}>
            {children}
          </Text>
        );
    }
}

const styles = StyleSheet.create({
    // default style
    text: {
      fontSize: 12,
      color: "black",
    },
    // variations
    regular: {
      fontWeight: "normal"
    },
    bold: {
      fontWeight: "bold"
    },
    semibold: {
      fontWeight: "500"
    },
    medium: {
      fontWeight: "500"
    },
    light: {
      fontWeight: "200"
    },
    // position
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    // colors
    white: {color: "#ffffff"},
    // fonts
    h1: {fontSize: 32},
    h2: {fontSize: 24},
    h3: {fontSize: 18.72},
    title: {fontSize: 18},
    body: {fontSize: 12},
    small: {fontSize: 6},
  });


TextExample.propTypes = { width: PropTypes.number, height: PropTypes.number, image: PropTypes.number };
TextExample.defaultProps = { width: 100, height: 100 };