import type { QiitaItem, QueryResolvers } from '@graphql/codegen/resolver'
import { getAllItems } from './qiitaClient'

const getQiitaItems = async (params: {
  userId: string
}): Promise<QiitaItem[]> => {
  try {
    const res = await getAllItems(params)
    return res
  } catch (e) {
    console.error('failed to fetch qiita\n', e)
    throw new Error('failed to fetch qiita')
  }
}

export const qiitaResolvers: QueryResolvers = {
  qiitaItems: async () => {
    return getQiitaItems({
      userId: 'www_y118',
    })
  },
}
