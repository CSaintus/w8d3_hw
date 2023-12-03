import { Item } from './Item';

export type User = {
  id: string;
  name: string;
  age: number;
  cart: Item[];
};
