describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('customer-portal-navbar').should('exist');
  });
});