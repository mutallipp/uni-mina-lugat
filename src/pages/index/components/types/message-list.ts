/**
 * 翻译内容
 */
export interface IMessageItem {
  _id: number,
  fromContent: string,
  toContent: string,
  isSelf: boolean,
  time: number,
}
