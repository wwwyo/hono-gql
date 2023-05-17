import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  article_type: Scalars['String'];
  body_letters_count: Scalars['Int'];
  body_updated_at?: Maybe<Scalars['String']>;
  comments_count: Scalars['Int'];
  emoji: Scalars['String'];
  id: Scalars['Int'];
  is_suspending_private: Scalars['Boolean'];
  liked_count: Scalars['Int'];
  path: Scalars['String'];
  post_type: Scalars['String'];
  publication?: Maybe<Publication>;
  published_at: Scalars['String'];
  slug: Scalars['String'];
  source_repo_updated_at?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  user: User;
};

export type Publication = {
  __typename?: 'Publication';
  favicon_url?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  profile_image_url: Scalars['String'];
};

export type QiitaItem = {
  __typename?: 'QiitaItem';
  body: Scalars['String'];
  coediting: Scalars['Boolean'];
  comments_count: Scalars['Int'];
  created_at: Scalars['String'];
  group: Scalars['String'];
  id: Scalars['String'];
  likes_count: Scalars['Int'];
  organization_url_name: Scalars['String'];
  page_views_count: Scalars['Int'];
  private: Scalars['Boolean'];
  reactions_count: Scalars['Int'];
  rendered_body: Scalars['String'];
  stocks_count: Scalars['Int'];
  tags: Array<QiitaTag>;
  team_membership: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['String'];
  url: Scalars['String'];
  user: QiitaUser;
};

export type QiitaTag = {
  __typename?: 'QiitaTag';
  name: Scalars['String'];
  versions: Array<Scalars['String']>;
};

export type QiitaUser = {
  __typename?: 'QiitaUser';
  description: Scalars['String'];
  facebook_id: Scalars['String'];
  followees_count: Scalars['Int'];
  followers_count: Scalars['Int'];
  github_login_name: Scalars['String'];
  id: Scalars['String'];
  items_count: Scalars['Int'];
  linkedin_id: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  organization: Scalars['String'];
  permanent_id: Scalars['Int'];
  profile_image_url: Scalars['String'];
  team_only: Scalars['Boolean'];
  twitter_screen_name: Scalars['String'];
  website_url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  qiitaItems: Array<QiitaItem>;
  zennItems: ZennItems;
};

export type Scrap = {
  __typename?: 'Scrap';
  archived: Scalars['Boolean'];
  can_others_post: Scalars['Boolean'];
  closed: Scalars['Boolean'];
  closed_at?: Maybe<Scalars['String']>;
  comments_count: Scalars['Int'];
  created_at: Scalars['String'];
  id: Scalars['Int'];
  last_comment_created_at: Scalars['String'];
  liked_count: Scalars['Int'];
  path: Scalars['String'];
  post_type: Scalars['String'];
  should_noindex: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  topics: Array<ScrapTopic>;
  user: User;
  user_id: Scalars['Int'];
};

export type ScrapTopic = {
  __typename?: 'ScrapTopic';
  display_name: Scalars['String'];
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  taggings_count: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatar_small_url: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type ZennItems = {
  __typename?: 'ZennItems';
  articles: Array<Article>;
  scraps: Array<Scrap>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Publication: ResolverTypeWrapper<Publication>;
  QiitaItem: ResolverTypeWrapper<QiitaItem>;
  QiitaTag: ResolverTypeWrapper<QiitaTag>;
  QiitaUser: ResolverTypeWrapper<QiitaUser>;
  Query: ResolverTypeWrapper<{}>;
  Scrap: ResolverTypeWrapper<Scrap>;
  ScrapTopic: ResolverTypeWrapper<ScrapTopic>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  ZennItems: ResolverTypeWrapper<ZennItems>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Publication: Publication;
  QiitaItem: QiitaItem;
  QiitaTag: QiitaTag;
  QiitaUser: QiitaUser;
  Query: {};
  Scrap: Scrap;
  ScrapTopic: ScrapTopic;
  String: Scalars['String'];
  User: User;
  ZennItems: ZennItems;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  article_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body_letters_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  body_updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  emoji?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_suspending_private?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  liked_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publication?: Resolver<Maybe<ResolversTypes['Publication']>, ParentType, ContextType>;
  published_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source_repo_updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Publication'] = ResolversParentTypes['Publication']> = {
  favicon_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile_image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QiitaItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaItem'] = ResolversParentTypes['QiitaItem']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coediting?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  comments_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likes_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  organization_url_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page_views_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  private?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  reactions_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rendered_body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stocks_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['QiitaTag']>, ParentType, ContextType>;
  team_membership?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['QiitaUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QiitaTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaTag'] = ResolversParentTypes['QiitaTag']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QiitaUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaUser'] = ResolversParentTypes['QiitaUser']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facebook_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followees_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  followers_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  github_login_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  linkedin_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permanent_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profile_image_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team_only?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  twitter_screen_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qiitaItems?: Resolver<Array<ResolversTypes['QiitaItem']>, ParentType, ContextType>;
  zennItems?: Resolver<ResolversTypes['ZennItems'], ParentType, ContextType>;
};

export type ScrapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scrap'] = ResolversParentTypes['Scrap']> = {
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  can_others_post?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  closed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  closed_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  last_comment_created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liked_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  should_noindex?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topics?: Resolver<Array<ResolversTypes['ScrapTopic']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScrapTopicResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScrapTopic'] = ResolversParentTypes['ScrapTopic']> = {
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taggings_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar_small_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ZennItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ZennItems'] = ResolversParentTypes['ZennItems']> = {
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  scraps?: Resolver<Array<ResolversTypes['Scrap']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  Publication?: PublicationResolvers<ContextType>;
  QiitaItem?: QiitaItemResolvers<ContextType>;
  QiitaTag?: QiitaTagResolvers<ContextType>;
  QiitaUser?: QiitaUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Scrap?: ScrapResolvers<ContextType>;
  ScrapTopic?: ScrapTopicResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ZennItems?: ZennItemsResolvers<ContextType>;
};

