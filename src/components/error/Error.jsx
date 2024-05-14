import { Link, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center space-y-14 items-center h-[100vh] bg-secondary py-20">
            {/* <h1 className="text-6xl">Oops! <br />{error.status} {error.statusText}</h1>
            <img src="../../../public/5-stars.png" alt="" className="w-64 mx-auto"/>
            <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-mar">
                <i>{error.error.message}</i>
            </p> */}
            Illustration by <a href="https://icons8.com/illustrations/author/Go8GMpKPAq1W">Polina M.</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
            <Link to={'/'}><button className="btn">Go Back</button></Link>
        </div>
    );
};

export default Error;