import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoadingService } from '../services/loading-service/loading.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

constructor(private loadingService: LoadingService){}

    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.loadingService.startLoading();
        request = request.clone();
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.loadingService.stopLoading();
                }
                return event;
            }));

    }

}