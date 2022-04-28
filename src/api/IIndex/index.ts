// import { IResult } from '@/defineds/utils/rest'
import rest from '@/utils/rest'
import { ITranslateParams } from './types'
import IndexUri from './uri'

/**
 * 文字翻译
 */
export const translateTextApi = async <T>(params:ITranslateParams):Promise<T> => {
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
