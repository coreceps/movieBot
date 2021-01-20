const Discord = require("discord.js");
const client = new Discord.Client();
client.login("Nzk5NzMzMTI4ODA1NDgyNTE2.YAH3hA.J2roaiGXP6tCengfm7s4i4ZtWz0");

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("online");
}

let movies = [
  "the godfather",
  "pulp fiction",
  "forrest gump",
  "one flew over the cuckoos nest",
  "se7en",
  "the silence of the lambs",
  "leon the professional",
  "23",
  "stigmata",
  "american psyco",
  "ghostbusters",
  "memento",
  "the grand budapest hotel",
  "the big lebowski",
  "the departed",
  "hannibal",
  "trainspotting",
  "pans labirynth",
  "inglorious besterds",
  "american beuty",
  "donnie darko",
  "the exorcist",
  "lost in translation",
  "good will hunting",
  "amelie",
  "kill bill",
  "a clockwork orange",
  "the shining",
];
/**
 * reply with the movie list
 */
client.on("message", movielist);
function movielist(msg) {
  if (msg.content === "movie list") {
    console.log("something");
    msg.reply(movies);
  }
}

/**
 * random movie
 */
client.on("message", randomMovie);
function randomMovie(msg) {
  if (msg.content === "random movie") {
    let random = Math.floor(Math.random() * movies.length + 1);
    msg.reply(movies[random]);
    movies.splice(random, 1);
  }
}

/**
 * add a movie to the list
 */
client.on("message", addMovie);
function addMovie(msg) {
  let message = msg.toString();
  let division = message.split("add movie ");
  if (division[0] == "") {
    movies.push(division[1]);
    msg.reply(division[1] + " added!");
  }
}
