
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/zcoolx/Developer/id/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/zcoolx/Developer/id/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/zcoolx/Developer/id/src/pages/index.js"))
}

