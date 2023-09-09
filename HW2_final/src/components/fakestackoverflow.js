import Model from '../models/model.js';
import PageSelector from './pageSelector/PageSelector.js';

const model = new Model();

export default function fakeStackOverflow() {
  return (
    <div>
      <PageSelector model={model} currentPage={'questions'} />
    </div>
  );
}
