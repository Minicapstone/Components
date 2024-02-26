import './App.css';

function App() {
    return (
      <div className="login-box">
        <label htmlFor="new-passowrd">New Password:</label>
        <input
        type="text"
        id="new-passowrd"
        name="new-passowrd"
        placeholder="New Password"
      />
        <label htmlFor="re-type-password">Re-type Password:</label>
        <input
        type="text"
        id="re-type-password"
        name="re-type-password"
        placeholder="Re-type Password"
      />
      <div>
      <button className="submit-button">Submit</button>
    </div>
      </div>
      
    );
  };
export default App;
