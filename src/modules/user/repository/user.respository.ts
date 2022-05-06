import { IUser } from './index';

export interface IUserRepository {

    readOneByEmail(params: { email: string }): Promise<IUser>;
}