import { MailtrapMailProvider } from "../../providers/implementatios/MailtrapMailProvider";
import { PostegresUsersRepository } from "../../repositories/implementatios/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostegresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController };