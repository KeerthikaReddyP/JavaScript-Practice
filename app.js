const github_url="https://api.github.com/users/KeerthikaReddyP";

async function handlePromise(){
    const data= await fetch(github_url); //fetch() returns a response
    console.log(data);
}
handlePromise();