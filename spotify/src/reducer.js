export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item : null,
    //token : "BQAKDijbPjd8DhEP_D7zzyazDqPNcmaTPUrE6f-Qv3gm6jD4_i…8YoPDt0xJB2SL38SS_wDJxY7y8gKQcrsLCArNlGjab06PODZb"
};
export const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload] 
    if(action.type === "SET_USER"){
        return {
            ...state,
            user:action.user
        }
    }
    else if(action.type === "SET_TOKEN"){
        return{
            ...state,
            token : action.token

        }
    }
    else if(action.type === "SET_PLAYLISTS"){
        return{
            ...state,
            playlists : action.playlists,
        }
    }
    else if(action.type === "SET_DISCOVER_WEEKLY"){
        return{
            ...state,
            discover_weekly : action.discover_weekly,
        }
    }
    else{
        return state;
    }
}

export default initialState;
