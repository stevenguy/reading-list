const React = require('react')
const Form = require('./form')
const Navigation = require('./navigation')
const Head = require('./head')

const Page = () =>
  <html lang='en'>
    <Head />
    <body>
      <div className="container">
        <Navigation />
        <br></br>
        <Form />
      </div>
      <script src='/js/index.js' type='application/javascript' />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
    </body>
  </html>

module.exports = Page
