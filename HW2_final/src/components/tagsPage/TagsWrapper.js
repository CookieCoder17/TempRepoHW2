function TagsWrapper({ model, updatePage, setSearch, tags }){

    const searchForTag = (element) => {
        setSearch({ tagSearch: true, search: '[' + element + ']' });
        updatePage('questions');
    };

    const getNumQuestionsWithTag = (tid) => {
        return model.getNumQuestionsWithTag(tid);
    };

    return(
        <ul id="tags-wrapper">
            {tags.map((element) => (
            <li key={element.tid} className="tag-container">
                <div className="tag-name-div">
                <h2>
                    <a
                    href={element.tid}
                    id={element.tid}
                    onClick={(e) => {
                        e.preventDefault();
                        searchForTag(element.name);
                    }}
                    >
                    {element.name}
                    </a>
                </h2>
                </div>
                <div className="tag-num-questions-div">
                <h4>
                    {getNumQuestionsWithTag(element.tid)}{' '}
                    {getNumQuestionsWithTag(element.tid) === 1 ? 'question' : 'questions'}
                </h4>
                </div>
            </li>
            ))}
        </ul>
    );
}


export default TagsWrapper;