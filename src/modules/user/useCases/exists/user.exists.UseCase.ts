import { IUser, IUserRepository } from '../../repository/index';

import { IUserExistsDTO, IUserExistsResponse } from './user.exists.DTO';

export class UserExistsUseCase {
	
	constructor(private userRepository: IUserRepository) {}

	async exec(dto: IUserExistsDTO): Promise<IUserExistsResponse> {
		const { email } = dto;

		const userAlreadyExists: IUser | null = await this.userRepository.readOneByEmail({ email });

		

		return !!userAlreadyExists;
	}
}
