import { SubMenu, TopMenu } from "~/model/layout/header";

export enum MENU_TYPE {
  CURRENCY = "CURRENCY",
  LANGUAGE = "LANGUAGE",
  ACCOUNT = "ACCOUNT",
}

export const topMenus: TopMenu[] = [
  {
    uuid: MENU_TYPE.CURRENCY,
    subMenus: [
      {
        id: 'usd',
        name: 'USD',
        link: '#'
      },
      {
        id: 'eur',
        name: 'EUR',
        link: '#'
      },
      {
        id: 'vnd',
        name: 'VND',
        link: '#'
      },
      {
        id: 'aud',
        name: 'AUD',
        link: '#'
      },
      {
        id: 'gbp',
        name: 'GBP',
        link: '#'
      }
    ]
  },
  {
    uuid: MENU_TYPE.LANGUAGE,
    subMenus: [
      {
        id: 'en',
        name: 'English',
        link: '#'
      },
      {
        id: 'fr',
        name: 'French',
        link: '#'
      },
      {
        id: 'gr',
        name: 'German',
        link: '#'
      },
      {
        id: 'es',
        name: 'Spanish',
        link: '#'
      }
    ]
  },
  {
    uuid: MENU_TYPE.ACCOUNT,
    name: 'My Account',
    subMenus: [
      {
        id: 'sign-in',
        name: 'Sign in',
        icon: 'fa fa-sign-in',
        link: { path: '/signin-signup', hash: '#sign-in' }
      },
      {
        id: 'register',
        name: 'Register',
        icon: 'fa fa-user-plus',
        link: { path: '/signin-signup', hash: '#sign-up' }
      },
    ]
  }
]

export const loggedInSubMenu: SubMenu[] = [
  {
    id: 'personal-info',
    name: 'Personal Info',
    icon: 'fa fa-user',
    link: { path: '/user' }
  },
  {
    id: 'my-order',
    name: 'My Orders',
    icon: 'fa fa-list',
    link: { path: '/order' }
  },
  {
    id: 'sign-out',
    name: 'Sign out',
    icon: 'fa fa-sign-out',
    link: { path: '#' }
  },
]
