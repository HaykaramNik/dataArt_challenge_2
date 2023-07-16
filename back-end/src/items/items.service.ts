/**
 * Data Model Interfaces
 */

import { BaseItemDTO, ItemDTO } from './item.dto';
import Item from './item.entity';

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => {
  
  const items: Item[] = await Item.findAll();
  return items;
};

export const find = async (id: number): Promise<Item | null> =>
  await Item.findByPk(id);

export const create = async (newItem: BaseItemDTO): Promise<Item> => {
  const item = await Item.create({
    description: newItem.description,
    image: newItem.image,
    name: newItem.name,
    price: newItem.price,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return item;
};

export const update = async (
  id: number,
  itemUpdate: BaseItemDTO
): Promise<Item | null> => {
  const item = await Item.findByPk(id);

  if (!item) {
    return null;
  }

  await Item.update(
    {
      ...itemUpdate,
      updatedAt: new Date()
    },
    {
      where: {
        id: id,
      },
    }
  );

  return await Item.findByPk(id);
};

export const remove = async (id: number): Promise<null | void> => {
  let item = await Item.findByPk(id);

  if (!item) {
    return null;
  }

  await Item.destroy({
    where: {
      id: id,
    },
  });
};
