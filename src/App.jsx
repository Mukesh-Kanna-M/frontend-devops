function App() {
  return (
    <div style={styles.container}>
      <h2>Login Page</h2>

      <input type="text" placeholder="Username" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />

      <button style={styles.button}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "100px auto",
    textAlign: "center",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
