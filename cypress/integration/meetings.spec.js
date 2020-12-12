describe("meetings", () => {
  const registerAliases = () => {
    cy.get("my-app").shadow().find("my-meetings").as("c-meetings");
    cy.get("@c-meetings")
      .shadow()
      .find("button")
      .contains("Menu")
      .as("c-meetings-menu");
  };

  beforeEach(() => {
    cy.visit("/");
    cy.get("my-app")
      .shadow()
      .find("my-menu")
      .shadow()
      .find("button.menu-item")
      .contains("Meetings")
      .trigger("click");

    registerAliases();
  });

  it("shows the meetings section", () => {
    cy.get("@c-meetings").should("exist");
  });

  it("should go back to the menu when clicking the menu button", () => {
    cy.get("@c-meetings-menu").trigger("click");

    cy.get("my-app").shadow().find("my-menu").should("exist");
  });
});
