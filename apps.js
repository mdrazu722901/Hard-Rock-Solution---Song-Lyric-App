// const searchSongs = async() => {
//     const searchText = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`
//     const res = await fetch(url);
//     const data = await res.json();
//     songData(data.data);
// }
const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => songData(data.data))
        .catch(error => errorMessage("this is wrong type! please try again!!"))
}
const songData = songs => {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = '';
    songs.forEach(songs => {
        const liDiv = document.createElement("div");
        liDiv.className = `single-result row align-items-center my-3 p-3`;
        liDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${songs.title}</h3>
            <p class="author lead">Album by <span>${songs.artist.name}</span></p>
            <audio controls>
                <source src="${songs.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${songs.artist.name}','${songs.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(liDiv);
    });
}

const getLyric = async(artist, title) => {
        try {
            const url = `https://api.lyrics.ovh/v15/${artist}/${title}`;
            const res = await fetch(url);
            const data = await res.json();
            forSongLyric(data.lyrics);
        } catch (error) {
            errorMessage('sorry! i fail this!');
        }
    }
    // const getLyric = (artist, title) => {
    //     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => forSongLyric(data.lyrics))
    // }
const forSongLyric = Lyric => {
    const songLyrics = document.getElementById('song-lyrics');
    songLyrics.innerText = Lyric;
}


const errorMessage = error => {
    const printError = document.getElementById('error-message');
    printError.innerText = error;
}