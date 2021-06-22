const express = require('express')
const app = express()
const port = 3001

// const merchant_model = require('./merchant_model')
const faqs_model = require('./faqs_model');
const parties_model = require('./parties_model');
const labels_model = require('./labels_model');
const partylabels_model = require('./partylabels_model');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// app.get('/', (req, res) => {
//   merchant_model.getMerchants()
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })

// app.post('/merchants', (req, res) => {
//   merchant_model.createMerchant(req.body)
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })

// app.put('/merchants', (req, res) => {
//   merchant_model.updateMerchant(req.body)
//     .then(response => {
//       res.status(200).send("Updated");
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })

// app.delete('/merchants/:id', (req, res) => {
//   merchant_model.deleteMerchant(req.params.id)
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// })

app.get('/faqs', (req, res) => {
  faqs_model.getFAQs()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/parties', (req, res) => {
  parties_model.getParties()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/labels', (req, res) => {
  labels_model.getLabels()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/partylabels', (req, res) => {
  partylabels_model.getPartyLabels()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
