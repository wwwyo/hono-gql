import type { QiitaItem, QueryResolvers } from '../codegen/resolver'

export type Props = {
  userId: string
  perPage?: number
  page?: number
  query?: string
}

const getUrl = ({ userId, page, perPage, query }: Props) =>
  `https://qiita.com/api/v2/users/${userId}/items?per_page=${perPage}&page=${page}&${query}`

export const getQiitaItems = async ({
  userId,
  perPage = 20,
  page = 1,
  query,
}: Props) => {
  try {
    const res = await fetch(getUrl({ userId, perPage, page, query }))
    if (!res.ok) {
      throw new Error('res not ok')
    }

    return res.json() as Promise<QiitaItem[]>
  } catch (e) {
    console.error(e)
    throw new Error('failed to fetch qiita')
  }
}

export const qiitaResolver: QueryResolvers = {
  qiitaItems: () => getQiitaItems({ userId: 'www_y118' }),
}
