import { LightningElement } from "lwc";

export default class Meetings extends LightningElement {
  handleMenuClick() {
    this.dispatchEvent(
      new CustomEvent("switchsection", {
        detail: {
          section: "MENU",
        },
      })
    );
  }
}
