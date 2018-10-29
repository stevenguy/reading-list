const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <li id="bookTitle" data-booktitle={props.title} className="collection-item"><i class="material-icons">book</i>  Title : {props.title}</li>
            <li id="bookAuthor" data-bookauthor={props.author} className="collection-item"><i class="material-icons">account_circle</i>  Author : {props.author}</li>
            <li id="bookPages" data-bookpages={props.pages} className="collection-item"><i class="material-icons">pageview</i>  Page Count : {props.pages}</li>
            <li id="bookCurrentPage" data-bookcurrentpage={props.currentPage} className="collection-item"><i class="material-icons">bookmark</i>  Currently on page {props.currentPage}</li>
            <li id="bookIsRead" data-bookisread={props.isRead} className="collection-item"><i class="material-icons">chrome_reader_mode</i>  {props.isRead ? 'I read this book already.' : 'I have not read this book yet.'}</li>
          </div>
          <div className="card-action">
            <li className="list-group-item list-group-item-success">
              <button className="btn waves-effect waves-light" id="editBTN" data-id={props.title}>EDIT</button> 
              <button className="btn waves-effect waves-light" id="deleteBTN" data-id={props.title}>DELETE</button>
            </li>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

module.exports = Book
