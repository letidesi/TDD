import { IUser, IUserRepository } from '../../modules/user/repository/index';

type IUserModel = IUser & { firstName?: string };

// 5 Users
export let userMockList: IUserModel[] = [
	{
		
		email: 'userA@test.com.br',
		firstName: 'User A',
		
	}
];
export class UserRepositoryMock implements IUserRepository {
    
	readOneByEmail = jest.fn().mockImplementation(
        async (params: { email: string }) => {
		const { email } = params;
		return await userMockList.find((user: IUser) => user.email === email);
	});

}