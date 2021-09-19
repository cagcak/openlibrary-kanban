import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Select, Store } from '@ngxs/store';
import { Rest } from '../models/rest.model';
import { NEVER, Observable, Subject, throwError } from 'rxjs';
import { ConfigState, LoaderAdd, LoaderRemove } from '../store';
import { catchError, delay, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Environment } from '../models/environment.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  @Select(ConfigState.getOne('url'))
  url$: Observable<Pick<Environment, 'url'>['url']>;

  constructor(protected http: HttpClient, protected store: Store) {}

  request<T, R>(config: Rest.Config): Observable<R> {
    const destroy$ = new Subject<void>();
    const { loaders = config.desc, customErrorHandling } = config;

    return this.url$.pipe(
      map(({ host }) => this.defaults<T>(host, config)),
      switchMap((request) => this.http.request<T>(request)),
      tap(() => this.store.dispatch(new LoaderAdd(loaders))),
      tap(({ ok }: any) => ok && destroy$.next()),
      takeUntil(destroy$.pipe(delay(0))),
      catchError((error) => {
        if (!customErrorHandling) return throwError(error);
        this.store.dispatch(new LoaderRemove(loaders));
        return NEVER;
      }),
      finalize(() => this.store.dispatch(new LoaderRemove(loaders))),
    );
  }

  private defaults<T>(url: string, config: Rest.Config): HttpRequest<T> {
    const headers = new HttpHeaders({ 'content-type': 'application/json', ...config?.headers });
    const params = new HttpParams({ fromObject: config.payload });

    return {
      url,
      body: config?.body || null,
      headers,
      context: new HttpContext(),
      reportProgress: false,
      withCredentials: false,
      responseType: config?.responseType || 'json',
      method: config?.method || 'GET',
      params,
      urlWithParams: config?.urlWithParams || '',
      serializeBody: HttpRequest.prototype.serializeBody,
      detectContentTypeHeader: HttpRequest.prototype.detectContentTypeHeader,
      clone: HttpRequest.prototype.clone,
    };
  }
}
