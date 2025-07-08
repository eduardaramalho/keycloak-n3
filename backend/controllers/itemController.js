import items from '../data/database.js';

export const getItems = (req, res) => {
  res.json(items);
};

export const createItem = (req, res) => {
  const newItem = { id: Date.now(), text: req.body.text };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).send();
  item.text = req.body.text;
  res.json(item);
};

export const deleteItem = (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index === -1) return res.status(404).send();
  items.splice(index, 1);
  res.status(204).send();
};
