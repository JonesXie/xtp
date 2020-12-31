#!/usr/bin/env node

const { program } = require("commander");
const { helpOptions } = require("./lib/core/help");
const createCommands = require("./lib/core/create");
const setConfig = require("./lib/core/set");

// 查看版本号
program.version(require("./package.json").version);

// 自定义帮助信息
helpOptions();

// 自定义 command
createCommands();

// 设置 config
setConfig();

program.parse(process.argv);
