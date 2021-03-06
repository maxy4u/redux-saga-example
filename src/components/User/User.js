import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userActions } from '../../redux/actions'

const { nameChange, ageChange, getAge } = userActions

const User = ({ name, age, onAgeChange, onNameChange, onLoadAge }) => {
  useEffect(() => {
    onLoadAge(35)
  }, [])
  const onNameUpdate = useCallback(e => onNameChange(e), [])
  const onAgeUpdate = useCallback(e => onAgeChange(e), [])
  return (
    <div>
      <fieldset>
        <legend>User Name: </legend>
        <div>
          {name}
        </div>
        <input type='text' value={name} onChange={onNameUpdate} />
      </fieldset>
      <br />
      <fieldset>
        <legend>User Age: </legend>
        <div>
          {age}
        </div>
        <input type='number' value={age} onChange={onAgeUpdate} />
      </fieldset>
    </div>
  )
}

User.propTypes = {
  nameChange: PropTypes.func,
  ageChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}
const mapStateToProps = ({ user }) => ({
  name: user.name,
  age: user.age
})
const mapDispatchToProps = dispatch => ({
  onNameChange: e => dispatch(nameChange(e.target.value)),
  onAgeChange: e => dispatch(ageChange(e.target.value)),
  onLoadAge: startFrom => {
    return dispatch(getAge(startFrom))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(User) // zmieniono na sposob  z dekoratorem connect
