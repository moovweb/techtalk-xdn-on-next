// This file was automatically added by xdn deploy.
// You should commit this file to source control.
const { Router } = require("@xdn/core/router");
const { nextRoutes } = require("@xdn/next");

module.exports = new Router()
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .match("/_next/data/:version/index.json", ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60,
      },
      browser: {
        serviceWorkerSeconds: 60 * 60,
      },
    });
  })
  .match("/_next/data/:version/posts/:id.json", ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60,
      },
      browser: {
        serviceWorkerSeconds: 60 * 60,
      },
    });
  })
  .use(nextRoutes); // automatically adds routes for all files under /pages
