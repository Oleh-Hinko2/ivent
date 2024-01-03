import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateNaturalPersonDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;
}

export class SerializedNaturalPerson {
  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedNaturalPerson>) {
    Object.assign(this, partial);
  }
}
