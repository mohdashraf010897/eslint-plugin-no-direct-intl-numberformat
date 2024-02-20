"use strict";

const noDirectIntlImportRule = require("./no-direct-intl-numberformat");
const plugin = { rules: { "no-direct-intl-numberformat": noDirectIntlImportRule } };
module.exports = plugin;