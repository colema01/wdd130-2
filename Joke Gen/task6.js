const joke = document.getElementById("joke");


makeJoke.addEventListener('click', createJoke)
createJoke();

async function createJoke() {
    const jokeUrl = await fetch ('https://api.chucknorris.io/jokes/random',
    {
        headers: {
            accept: 'application/json'
        }
    })
    const random = await jokeUrl.json();
    console.log(random);
    joke.innerHTML = random.random();

}
