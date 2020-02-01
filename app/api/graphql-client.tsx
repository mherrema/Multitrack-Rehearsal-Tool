import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  JSON: any,
  Upload: any,
};


export type _ListAccess = {
   __typename?: '_ListAccess',
  create?: Maybe<Scalars['Boolean']>,
  read?: Maybe<Scalars['JSON']>,
  update?: Maybe<Scalars['JSON']>,
  delete?: Maybe<Scalars['JSON']>,
  auth?: Maybe<Scalars['JSON']>,
};

export type _ListMeta = {
   __typename?: '_ListMeta',
  name?: Maybe<Scalars['String']>,
  access?: Maybe<_ListAccess>,
  schema?: Maybe<_ListSchema>,
};

export type _ListSchema = {
   __typename?: '_ListSchema',
  type?: Maybe<Scalars['String']>,
  queries?: Maybe<Array<Maybe<Scalars['String']>>>,
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>,
};

export type _ListSchemaRelatedFields = {
   __typename?: '_ListSchemaRelatedFields',
  type?: Maybe<Scalars['String']>,
  fields?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count?: Maybe<Scalars['Int']>,
};

export type Artist = {
   __typename?: 'Artist',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  description?: Maybe<Scalars['String']>,
  songs?: Maybe<Array<Maybe<Song>>>,
  _songsMeta?: Maybe<_QueryMeta>,
};


export type ArtistSongsArgs = {
  where?: Maybe<SongWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type Artist_SongsMetaArgs = {
  where?: Maybe<SongWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type ArtistCreateInput = {
  description?: Maybe<Scalars['String']>,
  songs?: Maybe<SongRelateToManyInput>,
};

export type ArtistRelateToOneInput = {
  create?: Maybe<ArtistCreateInput>,
  connect?: Maybe<ArtistWhereUniqueInput>,
  disconnect?: Maybe<ArtistWhereUniqueInput>,
  disconnectAll?: Maybe<Scalars['Boolean']>,
};

export type ArtistsCreateInput = {
  data?: Maybe<ArtistCreateInput>,
};

export type ArtistsUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<ArtistUpdateInput>,
};

export type ArtistUpdateInput = {
  description?: Maybe<Scalars['String']>,
  songs?: Maybe<SongRelateToManyInput>,
};

export type ArtistWhereInput = {
  AND?: Maybe<Array<Maybe<ArtistWhereInput>>>,
  OR?: Maybe<Array<Maybe<ArtistWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  description_i?: Maybe<Scalars['String']>,
  description_not_i?: Maybe<Scalars['String']>,
  description_contains_i?: Maybe<Scalars['String']>,
  description_not_contains_i?: Maybe<Scalars['String']>,
  description_starts_with_i?: Maybe<Scalars['String']>,
  description_not_starts_with_i?: Maybe<Scalars['String']>,
  description_ends_with_i?: Maybe<Scalars['String']>,
  description_not_ends_with_i?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  songs_every?: Maybe<SongWhereInput>,
  songs_some?: Maybe<SongWhereInput>,
  songs_none?: Maybe<SongWhereInput>,
  songs_is_null?: Maybe<Scalars['Boolean']>,
};

export type ArtistWhereUniqueInput = {
  id: Scalars['ID'],
};

export type AuthenticateUserOutput = {
   __typename?: 'authenticateUserOutput',
  token?: Maybe<Scalars['String']>,
  item?: Maybe<User>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ChordChart = {
   __typename?: 'ChordChart',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  state?: Maybe<ChordChartStateType>,
  publishedDate?: Maybe<Scalars['String']>,
  image?: Maybe<CloudinaryImage_File>,
};

export type ChordChartCreateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<ChordChartStateType>,
  publishedDate?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
};

export type ChordChartsCreateInput = {
  data?: Maybe<ChordChartCreateInput>,
};

export enum ChordChartStateType {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived'
}

export type ChordChartsUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<ChordChartUpdateInput>,
};

export type ChordChartUpdateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<ChordChartStateType>,
  publishedDate?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
};

