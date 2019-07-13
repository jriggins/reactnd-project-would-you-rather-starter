import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { saveQuestion } from "../actions";

class AddQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.saveQuestion(this.props.loggedInUser.id, this.state.optionOne, this.state.optionTwo);
    this.props.history.push("/")
  };

  handleOptionOneChanged = (event) => {
    this.setState({optionOne: event.target.value});
  };

  handleOptionTwoChanged = (event) => {
    this.setState({optionTwo: event.target.value});
  };

  render() {
    return (
      <div>
        <p>Would you Rather</p>
        <form id="add-question-form" onSubmit={this.handleFormSubmit}>
          <textarea className="add-question-option-input" onChange={this.handleOptionOneChanged}/>
          <span>- or -</span>
          <textarea className="add-question-option-input" onChange={this.handleOptionTwoChanged}/>
          <br/>
          <input className="button" type="submit"/>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ loggedInUser, history }) {
  return {
    loggedInUser,
    history
  };
}

const mapDispatchToProps = {
  saveQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddQuestion));
