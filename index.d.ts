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
  borderBottomColor?: string
  borderLeftColor?: string
  borderRightColor?: string
  borderTopColor?: string

  borderStyle?: 'solid' | 'dotted' | 'dashed'

  borderWidth?: string | number
  borderBottomWidth?: string | number
  borderLeftWidth?: string | number
  borderRightWidth?: string | number
  borderTopWidth?: string | number

  backgroundColor?: string

  /** @ignore */
  children?: React.ReactNode
  /** @ignore */
  className?: string
}

export interface TextStyleProps {
  color?: string
  decorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  family?: string
  size?: string | number
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  variant?: Array<'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums'> | 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums' | string
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

  /** @ignore */
  children?: React.ReactNode
  /** @ignore */
  className?: string
}

/** An inline text span */
export const TextStyle: FC<TextStyleProps>

export interface TextProps extends ContainerProps {
  align?: 'left' | 'right' | 'center' | 'justify' | null
  /** Specifies whether fonts should scale to respect Text Size accessibility settings on supported platforms. */
  allowFontScaling?: boolean
  color?: string
  decorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through'
  family?: string
  /** Limit the text to the specified number of lines. */
  numberOfLines?: number | null
  /** Rotate the text by the specified degrees. The origin of the transformation follows the text alignment. */
  rotate?: number
  size?: string | number
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  variant?: Array<'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums'> | 'small-caps' | 'oldstyle-nums' | 'lining-nums' | 'tabular-nums' | 'proportional-nums' | string
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

  /** Set the desired behavior when content does not fit in the element's padding box (overflows) in the horizontal and/or vertical direction */
  overflow?: 'hidden' | 'visible'
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

  /** Set the desired behavior when content does not fit in the element's padding box (overflows) in the horizontal and/or vertical direction */
  overflow?: 'hidden' | 'visible'
}

/** A stack with depth */
export const ZStack: FC<ZStackProps>
