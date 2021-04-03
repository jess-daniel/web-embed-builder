exports.getHome = (req, res) => {
  res.render("home", {
    pageTitle: "Home Page",
    ytembed: null,
    element: null,
    widthData: null,
    heightData: null,
    srcData: null,
  });
};

exports.postData = (req, res) => {
  //   console.log("req", req.body);
  const { ytembed } = req.body;
  const data = ytembed.split(" ");
  console.log("data", data);
  const element = data[0].slice(1);

  const widthData = data.filter((d) => d.includes("width"));
  console.log(widthData);
  const width = widthData[0].split("=")[1];
  const heightData = data.filter((d) => d.includes("height"));
  const height = heightData[0].split("=")[1];
  const srcData = data.filter((d) => d.includes("src"));
  const src = srcData[0].split("=")[1];
  console.log("src", srcData);

  res.render("home", {
    pageTitle: "Home Page",
    ytembed: ytembed,
    element,
    widthData: parseInt(width),
    heightData: parseInt(height),
    srcData: src,
  });
};
