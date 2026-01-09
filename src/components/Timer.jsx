
import { useState, useEffect } from "react";

export default function Timer() {

    const [show, setShow] = useState(true);

    useEffect(() => {
            if (!show) return;

            const timeout = setTimeout(() => {
                setShow(false);
            }, 5000);
            
            return()=> clearTimeout(timeout);
        }
    ,[show])

    return(
        <div>
            {show &&(
                <div>
                    <p className="bg-yellow-300 py-10">This message will dissapear in 5 seconds</p>
                </div>
            )}
        </div>
    );
}