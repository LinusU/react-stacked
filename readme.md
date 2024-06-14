# React Stacked

Building blocks for robust cross-platform layouts.

The vision of React Stacked is not to provide any styling or be a full-featured UI library, instead it aims to provide low lever primitives that works the same on different platforms.

Currently supported platforms:

- React (`react-dom`)
- React Native (`react-native` or `expo`)

## Installation

```sh
npm install --save react-stacked
```

## Usage

```js
const { HStack, Text, VStack } = require('react-stacked')

const React = require('react')
const { render } = require('react-dom')

const Example = () => (
  <VStack height='150px'>
    <HStack justifyContent='space-between'>
      <Text>Left</Text>
      <Text>Right</Text>
    </HStack>

    <HStack alignItems='center' justifyContent='center' grow='1'>
      <Text>Center</Text>
    </HStack>
  </VStack>
)

render(<Example />)
```

```text
Left                             Right



                Center



```

## Components

### `<TextStyle>`

An inline text span

Property | Required | Type
-------- | -------- | ----
color | optional | `string`
decorationLine | optional | `'none' \| 'underline' \| 'line-through' \| 'underline line-through'`
size | optional | `string \| number`
transform | optional | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'`
variant | optional | `Array \| 'small-caps' \| 'oldstyle-nums' \| 'lining-nums' \| 'tabular-nums' \| 'proportional-nums' \| string`
weight | optional | `'normal' \| 'bold' \| '100' \| '200' \| '300' \| '400' \| '500' \| '600' \| '700' \| '800' \| '900'`
children | optional | `React.ReactNode`

### `<Text>`

A block of text

Property | Required | Type | Comment
-------- | -------- | ---- | -------
align | optional | `'left' \| 'right' \| 'center' \| 'justify' \| null`
allowFontScaling | optional | `boolean` | Specifies whether fonts should scale to respect Text Size accessibility settings on supported platforms.
color | optional | `string`
decorationLine | optional | `'none' \| 'underline' \| 'line-through' \| 'underline line-through'`
numberOfLines | optional | `number \| null` | Limit the text to the specified number of lines.
rotate | optional | `number` | Rotate the text by the specified degrees. The origin of the transformation follows the text alignment.
size | optional | `string \| number`
transform | optional | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'`
variant | optional | `Array \| 'small-caps' \| 'oldstyle-nums' \| 'lining-nums' \| 'tabular-nums' \| 'proportional-nums' \| string`
weight | optional | `'normal' \| 'bold' \| '100' \| '200' \| '300' \| '400' \| '500' \| '600' \| '700' \| '800' \| '900'`
alignSelf | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | Override alignment along the cross axis for this item.
width | optional | `string \| number` | The width of the container.
minWidth | optional | `string \| number` | The minimum width of the container.
maxWidth | optional | `string \| number` | The maximum width of the container.
height | optional | `string \| number` | The height of the container.
minHeight | optional | `string \| number` | The minimum height of the container.
maxHeight | optional | `string \| number` | The maximum height of the container.
basis | optional | `string \| number` | The flex basis of the container.
grow | optional | `string \| number` | The flex grow factor of the container.
shrink | optional | `string \| number` | The flex shrink factor of the container.
padding | optional | `string \| number`
paddingBottom | optional | `string \| number`
paddingHorizontal | optional | `string \| number`
paddingLeft | optional | `string \| number`
paddingRight | optional | `string \| number`
paddingTop | optional | `string \| number`
paddingVertical | optional | `string \| number`
borderRadius | optional | `number`
borderBottomLeftRadius | optional | `number`
borderBottomRightRadius | optional | `number`
borderTopLeftRadius | optional | `number`
borderTopRightRadius | optional | `number`
borderColor | optional | `string`
borderBottomColor | optional | `string`
borderLeftColor | optional | `string`
borderRightColor | optional | `string`
borderTopColor | optional | `string`
borderStyle | optional | `'solid' \| 'dotted' \| 'dashed'`
borderWidth | optional | `string \| number`
borderBottomWidth | optional | `string \| number`
borderLeftWidth | optional | `string \| number`
borderRightWidth | optional | `string \| number`
borderTopWidth | optional | `string \| number`
backgroundColor | optional | `string`
children | optional | `React.ReactNode`

### `<HStack>`

A horizontal stack

Property | Required | Type | Comment
-------- | -------- | ---- | -------
alignItems | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | How to align children along the cross axis.
justifyContent | optional | `'center' \| 'end' \| 'start' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'` | How to align children within the main axis.
wrap | optional | `boolean` | What happens when children overflow along the main axis.
gap | optional | `number` | The size of the gaps (gutters) between rows and columns.
rowGap | optional | `number` | The size of the gap (gutter) between an element's rows.
columnGap | optional | `number` | The size of the gap (gutter) between an element's columns.
alignSelf | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | Override alignment along the cross axis for this item.
width | optional | `string \| number` | The width of the container.
minWidth | optional | `string \| number` | The minimum width of the container.
maxWidth | optional | `string \| number` | The maximum width of the container.
height | optional | `string \| number` | The height of the container.
minHeight | optional | `string \| number` | The minimum height of the container.
maxHeight | optional | `string \| number` | The maximum height of the container.
basis | optional | `string \| number` | The flex basis of the container.
grow | optional | `string \| number` | The flex grow factor of the container.
shrink | optional | `string \| number` | The flex shrink factor of the container.
padding | optional | `string \| number`
paddingBottom | optional | `string \| number`
paddingHorizontal | optional | `string \| number`
paddingLeft | optional | `string \| number`
paddingRight | optional | `string \| number`
paddingTop | optional | `string \| number`
paddingVertical | optional | `string \| number`
borderRadius | optional | `number`
borderBottomLeftRadius | optional | `number`
borderBottomRightRadius | optional | `number`
borderTopLeftRadius | optional | `number`
borderTopRightRadius | optional | `number`
borderColor | optional | `string`
borderBottomColor | optional | `string`
borderLeftColor | optional | `string`
borderRightColor | optional | `string`
borderTopColor | optional | `string`
borderStyle | optional | `'solid' \| 'dotted' \| 'dashed'`
borderWidth | optional | `string \| number`
borderBottomWidth | optional | `string \| number`
borderLeftWidth | optional | `string \| number`
borderRightWidth | optional | `string \| number`
borderTopWidth | optional | `string \| number`
backgroundColor | optional | `string`
children | optional | `React.ReactNode`

