import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to={'/'}>
                <CrwnLogo />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={'/'}>
                Home
                </Link>
                {
                  currentUser ? (
                     <span className="nav-link" onClick={signOutUser}> Sign out</span>
                    ) : (<Link className="nav-link" to={'/auth'}>
                    Sign In
                    </Link>)
                  
                }

            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }


  export default Navigation;