import React from 'react'
import './newUser.scss'
export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username..." />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your fullname..." />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email..." />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="Enter your phone number..." />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Enter your address..." className="placeholder" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" value="male" id="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" value="female" id="female"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" value="other" id="other"/>
                    <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newUserButton">Create</button>
        </div>
    )
}
