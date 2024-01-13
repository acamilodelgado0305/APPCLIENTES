const { Router } = require("express");
const router = Router();

const {getClients,getClient, createClients,updateClient,deleteClient} = require('../controllers/clients.controller');

router
  .route("/")
  .get(getClients)
  .post(createClients)

router
    .route('/:id')
    .get(getClient)
    .put(updateClient)
    .delete(deleteClient);

module.exports = router;
