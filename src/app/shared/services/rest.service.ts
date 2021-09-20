import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { NEVER, Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Environment } from '../models/environment.model';
import { Rest } from '../models/rest.model';
import { ConfigState, LoaderAdd, LoaderRemove } from '../store';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  @Select(ConfigState.getOne('url'))
  url$: Observable<Pick<Environment, 'url'>['url']>;

  constructor(protected http: HttpClient, protected store: Store) {}

  request<R>(config: Rest.Config): Observable<R> {
    const destroy$ = new Subject<void>();
    const { loaders = config.desc, customErrorHandling, limit } = config;

    return this.url$.pipe(
      map(({ host }) => {
        const params = new HttpParams({ fromObject: { ...config.payload, limit } });

        return {
          url: host,
          options: {
            ...(config.headers && { headers: new HttpHeaders({ ...config?.headers }) }),
            params,
            withCredentials: false,
          },
        };
      }),
      tap(() => this.store.dispatch(new LoaderAdd(loaders))),
      switchMap(({ url, options }) => this.http.get(url, options)),
      tap((res: R | any) => res && destroy$.next()),
      takeUntil(destroy$.pipe(delay(0))),
      catchError((error) => {
        if (!customErrorHandling) return throwError(error);
        this.store.dispatch(new LoaderRemove(loaders));
        return NEVER;
      }),
      finalize(() => this.store.dispatch(new LoaderRemove(loaders))),
    );
  }
}
