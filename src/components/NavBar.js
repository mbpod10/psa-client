import React from "react"
import { Link } from "react-router-dom"
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCookies } from 'react-cookie'



const Navbar = () => {
  const [token, setToken, deleteToken] = useCookies(['psa-token']);
  const [ResponseUsername, setResponseUsername] = useCookies(['psa-name']);
  const [ResponseID, setResponseID] = useCookies(['psa-id']);
  const [name, setName] = useCookies(['psa-full_name'])

  const logout = (event) => {
    console.log('Logout')
    deleteToken(['psa-token'])
    deleteToken(['psa-name'])
    deleteToken(['psa-full_name'])
    deleteToken(['psa-id'])
    window.location.href = '/login'
  }


  return (
    <>
      <nav>
        <div>
          {ResponseUsername['psa-name'] ? <Link to='/'> Welcome {ResponseUsername['psa-name']} </Link> : null}
        </div>
        <div>
          <Link to='/'>Home</Link> {"  "}
          {!ResponseUsername['psa-name'] ? <Link to='/login'>Login</Link> : null}{"  "}
          <Link to='/schedule'>Schedule</Link> {"  "}
        </div>
        <div>
          {ResponseUsername['psa-name'] ?
            <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} />
            : null}
        </div>
      </nav>
    </>
  )
}

export default Navbar