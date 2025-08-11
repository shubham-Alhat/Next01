import React from "react";

function UserProfile({ params }: any) {
  return (
    <div>
      UserProfile
      <span className="text-3xl text-green-500 h-screen w-full flex justify-center items-center">
        id from params : {params.id}
      </span>
    </div>
  );
}

export default UserProfile;
