/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { axiosAgent } from "./agent";

/**
 * @template T => Final Data (Result)
 * @template R => Request Response (Response)
 * @template B => Request Body (Body)
 */
export const sendRequest = async <T = any, R = any, B = Record<string, any>>({
  method = "get",
  body,
  url,
  config,
  ...props
}: IRequest<B, R, T>): Promise<IResult<T>> => {
  let response: AxiosResponse<IResponse<R>>;
  try {
    const configParams: AxiosRequestConfig = {
      ...config,
      ...props
    };
    switch (method) {
      case "post":
      case "put":
        response = await axiosAgent[method](url, body, configParams);
        break;
      case "delete":
        response = await axiosAgent.delete(url, {
          data: body,
          ...configParams
        });
        break;
      case "get":
      default:
        response = await axiosAgent.get(url, configParams);
        break;
    }
    const isSuccess = response.status >= 200 && response.status < 400;
    if (isSuccess) {
      return {
        success: isSuccess,
        errorType: null,
        data: response.data as unknown as T,
        message: response.data.message
      };
    }
    throw new Error(
      JSON.stringify({
        success: isSuccess,
        data: response as unknown as T,
        message: response.data.message
      })
    );
  } catch (err: any) {
    const error = err as AxiosError<IResponse<R>>;
    if (error?.response?.data.message) {
      console.log(error.response?.data.message);
    }
    console.log(error);

    if (error.response?.data) {
      toast.error(
        `Error: ${error.response?.data.message || error.response?.data.error}`
      );
    } else {
      toast.error(`Error: ${error.message}`);
    }
    throw new Error(
      JSON.stringify({
        success: false,
        errorType: "client",
        data: error.response || null
      })
    );
  }
};
