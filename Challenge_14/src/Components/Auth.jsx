import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail, loginWithGoogle, logout } from "../firebase/store/actions/authActions";

const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail(email, password));
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={styles.container}>
      {user ? (
        <div style={styles.welcomeContainer}>
          <p style={styles.welcomeText}>Welcome, {user.email}!</p>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={styles.authContainer}>
          <h2 style={styles.title}>Login</h2>
          <button style={styles.googleButton} onClick={handleLoginWithGoogle}>Login with Google</button>
          <p style={styles.orText}>or</p>
          <form style={styles.form} onSubmit={handleLoginWithEmail}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.loginButton}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  authContainer: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  welcomeContainer: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "1rem",
    color: "#333",
  },
  orText: {
    margin: "1rem 0",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  googleButton: {
    backgroundColor: "#4285F4",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
  },
  logoutButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  welcomeText: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "1rem",
  },
};

export default Auth;
