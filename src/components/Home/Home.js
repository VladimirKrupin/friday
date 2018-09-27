import React from 'react';
import './Home.css';
import Header from "../Header/Header";
import { connect } from 'react-redux';
import Button from "../Button/Button";
import axios from 'axios';

const Home = ({ getAnswer, onChangeQuestion, question }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getAnswer(question);
    axios.get('http://api-friday/artists').then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  const changeQuestion = (event) => {
    onChangeQuestion(event.target.value);
  };
  return (
    <div>
      <Header />
      <div className="wrapper wrapper-left wrapper-wrap">
        <h1 className="text-header">Want to know Friday today or not?</h1>
        <form className="Add-Track-Form" onSubmit={handleSubmit}>
          <input
            className="Add-Track-Form-input"
            type="text"
            placeholder="Friday or not?"
            value={question}
            onChange={changeQuestion}
          />
          <Button btnClass="Button" />
        </form>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    question: state.question
  }),
  dispatch => ({
    getAnswer: (question) => {
      dispatch({ type: 'GET_ANSWER', payload: question});
    },
    onChangeQuestion:(question) => {
      dispatch({ type: 'CHANGE_QUESTION', payload: question});
    },
  })
)(Home);
