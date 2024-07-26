import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { connect } from "react-redux";

const UserContainer = ({usersList, fetchUsers}) => {

    useEffect(() => {
        fetchUsers()
    }, [])


    return(
        <div>
            <h1>Users List</h1>
            {usersList && usersList.error && <p>{usersList.error}</p>}
            {usersList && usersList.users && usersList.users.map(user => <p key={user.id}>{user.username}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersList: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
