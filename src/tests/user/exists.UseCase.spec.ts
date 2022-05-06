import { UserExistsUseCase } from "../../modules/user/useCases/exists/index";
import { userMockList, UserRepositoryMock } from "./userMock";


function createSUT(): {
    sut: UserExistsUseCase;
    userRepositoryMock: UserRepositoryMock;
}{
    const userRepositoryMock = new UserRepositoryMock();
    const sut = new UserExistsUseCase(userRepositoryMock)
    return {
        sut,
        userRepositoryMock
    }
}


describe('This use case should verify if an email exits on repository', () => {
    const testPrep = createSUT();

    describe('Given a valid email, that exist on repo', () => {
        const userRepoMock = userMockList[0];

        it('should return true', async () => {
            const ret = await testPrep.sut.exec({ email:userRepoMock.email });
            expect(ret).toBe(true);
		});
    });
});
