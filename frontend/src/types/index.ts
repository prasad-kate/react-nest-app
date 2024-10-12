export interface User {
  name: string;
  email: string;
  _id: string;
}

export interface UpdateUser extends Partial<User> {
  password?: string;
}
