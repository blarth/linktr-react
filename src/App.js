import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TimeLine from "./pages/TimeLine";
import Post from "./components/PostComponent";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";

import Sidebar from "./components/hashtagsSidebar/index.js";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthProvider>
      <UserProvider user={user} setUser={setUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/hashtag" element={<Sidebar />}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}
