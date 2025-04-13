import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    imageUrl:
      "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    name: "Varun R",
    email: "varun.r@example.com",
    bio: "A passionate web developer.",
    posts: ["First post!", "Loving React!", "Hello, world!"],
  };

  return (
    <div>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
