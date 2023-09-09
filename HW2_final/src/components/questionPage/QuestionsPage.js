import React, { useState, useEffect } from 'react';
import '../../stylesheets/QuestionsPage.css';
import QuestionContainers from './QuestionContainers'


function QuestionsPage({ model, updatePage, setSearch, currentSearch }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [questionSortMode, setQuestionSortMode] = useState('latest');
  const questions = questionsBasedOnMode(model, questionSortMode, currentSearch);
  const numberOfQuestions = questions.length;

  function questionsBasedOnMode(model, questionSortMode, currentSearch) {
    if (currentSearch.search !== '') {
      return model.search(currentSearch.search);
    }
    if (questionSortMode === 'unanswered') {
      return model.getAllQuestionsUnanswered();
    }
    if (questionSortMode === 'active') {
      return model.getAllQuestionsSortedByActivity();
    }
    if (questionSortMode === 'latest') {
      return model.getAllQuestionsSortedByLatest();
    }
  }
  const tagSearchResult = currentSearch.tagSearch ? `All Questions With Tag: ${currentSearch.search.slice(1, -1)}` : 'Search Results';
  return (
    <div>
      <div id="upper-main">
        <div id="top-upper-main">
          <h1 id="top-upper-main-title">
            {currentSearch.search === ''
              ? 'All Questions'
              : tagSearchResult}
          </h1>
          <button id="main-ask" onClick={() => updatePage('ask-question')}>
            Ask Question
          </button>
        </div>
        <div id="bottom-upper-main">
          <h3 id="number-of-questions">
            {numberOfQuestions} question{numberOfQuestions > 1 ? 's' : ''}
          </h3>

           <button
            id="main-unanswered"
            onClick={() => {
              setSearch({ tagSearch: false, search: '' });
              setQuestionSortMode('unanswered');
            }}
          >
            Unanswered
          </button>

          <button
            id="main-active"
            onClick={() => {
              setSearch({ tagSearch: false, search: '' });
              setQuestionSortMode('active');
            }}
          >
            Active
          </button>

          <button
            id="main-newest"
            onClick={() => {
              setSearch({ tagSearch: false, search: '' });
              setQuestionSortMode('latest');
            }}
          >
            Newest
          </button>
        </div>
      </div>
      <div id="lower-main">
          <QuestionContainers model={model} questions={questions} updatePage = {updatePage} />
      </div>
    </div>
  );
}


export default QuestionsPage;
