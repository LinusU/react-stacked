'use strict'

var React = require('react')

function alignItems (input) {
  if (input == null) return undefined
  if (input === 'start') return 'flex-start'
  if (input === 'end') return 'flex-end'

  return input
}

function borderRadius (specific, general) {
  if (typeof specific === 'number') return specific + 'px'
  if (typeof general === 'number') return general + 'px'

  return undefined
}

function justifyContent (input) {
  if (input == null) return undefined
  if (input === 'start') return 'flex-start'
  if (input === 'end') return 'flex-end'

  return input
}

function padding (specific, axis, general) {
  if (typeof specific === 'string') return specific
  if (typeof specific === 'number') return specific + 'px'
  if (typeof axis === 'string') return axis
  if (typeof axis === 'number') return axis + 'px'
  if (typeof general === 'string') return general
  if (typeof general === 'number') return general + 'px'

  return undefined
}

exports.Text = function Text (props) {
  return React.createElement(
    'span',
    {
      style: {
        color: props.color,
        fontFamily: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
        fontSize: (props.size === 0) ? 0 : (props.size || '14px'),
        fontWeight: props.weight
      }
    },
    props.children
  )
}

exports.HStack = function HStack (props) {
  return React.createElement(
    'div',
    {
      style: {
        alignItems: alignItems(props.alignItems),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        display: 'flex',
        flexDirection: 'row',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        height: (typeof props.height === 'number' ? (props.height + 'px') : props.height),
        justifyContent: justifyContent(props.justifyContent),
        maxHeight: (typeof props.maxHeight === 'number' ? (props.maxHeight + 'px') : props.maxHeight),
        maxWidth: (typeof props.maxWidth === 'number' ? (props.maxWidth + 'px') : props.maxWidth),
        minHeight: (typeof props.minHeight === 'number' ? (props.minHeight + 'px') : props.minHeight),
        minWidth: (typeof props.minWidth === 'number' ? (props.minWidth + 'px') : props.minWidth),
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        width: (typeof props.width === 'number' ? (props.width + 'px') : props.width)
      }
    },
    props.children
  )
}

exports.VStack = function VStack (props) {
  return React.createElement(
    'div',
    {
      style: {
        alignItems: alignItems(props.alignItems),
        backgroundColor: props.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        height: (typeof props.height === 'number' ? (props.height + 'px') : props.height),
        justifyContent: justifyContent(props.justifyContent),
        maxHeight: (typeof props.maxHeight === 'number' ? (props.maxHeight + 'px') : props.maxHeight),
        maxWidth: (typeof props.maxWidth === 'number' ? (props.maxWidth + 'px') : props.maxWidth),
        minHeight: (typeof props.minHeight === 'number' ? (props.minHeight + 'px') : props.minHeight),
        minWidth: (typeof props.minWidth === 'number' ? (props.minWidth + 'px') : props.minWidth),
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        width: (typeof props.width === 'number' ? (props.width + 'px') : props.width)
      }
    },
    props.children
  )
}
