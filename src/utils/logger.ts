import termColors from "./colors";

export const logger = {
  info: (...args: any[]) => {
    console.log(termColors.cyan(String(...args)));
  },

  error: (...args: any[]) => {
    console.log(termColors.red(String(...args)));
  },

  warning: (...args: any[]) => {
    console.log(termColors.yellow(String(...args)));
  },

  success: (...args: any[]) => {
    console.log(termColors.green(String(...args)));
  },
};
