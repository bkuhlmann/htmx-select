"use strict";

(function() {
  htmx.defineExtension("select", {
    onEvent: (name, event) => {
      const element = event.detail.elt;

      if (name === "htmx:configRequest") {
        if (element.tagName === "SELECT" && typeof element.getAttribute("hx-get") === "string") {
          event.detail.useUrlParams = false;
          event.detail.path = element.value;
        }
      }
    }
  });
})();
