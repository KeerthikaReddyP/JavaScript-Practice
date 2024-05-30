const github_url="https://api.github.com/users/KeerthikaReddyP";

const user=fetch(github_url);
console.log(user);
user.then(res=>console.log(res));