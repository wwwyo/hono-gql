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

export type QiitaItem = {
  __typename?: 'QiitaItem';
  body?: Maybe<Scalars['String']>;
  coediting?: Maybe<Scalars['Boolean']>;
  comments_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  likes_count?: Maybe<Scalars['Int']>;
  organization_url_name?: Maybe<Scalars['String']>;
  page_views_count?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  reactions_count?: Maybe<Scalars['Int']>;
  rendered_body?: Maybe<Scalars['String']>;
  stocks_count?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<QiitaTag>>>;
  team_membership?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user?: Maybe<QiitaUser>;
};

export type QiitaTag = {
  __typename?: 'QiitaTag';
  name?: Maybe<Scalars['String']>;
  versions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QiitaUser = {
  __typename?: 'QiitaUser';
  description?: Maybe<Scalars['String']>;
  facebook_id?: Maybe<Scalars['String']>;
  followees_count?: Maybe<Scalars['Int']>;
  followers_count?: Maybe<Scalars['Int']>;
  github_login_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items_count?: Maybe<Scalars['Int']>;
  linkedin_id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  permanent_id?: Maybe<Scalars['Int']>;
  profile_image_url?: Maybe<Scalars['String']>;
  team_only?: Maybe<Scalars['Boolean']>;
  twitter_screen_name?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  qiitaItems?: Maybe<Array<Maybe<QiitaItem>>>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  QiitaItem: ResolverTypeWrapper<QiitaItem>;
  QiitaTag: ResolverTypeWrapper<QiitaTag>;
  QiitaUser: ResolverTypeWrapper<QiitaUser>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  QiitaItem: QiitaItem;
  QiitaTag: QiitaTag;
  QiitaUser: QiitaUser;
  Query: {};
  String: Scalars['String'];
};

export type QiitaItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaItem'] = ResolversParentTypes['QiitaItem']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coediting?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  comments_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  organization_url_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_views_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reactions_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rendered_body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stocks_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['QiitaTag']>>>, ParentType, ContextType>;
  team_membership?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['QiitaUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QiitaTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaTag'] = ResolversParentTypes['QiitaTag']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  versions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QiitaUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['QiitaUser'] = ResolversParentTypes['QiitaUser']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followees_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  followers_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  github_login_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkedin_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permanent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profile_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_only?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  twitter_screen_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  qiitaItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['QiitaItem']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  QiitaItem?: QiitaItemResolvers<ContextType>;
  QiitaTag?: QiitaTagResolvers<ContextType>;
  QiitaUser?: QiitaUserResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

