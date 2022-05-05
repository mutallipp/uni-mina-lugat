/**
 * 语言对象
 */
export interface ILangItem {
  lang:number,
  textLeft:string,
  textRight:string,
}
/**
 * home header props
 */
export interface IHomeHeaderEmit {
  emit(key:string, obj:ILangItem):void
}
