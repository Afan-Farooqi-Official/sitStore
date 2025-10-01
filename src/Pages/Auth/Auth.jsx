import { Outlet } from "react-router";

const Auth = () => {
    return (
        <div>
            auth page

            <Outlet />
        </div>
    );
};

export default Auth;