import {TrashType} from '../assets/icons';

const {
  Plastic,
  Eletronic,
  Glass,
  Metals,
  Paper,
  Organic,
  Cloth,
  Battery,
  Bulb,
} = TrashType;

export interface ItemRecyclePointType {
  id: number;
  name: string;
  value: string;
  icon: any;
}

export const mockTypeRecyclePoint: ItemRecyclePointType[] = [
  {id: 4, name: 'Metal', value: 'metal', icon: Metals},
  {id: 5, name: 'Papel', value: 'paper', icon: Paper},
  {id: 3, name: 'Vidro', value: 'glass', icon: Glass},
  {id: 1, name: 'Plastico', value: 'plastic', icon: Plastic},
  {id: 2, name: 'Eletronico', value: 'eletronic', icon: Eletronic},
  {id: 9, name: 'Bateria', value: 'batterie', icon: Battery},
  {id: 10, name: 'Lâmpadas', value: 'light', icon: Bulb},
  {id: 7, name: 'Organico', value: 'organic', icon: Organic},
  {id: 8, name: 'Tecido', value: 'tissue', icon: Cloth},
];
