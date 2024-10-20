import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { About, Contact,Hero, Navbar,Tools } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseApp } from "./context/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ChatbotComponent from "./components/ChatBot/ChatBotComponent";

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // User is now signed out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="relative z-0 bg-black">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <About />
            <Tools/>
            {/* <div className="h-screen">
              <ChatbotComponent />
            </div> */}
            <Contact/>
            <div className="relative z-0">
              {user ? (
                <h1>Welcome, {user.email}!</h1>
              ) : (
                <div className="text-center"><button className="btn bg-warning">Please log in</button></div>
              )}
            </div>

          </>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;