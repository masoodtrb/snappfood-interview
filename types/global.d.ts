import { AxiosRequestConfig } from "axios";
declare global {
  /**
   * @template T => Request body
   * @template R => Request Response
   * @template D => Transformed Data
   */
  interface IRequest<T = any, R = any, D = any> {
    method?: "get" | "post" | "put" | "delete";
    body?: T;
    config?: AxiosRequestConfig;
    url: string;
  }

  interface IResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
  }

  interface IResult<T = any> {
    success: boolean;
    errorType: "server" | "client" | null;
    data: T | null;
    message?: string;
  }

  type RequestFunc<T> = Promise<IResult<T>>;
}
