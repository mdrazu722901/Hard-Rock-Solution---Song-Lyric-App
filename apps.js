const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => songData(data.data))
}
const songData = songs => {
    songs.forEach(songs => {
        const songContainer = document.getElementById("song-container");
        const liDiv = document.createElement("div");
        liDiv.className = `single-result row align-items-center my-3 p-3`;
        liDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${songs.title}</h3>
            <p class="author lead">Album by <span></span></p>
            <audio controls>
                <source src="" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric()" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(liDiv);
    });
}