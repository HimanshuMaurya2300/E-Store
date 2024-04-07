const https = require("https");

const URL = "https://e-store-ge4q.onrender.com";

module.exports = {
    myJob: {
        task: ({ strapi }) => {
            https
                .get(URL, (res) => {
                    if (res.statusCode === 200) {
                        console.log("GET request sent successfully");
                    } else {
                        console.log("GET request failed", res.statusCode);
                    }
                })
                .on("error", (e) => {
                    console.error("Error while sending request", e);
                });
        },
        options: {
            rule: "*/14 * * * *",
        },
    },
};