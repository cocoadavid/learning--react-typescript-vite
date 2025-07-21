import type { RequestStatus } from "../constants/requestStatus";

type StatusProps = {
    status: RequestStatus
}

const Status = ({status}: StatusProps) => {
    let message;
    if(status === 'loading'){
        message = 'Loading...'
    } else if (status === "success"){
        message = "Data fetched successfully"
    } else {
        message = "Error"
    }
    return ( 
        <div>
            <h2>Status - {message}</h2>
        </div>
     );
}
 
export default Status;