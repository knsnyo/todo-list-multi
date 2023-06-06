import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(async (data) => {
        const request = context.switchToHttp().getRequest();
        const accessToken = request.body.accessToken;
        const refreshToken = request.body.refreshToken;
        return {
          ...data,
          accessToken,
          refreshToken,
        };
      }),
    );
  }
}
