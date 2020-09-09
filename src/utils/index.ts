export const upperFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isObject = (item: any): boolean => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export const mergeDeep = (target: any, ...sources: any): any => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {[key]: {}});
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }

  return mergeDeep(target, ...sources);
};
export const randomColor = (): string => {
  const red: number = Math.floor(Math.random() * 255);
  const green: number = Math.floor(Math.random() * 255);
  const blue: number = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
