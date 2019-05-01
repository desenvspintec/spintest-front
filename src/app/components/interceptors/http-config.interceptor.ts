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
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService,
        private messageService: MessageService) { }

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
                              
            }),
            catchError((error: HttpErrorResponse) => {

               /* let data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };*/
                this.loadingService.stopLoading();
                    this.messageService.add({ severity: 'error', detail: 'Erro de comunicação, tente novamente mais tarde!' });
                return throwError(error);
            })
            );

    }

}