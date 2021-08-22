export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
}

export type ApiError = {
  success: false;
  message: string;
}

export type AxiosResponse<T> = {
  data: T;
}

export type Params = {
  headers: {
    'Content-Type'?: 'application/x-www-form-urlencoded';
    Accept?: 'application/vnd.api+json';
    Authorization: string;
  };
  data?: unknown;
  stringify?: boolean;
}