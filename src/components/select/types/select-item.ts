/**
 * 选择item props
 */
export interface ISelectItemProps {
  label:string,
  value:string|number,
}
/**
 * emit
 */
export interface ISelectItemEmit{
  emit(e:'onClick', key:string|number):void
}
