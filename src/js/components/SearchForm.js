var React = require('react')
var AppActions = require('../actions/AppActions')
var AppStore = require('../stores/AppStore')

var SearchForm = React.createClass ({
  onSubmit: function(e) {
    e.preventDefault()
    var movie = {
      title:this.refs.title.value.trim()
    }
    AppActions.searchMovies(movie);
    this.refs.title.value=""
  },
  render: function () {
    return(
      <div className="search-form">
        <h2 className="text-center">Search Movies</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="enter a legit movie title" />
          </div>
          <button className="btn btn-primary btn-block">search</button>
        </form>
      </div>
    )
  }
})
module.exports = SearchForm;
