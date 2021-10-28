'use strict'

var React = require('react')
var Native = require('react-native')

function alignItems (input) {
  if (input == null) return undefined
  if (input === 'start') return 'flex-start'
  if (input === 'end') return 'flex-end'

  return input
}

function borderRadius (specific, general) {
  if (typeof specific === 'number') return specific
  if (typeof general === 'number') return general

  return undefined
}

function justifyContent (input) {
  if (input == null) return undefined
  if (input === 'start') return 'flex-start'
  if (input === 'end') return 'flex-end'

  return input
}

function padding (specific, axis, general) {
  if (typeof specific === 'string' || typeof specific === 'number') return specific
  if (typeof axis === 'string' || typeof axis === 'number') return axis
  if (typeof general === 'string' || typeof general === 'number') return general

  return undefined
}

exports.Text = function Text (props) {
  return React.createElement(
    Native.Text,
    {
      numberOfLines: props.overflow === 'ellipsis' ? 1 : undefined,
      style: {
        color: props.color,
        fontSize: props.size,
        fontWeight: props.weight
      }
    },
    props.children
  )
}

exports.HStack = function HStack (props) {
  return React.createElement(
    Native.View,
    {
      style: {
        alignItems: alignItems(props.alignItems),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        flexBasis: props.basis,
        flexDirection: 'row',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        height: props.height,
        justifyContent: justifyContent(props.justifyContent),
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        width: props.width
      }
    },
    props.children
  )
}

exports.VStack = function VStack (props) {
  return React.createElement(
    Native.View,
    {
      style: {
        alignItems: alignItems(props.alignItems),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        flexBasis: props.basis,
        flexDirection: 'column',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        height: props.height,
        justifyContent: justifyContent(props.justifyContent),
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        width: props.width
      }
    },
    props.children
  )
}
