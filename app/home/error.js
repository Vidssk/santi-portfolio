'use client'; //Error components must be Cleint components
import { useEffect } from 'react';

const Error = ({ error, reset}) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2> Something went wrong!</h2>
            <button onClick={
                //attempt to recover by trying to re-render the segment
                () => reset()
            }
            >
                Try again
            </button>
        </div>
    );
}

export default Error