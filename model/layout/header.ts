export interface SubMenu {
  id: string
  name: string
  link: string | Object
  icon?: string
  action?: string
  isAdmin?: boolean
}
export interface TopMenu {
  uuid: string
  name?: string
  subMenus: SubMenu[]
}

export interface MainMenu {
  uuid: string
  name: string
  path: string
}
