import React, {useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "../User/User.js";
import { counterActions } from '../../redux/actions'

const {increment, decrement, update, initCount: {request: initialCountRequest} } = counterActions

const  Counter = ({
  counter, 
  date,
  onIncrement,
  onDecrement,
  onUpdate,
  onLoadInitCount
}) => {
  useEffect(()=>{
    onLoadInitCount(70);
  },[])
    return (
      <div>
        <div>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}{" "}
        </div>
        <div>
          <button onClick={onUpdate}>TimeUpdate</button>
        </div>
        <br />
        <div>{counter}</div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <br />
        <br />
        {<User />}
      </div>
    );
}

Counter.propTypes = {
  counter: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  update: PropTypes.func,
  date: PropTypes.date 
};
const mapStateToProps = ({counter})=>(
  {
    counter: counter.counter,
    date: counter.date
  }
)
const mapDispatchToProps = (dispatch)=>({
  onIncrement : () => dispatch(increment()),
  onDecrement : () => dispatch(decrement()),
  onUpdate : () => dispatch(update()),
  onLoadInitCount: (startFrom) => { return dispatch(initialCountRequest(startFrom))}

})
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // zmieniono na sposob  z dekoratorem connect
