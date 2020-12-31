const { program } = require("commander");
const helpOptions = () => {
  program.option("-d --dest <dest>", "a destination folder  Example: -d src/components");
  program.option("-r --repo <repo>", "set template git repository  Example: -r https://github.com/JonesXie/vue-model.git");
  // program.option("-f --framework <framework>", "framework");
  // 监听“--help” 事件
  // program.on("--help", () => {
  //   console.log(" ");
  //   console.log("Other:");
  //   console.log(" other options");
  // });
};

module.exports = {
  helpOptions,
};
