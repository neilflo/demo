import {any} from "prop-types";

const ViewUser = () => {
    const users: Array<any> = [
        {firstName: "Neil", lastName: "Gibeaut"},
        {firstName: "Jake", lastName: "Danielson"}
    ]

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

export default ViewUser
