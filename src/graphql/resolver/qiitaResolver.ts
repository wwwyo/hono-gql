import type { QiitaItem, Resolvers } from '../codegen/resolver'

export type Props = {
  userId: string
  perPage: number
  page: number
  query?: string
}

const getUrl = ({ userId, page, perPage, query }: Props) =>
  `https://qiita.com/api/v2/users/${userId}/items?per_page=${perPage}&page=${page}&${query}`

export const getQiitaItems = async (args: Props) => {
  console.log('getQiitaItems')
  const res = await fetch(getUrl(args))
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json() as Promise<QiitaItem[]>
}

export const qiitaResolver: Resolvers = {
  Query: {
    qiitaItems: () => {
      return getQiitaItems({ userId: 'www_y118', page: 1, perPage: 20 })
    },
  },
}
