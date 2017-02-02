import React, {Component} from 'react';
// connect links the state to the component
import {connect} from 'react-redux';
//import action creator
import { selectBook } from '../actions/index';
//bindActionCreators ensures the action in the action creator flows around different reducers
import { bindActionCreators } from 'redux';

//a container is a component that has the mapping code to the state store.
//only a component that interested with a state should be converted to a container.
//redux helps to maintain the state therefore state is passed in as props.
//The component state is a totally different thing compare to the application state inside redux!
export class BookList extends Component {

    renderList()
    {
        return this.props.bookss.map((book) => {
            return(
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBookk(book)}
                    className = "list-group-item">
                    {book.title}
                </li>
            );
        })
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

//Finding the state from the application state
//whatever is returned from here will show up as props inside of BookList
//this.props.bookss will get the state
function mapStateToProps_BookList(state){
    return{
        bookss: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container
//in this case, access this.props.selectBookk will get the state.
function mapDispatchToProps_BookList(dispatch){
    //whenever selectBook is called, the result should be passed to all of our reducers.
    return bindActionCreators({selectBookk: selectBook}, dispatch)
}

//Link the interested state to the container
export default connect(mapStateToProps_BookList, mapDispatchToProps_BookList)(BookList);