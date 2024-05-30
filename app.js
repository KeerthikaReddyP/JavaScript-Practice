const github_url = "https://api.gihuub.com/users/KeerthikaReddyP";

async function handlePromise() {
    const data = await fetch(github_url);
    const jsonData = await data.json();
    console.log(jsonData);
}
handlePromise()
    .catch(err=>console.log(err));
