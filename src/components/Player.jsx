import { useState, useRef } from "react";
const Player = () => {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState("");

  const handleClick = function () {
    setEnteredName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName || "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};
export default Player;
