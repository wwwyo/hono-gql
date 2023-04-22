import { getQiitaItems } from '../../api/qiita'
export type Props = {
  page: number
  perPage: number
  query?: string
}

const getUrl = ({ page, perPage, query }: Props) =>
  `https://qiita.com/api/v2/items?per_page=${perPage}&page=${page}&${query}`

export const getQiitaItems = async (args: Props) => {
  return fetch(getUrl(args))
}

const qiitaResolver = {
  Query: {
    qiitaItems: async (
      _: any,
      { page, perPage }: Props,
      { dataSources }: any
    ) => {
      return dataSources.qiitaAPI.getItems(page, perPage)
    },
  },
}
