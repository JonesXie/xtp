const { program } = require("commander");
const { setConfigAction } = require("./actions");
const setConfig = () => {
  program.command("set config").description("set config ").action(setConfigAction);
};

module.exports = setConfig;
