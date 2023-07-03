export enum COMMON {
  // auth
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',

  // status
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',

  // roles
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum USER_ACTIVITY_STATUS {
  REGISTERED = 'REGISTERED',
  ACCEPTED = 'ACCEPTED',
  WITHDRAWN = 'WITHDRAWN',
  REJECTED = 'REJECTED',
}

export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_FORMAT2 = 'YYYY-MM-DD';
export const TIME_FORMAT = 'HH:mm';
