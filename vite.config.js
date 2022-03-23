const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "tic-tac-toe": resolve(__dirname, "/pages/tictactoe/index.html"),
        form: resolve(__dirname, "/pages/form/index.html"),
      },
    },
  },
};
