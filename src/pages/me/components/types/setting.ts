/**
 * setting emit 类型
 */
export interface ISettingEmit {
  emit(e:'update:visible', visible:boolean):void
  emit(e:'click', key:string):void
}
