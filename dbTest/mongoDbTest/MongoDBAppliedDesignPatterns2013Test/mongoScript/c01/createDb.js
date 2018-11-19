use
mongoDBAppliedDesignPatterns;
db.contatcts.insert({
    "_id": 3,
    "name": "Jenny",
    "zip_code": "01209",
    "numbers": ["555-333-3456", "555-334-3411"]
});

db.normContacts.insert({
    "_id": 3,
    "name": "Jenny",
    "zip_code": "01209"
});

db.normNumbers.insert(
    {"contact_id": 3, number: "555-333-3456"},
    {"contact_id": 3, "number": "555-334-3411"}
);

db.posts.insert({
    "_id": "First Post",
    "author": "Rick",
    "text": "This is my first post",
    comments: [
        {"author": "Stuart", "text": "Nice post!"},
        {"author": "Mark", "text": "Dislike!"}
    ]
});

db.posts.insert({
    "_id": "Second Post",
    "comments": [
        {"author": "Danielle", "text": "I am intrigued"},
        {"author": "Stuart", "text": "I would like to subscribe"}]
});

db.normPosts.insert({
  "_id": "First Post",
  "author": "Rick",
  "text": "This is my first post"
});

db.normComments.insert({
  "post_id": "First Post",
  "author": "Stuart",
  "text": "Nice post!"
});

//c01

db.nodes.insert({
  _id: 1,
  title: "Welcome",
  url: "/",
  type: "page",
  text: "Welcome to my wonderful wiki."
});

db.nodes.insert({
  _id: 3,
  title: "Cool Photo",
  url: "/photo.jpg",
  type: "photo",
  content: 'binary'
});

// c02
db.products.insert({
  price: 499.99,
  title: 'Big and Fast Disk Drive',
  gb_capacity: 1000,
  properties: {
    'Seek Time': '5ms',
    'Rotational Speed': '15k RPM',
    'Transfer Rate': '99.2'
  }
});

