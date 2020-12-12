describe("app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the menu", () => {
    cy.get("#main my-app").shadow().find("my-menu").should("exist");
  });
});
