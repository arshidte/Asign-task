import React from "react";
import UserCard from "../userCard/UserCard";
import { users } from "../../../public/data/users";

const ArtistsInMumbai = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 mt-6">
        {users &&
          users
            .filter((user) => user.location === "Mumbai")
            .map((user) => <UserCard user={user} />)}
      </div>
    </>
  );
};

export default ArtistsInMumbai;
