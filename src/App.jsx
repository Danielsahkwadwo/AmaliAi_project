import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import AppLoader from "./components/Reusable/AppLoader";


const LandingPage = lazy(()=> import("./components/HomePage/LandingPage"))
const Login = lazy(()=>import("./components/LoginPage/Login"))
const Signup = lazy(()=>import("./components/SignupPage/Signup"))
const ScanImage= lazy(()=>import("./components/CustomPages/ScanImage"))
const Community= lazy(()=>import("./components/CustomPages/Community"))
const ChatPage= lazy(()=>import("./components/CustomPages/ChatPage"))
const ScreeningPage= lazy(()=>import("./components/CustomPages/ScreeningPage"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<AppLoader/>}>
            <LandingPage />
            </Suspense>
            } />
          <Route path="/login" element={
            <Suspense fallback={<AppLoader/>}>
              <Login />
            </Suspense>
            } />
          <Route path="/register" element={
            <Suspense fallback={<AppLoader/>}>
              <Signup />
            </Suspense>
            } />
          <Route path="/scan" element={
            <Suspense fallback={<AppLoader/>}>
            <ScanImage />
            </Suspense>
            } />
          <Route path="/chat" element={
            <Suspense fallback={<AppLoader/>}>
            <ChatPage />
            </Suspense>
            } />
          <Route path="/screening" element={
            <Suspense fallback={<AppLoader/>}>
            <ScreeningPage />
            </Suspense>
            } />
          <Route path="/community" element={
            <Suspense fallback={<AppLoader/>}>
            <Community />
            </Suspense>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
