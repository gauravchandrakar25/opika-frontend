import React, { useEffect, useState } from "react";
import UserProfile from "../src/components/userProfile";
import UserPic from "../src/components/test.jpg";
import axiosInstance from "./app/helper/axios";

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        //please replace the id with the user id in your database
        const response = await axiosInstance.get(
          "/users/667dad23ee012c1a23fd38a1"
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
        name={userData?.name}
        imageSrc={userData?.profilePicture}
        bio={userData?.bio}
        email={userData?.email}
      />
    </div>
  );
};

export default App;
