import { AsoiafFamilyTreesPage } from './app.po';

describe('asoiaf-family-trees App', () => {
  let page: AsoiafFamilyTreesPage;

  beforeEach(() => {
    page = new AsoiafFamilyTreesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
