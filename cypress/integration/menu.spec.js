describe("menu", () => {
  const registerAliases = () => {
    cy.get("my-app").as("c-app");
    cy.get("@c-app").shadow().find("my-menu").as("c-menu");
    cy.get("@c-menu")
      .shadow()
      .find("button.menu-item")
      .contains("Meetings")
      .as("c-menu-meetings");
  };

  beforeEach(() => {
    cy.visit("/");
    registerAliases();
  });

  it("should display meeting section button", () => {
    cy.get("@c-menu-meetings").should("exist");
  });

  it("should open menu section when clicking menu button", () => {
    cy.get("@c-menu-meetings").trigger("click");

    cy.get("@c-app").shadow().find("my-meetings").should("exist");
  });
});
