import { UserRole } from 'src/users/schemas/user.schema';

export interface JwtUser {
  _id: string;
  email: string;
  role: UserRole;
}
