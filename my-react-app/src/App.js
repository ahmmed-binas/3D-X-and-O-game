import React, { useState } from 'react';

function App() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Player 1 Name:', player1Name);
    console.log('Player 2 Name:', player2Name);
    // Add your logic for handling the form data here
  };

  return (
    <div>
      <h1>Player Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Player 1 Name:
          <input
            type="text"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
        </label>
        <br />
        <label>
          Player 2 Name:
          <input
            type="text"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
