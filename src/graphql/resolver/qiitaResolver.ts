import type { QiitaItem, QueryResolvers } from '@graphql/codegen/resolver'
import { type SearchParams, getAllItems } from './qiitaClient'

const getQiitaItems = async (params: SearchParams): Promise<QiitaItem[]> => {
  try {
    return getAllItems(params)
  } catch (e) {
    console.error('failed to fetch qiita\n', e)
    throw new Error('failed to fetch qiita')
  }
}

export const qiitaResolver: QueryResolvers = {
  qiitaItems: () => getQiitaItems({ userId: 'www_y118' }),
}
gi
