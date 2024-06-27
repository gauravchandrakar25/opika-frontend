import React from "react";
import UserProfile from "../src/components/userProfile";
import UserPic from "../src/components/test.jpg";

const App: React.FC = () => {
  return (
    <div>
      <UserProfile
        name="John Doe"
        imageSrc={UserPic}
        bio="A passionate developer."
        email="john.doe@example.com"
      />
    </div>
  );
};

export default App;
