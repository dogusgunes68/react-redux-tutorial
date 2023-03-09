const { BUY_CAKE } = require("./cakeTypes");

export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload:number
  };
}
