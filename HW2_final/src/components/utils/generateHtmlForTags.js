function generateHtmlForTags(tagIds, model, qid) {
    return (
      <ul key={qid} id="question-tags">
        {tagIds.map((tagId) => {
          return <li key={qid + tagId}>{model.getTagById(tagId).name}</li>;
        })}
      </ul>
    );
}

export default generateHtmlForTags;