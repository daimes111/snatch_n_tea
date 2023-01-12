require('dotenv').config();
require('./database');

const Comment = require('../models/comment');
const Post = require('../models/posts');

(async function() {


  await Post.deleteMany({});
  const posts = await Post.create([
    {username: 'authtest', post: 'Spotted', url: 'categories', anon: true},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
    {username: 'Hamburger', post: '🍔', url: categories, anon: false},
  ]);

  console.log(items)

  process.exit();

})();