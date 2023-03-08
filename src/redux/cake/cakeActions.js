const { BUY_CAKE } = require("./cakeTypes");

export function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
