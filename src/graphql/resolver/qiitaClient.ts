import { QiitaItem } from '@graphql/codegen/resolver'

const PAGE_MAX_LIMIT = 100
const PER_PAGE_MAX_LIMIT = 100

export type SearchParams = {
  userId: string
  perPage?: number
  page?: number
}

const itemsURL = ({ userId, page, perPage }: SearchParams) =>
  `https://qiita.com/api/v2/users/${userId}/items?per_page=${perPage}&page=${page}`

const validate = (res: Response): Response => {
  if (!res.ok) {
    throw new Error('all "iita Items res not ok')
  }

  return res
}

export const getAllItems = async ({
  perPage = PER_PAGE_MAX_LIMIT,
  page = 1,
  ...restParams
}: SearchParams): Promise<QiitaItem[]> => {
  const results = [] as QiitaItem[]

  for (let i = 0; i < PAGE_MAX_LIMIT; i++) {
    const res = (await fetch(
      itemsURL({ perPage, page: page + i, ...restParams })
    )
      .then((res) => validate(res))
      .then((res) => res.json())) as QiitaItem[]

    results.push(...res)

    if (res.length < perPage) break
  }

  return results
}