export type ChordChartWhereInput = {
  AND?: Maybe<Array<Maybe<ChordChartWhereInput>>>,
  OR?: Maybe<Array<Maybe<ChordChartWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_i?: Maybe<Scalars['String']>,
  title_not_i?: Maybe<Scalars['String']>,
  title_contains_i?: Maybe<Scalars['String']>,
  title_not_contains_i?: Maybe<Scalars['String']>,
  title_starts_with_i?: Maybe<Scalars['String']>,
  title_not_starts_with_i?: Maybe<Scalars['String']>,
  title_ends_with_i?: Maybe<Scalars['String']>,
  title_not_ends_with_i?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<ChordChartStateType>,
  state_not?: Maybe<ChordChartStateType>,
  state_in?: Maybe<Array<Maybe<ChordChartStateType>>>,
  state_not_in?: Maybe<Array<Maybe<ChordChartStateType>>>,
  publishedDate?: Maybe<Scalars['String']>,
  publishedDate_not?: Maybe<Scalars['String']>,
  publishedDate_lt?: Maybe<Scalars['String']>,
  publishedDate_lte?: Maybe<Scalars['String']>,
  publishedDate_gt?: Maybe<Scalars['String']>,
  publishedDate_gte?: Maybe<Scalars['String']>,
  publishedDate_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ChordChartWhereUniqueInput = {
  id: Scalars['ID'],
};

export type CloudinaryImage_File = {
   __typename?: 'CloudinaryImage_File',
  id?: Maybe<Scalars['ID']>,
  path?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  mimetype?: Maybe<Scalars['String']>,
  encoding?: Maybe<Scalars['String']>,
  publicUrl?: Maybe<Scalars['String']>,
  publicUrlTransformed?: Maybe<Scalars['String']>,
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>
};

export type CloudinaryImageFormat = {
  prettyName?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['String']>,
  crop?: Maybe<Scalars['String']>,
  aspect_ratio?: Maybe<Scalars['String']>,
  gravity?: Maybe<Scalars['String']>,
  zoom?: Maybe<Scalars['String']>,
  x?: Maybe<Scalars['String']>,
  y?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  fetch_format?: Maybe<Scalars['String']>,
  quality?: Maybe<Scalars['String']>,
  radius?: Maybe<Scalars['String']>,
  angle?: Maybe<Scalars['String']>,
  effect?: Maybe<Scalars['String']>,
  opacity?: Maybe<Scalars['String']>,
  border?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  overlay?: Maybe<Scalars['String']>,
  underlay?: Maybe<Scalars['String']>,
  default_image?: Maybe<Scalars['String']>,
  delay?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  color_space?: Maybe<Scalars['String']>,
  dpr?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['String']>,
  density?: Maybe<Scalars['String']>,
  flags?: Maybe<Scalars['String']>,
  transformation?: Maybe<Scalars['String']>,
};

export type Instrument = {
   __typename?: 'Instrument',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type InstrumentCreateInput = {
  name?: Maybe<Scalars['String']>,
};

export type InstrumentRelateToOneInput = {
  create?: Maybe<InstrumentCreateInput>,
  connect?: Maybe<InstrumentWhereUniqueInput>,
  disconnect?: Maybe<InstrumentWhereUniqueInput>,
  disconnectAll?: Maybe<Scalars['Boolean']>,
};

export type InstrumentsCreateInput = {
  data?: Maybe<InstrumentCreateInput>,
};

export type InstrumentsUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<InstrumentUpdateInput>,
};

export type InstrumentUpdateInput = {
  name?: Maybe<Scalars['String']>,
};

export type InstrumentWhereInput = {
  AND?: Maybe<Array<Maybe<InstrumentWhereInput>>>,
  OR?: Maybe<Array<Maybe<InstrumentWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_i?: Maybe<Scalars['String']>,
  name_not_i?: Maybe<Scalars['String']>,
  name_contains_i?: Maybe<Scalars['String']>,
  name_not_contains_i?: Maybe<Scalars['String']>,
  name_starts_with_i?: Maybe<Scalars['String']>,
  name_not_starts_with_i?: Maybe<Scalars['String']>,
  name_ends_with_i?: Maybe<Scalars['String']>,
  name_not_ends_with_i?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type InstrumentWhereUniqueInput = {
  id: Scalars['ID'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createUser?: Maybe<User>,
  createUsers?: Maybe<Array<Maybe<User>>>,
  updateUser?: Maybe<User>,
  updateUsers?: Maybe<Array<Maybe<User>>>,
  deleteUser?: Maybe<User>,
  deleteUsers?: Maybe<Array<Maybe<User>>>,
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>,
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>,
  createArtist?: Maybe<Artist>,
  createArtists?: Maybe<Array<Maybe<Artist>>>,
  updateArtist?: Maybe<Artist>,
  updateArtists?: Maybe<Array<Maybe<Artist>>>,
  deleteArtist?: Maybe<Artist>,
  deleteArtists?: Maybe<Array<Maybe<Artist>>>,
  createChordChart?: Maybe<ChordChart>,
  createChordCharts?: Maybe<Array<Maybe<ChordChart>>>,
  updateChordChart?: Maybe<ChordChart>,
  updateChordCharts?: Maybe<Array<Maybe<ChordChart>>>,
  deleteChordChart?: Maybe<ChordChart>,
  deleteChordCharts?: Maybe<Array<Maybe<ChordChart>>>,
  createInstrument?: Maybe<Instrument>,
  createInstruments?: Maybe<Array<Maybe<Instrument>>>,
  updateInstrument?: Maybe<Instrument>,
  updateInstruments?: Maybe<Array<Maybe<Instrument>>>,
  deleteInstrument?: Maybe<Instrument>,
  deleteInstruments?: Maybe<Array<Maybe<Instrument>>>,
  createPage?: Maybe<Page>,
  createPages?: Maybe<Array<Maybe<Page>>>,
  updatePage?: Maybe<Page>,
  updatePages?: Maybe<Array<Maybe<Page>>>,
  deletePage?: Maybe<Page>,
  deletePages?: Maybe<Array<Maybe<Page>>>,
  createSetting?: Maybe<Setting>,
  createSettings?: Maybe<Array<Maybe<Setting>>>,
  updateSetting?: Maybe<Setting>,
  updateSettings?: Maybe<Array<Maybe<Setting>>>,
  deleteSetting?: Maybe<Setting>,
  deleteSettings?: Maybe<Array<Maybe<Setting>>>,
  createSong?: Maybe<Song>,
  createSongs?: Maybe<Array<Maybe<Song>>>,
  updateSong?: Maybe<Song>,
  updateSongs?: Maybe<Array<Maybe<Song>>>,
  deleteSong?: Maybe<Song>,
  deleteSongs?: Maybe<Array<Maybe<Song>>>,
  createSongKey?: Maybe<SongKey>,
  createSongKeys?: Maybe<Array<Maybe<SongKey>>>,
  updateSongKey?: Maybe<SongKey>,
  updateSongKeys?: Maybe<Array<Maybe<SongKey>>>,
  deleteSongKey?: Maybe<SongKey>,
  deleteSongKeys?: Maybe<Array<Maybe<SongKey>>>,
  createTutorialVideo?: Maybe<TutorialVideo>,
  createTutorialVideos?: Maybe<Array<Maybe<TutorialVideo>>>,
  updateTutorialVideo?: Maybe<TutorialVideo>,
  updateTutorialVideos?: Maybe<Array<Maybe<TutorialVideo>>>,
  deleteTutorialVideo?: Maybe<TutorialVideo>,
  deleteTutorialVideos?: Maybe<Array<Maybe<TutorialVideo>>>,
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  data?: Maybe<UserUpdateInput>
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
};


export type MutationCreateArtistArgs = {
  data?: Maybe<ArtistCreateInput>
};


export type MutationCreateArtistsArgs = {
  data?: Maybe<Array<Maybe<ArtistsCreateInput>>>
};


export type MutationUpdateArtistArgs = {
  id: Scalars['ID'],
  data?: Maybe<ArtistUpdateInput>
};


export type MutationUpdateArtistsArgs = {
  data?: Maybe<Array<Maybe<ArtistsUpdateInput>>>
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID']
};


export type MutationDeleteArtistsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateChordChartArgs = {
  data?: Maybe<ChordChartCreateInput>
};


export type MutationCreateChordChartsArgs = {
  data?: Maybe<Array<Maybe<ChordChartsCreateInput>>>
};


export type MutationUpdateChordChartArgs = {
  id: Scalars['ID'],
  data?: Maybe<ChordChartUpdateInput>
};


export type MutationUpdateChordChartsArgs = {
  data?: Maybe<Array<Maybe<ChordChartsUpdateInput>>>
};


export type MutationDeleteChordChartArgs = {
  id: Scalars['ID']
};


export type MutationDeleteChordChartsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateInstrumentArgs = {
  data?: Maybe<InstrumentCreateInput>
};


export type MutationCreateInstrumentsArgs = {
  data?: Maybe<Array<Maybe<InstrumentsCreateInput>>>
};


export type MutationUpdateInstrumentArgs = {
  id: Scalars['ID'],
  data?: Maybe<InstrumentUpdateInput>
};


export type MutationUpdateInstrumentsArgs = {
  data?: Maybe<Array<Maybe<InstrumentsUpdateInput>>>
};


export type MutationDeleteInstrumentArgs = {
  id: Scalars['ID']
};


export type MutationDeleteInstrumentsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreatePageArgs = {
  data?: Maybe<PageCreateInput>
};


export type MutationCreatePagesArgs = {
  data?: Maybe<Array<Maybe<PagesCreateInput>>>
};


export type MutationUpdatePageArgs = {
  id: Scalars['ID'],
  data?: Maybe<PageUpdateInput>
};


export type MutationUpdatePagesArgs = {
  data?: Maybe<Array<Maybe<PagesUpdateInput>>>
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']
};


export type MutationDeletePagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateSettingArgs = {
  data?: Maybe<SettingCreateInput>
};


export type MutationCreateSettingsArgs = {
  data?: Maybe<Array<Maybe<SettingsCreateInput>>>
};


export type MutationUpdateSettingArgs = {
  id: Scalars['ID'],
  data?: Maybe<SettingUpdateInput>
};


export type MutationUpdateSettingsArgs = {
  data?: Maybe<Array<Maybe<SettingsUpdateInput>>>
};


export type MutationDeleteSettingArgs = {
  id: Scalars['ID']
};


export type MutationDeleteSettingsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateSongArgs = {
  data?: Maybe<SongCreateInput>
};


export type MutationCreateSongsArgs = {
  data?: Maybe<Array<Maybe<SongsCreateInput>>>
};


export type MutationUpdateSongArgs = {
  id: Scalars['ID'],
  data?: Maybe<SongUpdateInput>
};


export type MutationUpdateSongsArgs = {
  data?: Maybe<Array<Maybe<SongsUpdateInput>>>
};


export type MutationDeleteSongArgs = {
  id: Scalars['ID']
};


export type MutationDeleteSongsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateSongKeyArgs = {
  data?: Maybe<SongKeyCreateInput>
};


export type MutationCreateSongKeysArgs = {
  data?: Maybe<Array<Maybe<SongKeysCreateInput>>>
};


export type MutationUpdateSongKeyArgs = {
  id: Scalars['ID'],
  data?: Maybe<SongKeyUpdateInput>
};


export type MutationUpdateSongKeysArgs = {
  data?: Maybe<Array<Maybe<SongKeysUpdateInput>>>
};


export type MutationDeleteSongKeyArgs = {
  id: Scalars['ID']
};


export type MutationDeleteSongKeysArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type MutationCreateTutorialVideoArgs = {
  data?: Maybe<TutorialVideoCreateInput>
};


export type MutationCreateTutorialVideosArgs = {
  data?: Maybe<Array<Maybe<TutorialVideosCreateInput>>>
};


export type MutationUpdateTutorialVideoArgs = {
  id: Scalars['ID'],
  data?: Maybe<TutorialVideoUpdateInput>
};


export type MutationUpdateTutorialVideosArgs = {
  data?: Maybe<Array<Maybe<TutorialVideosUpdateInput>>>
};


export type MutationDeleteTutorialVideoArgs = {
  id: Scalars['ID']
};


export type MutationDeleteTutorialVideosArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};

export type Page = {
   __typename?: 'Page',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  state?: Maybe<PageStateType>,
  image?: Maybe<CloudinaryImage_File>,
  content?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PageCreateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<PageStateType>,
  image?: Maybe<Scalars['Upload']>,
  content?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
};

export type PagesCreateInput = {
  data?: Maybe<PageCreateInput>,
};

export enum PageStateType {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived'
}

export type PagesUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<PageUpdateInput>,
};

export type PageUpdateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<PageStateType>,
  image?: Maybe<Scalars['Upload']>,
  content?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type PageWhereInput = {
  AND?: Maybe<Array<Maybe<PageWhereInput>>>,
  OR?: Maybe<Array<Maybe<PageWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_i?: Maybe<Scalars['String']>,
  title_not_i?: Maybe<Scalars['String']>,
  title_contains_i?: Maybe<Scalars['String']>,
  title_not_contains_i?: Maybe<Scalars['String']>,
  title_starts_with_i?: Maybe<Scalars['String']>,
  title_not_starts_with_i?: Maybe<Scalars['String']>,
  title_ends_with_i?: Maybe<Scalars['String']>,
  title_not_ends_with_i?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<PageStateType>,
  state_not?: Maybe<PageStateType>,
  state_in?: Maybe<Array<Maybe<PageStateType>>>,
  state_not_in?: Maybe<Array<Maybe<PageStateType>>>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  content?: Maybe<Scalars['String']>,
  content_not?: Maybe<Scalars['String']>,
  content_contains?: Maybe<Scalars['String']>,
  content_not_contains?: Maybe<Scalars['String']>,
  content_starts_with?: Maybe<Scalars['String']>,
  content_not_starts_with?: Maybe<Scalars['String']>,
  content_ends_with?: Maybe<Scalars['String']>,
  content_not_ends_with?: Maybe<Scalars['String']>,
  content_i?: Maybe<Scalars['String']>,
  content_not_i?: Maybe<Scalars['String']>,
  content_contains_i?: Maybe<Scalars['String']>,
  content_not_contains_i?: Maybe<Scalars['String']>,
  content_starts_with_i?: Maybe<Scalars['String']>,
  content_not_starts_with_i?: Maybe<Scalars['String']>,
  content_ends_with_i?: Maybe<Scalars['String']>,
  content_not_ends_with_i?: Maybe<Scalars['String']>,
  content_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  content_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  contactEmail?: Maybe<Scalars['String']>,
  contactEmail_not?: Maybe<Scalars['String']>,
  contactEmail_contains?: Maybe<Scalars['String']>,
  contactEmail_not_contains?: Maybe<Scalars['String']>,
  contactEmail_starts_with?: Maybe<Scalars['String']>,
  contactEmail_not_starts_with?: Maybe<Scalars['String']>,
  contactEmail_ends_with?: Maybe<Scalars['String']>,
  contactEmail_not_ends_with?: Maybe<Scalars['String']>,
  contactEmail_i?: Maybe<Scalars['String']>,
  contactEmail_not_i?: Maybe<Scalars['String']>,
  contactEmail_contains_i?: Maybe<Scalars['String']>,
  contactEmail_not_contains_i?: Maybe<Scalars['String']>,
  contactEmail_starts_with_i?: Maybe<Scalars['String']>,
  contactEmail_not_starts_with_i?: Maybe<Scalars['String']>,
  contactEmail_ends_with_i?: Maybe<Scalars['String']>,
  contactEmail_not_ends_with_i?: Maybe<Scalars['String']>,
  contactEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  contactEmail_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  url_i?: Maybe<Scalars['String']>,
  url_not_i?: Maybe<Scalars['String']>,
  url_contains_i?: Maybe<Scalars['String']>,
  url_not_contains_i?: Maybe<Scalars['String']>,
  url_starts_with_i?: Maybe<Scalars['String']>,
  url_not_starts_with_i?: Maybe<Scalars['String']>,
  url_ends_with_i?: Maybe<Scalars['String']>,
  url_not_ends_with_i?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PageWhereUniqueInput = {
  id: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  allUsers?: Maybe<Array<Maybe<User>>>,
  User?: Maybe<User>,
  _allUsersMeta?: Maybe<_QueryMeta>,
  _UsersMeta?: Maybe<_ListMeta>,
  authenticatedUser?: Maybe<User>,
  allArtists?: Maybe<Array<Maybe<Artist>>>,
  Artist?: Maybe<Artist>,
  _allArtistsMeta?: Maybe<_QueryMeta>,
  _ArtistsMeta?: Maybe<_ListMeta>,
  allChordCharts?: Maybe<Array<Maybe<ChordChart>>>,
  ChordChart?: Maybe<ChordChart>,
  _allChordChartsMeta?: Maybe<_QueryMeta>,
  _ChordChartsMeta?: Maybe<_ListMeta>,
  allInstruments?: Maybe<Array<Maybe<Instrument>>>,
  Instrument?: Maybe<Instrument>,
  _allInstrumentsMeta?: Maybe<_QueryMeta>,
  _InstrumentsMeta?: Maybe<_ListMeta>,
  allPages?: Maybe<Array<Maybe<Page>>>,
  Page?: Maybe<Page>,
  _allPagesMeta?: Maybe<_QueryMeta>,
  _PagesMeta?: Maybe<_ListMeta>,
  allSettings?: Maybe<Array<Maybe<Setting>>>,
  Setting?: Maybe<Setting>,
  _allSettingsMeta?: Maybe<_QueryMeta>,
  _SettingsMeta?: Maybe<_ListMeta>,
  allSongs?: Maybe<Array<Maybe<Song>>>,
  Song?: Maybe<Song>,
  _allSongsMeta?: Maybe<_QueryMeta>,
  _SongsMeta?: Maybe<_ListMeta>,
  allSongKeys?: Maybe<Array<Maybe<SongKey>>>,
  SongKey?: Maybe<SongKey>,
  _allSongKeysMeta?: Maybe<_QueryMeta>,
  _SongKeysMeta?: Maybe<_ListMeta>,
  allTutorialVideos?: Maybe<Array<Maybe<TutorialVideo>>>,
  TutorialVideo?: Maybe<TutorialVideo>,
  _allTutorialVideosMeta?: Maybe<_QueryMeta>,
  _TutorialVideosMeta?: Maybe<_ListMeta>,
  appVersion?: Maybe<Scalars['String']>,
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>,
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type Query_AllArtistsMetaArgs = {
  where?: Maybe<ArtistWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllChordChartsArgs = {
  where?: Maybe<ChordChartWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryChordChartArgs = {
  where: ChordChartWhereUniqueInput
};


export type Query_AllChordChartsMetaArgs = {
  where?: Maybe<ChordChartWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllInstrumentsArgs = {
  where?: Maybe<InstrumentWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryInstrumentArgs = {
  where: InstrumentWhereUniqueInput
};


export type Query_AllInstrumentsMetaArgs = {
  where?: Maybe<InstrumentWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllPagesArgs = {
  where?: Maybe<PageWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput
};


export type Query_AllPagesMetaArgs = {
  where?: Maybe<PageWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllSettingsArgs = {
  where?: Maybe<SettingWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySettingArgs = {
  where: SettingWhereUniqueInput
};


export type Query_AllSettingsMetaArgs = {
  where?: Maybe<SettingWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllSongsArgs = {
  where?: Maybe<SongWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySongArgs = {
  where: SongWhereUniqueInput
};


export type Query_AllSongsMetaArgs = {
  where?: Maybe<SongWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllSongKeysArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QuerySongKeyArgs = {
  where: SongKeyWhereUniqueInput
};


export type Query_AllSongKeysMetaArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryAllTutorialVideosArgs = {
  where?: Maybe<TutorialVideoWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type QueryTutorialVideoArgs = {
  where: TutorialVideoWhereUniqueInput
};


export type Query_AllTutorialVideosMetaArgs = {
  where?: Maybe<TutorialVideoWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type Setting = {
   __typename?: 'Setting',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type SettingCreateInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type SettingsCreateInput = {
  data?: Maybe<SettingCreateInput>,
};

export type SettingsUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<SettingUpdateInput>,
};

export type SettingUpdateInput = {
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type SettingWhereInput = {
  AND?: Maybe<Array<Maybe<SettingWhereInput>>>,
  OR?: Maybe<Array<Maybe<SettingWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_i?: Maybe<Scalars['String']>,
  name_not_i?: Maybe<Scalars['String']>,
  name_contains_i?: Maybe<Scalars['String']>,
  name_not_contains_i?: Maybe<Scalars['String']>,
  name_starts_with_i?: Maybe<Scalars['String']>,
  name_not_starts_with_i?: Maybe<Scalars['String']>,
  name_ends_with_i?: Maybe<Scalars['String']>,
  name_not_ends_with_i?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  value?: Maybe<Scalars['String']>,
  value_not?: Maybe<Scalars['String']>,
  value_contains?: Maybe<Scalars['String']>,
  value_not_contains?: Maybe<Scalars['String']>,
  value_starts_with?: Maybe<Scalars['String']>,
  value_not_starts_with?: Maybe<Scalars['String']>,
  value_ends_with?: Maybe<Scalars['String']>,
  value_not_ends_with?: Maybe<Scalars['String']>,
  value_i?: Maybe<Scalars['String']>,
  value_not_i?: Maybe<Scalars['String']>,
  value_contains_i?: Maybe<Scalars['String']>,
  value_not_contains_i?: Maybe<Scalars['String']>,
  value_starts_with_i?: Maybe<Scalars['String']>,
  value_not_starts_with_i?: Maybe<Scalars['String']>,
  value_ends_with_i?: Maybe<Scalars['String']>,
  value_not_ends_with_i?: Maybe<Scalars['String']>,
  value_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  value_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  slug_not?: Maybe<Scalars['String']>,
  slug_contains?: Maybe<Scalars['String']>,
  slug_not_contains?: Maybe<Scalars['String']>,
  slug_starts_with?: Maybe<Scalars['String']>,
  slug_not_starts_with?: Maybe<Scalars['String']>,
  slug_ends_with?: Maybe<Scalars['String']>,
  slug_not_ends_with?: Maybe<Scalars['String']>,
  slug_i?: Maybe<Scalars['String']>,
  slug_not_i?: Maybe<Scalars['String']>,
  slug_contains_i?: Maybe<Scalars['String']>,
  slug_not_contains_i?: Maybe<Scalars['String']>,
  slug_starts_with_i?: Maybe<Scalars['String']>,
  slug_not_starts_with_i?: Maybe<Scalars['String']>,
  slug_ends_with_i?: Maybe<Scalars['String']>,
  slug_not_ends_with_i?: Maybe<Scalars['String']>,
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SettingWhereUniqueInput = {
  id: Scalars['ID'],
};

export type Song = {
   __typename?: 'Song',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  state?: Maybe<SongStateType>,
  artist?: Maybe<Artist>,
  keys?: Maybe<Array<Maybe<SongKey>>>,
  _keysMeta?: Maybe<_QueryMeta>,
  bpm?: Maybe<Scalars['Int']>,
  timeSignature?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  publishedDate?: Maybe<Scalars['String']>,
  image?: Maybe<CloudinaryImage_File>,
  url?: Maybe<Scalars['String']>,
};


export type SongKeysArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type Song_KeysMetaArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type SongCreateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<SongStateType>,
  artist?: Maybe<ArtistRelateToOneInput>,
  keys?: Maybe<SongKeyRelateToManyInput>,
  bpm?: Maybe<Scalars['Int']>,
  timeSignature?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
};

export type SongKey = {
   __typename?: 'SongKey',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type SongKeyCreateInput = {
  name?: Maybe<Scalars['String']>,
};

export type SongKeyRelateToManyInput = {
  create?: Maybe<Array<Maybe<SongKeyCreateInput>>>,
  connect?: Maybe<Array<Maybe<SongKeyWhereUniqueInput>>>,
  disconnect?: Maybe<Array<Maybe<SongKeyWhereUniqueInput>>>,
  disconnectAll?: Maybe<Scalars['Boolean']>,
};

export type SongKeysCreateInput = {
  data?: Maybe<SongKeyCreateInput>,
};

export type SongKeysUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<SongKeyUpdateInput>,
};

export type SongKeyUpdateInput = {
  name?: Maybe<Scalars['String']>,
};

export type SongKeyWhereInput = {
  AND?: Maybe<Array<Maybe<SongKeyWhereInput>>>,
  OR?: Maybe<Array<Maybe<SongKeyWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_i?: Maybe<Scalars['String']>,
  name_not_i?: Maybe<Scalars['String']>,
  name_contains_i?: Maybe<Scalars['String']>,
  name_not_contains_i?: Maybe<Scalars['String']>,
  name_starts_with_i?: Maybe<Scalars['String']>,
  name_not_starts_with_i?: Maybe<Scalars['String']>,
  name_ends_with_i?: Maybe<Scalars['String']>,
  name_not_ends_with_i?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SongKeyWhereUniqueInput = {
  id: Scalars['ID'],
};

export type SongRelateToManyInput = {
  create?: Maybe<Array<Maybe<SongCreateInput>>>,
  connect?: Maybe<Array<Maybe<SongWhereUniqueInput>>>,
  disconnect?: Maybe<Array<Maybe<SongWhereUniqueInput>>>,
  disconnectAll?: Maybe<Scalars['Boolean']>,
};

export type SongRelateToOneInput = {
  create?: Maybe<SongCreateInput>,
  connect?: Maybe<SongWhereUniqueInput>,
  disconnect?: Maybe<SongWhereUniqueInput>,
  disconnectAll?: Maybe<Scalars['Boolean']>,
};

export type SongsCreateInput = {
  data?: Maybe<SongCreateInput>,
};

export enum SongStateType {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived'
}

export type SongsUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<SongUpdateInput>,
};

export type SongUpdateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<SongStateType>,
  artist?: Maybe<ArtistRelateToOneInput>,
  keys?: Maybe<SongKeyRelateToManyInput>,
  bpm?: Maybe<Scalars['Int']>,
  timeSignature?: Maybe<Scalars['String']>,
  length?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['Upload']>,
  url?: Maybe<Scalars['String']>,
};

export type SongWhereInput = {
  AND?: Maybe<Array<Maybe<SongWhereInput>>>,
  OR?: Maybe<Array<Maybe<SongWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_i?: Maybe<Scalars['String']>,
  title_not_i?: Maybe<Scalars['String']>,
  title_contains_i?: Maybe<Scalars['String']>,
  title_not_contains_i?: Maybe<Scalars['String']>,
  title_starts_with_i?: Maybe<Scalars['String']>,
  title_not_starts_with_i?: Maybe<Scalars['String']>,
  title_ends_with_i?: Maybe<Scalars['String']>,
  title_not_ends_with_i?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<SongStateType>,
  state_not?: Maybe<SongStateType>,
  state_in?: Maybe<Array<Maybe<SongStateType>>>,
  state_not_in?: Maybe<Array<Maybe<SongStateType>>>,
  artist?: Maybe<ArtistWhereInput>,
  artist_is_null?: Maybe<Scalars['Boolean']>,
  keys_every?: Maybe<SongKeyWhereInput>,
  keys_some?: Maybe<SongKeyWhereInput>,
  keys_none?: Maybe<SongKeyWhereInput>,
  keys_is_null?: Maybe<Scalars['Boolean']>,
  bpm?: Maybe<Scalars['Int']>,
  bpm_not?: Maybe<Scalars['Int']>,
  bpm_lt?: Maybe<Scalars['Int']>,
  bpm_lte?: Maybe<Scalars['Int']>,
  bpm_gt?: Maybe<Scalars['Int']>,
  bpm_gte?: Maybe<Scalars['Int']>,
  bpm_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  bpm_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  timeSignature?: Maybe<Scalars['String']>,
  timeSignature_not?: Maybe<Scalars['String']>,
  timeSignature_contains?: Maybe<Scalars['String']>,
  timeSignature_not_contains?: Maybe<Scalars['String']>,
  timeSignature_starts_with?: Maybe<Scalars['String']>,
  timeSignature_not_starts_with?: Maybe<Scalars['String']>,
  timeSignature_ends_with?: Maybe<Scalars['String']>,
  timeSignature_not_ends_with?: Maybe<Scalars['String']>,
  timeSignature_i?: Maybe<Scalars['String']>,
  timeSignature_not_i?: Maybe<Scalars['String']>,
  timeSignature_contains_i?: Maybe<Scalars['String']>,
  timeSignature_not_contains_i?: Maybe<Scalars['String']>,
  timeSignature_starts_with_i?: Maybe<Scalars['String']>,
  timeSignature_not_starts_with_i?: Maybe<Scalars['String']>,
  timeSignature_ends_with_i?: Maybe<Scalars['String']>,
  timeSignature_not_ends_with_i?: Maybe<Scalars['String']>,
  timeSignature_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  timeSignature_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  length?: Maybe<Scalars['String']>,
  length_not?: Maybe<Scalars['String']>,
  length_contains?: Maybe<Scalars['String']>,
  length_not_contains?: Maybe<Scalars['String']>,
  length_starts_with?: Maybe<Scalars['String']>,
  length_not_starts_with?: Maybe<Scalars['String']>,
  length_ends_with?: Maybe<Scalars['String']>,
  length_not_ends_with?: Maybe<Scalars['String']>,
  length_i?: Maybe<Scalars['String']>,
  length_not_i?: Maybe<Scalars['String']>,
  length_contains_i?: Maybe<Scalars['String']>,
  length_not_contains_i?: Maybe<Scalars['String']>,
  length_starts_with_i?: Maybe<Scalars['String']>,
  length_not_starts_with_i?: Maybe<Scalars['String']>,
  length_ends_with_i?: Maybe<Scalars['String']>,
  length_not_ends_with_i?: Maybe<Scalars['String']>,
  length_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  length_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedDate?: Maybe<Scalars['String']>,
  publishedDate_not?: Maybe<Scalars['String']>,
  publishedDate_lt?: Maybe<Scalars['String']>,
  publishedDate_lte?: Maybe<Scalars['String']>,
  publishedDate_gt?: Maybe<Scalars['String']>,
  publishedDate_gte?: Maybe<Scalars['String']>,
  publishedDate_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  url_i?: Maybe<Scalars['String']>,
  url_not_i?: Maybe<Scalars['String']>,
  url_contains_i?: Maybe<Scalars['String']>,
  url_not_contains_i?: Maybe<Scalars['String']>,
  url_starts_with_i?: Maybe<Scalars['String']>,
  url_not_starts_with_i?: Maybe<Scalars['String']>,
  url_ends_with_i?: Maybe<Scalars['String']>,
  url_not_ends_with_i?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SongWhereUniqueInput = {
  id: Scalars['ID'],
};

export type TutorialVideo = {
   __typename?: 'TutorialVideo',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  state?: Maybe<TutorialVideoStateType>,
  song?: Maybe<Song>,
  instrument?: Maybe<Instrument>,
  videoUrl?: Maybe<Scalars['String']>,
  publishedDate?: Maybe<Scalars['String']>,
  keys?: Maybe<Array<Maybe<SongKey>>>,
  _keysMeta?: Maybe<_QueryMeta>,
};


export type TutorialVideoKeysArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type TutorialVideo_KeysMetaArgs = {
  where?: Maybe<SongKeyWhereInput>,
  search?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

export type TutorialVideoCreateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<TutorialVideoStateType>,
  song?: Maybe<SongRelateToOneInput>,
  instrument?: Maybe<InstrumentRelateToOneInput>,
  videoUrl?: Maybe<Scalars['String']>,
  publishedDate?: Maybe<Scalars['String']>,
  keys?: Maybe<SongKeyRelateToManyInput>,
};

export type TutorialVideosCreateInput = {
  data?: Maybe<TutorialVideoCreateInput>,
};

export enum TutorialVideoStateType {
  Draft = 'draft',
  Published = 'published',
  Archived = 'archived'
}

export type TutorialVideosUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<TutorialVideoUpdateInput>,
};

export type TutorialVideoUpdateInput = {
  title?: Maybe<Scalars['String']>,
  state?: Maybe<TutorialVideoStateType>,
  song?: Maybe<SongRelateToOneInput>,
  instrument?: Maybe<InstrumentRelateToOneInput>,
  videoUrl?: Maybe<Scalars['String']>,
  publishedDate?: Maybe<Scalars['String']>,
  keys?: Maybe<SongKeyRelateToManyInput>,
};

export type TutorialVideoWhereInput = {
  AND?: Maybe<Array<Maybe<TutorialVideoWhereInput>>>,
  OR?: Maybe<Array<Maybe<TutorialVideoWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  title_i?: Maybe<Scalars['String']>,
  title_not_i?: Maybe<Scalars['String']>,
  title_contains_i?: Maybe<Scalars['String']>,
  title_not_contains_i?: Maybe<Scalars['String']>,
  title_starts_with_i?: Maybe<Scalars['String']>,
  title_not_starts_with_i?: Maybe<Scalars['String']>,
  title_ends_with_i?: Maybe<Scalars['String']>,
  title_not_ends_with_i?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<TutorialVideoStateType>,
  state_not?: Maybe<TutorialVideoStateType>,
  state_in?: Maybe<Array<Maybe<TutorialVideoStateType>>>,
  state_not_in?: Maybe<Array<Maybe<TutorialVideoStateType>>>,
  song?: Maybe<SongWhereInput>,
  song_is_null?: Maybe<Scalars['Boolean']>,
  instrument?: Maybe<InstrumentWhereInput>,
  instrument_is_null?: Maybe<Scalars['Boolean']>,
  videoUrl?: Maybe<Scalars['String']>,
  videoUrl_not?: Maybe<Scalars['String']>,
  videoUrl_contains?: Maybe<Scalars['String']>,
  videoUrl_not_contains?: Maybe<Scalars['String']>,
  videoUrl_starts_with?: Maybe<Scalars['String']>,
  videoUrl_not_starts_with?: Maybe<Scalars['String']>,
  videoUrl_ends_with?: Maybe<Scalars['String']>,
  videoUrl_not_ends_with?: Maybe<Scalars['String']>,
  videoUrl_i?: Maybe<Scalars['String']>,
  videoUrl_not_i?: Maybe<Scalars['String']>,
  videoUrl_contains_i?: Maybe<Scalars['String']>,
  videoUrl_not_contains_i?: Maybe<Scalars['String']>,
  videoUrl_starts_with_i?: Maybe<Scalars['String']>,
  videoUrl_not_starts_with_i?: Maybe<Scalars['String']>,
  videoUrl_ends_with_i?: Maybe<Scalars['String']>,
  videoUrl_not_ends_with_i?: Maybe<Scalars['String']>,
  videoUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  videoUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedDate?: Maybe<Scalars['String']>,
  publishedDate_not?: Maybe<Scalars['String']>,
  publishedDate_lt?: Maybe<Scalars['String']>,
  publishedDate_lte?: Maybe<Scalars['String']>,
  publishedDate_gt?: Maybe<Scalars['String']>,
  publishedDate_gte?: Maybe<Scalars['String']>,
  publishedDate_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  publishedDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  keys_every?: Maybe<SongKeyWhereInput>,
  keys_some?: Maybe<SongKeyWhereInput>,
  keys_none?: Maybe<SongKeyWhereInput>,
  keys_is_null?: Maybe<Scalars['Boolean']>,
};

export type TutorialVideoWhereUniqueInput = {
  id: Scalars['ID'],
};

export type UnauthenticateUserOutput = {
   __typename?: 'unauthenticateUserOutput',
  success?: Maybe<Scalars['Boolean']>,
};


export type User = {
   __typename?: 'User',
  _label_?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  password_is_set?: Maybe<Scalars['Boolean']>,
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  password?: Maybe<Scalars['String']>,
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>,
};

export type UsersUpdateInput = {
  id: Scalars['ID'],
  data?: Maybe<UserUpdateInput>,
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  password?: Maybe<Scalars['String']>,
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>,
  OR?: Maybe<Array<Maybe<UserWhereInput>>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  name_i?: Maybe<Scalars['String']>,
  name_not_i?: Maybe<Scalars['String']>,
  name_contains_i?: Maybe<Scalars['String']>,
  name_not_contains_i?: Maybe<Scalars['String']>,
  name_starts_with_i?: Maybe<Scalars['String']>,
  name_not_starts_with_i?: Maybe<Scalars['String']>,
  name_ends_with_i?: Maybe<Scalars['String']>,
  name_not_ends_with_i?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  email_i?: Maybe<Scalars['String']>,
  email_not_i?: Maybe<Scalars['String']>,
  email_contains_i?: Maybe<Scalars['String']>,
  email_not_contains_i?: Maybe<Scalars['String']>,
  email_starts_with_i?: Maybe<Scalars['String']>,
  email_not_starts_with_i?: Maybe<Scalars['String']>,
  email_ends_with_i?: Maybe<Scalars['String']>,
  email_not_ends_with_i?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  isAdmin?: Maybe<Scalars['Boolean']>,
  isAdmin_not?: Maybe<Scalars['Boolean']>,
  password_is_set?: Maybe<Scalars['Boolean']>,
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'],
};

export type GetPageQueryVariables = {
  url: Scalars['String']
};


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { allPages: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'title' | 'state' | 'content' | 'contactEmail'>
    & { image: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrl'>
    )> }
  )>>> }
);

export type GetPagesQueryVariables = {};


export type GetPagesQuery = (
  { __typename?: 'Query' }
  & { allPages: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'title' | 'url'>
  )>>> }
);

export type GetSettingQueryVariables = {
  slug: Scalars['String']
};


export type GetSettingQuery = (
  { __typename?: 'Query' }
  & { allSettings: Maybe<Array<Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'name' | 'value'>
  )>>> }
);

export type GetSongQueryVariables = {
  url?: Maybe<Scalars['String']>
};


export type GetSongQuery = (
  { __typename?: 'Query' }
  & { allSongs: Maybe<Array<Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title'>
    & { artist: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'description'>
    )>, image: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrl'>
    )> }
  )>>> }
);

export type GetAllSongsQueryVariables = {
  offset?: Maybe<Scalars['Int']>,
  pageLength?: Maybe<Scalars['Int']>
};


export type GetAllSongsQuery = (
  { __typename?: 'Query' }
  & { allSongs: Maybe<Array<Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url'>
    & { artist: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'description'>
    )>, image: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrl'>
    )> }
  )>>> }
);

export type GetAllSongsMetaQueryVariables = {};


export type GetAllSongsMetaQuery = (
  { __typename?: 'Query' }
  & { _allSongsMeta: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type GetRecentSongsQueryVariables = {};


export type GetRecentSongsQuery = (
  { __typename?: 'Query' }
  & { allSongs: Maybe<Array<Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url'>
    & { artist: Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'description'>
    )>, image: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrl'>
    )> }
  )>>> }
);


export const GetPageDocument = gql`
    query getPage($url: String!) {
  allPages(where: {url: $url}, first: 1) {
    id
    title
    state
    image {
      publicUrl
    }
    content
    contactEmail
  }
}
    `;
export type GetPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPageQuery, GetPageQueryVariables>, 'query'> & ({ variables: GetPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPageComponent = (props: GetPageComponentProps) => (
      <ApolloReactComponents.Query<GetPageQuery, GetPageQueryVariables> query={GetPageDocument} {...props} />
    );
    
export type GetPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetPageQuery, GetPageQueryVariables> & TChildProps;
export function withGetPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPageQuery,
  GetPageQueryVariables,
  GetPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetPageQuery, GetPageQueryVariables, GetPageProps<TChildProps>>(GetPageDocument, {
      alias: 'getPage',
      ...operationOptions
    });
};

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
      }
export function useGetPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = ApolloReactCommon.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const GetPagesDocument = gql`
    query getPages {
  allPages(where: {state: published}, first: 3) {
    title
    url
  }
}
    `;
export type GetPagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPagesQuery, GetPagesQueryVariables>, 'query'>;

    export const GetPagesComponent = (props: GetPagesComponentProps) => (
      <ApolloReactComponents.Query<GetPagesQuery, GetPagesQueryVariables> query={GetPagesDocument} {...props} />
    );
    
export type GetPagesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetPagesQuery, GetPagesQueryVariables> & TChildProps;
export function withGetPages<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPagesQuery,
  GetPagesQueryVariables,
  GetPagesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetPagesQuery, GetPagesQueryVariables, GetPagesProps<TChildProps>>(GetPagesDocument, {
      alias: 'getPages',
      ...operationOptions
    });
};

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
      }
export function useGetPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = ApolloReactCommon.QueryResult<GetPagesQuery, GetPagesQueryVariables>;
export const GetSettingDocument = gql`
    query getSetting($slug: String!) {
  allSettings(where: {slug: $slug}, first: 1) {
    name
    value
  }
}
    `;
export type GetSettingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSettingQuery, GetSettingQueryVariables>, 'query'> & ({ variables: GetSettingQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetSettingComponent = (props: GetSettingComponentProps) => (
      <ApolloReactComponents.Query<GetSettingQuery, GetSettingQueryVariables> query={GetSettingDocument} {...props} />
    );
    
export type GetSettingProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSettingQuery, GetSettingQueryVariables> & TChildProps;
export function withGetSetting<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSettingQuery,
  GetSettingQueryVariables,
  GetSettingProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSettingQuery, GetSettingQueryVariables, GetSettingProps<TChildProps>>(GetSettingDocument, {
      alias: 'getSetting',
      ...operationOptions
    });
};

/**
 * __useGetSettingQuery__
 *
 * To run a query within a React component, call `useGetSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSettingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, baseOptions);
      }
export function useGetSettingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, baseOptions);
        }
export type GetSettingQueryHookResult = ReturnType<typeof useGetSettingQuery>;
export type GetSettingLazyQueryHookResult = ReturnType<typeof useGetSettingLazyQuery>;
export type GetSettingQueryResult = ApolloReactCommon.QueryResult<GetSettingQuery, GetSettingQueryVariables>;
export const GetSongDocument = gql`
    query getSong($url: String) {
  allSongs(where: {url: $url}, first: 1) {
    id
    title
    artist {
      description
    }
    image {
      publicUrl
    }
  }
}
    `;
export type GetSongComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSongQuery, GetSongQueryVariables>, 'query'>;

    export const GetSongComponent = (props: GetSongComponentProps) => (
      <ApolloReactComponents.Query<GetSongQuery, GetSongQueryVariables> query={GetSongDocument} {...props} />
    );
    
export type GetSongProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSongQuery, GetSongQueryVariables> & TChildProps;
export function withGetSong<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSongQuery,
  GetSongQueryVariables,
  GetSongProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSongQuery, GetSongQueryVariables, GetSongProps<TChildProps>>(GetSongDocument, {
      alias: 'getSong',
      ...operationOptions
    });
};

/**
 * __useGetSongQuery__
 *
 * To run a query within a React component, call `useGetSongQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetSongQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, baseOptions);
      }
export function useGetSongLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSongQuery, GetSongQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSongQuery, GetSongQueryVariables>(GetSongDocument, baseOptions);
        }
export type GetSongQueryHookResult = ReturnType<typeof useGetSongQuery>;
export type GetSongLazyQueryHookResult = ReturnType<typeof useGetSongLazyQuery>;
export type GetSongQueryResult = ApolloReactCommon.QueryResult<GetSongQuery, GetSongQueryVariables>;
export const GetAllSongsDocument = gql`
    query getAllSongs($offset: Int, $pageLength: Int) {
  allSongs(where: {state: published}, orderBy: "title", first: $pageLength, skip: $offset) {
    id
    title
    url
    artist {
      description
    }
    image {
      publicUrl
    }
  }
}
    `;
export type GetAllSongsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllSongsQuery, GetAllSongsQueryVariables>, 'query'>;

    export const GetAllSongsComponent = (props: GetAllSongsComponentProps) => (
      <ApolloReactComponents.Query<GetAllSongsQuery, GetAllSongsQueryVariables> query={GetAllSongsDocument} {...props} />
    );
    
export type GetAllSongsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllSongsQuery, GetAllSongsQueryVariables> & TChildProps;
export function withGetAllSongs<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllSongsQuery,
  GetAllSongsQueryVariables,
  GetAllSongsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllSongsQuery, GetAllSongsQueryVariables, GetAllSongsProps<TChildProps>>(GetAllSongsDocument, {
      alias: 'getAllSongs',
      ...operationOptions
    });
};

/**
 * __useGetAllSongsQuery__
 *
 * To run a query within a React component, call `useGetAllSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSongsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      pageLength: // value for 'pageLength'
 *   },
 * });
 */
export function useGetAllSongsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllSongsQuery, GetAllSongsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllSongsQuery, GetAllSongsQueryVariables>(GetAllSongsDocument, baseOptions);
      }
export function useGetAllSongsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllSongsQuery, GetAllSongsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllSongsQuery, GetAllSongsQueryVariables>(GetAllSongsDocument, baseOptions);
        }
