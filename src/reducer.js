export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // Remove after build
    //token:"BQDUGb8vgjkfiRZImNVOUqy5dK-VSjUx16-jwrF2hUPQhaV5lfJjONkVlIBu_U5Mmkr1mWwIT9flEdoQsQBy42OqWsTiYaWsgwETAMBBFbioIz9zqcPlwPqiOYQIPny_TDaNQ4PDxrXEsxw4ogzBMzU",
};

const reducer = (state, action) => {

    console.log(action);

    switch(action.type){
        case 'SET_USER': 
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly
                };
        default:
            return state;
    }
};

export default reducer;