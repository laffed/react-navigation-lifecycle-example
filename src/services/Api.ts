import axios, {AxiosInstance} from 'axios';
import {Params, ApiResponse, AxiosResponse, ApiError} from '@types';
import {config} from '@core';

class ApiClass {
  protected api: AxiosInstance = axios.create({
    baseURL: config.baseURL,
  });

  public async get<T>(endpoint: string, params: Params): Promise<ApiResponse<T> | ApiError> {
    try {
      return this.handleSuccess(
        (await this.api.get(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async post<T>(endpoint: string, params: Params): Promise<ApiResponse<T> | ApiError> {
    try {
      return this.handleSuccess<T>(
        (await this.api.post(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async put<T>(endpoint: string, params: Params): Promise<ApiResponse<T> | ApiError> {
    try {
      return this.handleSuccess<T>(
        (await this.api.put(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  public async delete<T>(endpoint: string, params: Params): Promise<ApiResponse<T> | ApiError> {
    try {
      return this.handleSuccess<T>(
        (await this.api.delete(
          endpoint,
          {...params}
        ))
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  protected handleSuccess<T>(res: AxiosResponse<T>): ApiResponse<T> {
    return {success: true, message: '', data: res.data};
  }

  protected handleError(err: string): ApiError {
    return {success: false, message: err}
  }

}

export default ApiClass;
