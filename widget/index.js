'use strict'

require('nx-github-widget')

function routedWidget (config) {
  return widget(config)
    .use(nx.middlewares.params({
      query: { history: true },
      sort: { history: true },
      order: { history: true }
    }))
}

function finalWidget (config) {
  return routedWidget(config)
    .use(setupAttributes)
}

function setupAttributes (elem, state) {
  elem.$attribute('query', query => state.query = query)
  elem.$attribute('sort', sort => state.sort = sort)
  elem.$attribute('order', order => state.order = order)
}


if (module && module.exports) {
  module.exports = { routedWidget, finalWidget }
}
window.routedWidget = routedWidget
window.finalWidget = finalWidget
