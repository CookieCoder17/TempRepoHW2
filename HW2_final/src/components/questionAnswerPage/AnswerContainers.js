import parseContent from '../utils/parseContent';
import generateDate from '../utils/generateDate';

function AnswerContainers({answers}){
    const answerList = answers.map((element) => {
        let timeNow = new Date();
        return (
          <div key={element.aid} className="answer-container">
            <div className="answer-content-div">
              <p>{parseContent(element.text)}</p>
            </div>
            <div className="answer-metadata-div">
              <h4>{element.ansBy}&nbsp;</h4>
              <h5>asked {generateDate(element.ansDate, timeNow)} </h5>
            </div>
          </div>
        );
      });
    return(
        <>
        {answerList}
        </>
    );
}


export default AnswerContainers;