import React, {useEffect} from 'react';
import '../../stylesheets/QuestionAnswerPage.css';
import AnswerContainers from './AnswerContainers';
import parseContent from '../utils/parseContent';
import generateDate from '../utils/generateDate';


function QuestionAnswerPage({ model, updatePage, qid }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const question = model.getQuestionById(qid);
  const answers = model.getAllAnsers(question);
  return (
    <div>
      <div id="upper-main-Answers">
        <div id="top-upper-mainAns">
          <h3 id="top-upper-main-numAns">{answers.length} answers</h3>
          <h1 id="top-upper-main-title">{question.title}</h1>
          <div id="top-upper-main-ask">
            <button id="ans-main-ask" onClick={() => updatePage('ask-question')}>
              Ask Question
            </button>
          </div>
        </div>
        <div id="bottom-upper-mainAns">
          <h3 id="top-upper-main-numViews">{question.views} views</h3>
          <p id="top-upper-main-questionContent">{parseContent(question.text)}</p>
          <div className="top-upper-main-QAskedBy">
            <h4>{question.askedBy}&nbsp;</h4>
            <h5>asked {generateDate(question.askDate, new Date())} </h5>
          </div>
        </div>
      </div>
      <div id="lower-main-Answers">
          <AnswerContainers answers = {answers}  />
        <div className="answer-container">
          <button
            className="ans-main-answer"
            onClick={() => {
              updatePage({ currentPage: 'reply-to-question', qid: question.qid });
            }}
          >
            Answer Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
