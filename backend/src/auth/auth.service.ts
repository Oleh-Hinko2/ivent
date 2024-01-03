import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from '../utils/bcrypt';
import { SignInDto } from './dto/sign-in';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: SignInDto): Promise<any> {
    const user = await this.userService.findOne(data.email);

    if (user) {
      const matched = comparePassword(data.password, user.password);

      if (matched) {
        const payload = {
          userEmail: user.email,
          userName: user.name,
        };

        return {
          access_token: await this.jwtService.signAsync(payload),
          user,
        };
      }

      throw new UnauthorizedException('Name or password in not valid');
    }

    throw new UnauthorizedException('Name or password in not valid');
  }
}

//  async login(user: Partial<UserEntity>): Promise<{ accessToken: string }> {
//     const payload: IJwtPayload = { userId: user.id };
//     await this.usersService.cancelDeleteProfile(user.id);
//     const accessToken = this.jwtService.sign(payload);
//     return {
//       accessToken
//     };
//   }

// async validateUser(dto: LoginDTO): Promise<any> {
//     const { username, password } = dto;

//     const user = await this.usersService.findOneToLogin(username);
//     if (!user) {
//       throw new HttpException('auth.wrongCredentials', HttpStatus.BAD_REQUEST);
//     }

//     if (user.confirmationToken) {
//       throw new HttpException('auth.notConfirmed', HttpStatus.FORBIDDEN);
//     }

//     if (await BcryptService.verificationHash(password, user.password)) {
//       return this.login(user);
//     }
//     throw new HttpException('auth.wrongCredentials', HttpStatus.BAD_REQUEST);
//   }
