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
/**
 * message list props
 */
export interface IMessageListProps {
  messageList:Array<IMessageItem>
}
