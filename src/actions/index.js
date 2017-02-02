//this is an action creator: just a function returns an action. Redux pushes this action around different reducers. 
//then reducer uses this function to produce a piece of state.
export function selectBook(book){
    //it needs to return an action, an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}