import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userActions } from '../../redux/actions'

const { nameChange, ageChange } = userActions

const  User = ({
  name, 
  age,
  onAgeChange,
  onNameChange
}) => {
  const onNameUpdate = useCallback((e)=>onNameChange(e),[])
  const onAgeUpdate = useCallback((e)=>onAgeChange(e),[])
    return (
      <div>
        <div>{name}</div>
        <input type="text" value = {name} onChange={onNameUpdate}/>
        <br/>
        <div>{age}</div>
        <input type="number" value={age} onChange={onAgeUpdate}/>
      </div>
    );
}

User.propTypes = {
  nameChange: PropTypes.func,
  ageChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};
const mapStateToProps = ({user})=>(
  {
    name: user.name,
    age: user.age
  }
)
const mapDispatchToProps = (dispatch)=>({
  onNameChange : (e) => dispatch(nameChange(e.target.value)),
  onAgeChange : (e) => dispatch(ageChange(e.target.value))
})
export default connect(mapStateToProps, mapDispatchToProps)(User); // zmieniono na sposob  z dekoratorem connect

