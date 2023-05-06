import { buildSchema } from 'graphql'

export const schema = buildSchema(`
  type Query {
    qiitaItems: [QiitaItem!]!
    zennItems: ZennItems!
    hello: String
  }

  type QiitaItem {
    rendered_body: String!
    body: String!
    coediting: Boolean!
    comments_count: Int!
    created_at: String!
    group: String!
    id: String!
    likes_count: Int!
    private: Boolean!
    reactions_count: Int!
    stocks_count: Int!
    tags: [QiitaTag!]!
    title: String!
    updated_at: String!
    url: String!
    user: QiitaUser!
    page_views_count: Int!
    team_membership: String!
    organization_url_name: String!
  }

  type QiitaTag {
    name: String!
    versions: [String!]!
  }

  type QiitaUser {
    description: String!
    facebook_id: String!
    followees_count: Int!
    followers_count: Int!
    github_login_name: String!
    id: String!
    items_count: Int!
    linkedin_id: String!
    location: String!
    name: String!
    organization: String!
    permanent_id: Int!
    profile_image_url: String!
    team_only: Boolean!
    twitter_screen_name: String!
    website_url: String!
  }

  type ZennItems {
    scraps: [Scrap!]!
    articles: [Article!]!
  }

  type Scrap {
    id: Int!
    post_type: String!
    user_id: Int!
    slug: String!
    title: String!
    closed: Boolean!
    closed_at: String
    archived: Boolean!
    liked_count: Int!
    can_others_post: Boolean!
    comments_count: Int!
    created_at: String!
    last_comment_created_at: String!
    should_noindex: Boolean!
    path: String!
    topics: [ScrapTopic!]!
    user: User!
  }

  type ScrapTopic {
    id: Int!
    name: String!
    display_name: String!
    taggings_count: Int!
    image_url: String
  }

  type User {
    id: Int!
    username: String!
    name: String!
    avatar_small_url: String!
  }

  type Article {
    id: Int!
    post_type: String!
    title: String!
    slug: String!
    comments_count: Int!
    liked_count: Int!
    body_letters_count: Int!
    article_type: String!
    emoji: String!
    is_suspending_private: Boolean!
    published_at: String!
    body_updated_at: String
    source_repo_updated_at: String
    path: String!
    user: User!
    publication: Publication
  }

  type Publication {
    id: Int!
    name: String!
    profile_image_url: String!
    favicon_url: String
  }
`)
