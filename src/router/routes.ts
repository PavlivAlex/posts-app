// helpers
import { IRoute } from '../interfaces/router';

// components
import HomePage from '../pages/HomePage/HomePage';
import PostsPage from '../pages/PostsPage/PostsPage';
import PostInfoPage from '../pages/PostInfoPage/PostInfoPage';

export enum RoutesEnum {
  Home = '/',
  Posts = '/posts',
  PostInfo = '/posts/:id',
}

export const routes: IRoute[] = [
  {
    path: RoutesEnum.Home,
    title: 'Welcome',
    component: HomePage,
  },
  {
    path: RoutesEnum.Posts,
    title: 'Posts',
    component: PostsPage,
  },
  {
    path: RoutesEnum.PostInfo,
    title: 'Post',
    component: PostInfoPage,
  },
];
