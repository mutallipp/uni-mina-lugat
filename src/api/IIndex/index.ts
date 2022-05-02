// import { IResult } from '@/defineds/utils/rest'
import rest from '@/utils/rest'
import IndexUri from './uri'

/**
 * 文字翻译
 */
export const translateTextApi = async <T>(params:any):Promise<T> => {
  return rest.post<T>(IndexUri.TRANSLATE, params, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    paramsType: 'x-www-form-urlencoded',
  })
}

export default {
  translateTextApi,
}
