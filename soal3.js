const fs = require("fs");

const readJson = () => {
  fs.readFile("file.json", "utf-8", (err, fileData) => {
    if (err) return console.error("Error:", err);

    const data = JSON.parse(fileData);
    data[2].first_name = "Ivanka";
    console.log(data);
    fs.writeFile("file.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return console.error("Error writing file:", err);
      console.log("File successfully updated!");
    });
  });
};

readJson();
