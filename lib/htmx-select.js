"use strict";

(function(){
  htmx.defineExtension("select", {
    onEvent: (name, event) => {
      const element = event.detail.elt;

      if (name === "htmx:beforeRequest") {
        if (typeof element.getAttribute("hx-get") === "string") {
          event.detail.xhr.open("GET", element.value);
        }
      }
    }
  });
})();
