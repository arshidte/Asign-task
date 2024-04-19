import React from "react";
import UserCard from "../userCard/UserCard";
import { users } from "../../../public/data/users";
console.log(users);
const Following = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 mt-6">
        {users &&
          users
            .filter((user) => user.following === true)
            .map((user) => <UserCard user={user} />)}
      </div>
    </>
  );
};

export default Following;
