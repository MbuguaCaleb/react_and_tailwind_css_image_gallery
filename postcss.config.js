const tailwindcss = require("tailwindcss");

//exporting tailwind css plugins
//it brings in the tailwind css plugins
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
