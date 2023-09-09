import generateDate from '../utils/generateDate';
import generateHtmlForTags from '../utils/generateHtmlForTags';


function QuestionContainers({model, questions, updatePage}) {
    if (questions.length === 0) {
      return (
        <div id="no-question-found">
          <h1>No questions found</h1>
        </div>
      );
    }
    const questionsList = questions.map((question) => {
      return (
        <div key={question.qid} className="question-container">
          <div className="question-ans-views-div">
            <h6>{question.ansIds.length} answers</h6>
            <h6>{question.views} views</h6>
          </div>
          <div className="question-content-div">
            <div id="question-content-div-top">
              <h2
                id={question.qid}
                onClick={() => {
                  model.incrementViews(question.qid);
                  updatePage({ currentPage: 'question-answer', qid: question.qid });
                }}
              >
                {question.title}
              </h2>
            </div>
            <div id="question-content-div-bottom">{generateHtmlForTags(question.tagIds, model, question.qid)}</div>
          </div>
          <div className="question-metadata-div">
            <h4>{question.askedBy}&nbsp;</h4>
            <h5>asked {generateDate(question.askDate, new Date())} </h5>
          </div>
        </div>
      );
    });

    return (
        <>
            {questionsList}
        </>
    );
};


export default QuestionContainers;