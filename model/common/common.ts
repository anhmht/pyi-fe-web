export interface List {
  sort: string
  limit: number
  page: number
}

export enum STEP_STATUS {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export interface Step {
  id: number,
  name: string,
  status?: STEP_STATUS,
}

export interface Modal {
  name: string,
  isOpen: boolean,
  data?: any,
}
