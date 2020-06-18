import React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../store";
import './Nav.css';
import {signOut} from "../../store/actions/getUser";

const mapStateToProps = (state: RootState) => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onSignOut: () => dispatch(signOut())
    };
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Nav({user, onSignOut}: PropsFromRedux) {
    return (
        <nav>
            <ul>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/articles'>Articles</Link></li>
                    <li><Link to='/sign-in'>Sign In</Link></li>


                {user ? (
                    <li onClick={onSignOut}>
                        <Link to='/'>Sing Out </Link>
                    </li>
                ) : (
                    <li><Link to='/sign-up'>Sign Up</Link></li>
               )}
            </ul>
        </nav>
    );
}

export default connector(Nav);
