import { FormEvent, useState } from "react";
import { useUpdateUser } from "../../../service/user.service";

function UpdateUser() {
  const [updateUserData, setUpdateUserData] = useState({
    updateUserName: "",
    updateUserEmail: "",
    updateUserPassword: "",
  });
  const [userId, setUserId] = useState("");

  const { updateUser } = useUpdateUser({ userId });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isNoDataEntered = Object.values(updateUserData).some(
      (value) => !!value
    );

    if (!userId) {
      return alert("User ID is required to update user");
    }

    if (!isNoDataEntered) {
      return alert("Please enter valid details to update");
    }

    if (isNoDataEntered) {
      const {
        updateUserName: name,
        updateUserEmail: email,
        updateUserPassword: password,
      } = updateUserData;

      updateUser({
        name,
        email,
        password,
      });

      setUpdateUserData({
        updateUserName: "",
        updateUserEmail: "",
        updateUserPassword: "",
      });
    }
  };

  return (
    <>
      <p className="title">Update User:</p>
      <form onSubmit={handleSubmit} className="update-user-form">
        <input
          type="text"
          name="userId"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <input
          type="text"
          name="updateUserName"
          placeholder="Enter Name"
          value={updateUserData.updateUserName}
          onChange={(e) => {
            setUpdateUserData((prev) => ({
              ...prev,
              updateUserName: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          name="updateUserEmail"
          placeholder="Enter Email"
          value={updateUserData.updateUserEmail}
          onChange={(e) => {
            setUpdateUserData((prev) => ({
              ...prev,
              updateUserEmail: e.target.value,
            }));
          }}
        />
        <input
          type="password"
          name="updateUserPassword"
          placeholder="Enter Password"
          value={updateUserData.updateUserPassword}
          onChange={(e) => {
            setUpdateUserData((prev) => ({
              ...prev,
              updateUserPassword: e.target.value,
            }));
          }}
        />
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
      <hr className="separator-x" />
    </>
  );
}

export default UpdateUser;
