import { Chpter6EmployeesIterationOnePage } from './app.po';

describe('chpter6-employees-iteration-one App', () => {
  let page: Chpter6EmployeesIterationOnePage;

  beforeEach(() => {
    page = new Chpter6EmployeesIterationOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
