import axios from "axios";

class API {
  host = "https://tms-js-pro-back-end.herokuapp.com/api";

  constructor(token = "") {
    this.token = token;
  }

  /**
   * Get product list.
   */
  getProducts() {
    return this.publicRequest().get("/ice-hockey-equipment");
  }

  /**
   * Get product by id.
   */
  getProduct(id) {
    return this.publicRequest().get("/ice-hockey-equipment/" + id);
  }

  /**
   * Public request.
   */
  publicRequest() {
    return axios.create({
      baseURL: this.host,
      responseType: "json",
    });
  }

  /**
   * Authorized request.
   */
  authorizedRequest() {
    return axios.create({
      baseURL: this.host,
      responseType: "json",
      headers: {
        Authorization: "Token ${this.token}",
      },
    });
  }
}

export default API;
