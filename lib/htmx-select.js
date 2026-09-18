"use strict";

(function() {
  htmx.registerExtension("select", {
    htmx_config_request: (element, detail) => {
      const isString = (value) => typeof value === "string";
      const requestable = isString(element.dataset.hxGet) ||
                         isString(element.getAttribute("hx-get"));

      if (element.tagName === "SELECT" && requestable) {
        detail.ctx.request.action = element.value;
      }
    }
  });
})();
