// Event gate/date helpers belong to Rihaz and Tharushi feature work.
export const isDate = (value) => value instanceof Date && !Number.isNaN(value.getTime());
