const github_url = "https://api.github.com/users/KeerthikaReddyP";

async function handlePromise() {
  try {
    const data = await fetch(github_url);
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
