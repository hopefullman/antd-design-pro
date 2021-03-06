import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layout/BasicLayout.js').default,
    "routes": [
      {
        "path": "/",
        "component": require('../Hello.js').default,
        "exact": true
      },
      {
        "path": "/hello",
        "component": require('../Hello.js').default,
        "exact": true
      },
      {
        "path": "/word",
        "component": require('../Word.js').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('C:/Users/胖胖/Desktop/antd-course/node_modules/_umi-build-dev@1.8.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/胖胖/Desktop/antd-course/node_modules/_umi-build-dev@1.8.0@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
