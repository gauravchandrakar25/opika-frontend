import React, { useEffect, useState } from "react";
import UserProfile from "../src/components/userProfile";
import UserPic from "../src/components/test.jpg";
import axiosInstance from "./app/helper/axios";

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        //please replace the id with the user id in your database, I have not created separate UI for adding the userID from the frontend
        const response = await axiosInstance.get(
          "/users/667dad23ee012c1a23fd38a1"
        );
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        setUserData(null);
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <UserProfile
          name={userData?.name}
          imageSrc={userData?.profilePicture}
          bio={userData?.bio}
          email={userData?.email}
        />
      ) : (
        <>
          <p className="text-center">
            please replace the id with the user id in your database, I have not
            created separate UI for adding the userID from the frontend
          </p>
          <UserProfile
            name={"No User"}
            imageSrc={
              "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
            }
            bio={"No user bio available"}
            email={"no user email available"}
          />
        </>
      )}
    </div>
  );
};

export default App;
