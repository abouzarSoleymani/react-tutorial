import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// eslint-disable-next-line no-shadow
enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
}

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem('accessToken')

    if (
      token != null &&
      config &&
      config.headers &&
      config.headers.Authorization
    ) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch (error: any) {
    throw new Error(error)
  }
}

class Http {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers,
      withCredentials: true,
    })

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error
        return Http.handleError(response)
      }
    )

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http
      .get<T, R>(url, config)
      .then((response: any) => response.data)
  }

  post<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http
      .post<T, R>(url, data, config)
      .then((response: any) => response.data)
  }

  put<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http
      .put<T, R>(url, data, config)
      .then((response: any) => response.data)
  }

  delete<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http
      .delete<T, R>(url, config)
      .then((response: any) => response.data)
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private static handleError(error: any) {
    const { status } = error

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break
      }
      default:
      // Handle default
    }

    return Promise.reject(error)
  }
}

const http = new Http()
export default http
