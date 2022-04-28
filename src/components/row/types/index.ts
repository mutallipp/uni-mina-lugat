/**
 * 横向对齐方式
 */
export type DisplayType = 'inlene'|'flex'
/**
 * 横向对齐方式
 */
export type JustifyType = 'start'|'end'|'center'|'around'|'between'
/**
 * 总想对齐方式
 */
export type AlignType = 'top'|'middle'|'bottom'
/**
 * row props type
 */
export interface IRowProps {
  /**
   * 布局模式，可选 flex，现代浏览器下有效
   * @default inlene
   */
  type?: DisplayType
  /**
    * 栅格间隔
    * @default 0
    */
  gutter?: number
  /**
    * flex 布局下的水平排列方式
    * @default start
    */
  justify?: JustifyType
  /**
    * flex 布局下的垂直排列方式
    */
  align?: AlignType
}
