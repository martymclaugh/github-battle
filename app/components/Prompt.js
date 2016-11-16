var React = require('react');

var Prompt = React.createClass({
  render: function () {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.onUpdateUser}
                value={this.state.username}
                placeholder="Github Username" />
            </div>
          </form>
          <div className="form-group col-sm-4 col-sm-off">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Prompt;
