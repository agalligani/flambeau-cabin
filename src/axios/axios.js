import axios from "axios";
import config from "../../config/config";

export default async () => {
  const url = config.drupal_url + "/user/login";
  try {
    let res = await axios.post(url, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "agalligani",
        pass: "CowFlop#1234"
      },
      params: { _format: "json" } // add these query params to every request
    });
    console.log("Login attempt response", res.data);
  } catch (error) {
    console.error(error);
  }
};
