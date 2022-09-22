import { BUY_CAKE } from "./cakeTypes";

export function buyCake(number) {
  return {
    type: BUY_CAKE,
    payload: number,
  };
}
