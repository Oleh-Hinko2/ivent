import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLegalPersonDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  representativeName: string;

  @IsNotEmpty()
  representativeSurname: string;

  @IsNotEmpty()
  password: string;
}

export class SerializedLegalPerson {
  @Expose()
  name: string;

  @Expose()
  address: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  representativeName: string;

  @Expose()
  representativeSurname: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedLegalPerson>) {
    Object.assign(this, partial);
  }
}