### `<VStack>`

A vertical stack

Property | Required | Type | Comment
-------- | -------- | ---- | -------
alignItems | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | How to align children along the cross axis.
justifyContent | optional | `'center' \| 'end' \| 'start' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly'` | How to align children within the main axis.
wrap | optional | `boolean` | What happens when children overflow along the main axis.
gap | optional | `number` | The size of the gaps (gutters) between rows and columns.
rowGap | optional | `number` | The size of the gap (gutter) between an element's rows.
columnGap | optional | `number` | The size of the gap (gutter) between an element's columns.
alignSelf | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | Override alignment along the cross axis for this item.
width | optional | `string \| number` | The width of the container.
minWidth | optional | `string \| number` | The minimum width of the container.
maxWidth | optional | `string \| number` | The maximum width of the container.
height | optional | `string \| number` | The height of the container.
minHeight | optional | `string \| number` | The minimum height of the container.
maxHeight | optional | `string \| number` | The maximum height of the container.
basis | optional | `string \| number` | The flex basis of the container.
grow | optional | `string \| number` | The flex grow factor of the container.
shrink | optional | `string \| number` | The flex shrink factor of the container.
padding | optional | `string \| number`
paddingBottom | optional | `string \| number`
paddingHorizontal | optional | `string \| number`
paddingLeft | optional | `string \| number`
paddingRight | optional | `string \| number`
paddingTop | optional | `string \| number`
paddingVertical | optional | `string \| number`
borderRadius | optional | `number`
borderBottomLeftRadius | optional | `number`
borderBottomRightRadius | optional | `number`
borderTopLeftRadius | optional | `number`
borderTopRightRadius | optional | `number`
borderColor | optional | `string`
borderBottomColor | optional | `string`
borderLeftColor | optional | `string`
borderRightColor | optional | `string`
borderTopColor | optional | `string`
borderStyle | optional | `'solid' \| 'dotted' \| 'dashed'`
borderWidth | optional | `string \| number`
borderBottomWidth | optional | `string \| number`
borderLeftWidth | optional | `string \| number`
borderRightWidth | optional | `string \| number`
borderTopWidth | optional | `string \| number`
backgroundColor | optional | `string`
children | optional | `React.ReactNode`

### `<ZStack>`

A stack with depth

Property | Required | Type | Comment
-------- | -------- | ---- | -------
align | optional | `'center' \| 'end' \| 'start'` | How to align children along both axis.
alignHorizontal | optional | `'center' \| 'end' \| 'start'` | How to align children horizontally.
alignVertical | optional | `'center' \| 'end' \| 'start'` | How to align children vertically.
alignSelf | optional | `'baseline' \| 'center' \| 'end' \| 'start' \| 'stretch'` | Override alignment along the cross axis for this item.
width | optional | `string \| number` | The width of the container.
minWidth | optional | `string \| number` | The minimum width of the container.
maxWidth | optional | `string \| number` | The maximum width of the container.
height | optional | `string \| number` | The height of the container.
minHeight | optional | `string \| number` | The minimum height of the container.
maxHeight | optional | `string \| number` | The maximum height of the container.
basis | optional | `string \| number` | The flex basis of the container.
grow | optional | `string \| number` | The flex grow factor of the container.
shrink | optional | `string \| number` | The flex shrink factor of the container.
padding | optional | `string \| number`
paddingBottom | optional | `string \| number`
paddingHorizontal | optional | `string \| number`
paddingLeft | optional | `string \| number`
paddingRight | optional | `string \| number`
paddingTop | optional | `string \| number`
paddingVertical | optional | `string \| number`
borderRadius | optional | `number`
borderBottomLeftRadius | optional | `number`
borderBottomRightRadius | optional | `number`
borderTopLeftRadius | optional | `number`
borderTopRightRadius | optional | `number`
borderColor | optional | `string`
borderBottomColor | optional | `string`
borderLeftColor | optional | `string`
borderRightColor | optional | `string`
borderTopColor | optional | `string`
borderStyle | optional | `'solid' \| 'dotted' \| 'dashed'`
borderWidth | optional | `string \| number`
borderBottomWidth | optional | `string \| number`
borderLeftWidth | optional | `string \| number`
borderRightWidth | optional | `string \| number`
borderTopWidth | optional | `string \| number`
backgroundColor | optional | `string`
children | optional | `React.ReactNode`
