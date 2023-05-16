import { apiFetch } from '@graphql/resolver/api/client'
import { Article, Scrap } from '@graphql/codegen/resolver'

type ItemType = 'articles' | 'scraps'
export type SearchParams = {
  userId: string
  type: ItemType
}

const itemsURL = ({ userId, type }: SearchParams) => {
  return `https://zenn.dev/api/${type}?username=${userId}&order=latest`
}

type GetItems<T extends Article[] | Scrap[]> = (userId: string) => Promise<T>

export const getArticles: GetItems<Article[]> = async (userId) => {
  return apiFetch<{
    articles: Article[]
    next_page: string | null
  }>(itemsURL({ userId, type: 'articles' })).then((res) => res.articles)
}

export const getScraps: GetItems<Scrap[]> = async (userId) => {
  return apiFetch<{
    scraps: Scrap[]
    next_page: string | null
  }>(itemsURL({ userId, type: 'scraps' })).then((res) => res.scraps)
}
