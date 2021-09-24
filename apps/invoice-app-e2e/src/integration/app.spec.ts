import { getDatatable, getAddDataButton } from '../support/app.po';

describe('dataTable', () => {
  beforeEach(() => cy.visit('/'));

  it('should display data rows', () => {
    getDatatable().should((t) => expect(t.length).equal(2));
    getAddDataButton().click();
    getDatatable().should((t) => expect(t.length).equal(3));
  });

});