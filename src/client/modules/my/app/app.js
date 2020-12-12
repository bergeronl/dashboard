import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  section = "MENU";

  get isMenuSelected() {
    return this.section === "MENU";
  }

  get isMeetingsSelected() {
    return this.section === "MEETINGS";
  }

  handleSwitchSection(evt) {
    this.section = evt.detail.section;
  }
}