export type GetAllSongsQueryHookResult = ReturnType<typeof useGetAllSongsQuery>;
export type GetAllSongsLazyQueryHookResult = ReturnType<typeof useGetAllSongsLazyQuery>;
export type GetAllSongsQueryResult = ApolloReactCommon.QueryResult<GetAllSongsQuery, GetAllSongsQueryVariables>;
export const GetAllSongsMetaDocument = gql`
    query getAllSongsMeta {
  _allSongsMeta(where: {state: published}) {
    count
  }
}
    `;
export type GetAllSongsMetaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>, 'query'>;

    export const GetAllSongsMetaComponent = (props: GetAllSongsMetaComponentProps) => (
      <ApolloReactComponents.Query<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables> query={GetAllSongsMetaDocument} {...props} />
    );
    
export type GetAllSongsMetaProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables> & TChildProps;
export function withGetAllSongsMeta<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllSongsMetaQuery,
  GetAllSongsMetaQueryVariables,
  GetAllSongsMetaProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables, GetAllSongsMetaProps<TChildProps>>(GetAllSongsMetaDocument, {
      alias: 'getAllSongsMeta',
      ...operationOptions
    });
};

/**
 * __useGetAllSongsMetaQuery__
 *
 * To run a query within a React component, call `useGetAllSongsMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSongsMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSongsMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSongsMetaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>(GetAllSongsMetaDocument, baseOptions);
      }
export function useGetAllSongsMetaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>(GetAllSongsMetaDocument, baseOptions);
        }
export type GetAllSongsMetaQueryHookResult = ReturnType<typeof useGetAllSongsMetaQuery>;
export type GetAllSongsMetaLazyQueryHookResult = ReturnType<typeof useGetAllSongsMetaLazyQuery>;
export type GetAllSongsMetaQueryResult = ApolloReactCommon.QueryResult<GetAllSongsMetaQuery, GetAllSongsMetaQueryVariables>;
export const GetRecentSongsDocument = gql`
    query getRecentSongs {
  allSongs(where: {state: published}, orderBy: "publishedDate_DESC", first: 6) {
    id
    title
    url
    artist {
      description
    }
    image {
      publicUrl
    }
  }
}
    `;
export type GetRecentSongsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetRecentSongsQuery, GetRecentSongsQueryVariables>, 'query'>;

    export const GetRecentSongsComponent = (props: GetRecentSongsComponentProps) => (
      <ApolloReactComponents.Query<GetRecentSongsQuery, GetRecentSongsQueryVariables> query={GetRecentSongsDocument} {...props} />
    );
    
export type GetRecentSongsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetRecentSongsQuery, GetRecentSongsQueryVariables> & TChildProps;
export function withGetRecentSongs<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetRecentSongsQuery,
  GetRecentSongsQueryVariables,
  GetRecentSongsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetRecentSongsQuery, GetRecentSongsQueryVariables, GetRecentSongsProps<TChildProps>>(GetRecentSongsDocument, {
      alias: 'getRecentSongs',
      ...operationOptions
    });
};

/**
 * __useGetRecentSongsQuery__
 *
 * To run a query within a React component, call `useGetRecentSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentSongsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecentSongsQuery, GetRecentSongsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecentSongsQuery, GetRecentSongsQueryVariables>(GetRecentSongsDocument, baseOptions);
      }
export function useGetRecentSongsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecentSongsQuery, GetRecentSongsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecentSongsQuery, GetRecentSongsQueryVariables>(GetRecentSongsDocument, baseOptions);
        }
export type GetRecentSongsQueryHookResult = ReturnType<typeof useGetRecentSongsQuery>;
export type GetRecentSongsLazyQueryHookResult = ReturnType<typeof useGetRecentSongsLazyQuery>;
export type GetRecentSongsQueryResult = ApolloReactCommon.QueryResult<GetRecentSongsQuery, GetRecentSongsQueryVariables>;