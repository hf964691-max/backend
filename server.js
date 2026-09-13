require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const githubData = {
  login: "hf964691-max",
  id: 221438751,
  node_id: "U_kgDODTLjHw",
  avatar_url: "https://avatars.githubusercontent.com/u/221438751?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hf964691-max",
  html_url: "https://github.com/hf964691-max",
  followers_url: "https://api.github.com/users/hf964691-max/followers",
  following_url:
    "https://api.github.com/users/hf964691-max/following{/other_user}",
  gists_url: "https://api.github.com/users/hf964691-max/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hf964691-max/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/hf964691-max/subscriptions",
  organizations_url: "https://api.github.com/users/hf964691-max/orgs",
  repos_url: "https://api.github.com/users/hf964691-max/repos",
  events_url: "https://api.github.com/users/hf964691-max/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hf964691-max/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Huzaifa",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: null,
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 3,
  following: 6,
  created_at: "2025-07-18T00:03:52Z",
  updated_at: "2026-09-13T09:30:18Z",
};

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <h2>Welcome to my first backend Website</h2>
    `);
});

app.get("/twitter", (req, res) => {
  res.send("huzaifadotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send(`<h2>Chai aur Code</h2>`);
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
