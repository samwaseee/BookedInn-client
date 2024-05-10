import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center grid items-center h-[100vh]">
            <h1 className="text-6xl">Oops! <br />{error.status} {error.statusText}</h1>
            <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl">
                <i>{error.error.message}</i>
            </p>
        </div>
    );
};

export default Error;