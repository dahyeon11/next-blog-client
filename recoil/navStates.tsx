import { atom } from 'recoil'

export interface INavTypes {
    isOpen: boolean;
}

export const isOpenState = atom<boolean>({
    key: 'navIsOpenState',
    
    default: false,
  });