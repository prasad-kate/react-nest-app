import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import Users from "./components/Users";

function Home() {
  return (
    <>
      <Users />
      <CreateUser />
      <UpdateUser />
    </>
  );
}

export default Home;
