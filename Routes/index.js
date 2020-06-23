const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const app = express();
const hospital_model = require('../model/hospital_model');
const hospital = require('../domain/hospital');

router.get('/', async (req, res) => {
  const hospital_model = await hospital.find();
  res.render('index', {
    hospital_model
  });
});

router.post('/add', async (req, res, next) => {
  const hospital_model = new hospital(req.body);
  await hospital_model.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const hospital_model = await hospital.findById(id);
  hospital_model.status = !hospital_model.status;
  await hospital_model.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const hospital_model = await hospital.findById(req.params.id);
  console.log(hospital_model)
  res.render('edit', { hospital });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await hospital.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await hospital.remove({_id: id});
  res.redirect('/');
});

module.exports = router;