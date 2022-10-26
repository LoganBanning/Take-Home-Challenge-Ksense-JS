const users = document.getElementById('form');
const htmlPostList = document.getElementById('post-description')
document.addEventListener('click', function (event) {
	if (!event.target.matches('.user')) return;

	event.preventDefault();

	console.log(event.target.getAttribute('id'));
  fetchPosts(event.target.getAttribute('id'));

}, false);

const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => renderData(json));
    
}

fetchData();

const renderData =  (data) => {
  let list = data.map((user, i) => (
    `<li id=${user.id} class='user'>${user.name}</li>`
  )).join(' ');
  users.innerHTML = list;
}



const fetchPosts = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then((response) => response.json())
  .then((json) => renderPosts(json, id));
}

const renderPosts = (posts, userId) => {
  let postList = posts.map((post) => (
    `<li class=post>${post.title}</li>
    <li class='post>${post.body}</li>`
  )).join(' ');
  // need to query for list element with matching user id 
  const userLi = document.getElementById(userId);
  // append posts list to existing html
  // htmlPostList.innerHTML = postList;
  userLi.innerHTML += postList;
}





