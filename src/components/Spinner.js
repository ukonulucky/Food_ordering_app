import React from "react"
import HashLoader from "react-spinners/HashLoader"
import "../styles/Spinner.css"
const Spinner = ({ loader }) => {
    return (
        <div className="spinner">
            <HashLoader
                loader={loader}
                speedMUltiplier={2}
                size={100}
            />
         </div>
     )
}
export default Spinner 