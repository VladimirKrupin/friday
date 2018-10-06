import React from 'react';
import './Home.css';
import Header from "../Header/Header";
import { connect } from 'react-redux';
import Button from "../Button/Button";
import axios from "axios";
// import clear from "clear-code";


const Home = ({ getAnswer, onChangeQuestion, question, answer }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getAnswer(question);
  };
  const changeQuestion = (event) => {
    onChangeQuestion(event.target.value, 255);
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
          <div>{answer}</div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    question: state.question,
    answer: state.answer
  }),
  dispatch => ({
    getAnswer: (question) => {
      let data = {
        question: question
      };
      const options = {
        method: 'POST',
        data: data,
        url: 'http://api-friday/getfriday/',
      };
      axios(options)
        .then(response => {
          console.log(response);
          dispatch({ type: 'SET_ANSWER', payload: response.data.date});
        })
        .catch(e => {
          console.log(e);
        });
    },
    onChangeQuestion:(question) => {
      dispatch({ type: 'CHANGE_QUESTION', payload: question});
    },
  })
)(Home);
