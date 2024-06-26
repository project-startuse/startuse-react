import getUser from "./getUser";

const authHeader = () => {
    const user = getUser();
    return {headers: {authorization: `Bearer ${user.accessToken}`}};
}

export default authHeader;