import { useState, useEffect } from 'react';
import '../../stylesheets/TagsPage.css';
import TagsWrapper from './TagsWrapper'

function TagsPage({ model, updatePage, setSearch, currentSearch }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tags = model.getAllTags();
    setTags(tags);
  }, [model]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div id="upper-main-tags">
        <div id="top-upper-main-tags">
          <h1 id="top-upper-main-title-tags">All Tags</h1>
          <button id="main-ask" onClick={() => updatePage('ask-question')}>
            Ask Question
          </button>
          <h1 id="number-of-tags">{model.getNumTags()} Tags</h1>
        </div>
      </div>
      <div id="lower-main">
        <div id="tags-wrapper-div">
          <TagsWrapper model={model} updatePage={updatePage} setSearch={setSearch} tags={tags} />
        </div>
      </div>
    </div>
  );
}

export default TagsPage;
