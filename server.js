const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
    {
      "name":"Brainy",
      "age":200,
      "height":"5cm",
      "id":0
  },
  {
      "name":"Clumsy",
      "age":200,
      "height":"5cm",
      "id":1
  },
  {
      "name":"Greedy",
      "age":200,
      "height":"5cm",
      "id":2
  },
  {
      "name":"Hefty",
      "age":200,
      "height":"5cm",
      "id":3
  },
  {
      "name":"Papa",
      "age":200,
      "height":"5cm",
      "id":4
  },
  {
      "name":"Smurfette",
      "age":200,
      "height":"5cm",
      "id":5
  },
  {
      "name":"Grouchy",
      "age":200,
      "height":"5cm",
      "id":6
  },
  {
      "name":"Handy",
      "age":200,
      "height":"5cm",
      "id":7
  },
  {
      "name":"Gutsy",
      "age":200,
      "height":"5cm",
      "id":8
  },
  {
      "name":"Jokey",
      "age":200,
      "height":"5cm",
      "id":9
  },
  {
      "name":"Chef",
      "age":200,
      "height":"5cm",
      "id":10
  },
  {
      "name":"Farmer",
      "age":200,
      "height":"5cm",
      "id":11
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
