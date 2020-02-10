export const objectIsEmpty = (obj: Data) => {
  return obj != null && Object.keys(obj).length === 0 && obj.constructor === Object
};