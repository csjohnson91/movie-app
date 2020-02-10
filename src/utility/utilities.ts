import * as moment from "moment";

export const objectIsEmpty = (obj: Data) => {
  return obj != null && Object.keys(obj).length === 0 && obj.constructor === Object
};

export const getMonthAndYearFromDate = (date: string) => {
  // @ts-ignore
  const parsedDate = moment(date, 'YYYY-MM-DD');
  return parsedDate.format('MMMM YYYY')
};

export const getYearFromDate = (date: string) => {
  // @ts-ignore
  const parsedDate = moment(date, 'YYYY-MM-DD');
  return parsedDate.format('YYYY')
};