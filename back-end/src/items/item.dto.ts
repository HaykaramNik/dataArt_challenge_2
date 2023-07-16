export interface BaseItemDTO {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface ItemDTO extends BaseItemDTO {
  id: number;
};
