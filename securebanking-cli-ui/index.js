#!/usr/bin/env node

const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  let cmd = args._[0];

  if (!args._[0] || args.help || args.h) {
    const menus = {
      main: `
            securebanking-cli-ui [command] <options>

            addTheme    ........... Add a new theme based on a customization json
            buildThemes ........... build all themes
            appSize     ........... get the app bundle size
        `,
      addTheme: `
            securebanking-cli-ui addTheme <options>
          
            --name          ..... the theme name
            --customization ..... the customization file path
        `,
      buildThemes: `
            securebanking-cli-ui buildThemes <options>
          
            --project ..... the app name
        `,
      appSize: `
            securebanking-cli-ui appSize <options>
          
            --project   ..... the app name
            --theme     ..... the theme name
        `
    };
    console.log(menus[cmd] || menus.main);
    return;
  }

  switch (cmd) {
    case "addTheme":
      require("./scripts/addTheme")(args);
      break;
    case "buildThemes":
      require("./scripts/buildThemes")(args);
      break;
    case "appSize":
      require("./scripts/appSize")(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
