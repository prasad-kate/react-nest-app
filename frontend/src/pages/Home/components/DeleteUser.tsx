import { FormEvent, useState } from "react";
import { useDeleteUser } from "../../../service/user.service";

function DeleteUser() {
  const [userId, setUserId] = useState("");
  const { deleteUser } = useDeleteUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userId) {
      return alert("User ID is required to update user");
    }

    deleteUser(userId);
    setUserId("");
  };

  return (
    <>
      <p className="title">Delete User:</p>
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
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
      <hr className="separator-x" />
    </>
  );
}

export default DeleteUser;
