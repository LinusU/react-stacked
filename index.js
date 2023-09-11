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

function gap (specific, general) {
  if (typeof specific === 'number') return specific + 'px'
  if (typeof general === 'number') return general + 'px'

  return undefined
}

exports.TextStyle = function TextStyle (props) {
  return React.createElement(
    'span',
    {
      style: {
        color: props.color,
        fontFamily: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
        fontSize: (props.size === 0) ? 0 : (props.size || '14px'),
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
    'div',
    {
      style: {
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderColor: props.borderColor,
        borderStyle: props.borderStyle,
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderWidth: (typeof props.borderWidth === 'number' ? (props.borderWidth + 'px') : props.borderWidth),
        boxSizing: 'border-box',
        color: props.color,
        display: props.numberOfLines == null ? undefined : '-webkit-box',
        flexBasis: (typeof props.basis === 'number' ? (props.basis + 'px') : props.basis),
        flexGrow: props.grow,
        flexShrink: props.shrink,
        fontFamily: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
        fontSize: (props.size === 0) ? 0 : (props.size || '14px'),
        fontWeight: props.weight,
        height: (typeof props.height === 'number' ? (props.height + 'px') : props.height),
        maxHeight: (typeof props.maxHeight === 'number' ? (props.maxHeight + 'px') : props.maxHeight),
        maxWidth: (typeof props.maxWidth === 'number' ? (props.maxWidth + 'px') : props.maxWidth),
        minHeight: (typeof props.minHeight === 'number' ? (props.minHeight + 'px') : props.minHeight),
        minWidth: (typeof props.minWidth === 'number' ? (props.minWidth + 'px') : props.minWidth),
        overflow: props.numberOfLines == null ? undefined : 'hidden',
        overflowWrap: 'anywhere',
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        position: props.style && props.style.position,
        textAlign: props.align == null ? undefined : props.align,
        textDecorationLine: props.decorationLine,
        textTransform: props.transform,
        whiteSpace: 'pre-wrap',
        width: (typeof props.width === 'number' ? (props.width + 'px') : props.width),
        wordBreak: 'break-word',
        WebkitBoxOrient: props.numberOfLines == null ? undefined : 'vertical',
        WebkitLineClamp: props.numberOfLines == null ? undefined : props.numberOfLines
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
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderColor: props.borderColor,
        borderStyle: props.borderStyle,
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderWidth: (typeof props.borderWidth === 'number' ? (props.borderWidth + 'px') : props.borderWidth),
        boxSizing: 'border-box',
        columnGap: gap(props.columnGap, props.gap),
        display: 'flex',
        flexBasis: (typeof props.basis === 'number' ? (props.basis + 'px') : props.basis),
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
        position: props.style && props.style.position,
        rowGap: gap(props.rowGap, props.gap),
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
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderColor: props.borderColor,
        borderStyle: props.borderStyle,
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderWidth: (typeof props.borderWidth === 'number' ? (props.borderWidth + 'px') : props.borderWidth),
        boxSizing: 'border-box',
        columnGap: gap(props.columnGap, props.gap),
        display: 'flex',
        flexBasis: (typeof props.basis === 'number' ? (props.basis + 'px') : props.basis),
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
        position: props.style && props.style.position,
        rowGap: gap(props.rowGap, props.gap),
        width: (typeof props.width === 'number' ? (props.width + 'px') : props.width)
      }
    },
    props.children
  )
}

exports.ZStack = function ZStack (props) {
  return React.createElement(
    'div',
    {
      style: {
        alignItems: alignItems(props.alignHorizontal || props.align),
        alignSelf: alignItems(props.alignSelf),
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: borderRadius(props.borderBottomLeftRadius, props.borderRadius),
        borderBottomRightRadius: borderRadius(props.borderBottomRightRadius, props.borderRadius),
        borderColor: props.borderColor,
        borderStyle: props.borderStyle,
        borderTopLeftRadius: borderRadius(props.borderTopLeftRadius, props.borderRadius),
        borderTopRightRadius: borderRadius(props.borderTopRightRadius, props.borderRadius),
        borderWidth: (typeof props.borderWidth === 'number' ? (props.borderWidth + 'px') : props.borderWidth),
        boxSizing: 'border-box',
        display: 'flex',
        flexBasis: (typeof props.basis === 'number' ? (props.basis + 'px') : props.basis),
        flexDirection: 'column',
        flexGrow: props.grow,
        flexShrink: props.shrink,
        height: (typeof props.height === 'number' ? (props.height + 'px') : props.height),
        justifyContent: justifyContent(props.alignVertical || props.align),
        maxHeight: (typeof props.maxHeight === 'number' ? (props.maxHeight + 'px') : props.maxHeight),
        maxWidth: (typeof props.maxWidth === 'number' ? (props.maxWidth + 'px') : props.maxWidth),
        minHeight: (typeof props.minHeight === 'number' ? (props.minHeight + 'px') : props.minHeight),
        minWidth: (typeof props.minWidth === 'number' ? (props.minWidth + 'px') : props.minWidth),
        paddingBottom: padding(props.paddingBottom, props.paddingVertical, props.padding),
        paddingLeft: padding(props.paddingLeft, props.paddingHorizontal, props.padding),
        paddingRight: padding(props.paddingRight, props.paddingHorizontal, props.padding),
        paddingTop: padding(props.paddingTop, props.paddingVertical, props.padding),
        position: (props.style && props.style.position) || 'relative',
        width: (typeof props.width === 'number' ? (props.width + 'px') : props.width)
      }
    },
    React.Children.map(props.children, function addPositionAbsolute (child) {
      return React.cloneElement(child, {
        style: Object.assign({ position: 'absolute' }, child.props.style)
      })
    })
  )
}
