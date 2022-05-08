/**
 * home header props
 */
export interface IHomeHeaderProps{
  currentLang:number,
}
/**
 * 语言对象
 */
export interface ILangItem {
  // lang:number,
  // textLeft:string,
  // textRight:string,
  text:string,
  value:number
}
/**
 * home header props
 */
export interface IHomeHeaderEmit {
  emit(key:'update:currentLang', currentLang:number):void
}
