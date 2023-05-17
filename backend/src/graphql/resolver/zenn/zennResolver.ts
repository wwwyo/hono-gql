import {
  QueryResolvers,
  ZennItems,
  ZennItemsResolvers,
} from '@graphql/codegen/resolver'
import { getArticles, getScraps } from './zennClient'

const getArticleItems = async () => {
  return getArticles('www_y').catch((e) => {
    console.error(e)
    throw new Error('failed to fetch zenn articles')
  })
}

const getScrapItems = async () => {
  return getScraps('www_y').catch((e) => {
    console.error(e)
    throw new Error('failed to fetch zenn scraps')
  })
}

export const zennResolvers: QueryResolvers = {
  zennItems: async () => {
    const articles = await getArticleItems()
    const scraps = await getScrapItems()

    return {
      articles,
      scraps,
    }
  },
}
