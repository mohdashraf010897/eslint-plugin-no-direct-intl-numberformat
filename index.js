// rules/no-direct-intl-numberformat.js

module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "disallow direct usage of new Intl.NumberFormat()",
        category: "Best Practices",
        recommended: true,
      },
      fixable: null, // or "code" if the rule provides a fix
      schema: [], // no options
    },
    create(context) {
      return {
        NewExpression(node) {
          if (
            node.callee.type === "MemberExpression" &&
            node.callee.object.name === "Intl" &&
            node.callee.property.name === "NumberFormat"
          ) {
            context.report({
              node,
              message: "Use globalIntlFormatter.getFormatter() instead of new Intl.NumberFormat().",
            });
          }
        },
      };
    },
  };
  