export interface QueryParamType {
  page: number;
  limit: number;
}

export const defaultQueryParam: QueryParamType = {
  page: 1,
  limit: 2000,
};
