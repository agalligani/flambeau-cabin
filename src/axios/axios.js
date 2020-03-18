import axios from "axios";
import config from "../../config/config";

export default async () => {
  const url = config.drupal_url + "/user/registration?_format=json";
  try {
    let res = await axios.post(url, {
      headers: { "Content-Type": "application/json" },
      data: {
        name: "agalligani",
        pass: "CowFlop#123"
      },
      params: { _format: "json" } // add these query params to every request
    });
    console.log("Login attempt response", res.data);
  } catch (error) {
    console.error(error);
  }
};
