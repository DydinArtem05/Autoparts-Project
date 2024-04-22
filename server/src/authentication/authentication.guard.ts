import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { JwtService } from '@nestjs/jwt';
import { INVALID_TOKEN_MESSAGE, NOT_FOUND_AUTH_HEADER_MESSAGE } from 'src/utils/AppMessage';
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}
  
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
  
      if (!authHeader) {
        throw new UnauthorizedException(NOT_FOUND_AUTH_HEADER_MESSAGE);
      }
  
      const [bearer, token] = authHeader.split(' ');
  
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException(INVALID_TOKEN_MESSAGE);
      }
  
      try {
        this.jwtService.verify(token);
        return true;
      } catch (error) {
        throw new UnauthorizedException(INVALID_TOKEN_MESSAGE);
      }
    }
  }
  