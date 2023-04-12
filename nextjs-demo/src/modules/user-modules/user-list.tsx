import {any} from "prop-types";

const UserList = () => {

    // get data from backend
    const users: Array<any> = [
        {firstName: "Neil", lastName: "Gibeaut"},
        {firstName: "Jake", lastName: "Danielson"},
        {firstName: "Kelly", lastName: "Brown"}
    ]

    // display data
    return (
        <div className={"space-y-10"}>
            {users.map(x => {
                return (
                    <div>
                        <span>{x.firstName + " " + x.lastName}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList
