export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item : null,
    token : null
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
    else{
        return state;
    }
}

export default initialState;
