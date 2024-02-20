# eslint-plugin-no-direct-intl-numberformat
A custom eslint plugin to prevent direct usage of Intl.NumberFormat API



## Example usage

```
// .eslintrc.js

module.exports = {
 //... 
  plugins: ["no-direct-intl-numberformat"],
  reportUnusedDisableDirectives: true,
  rules: {
    "no-direct-intl-numberformat/no-direct-intl-numberformat": "error",
      },
};

```

![image](https://github.com/mohdashraf010897/eslint-plugin-no-direct-intl-numberformat/assets/57627350/3fd64447-1214-4d2a-97a1-5513f33f74b3)
