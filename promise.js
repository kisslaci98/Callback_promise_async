'use strict'

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two'},
];

function getPost() {
    setTimeout (() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            }
            else{
                reject('Számszing iz vróng.');
            }
        }, 2000);
    })

}

getPost();

createPost({ title: 'Post Three', body : 'This is post three.'})
    .then(getPost)
    .catch(error => console.log(error));

const promise_2 = fetch('https://jsonplaceholder.typicode.com/users')
    .then((resolve) => resolve.json());

promise_2
    .then(
        function display(values) {
            let table = '<table><tr><th>Név</th><th>Email</th></tr>';
            console.log(values[0].name + ' ' + values[0].email);
            table += `<table><tr><td>${values[0].name}</td><td>${values[0].email}</td></tr>`;
            table += '</table>';
            document.getElementById("table").innerHTML = table;
        }
    )