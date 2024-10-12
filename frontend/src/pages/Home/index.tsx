import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";

function Home() {
  return (
    <>
      <Users />
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
    </>
  );
}

export default Home;
