import React from 'react';
import './newUser.css';

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">Create New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Snow" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="John@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+6699 999 9999" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="USA | New York" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="male" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="female" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}