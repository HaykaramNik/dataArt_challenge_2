/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as ItemService from './items.service';
import { BaseItemDTO, ItemDTO } from './item.dto';
import Item from './item.entity';

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get('/', async (req: Request, res: Response) => {
  try {
    
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    } else {
      res.status(500).send(String(e));
    }
  }
});

// GET items/:id

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Item | null = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send('item not found');
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    } else {
      res.status(500).send(String(e));
    }
  }
});

// POST items

itemsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const item: BaseItemDTO = req.body;

    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    } else {
      res.status(500).send(String(e));
    }
  }
});

// PUT items/:id

itemsRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: ItemDTO = req.body;

    const existingItem: Item | null = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    } else {
      res.status(500).send(String(e));
    }
  }
});

// DELETE items/:id

itemsRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);

    res.sendStatus(204);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    } else {
      res.status(500).send(String(e));
    }
  }
});
