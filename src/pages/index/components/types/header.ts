/**
 * 语言对象
 */
export interface ILangItem {
  value:number,
  text:string,
}
/**
 * home header props
 */
export interface IHomeHeaderEmit {
  emit(key:string, obj:number):void
}
