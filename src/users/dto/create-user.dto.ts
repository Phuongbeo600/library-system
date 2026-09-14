export class CreateUserDto {
    name: string;
    email: string;
    role: "GUEST" | "LIBRARIAN" | "ADMIN";
}
