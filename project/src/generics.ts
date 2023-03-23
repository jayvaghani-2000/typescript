const a: Array<number> = [1, 3, 4, 5];
const b: Array<string> = ["1", "3", "4", "5"];

function identity1(val: boolean | number): boolean | number {
  return val;
}

function identity2(val: any): any {
  return val;
}

function identity3<Type>(val: Type): Type {
  return val;
}

identity3<number[]>([3]);
