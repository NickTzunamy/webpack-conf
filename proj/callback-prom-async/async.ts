// Async / Await
// async function init() {
//   await createPost({ title: 'Post Three', body: 'This is post three' });

//   getPosts();
// }

// init();

// Asunc / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();