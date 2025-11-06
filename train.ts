// TASK Q
function hasProperty<T extends object, K extends string>(obj: T, key: K): boolean {
  return key in obj;
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); 
