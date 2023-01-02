
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "ee06376a54034860937179a2150199ac";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id = ${clientId}&redirect_uri = ${redirectUri}&scope = ${scopes.join("%20")}&response_type=token&show_dialog=true`;

/* Click login button and this authEndpoint will redirct to the spotify login page and the spotify will take care of the user authentication
and then we will be redirected to the local host */