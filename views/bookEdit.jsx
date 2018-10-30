const React = require('react')
const Form = require('./form')
const Navigation = require('./navigation')
const Head = require('./head')
const Scripts = require('./scripts')

const Book = props =>
  <html lang='en'>
    <Head />
    <body>
      <div className="container">
        <Navigation />
        <Form title={props.title} author={props.author} pages={props.pages} currentPage={props.currentPage} isRead={props.isRead} />
      </div>
      <script src='/js/edit.js' type='application/javascript' />
      <Scripts />
    </body>
  </html>

module.exports = Book