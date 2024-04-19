import React from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card-main">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="profile-pic">
            <img
              className="rounded-full"
              src={user.profilePic}
              alt="aditi.png"
            />
          </div>
          <div className="name-birth">
            <h4>{user.userName}</h4>
            <p>{user.birth}</p>
          </div>
        </div>
        <div>
          <button className="rounded-3xl custom-button">Following</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {user.posts &&
          user.posts.map((post) => (
            <div key={post.postId} className="w-full post-holder flex justify-center items-start">
              <img src={post.postImage} alt={post.postId} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCard;
