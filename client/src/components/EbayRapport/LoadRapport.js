import React from 'react'
import axios from "axios";

function LoadRapport() {
    const Ebayrapport = async () => {
        await axios.post("http://localhost:5000/api/v1/ebay/ebay");
    };
    return (<div>
        <button className="btn btn-info" style={{ marginLeft: "3.5%", marginTop: "12%" }} onClick={Ebayrapport}>
            Add task
        </button>
    </div>
    )
}
export default LoadRapport;