export async function get({ params }) {
    return {
        body: {
            id: params.id,
            joke: await fetchJoke(),
        }
    }
}

async function fetchJoke() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await res.json();
    let text = '';
    if (data.type == 'single') {
        text = data.joke;
    } else if (data.type == 'twopart') {
        text = data.setup;
        text += ' ... ';
        text += data.delivery;
    }

    return text;
}
