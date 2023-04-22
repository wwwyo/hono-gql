import { RootResolver } from '@hono/graphql-server'
import { buildSchema } from 'graphql'
import { qiitaResolver } from './resolver/qiitaResolver'
import { Query } from './codegen/resolver'

export const schema = buildSchema(`
  type Query {
    qiitaItems: [QiitaItem]
    hello: String
  }

  type QiitaItem {
    rendered_body: String
    body: String
    coediting: Boolean
    comments_count: Int
    created_at: String
    group: String
    id: String
    likes_count: Int
    private: Boolean
    reactions_count: Int
    stocks_count: Int
    tags: [QiitaTag]
    title: String
    updated_at: String
    url: String
    user: QiitaUser
    page_views_count: Int
    team_membership: String
    organization_url_name: String
  }

  type QiitaTag {
    name: String
    versions: [String]
  }

  type QiitaUser {
    description: String
    facebook_id: String
    followees_count: Int
    followers_count: Int
    github_login_name: String
    id: String
    items_count: Int
    linkedin_id: String
    location: String
    name: String
    organization: String
    permanent_id: Int
    profile_image_url: String
    team_only: Boolean
    twitter_screen_name: String
    website_url: String
  }
`)

export const rootResolver: RootResolver = (ctx) => {
  return {
    qiitaItems: () => {
      return [
        {
          rendered_body: '',
          body: '',
          coediting: false,
          comments_count: 0,
          created_at: '2022-03-04T12:41:28+09:00',
          group: null,
          id: 'faafd093ac7e9bf0d510',
          likes_count: 6,
          private: false,
          reactions_count: 0,
          stocks_count: 6,
          tags: [
            {
              name: 'Git',
              versions: [],
            },
            {
              name: 'GitHub',
              versions: [],
            },
          ],
          title: 'コミットのお作法',
          updated_at: '2022-05-24T22:41:33+09:00',
          url: 'https://qiita.com/www_y118/items/faafd093ac7e9bf0d510',
          user: {
            description: '感覚でやってます。\r\n',
            facebook_id: '',
            followees_count: 3,
            followers_count: 3,
            github_login_name: 'yuito118',
            id: 'www_y118',
            items_count: 71,
            linkedin_id: '',
            location: '大阪',
            name: '',
            organization: '',
            permanent_id: 787586,
            profile_image_url:
              'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/787586/3654a79ba5efa7ad8706a9bdac9572e9195c8b14/x_large.png?1678301445',
            team_only: false,
            twitter_screen_name: 'www_yto',
            website_url: '',
          },
          page_views_count: null,
          team_membership: null,
          organization_url_name: null,
        },
      ]
    },
  }
}
