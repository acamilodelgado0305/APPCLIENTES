const { Router } = require("express");
const router = Router();

const {getContrats, getContrat, createContrat,updateContrat,deleteContrat} = require('../controllers/contrats.controller');

router
  .route("/")
  .get(getContrats)
  .post(createContrat)

router
    .route('/:id')
    .get(getContrat)
    .put(updateContrat)
    .delete(deleteContrat);

module.exports = router;
