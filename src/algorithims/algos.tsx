export const linearSearch = (array: number[], target: number) => {
  if (array) {
    array.forEach((el:number) => (el === target ? true : false));
  }
};
