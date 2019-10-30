const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

port    = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json());
app.use(router);

router.get('/',function (req,res){
   console.log(req.body);
   res.send({ status: 'SUCCESS GET' });
});
router.post('/',function (req,res){
   console.log(req.body);
   res.send({ status: 'SUCCESS POST' });
});
router.delete('/',function (req,res){
   console.log(req.body);
   res.send({ status: 'SUCCESS DELETE' });
});

// app.use('/',function (req, res) {
//    res.send('Hola Leo');
// });

app.listen(port);
console.log('Escuchando en http://localhost:3000');

