const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];    //to store all the events

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event); //recent event is stored at the end of array

  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // axios.post("http://localhost:4000/events", event).catch((err) => {
  //   console.log(err.message);
  // });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});




//   if(it is not 1am){
//   axios.post("http://2932.34.4.324.5:4006/events", event).catch((err) => {
//     console.log(err.message);
//   });

//   axios.post("http://l234..234.23..2:4007/events", event).catch((err) => {
//     console.log(err.message);
//   });
// }