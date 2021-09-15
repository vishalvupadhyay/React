import react from "react";
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = "Submit"
  return (
    <div>
      <label className="label" htmlFor="name">Enter Name: </label>
      <input id="name" />
      {/* Using variable as button name */}
      <button type="submit" style={{ backgroundColor:'blue', color:'white' }}> {buttonText} </button>
    </div> 
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));