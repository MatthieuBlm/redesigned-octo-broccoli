import { Router } from 'express';
import { ResourceName, resourceModels } from '../models/resources.js';

export function createResourceRouter(resourceName: ResourceName) {
  const router = Router();
  const Resource = resourceModels[resourceName];

  router.get('/', async (_request, response) => {
    try {
      const records = await Resource.find().sort({ createdAt: -1 }).lean();
      response.json(records);
    } catch (error) {
      response.status(500).json({ error: `Unable to load ${resourceName}`, details: error });
    }
  });

  router.get('/:id', async (request, response) => {
    try {
      const record = await Resource.findById(request.params.id).lean();
      if (!record) {
        response.status(404).json({ error: `${resourceName} record not found` });
        return;
      }
      response.json(record);
    } catch (error) {
      response.status(400).json({ error: `Invalid ${resourceName} id`, details: error });
    }
  });

  router.post('/', async (request, response) => {
    try {
      const record = await Resource.create(request.body);
      response.status(201).json(record);
    } catch (error) {
      response.status(400).json({ error: `Unable to create ${resourceName} record`, details: error });
    }
  });

  return router;
}