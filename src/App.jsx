/* eslint-disable no-undef */
import { useEffect, useState,useNavigate } from "react";
import Root from "./Root";
import jwtDecode from "jwt-decode";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

// import Home from "./pages/Home";
// import Create from "./pages/Create";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* <Route path="home" element={<Home />} />
       <Route path="/create" element={<Create />} /> */}
      {/* <Route path="profile" element={<Profile />} />
       <Route path="setting" element={<Setting />} />
       <Route path="logout" element={<Logout />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  // const navigate = useNavigate();
  // const [user, setuser] = useState({});
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "646245005567-5lqp8psc62h89093k15ilee8lrvdqrft.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  // }, []);
  // useEffect(() => {
  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, [user]);
  // useEffect(() => {
  //   google.accounts.id.prompt();
  //   console.log("prompt");
  // }, []);
  // const handleCallbackResponse = async (response) => {
  //   console.log(response.credential);
  //   const UserObject = jwtDecode(response.credential);
  //   setuser(UserObject);
  //    await setDoc(doc(db, UserObject.sub , "UserData" ), {
  //     userName: UserObject.name,
  //     image : UserObject.picture,
  //     uid : UserObject.sub,
  //   });
  //   localStorage.setItem("user", JSON.stringify(UserObject));
  //   localStorage.setItem("signedIn", true);
  //   navigate("/");
    
  // };
  // const handleSignOut = () => {
  //   setuser({});
  // };

  return (
      <RouterProvider router={router} />
  );
}

export default App;
