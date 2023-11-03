'use strict'

var React = require('react')
var Native = require('react-native')

function alignItems (input) {
  if (input == null) return undefined
  if (input === 'start') return 'flex-start'
  if (input === 'end') return 'flex-end'

  return input
}

function borderColor (specific, general) {
  if (typeof specific === 'string') return specific
  if (typeof general === 'string') return general

  return undefined
}

function borderRadius (specific, general) {
  if (typeof specific === 'number') return specific
  if (typeof general === 'number') return general

  return undefined
}

function borderWidth (specific, general) {
  if (typeof specific === 'string' || typeof specific === 'number') return specific
  if (typeof general === 'string' || typeof general === 'number') return general

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

function gap (specific, general) {
  if (typeof specific === 'number') return specific
  if (typeof general === 'number') return general

  return undefined
}

exports.TextStyle = function TextStyle (props) {
  return React.createElement(
    Native.Text,
    {
      style: {
        color: props.color,
        fontSize: props.size,
        fontWeight: props.weight,
        textDecorationLine: props.decorationLine,
        textTransform: props.transform
      }
    },
    props.children
  )
}

exports.Text = function Text (props) {
  return React.createElement(
    Native.View,
    {
      style: {
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomColor: borderColor(props.borderBottomColor, props.borderColor),
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderBottomWidth: borderWidth(props.borderBottomWidth, props.borderWidth),
        borderLeftColor: borderColor(props.borderLeftColor, props.borderColor),
        borderLeftWidth: borderWidth(props.borderLeftWidth, props.borderWidth),
        borderRightColor: borderColor(props.borderRightColor, props.borderColor),
        borderRightWidth: borderWidth(props.borderRightWidth, props.borderWidth),
        borderStyle: props.borderStyle,
        borderTopColor: borderColor(props.borderTopColor, props.borderColor),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderTopWidth: borderWidth(props.borderTopWidth, props.borderWidth),
        flexBasis: props.basis,
        flexGrow: props.grow,
        flexShrink: props.shrink,
        height: props.height,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        position: props.style && props.style.position,
        width: props.width
      }
    },
    React.createElement(
      Native.Text,
      {
        allowFontScaling: props.allowFontScaling,
        numberOfLines: props.numberOfLines == null ? undefined : props.numberOfLines,
        style: {
          color: props.color,
          fontSize: props.size,
          fontWeight: props.weight,
          textAlign: props.align == null ? undefined : props.align,
          textDecorationLine: props.decorationLine,
          textTransform: props.transform
        }
      },
      props.children
    )
  )
}

exports.HStack = function HStack (props) {
  return React.createElement(
    Native.View,
    {
      style: {
        alignItems: alignItems(props.alignItems),
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomColor: borderColor(props.borderBottomColor, props.borderColor),
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderBottomWidth: borderWidth(props.borderBottomWidth, props.borderWidth),
        borderLeftColor: borderColor(props.borderLeftColor, props.borderColor),
        borderLeftWidth: borderWidth(props.borderLeftWidth, props.borderWidth),
        borderRightColor: borderColor(props.borderRightColor, props.borderColor),
        borderRightWidth: borderWidth(props.borderRightWidth, props.borderWidth),
        borderStyle: props.borderStyle,
        borderTopColor: borderColor(props.borderTopColor, props.borderColor),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderTopWidth: borderWidth(props.borderTopWidth, props.borderWidth),
        columnGap: gap(props.columnGap, props.gap),
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
        position: props.style && props.style.position,
        rowGap: gap(props.rowGap, props.gap),
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
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomColor: borderColor(props.borderBottomColor, props.borderColor),
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderBottomWidth: borderWidth(props.borderBottomWidth, props.borderWidth),
        borderLeftColor: borderColor(props.borderLeftColor, props.borderColor),
        borderLeftWidth: borderWidth(props.borderLeftWidth, props.borderWidth),
        borderRightColor: borderColor(props.borderRightColor, props.borderColor),
        borderRightWidth: borderWidth(props.borderRightWidth, props.borderWidth),
        borderStyle: props.borderStyle,
        borderTopColor: borderColor(props.borderTopColor, props.borderColor),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderTopWidth: borderWidth(props.borderTopWidth, props.borderWidth),
        columnGap: gap(props.columnGap, props.gap),
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
        position: props.style && props.style.position,
        rowGap: gap(props.rowGap, props.gap),
        width: props.width
      }
    },
    props.children
  )
}

exports.ZStack = function ZStack (props) {
  return React.createElement(
    Native.View,
    {
      style: {
        alignItems: alignItems(props.alignHorizontal || props.align),
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomColor: borderColor(props.borderBottomColor, props.borderColor),
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderBottomWidth: borderWidth(props.borderBottomWidth, props.borderWidth),
        borderLeftColor: borderColor(props.borderLeftColor, props.borderColor),
        borderLeftWidth: borderWidth(props.borderLeftWidth, props.borderWidth),
        borderRightColor: borderColor(props.borderRightColor, props.borderColor),
        borderRightWidth: borderWidth(props.borderRightWidth, props.borderWidth),
        borderStyle: props.borderStyle,
        borderTopColor: borderColor(props.borderTopColor, props.borderColor),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderTopWidth: borderWidth(props.borderTopWidth, props.borderWidth),
        flexBasis: props.basis,
        flexDirection: 'column',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        height: props.height,
        justifyContent: justifyContent(props.alignVertical || props.align),
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        position: (props.style && props.style.position) || 'relative',
        width: props.width
      }
    },
    React.Children.map(props.children, function addPositionAbsolute (child) {
      return React.cloneElement(child, {
        style: Object.assign({ position: 'absolute' }, child.props.style)
      })
    })
  )
}
