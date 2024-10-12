import { FormEvent, useState } from "react";
import { useCreateUser } from "../../../service/user.service";

function CreateUser() {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const { createUser } = useCreateUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isNoDataEntered = Object.values(userData).every((value) => !!value);

    if (!isNoDataEntered) {
      return alert("Please enter all details to create user");
    }

    if (isNoDataEntered) {
      const {
        userName: name,
        userEmail: email,
        userPassword: password,
      } = userData;

      createUser({
        name,
        email,
        password,
      });

      setUserData({
        userName: "",
        userEmail: "",
        userPassword: "",
      });
    }
  };

  return (
    <>
      <p className="title">Create User:</p>
      <form onSubmit={handleSubmit} className="update-user-form">
        <input
          type="text"
          name="userName"
          placeholder="Enter Name"
          value={userData.userName}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              userName: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          name="userEmail"
          placeholder="Enter Email"
          value={userData.userEmail}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              userEmail: e.target.value,
            }));
          }}
        />
        <input
          type="password"
          name="userPassword"
          placeholder="Enter Password"
          value={userData.userPassword}
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              userPassword: e.target.value,
            }));
          }}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <hr className="separator-x" />
    </>
  );
}

export default CreateUser;
