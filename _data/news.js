const axios = require("axios");

async function getUser() {
    try {
      const response = await axios.get(https://newsapi.org/v2/top-headlines?country=us&apiKey=03cb80608dda41b9bc00894d7349b8be);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }