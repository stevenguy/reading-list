const React = require('react')

const Form = props =>

  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input placeholder={props.title ? '' : 'The Cast'} value={props.title ? props.title : ''} id="bookTitle" type="text" className="validate"/>
        <label htmlFor="bookTitle"> Book Title</label>
      </div>
      <div className="input-field col s6">
        <input id="bookAuthor" placeholder={props.author ? '' : 'Danielle Steel'} value={props.author ? props.author : ''} type="text" className="validate"/>
        <label htmlFor="bookAuthor">Book Author</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="bookPages" placeholder={props.pages ? '' : '1,000,000'} value={props.pages ? props.pages : ''} type="number" className="validate"/>
        <label htmlFor="bookPages">Total Pages</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="currentPage" placeholder={props.currentPage ? '' : '10'} value={props.currentPage ? props.currentPage : ''} type="number" className="validate"/>
        <label htmlFor="currentPage">Current Page</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <label>
          <input type="checkbox" id="readBefore" class="filled-in" checked={!!props.isRead} />
          <span>Read Already?</span>
        </label>
      </div>
    </div>
    <br></br>
    <div className="row">
      <div className="col s12">
        {props.title ?  <button id="editBook" className="btn waves-effect waves-light" type="submit" name="action">Edit Book</button> : <button id="addBook" className="btn waves-effect waves-light" type="submit" name="action">Add Book</button>}
      </div>
    </div>
  </form>

module.exports = Form