import routes from "./routes";

class Router {
  constructor(routeList) {
    this.routes = routeList;
  }

  getList() {
    return this.routes;
  }

  getByAlias(alias, pathArgs = {}) {
    if (!(alias in this.routes)) {
      throw new Error("Alias doesn't present in route list");
    }

    let route = this.routes[alias];

    Object.keys(pathArgs).forEach((prop) => {
      route = route.replaceAll(prop, pathArgs[prop]);
    });

    return route;
  }
}

const RouterProvider = new Router(routes);

export default RouterProvider;
