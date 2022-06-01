export interface SubMenu {
  id: string
  name: string
  link: string
  icon?: string
  action?: string
}
export interface TopMenu {
  uuid: string
  name?: string
  subMenus: SubMenu[]
}

export interface MainMenu {
  uuid: string
  name: string
  url: string
}
