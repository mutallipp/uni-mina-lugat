import { CSSProperties } from 'vue'

/**
 * popover props
 */
export interface IPopverProps{
  visible:boolean,
  contentStyle:CSSProperties
}
/**
 * popover emit
 */
export interface IPopverEmit{
  emit(e:'update:visible', visible:boolean):void
}
