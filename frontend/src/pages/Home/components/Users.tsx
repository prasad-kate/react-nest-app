import { useGetUsers } from "../../../service/user.service";
import { User } from "../../../types";

function Users() {
  const { users } = useGetUsers();

  return (
    <div>
      <p className="title">Users List:</p>
      <ul className="users-list">
        {users?.map(({ name, email, _id }: User) => {
          return <li key={_id}>{`${name} - ${email} - ${_id}`}</li>;
        })}
      </ul>
      <hr className="separator-x" />
    </div>
  );
}

export default Users;
