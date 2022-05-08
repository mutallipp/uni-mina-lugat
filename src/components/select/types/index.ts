import { IAnyObj } from '@/defineds'

/**
 * seclet 选项配置
 */
export interface ISelectOption{
  label:string,
  value:any,
}
/**
 * select props
 */
export interface ISelectProps {
  value:any,
  data:Array<IAnyObj>
  option:ISelectOption,
}
export interface ISelectEmit {
  emit(e:'update:value', key:any):void
}
