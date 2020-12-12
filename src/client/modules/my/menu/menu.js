import { LightningElement } from "lwc";

export default class Menu extends LightningElement {
  handleMeetingsClick() {
    this.dispatchEvent(
      new CustomEvent("switchsection", {
        detail: {
          section: "MEETINGS",
        },
      })
    );
  }
}
