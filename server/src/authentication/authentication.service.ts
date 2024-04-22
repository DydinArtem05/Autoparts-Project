import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Authentication } from './authentication.schema';
import { AuthDto, ChangePasswordDto, LogouthDto, RegistrationDto, UserIdDto } from './authentication.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ROLE } from 'src/types/types';
import { INCORECT_LOGIN, INCORECT_PWD, INVALID_TOKEN_MESSAGE, USER_ALREADY_CREATED } from 'src/utils/AppMessage';




// console.log( "--->",bcrypt.hashSync('',3),"<---");

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel(Authentication.name) private authModel: Model<Authentication>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async registration(dto: RegistrationDto) {
    const { login, password } = dto;

    const isUserCreated = await this.authModel.findOne({ login });

    if (isUserCreated) {
      throw new HttpException(USER_ALREADY_CREATED, HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const newUser = (await this.authModel.create({
      ...dto, role: ROLE.USER, password: hashPassword, token: '', registrationDate: new Date()
    })).toObject()

    const token = await this.jwtService.signAsync(
      { login, role: newUser.role, _id: newUser._id },
      { secret: this.configService.get('JWT_SECRET') || '6TzPv26KfZguepuKu4rM', expiresIn: '30d' },
    );

    const authUser = (await this.authModel.findOneAndUpdate(
      { _id: newUser._id },
      { token, lastEntered: new Date() },
    ).select('name surname role login token')).toObject()

    return { ...authUser, token };
  }

  async login(dto: AuthDto): Promise<{ token: string }> {
    const { login, password } = dto;

    const user = (await this.authModel.findOne({ login })).toObject()

    if (!user) {
      throw new HttpException("INCORECT_LOGIN", HttpStatus.NOT_FOUND);
    }

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      throw new HttpException(INCORECT_PWD, HttpStatus.NOT_FOUND);
    }

    const token = await this.jwtService.signAsync(
      { login, role: user.role, _id: user._id },
      { secret: this.configService.get('JWT_SECRET') || '6TzPv26KfZguepuKu4rM', expiresIn: '30d' },
    );

    const authUser = (await this.authModel.findOneAndUpdate(
      { _id: user._id },
      { token, lastEntered: new Date() },
    ).select('name surname role login')).toObject()


    return { ...authUser, token };
  }

  async refresh(token: string) {

    const user = await this.authModel.findOne({ token }).select('name surname role login')


    if (!user) {
      throw new HttpException(INVALID_TOKEN_MESSAGE, HttpStatus.FORBIDDEN);
    }
    return user
  }

  async logout(dto: LogouthDto): Promise<void> {
    await this.authModel.findOneAndUpdate(dto, { token: '' });
    return;
  }

  async changePassword(dto: ChangePasswordDto): Promise<void> {
    const { userId, newPassword } = dto
    const hashPassword = await bcrypt.hash(newPassword, 3);
    await this.authModel.findOneAndUpdate({ _id: userId }, { password: hashPassword });
    return;
  }


  async deleteUser(dto: UserIdDto): Promise<void> {
    const { userId } = dto
    await this.authModel.deleteOne({ _id: userId });
    return;
  }

  async getAllUser() {
    return await this.authModel.find({ role: { $ne: 'admin' } }).select('-password').select('-token')
  }

  async getUserStatistic() {
    try {
      const result: { date: Date; count: number }[] = [];
  
      for (let i = 0; i < 10; i++) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
  
        const count = await this.authModel.countDocuments({
          registrationDate: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate(),
              0, 0, 0
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1,
              0, 0, 0
            ),
          },
        });
  
        result.push({ date: currentDate, count });
      }
  
      return result.reverse();
    } catch (error) {
      throw error;
    }

  }
}

