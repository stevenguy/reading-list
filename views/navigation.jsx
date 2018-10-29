const React = require('react')

const Navigation = props =>

    <div class="col s12">
        <ul id="tabs-swipe-demo" class="tabs">
            <li class="tab col s6"><a className="page-link active" href="/">Add Book</a></li>
            <li class="tab col s6"><a className="page-link" href="/list">Reading List</a></li>
        </ul>
    </div>

module.exports = Navigation