/**
 * popover props
 */
export interface IPopverProps{
  visible:boolean,
}
/**
 * popover emit
 */
export interface IPopverEmit{
  emit(e:'update:visible', visible:boolean):void
}
