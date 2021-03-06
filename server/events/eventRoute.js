const express = require('express');
const eventCtrl = require('./eventCtrl');
const Joi = require('joi');
const { validateSchema } = require('../utils/validate');
const commentRoute = require('../comments/commentRoute')
const eventRoute = module.exports = express.Router();

eventRoute.get('?location');
eventRoute.post('?location');

eventRoute.get('/:event_id');
eventRoute.delete('/:event_id');
eventRoute.patch('/:event_id');

eventRoute.use('/:event_id/comments', commentRoute)

