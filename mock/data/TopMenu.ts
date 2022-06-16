import { TopMenu } from "~/model/layout/header";

export const topMenus: TopMenu[] = [
  {
    uuid: '1',
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
    uuid: '2',
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
    uuid: '3',
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
