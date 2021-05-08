// Action type
const ADD_SEARCH = 'search/ADD_SEARCH' as const;


// Action function
export const addInsert = (text: string) => ({
    type: ADD_SEARCH,
    payload: text
});

type SearchAction = | ReturnType<typeof addInsert>

export type Search = {
    text: string;
};

export type SearchState = Search;

// initialState
const initialState: SearchState = {
    text: ""
};

// reducer
function search(state: SearchState = initialState, action: SearchAction): SearchState 
{
    switch (action.type) {
        case ADD_SEARCH:
            return {text: action.payload};
        default:
            return state;
    }
};
export default search;