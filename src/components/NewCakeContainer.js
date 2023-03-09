import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useState } from "react";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>NEW Number of Cakes - {props.numOfCakes}</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

//CONNECT STEP 1
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//CONNECT STEP 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

//CONNECT STEP 3
//PASS THE FUNCTIONS PROPS
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
