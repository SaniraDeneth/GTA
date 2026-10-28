// Shared request validation helpers will be added alongside feature implementation.
export const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;
