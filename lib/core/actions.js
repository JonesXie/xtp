const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const { vueRepo } = require("../config/repo-config");
const { program } = require("commander");

const createProjectAction = async (project, others) => {
  console.log(project, others);
  await download(vueRepo, project, { clone: true });
};

/**
 * 设置git repository仓库
 */
const setConfigAction = async () => {
  if (program.repo) {
    const filePath = path.resolve(__dirname, "../config/repo-config.js");
    const data = await fs.promises.readFile(filePath, { encoding: "utf-8" });
    let newData = data.replace(/http.*\.git/gm, program.repo);
    fs.writeFile(filePath, newData, (err) => {});
  }
};

module.exports = { createProjectAction, setConfigAction };
