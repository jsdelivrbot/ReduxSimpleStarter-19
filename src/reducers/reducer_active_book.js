//state argument is not application state, only the state this reducer is responsible for.
export default function(state = null, action){
    //whatever returned from here will update the global application state
    //object returned here has to be a new object (the global state is immutable)
    switch(action.type)
    {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}