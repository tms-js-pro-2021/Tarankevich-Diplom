import routes from "./routes";

class RouterProvider {
  constructor(routes) {
    this.routes = routes;
  }

  getList() {
    return this.routes;
  }

  getByAlias(alias, pathArgs = {}) {
    if (!(alias in this.routes)) {
      throw new Error("Alias doesn't present in route list");
    }

    let route = this.routes[alias];

    for (let prop in pathArgs) {
      route = route.replaceAll(prop, pathArgs[prop]);
    }

    return route;
  }
}

export default RouterProvider = new RouterProvider(routes);
