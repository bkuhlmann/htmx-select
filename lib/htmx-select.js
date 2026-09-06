"use strict";

(function() {
  htmx.registerExtension("select", {
    htmx_config_request: (element, detail) => {
      if (element.tagName === "SELECT" && typeof element.getAttribute("hx-get") === "string") {
        const url = element.value;
        const context = detail.ctx;
        const request = context.request;

        request.action = url;
        context.push = url;
        request.body = new FormData();
      }
    }
  });
})();
