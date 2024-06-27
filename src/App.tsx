import React, { useEffect, useState } from "react";
import UserProfile from "../src/components/userProfile";
import UserPic from "../src/components/test.jpg";
import axiosInstance from "./app/helper/axios";

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(
          "/users/667d9e02d4887ce0e4f89228"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <UserProfile
        name={userData.name}
        imageSrc={UserPic}
        bio={userData.bio}
        email={userData.email}
      />
    </div>
  );
};

export default App;
