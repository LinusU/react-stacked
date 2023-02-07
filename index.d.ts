import { FC } from 'react'

interface ContainerProps {
  /** Override alignment along the cross axis for this item. */
  alignSelf?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'

  /** The width of the container. */
  width?: string | number
  /** The minimum width of the container. */
  minWidth?: string | number
  /** The maximum width of the container. */
  maxWidth?: string | number

  /** The height of the container. */
  height?: string | number
  /** The minimum height of the container. */
  minHeight?: string | number
  /** The maximum height of the container. */
  maxHeight?: string | number

  /** The flex basis of the container. */
  basis?: string | number
  /** The flex grow factor of the container. */
  grow?: string | number
  /** The flex shrink factor of the container. */
  shrink?: string | number

  padding?: string | number
  paddingBottom?: string | number
  paddingHorizontal?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  paddingVertical?: string | number

  borderRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number

  borderColor?: string
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  borderWidth?: string | number

  backgroundColor?: string

  children?: React.ReactNode
}

export interface TextStyleProps {
  color?: string
  size?: string | number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

  children?: React.ReactNode
}

/** An inline text span */
export const TextStyle: FC<TextStyleProps>

export interface TextProps extends ContainerProps {
  align?: 'left' | 'right' | 'center' | 'justify' | null
  /** Specifies whether fonts should scale to respect Text Size accessibility settings on supported platforms. */
  allowFontScaling?: boolean
  color?: string
  /** Limit the text to the specified number of lines. */
  numberOfLines?: number | null
  size?: string | number
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

/** A block of text */
export const Text: FC<TextProps>

export interface StackProps extends ContainerProps {
  /** How to align children along the cross axis. */
  alignItems?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  /** How to align children within the main axis. */
  justifyContent?: 'center' | 'end' | 'start' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'
  /** What happens when children overflow along the main axis. */
  wrap?: boolean

  /** The size of the gaps (gutters) between rows and columns. */
  gap?: number
  /** The size of the gap (gutter) between an element's rows. */
  rowGap?: number
  /** The size of the gap (gutter) between an element's columns. */
  columnGap?: number
}

/** A horizontal stack */
export const HStack: FC<StackProps>

/** A vertical stack */
export const VStack: FC<StackProps>

export interface ZStackProps extends ContainerProps {
  /** How to align children along both axis. */
  align?: 'center' | 'end' | 'start'
  /** How to align children horizontally. */
  alignHorizontal?: 'center' | 'end' | 'start'
  /** How to align children vertically. */
  alignVertical?: 'center' | 'end' | 'start'
}

/** A stack with depth */
export const ZStack: FC<ZStackProps>
