import { HttpRequest, HttpParamsOptions } from '@angular/common/http';

export namespace Rest {
  export interface Config {
    desc: string;
    payload: any;
    headers?: typeof HttpRequest.prototype.headers;
    params?: HttpParamsOptions;
    body?: typeof HttpRequest.prototype.body;
    responseType?: typeof HttpRequest.prototype.responseType;
    method?: typeof HttpRequest.prototype.method;
    urlWithParams?: typeof HttpRequest.prototype.urlWithParams;
    loaders?: string[] | string;
    customErrorHandling?: boolean;
  }
}
