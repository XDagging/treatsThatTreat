import React, {useState} from "react";
import Index from "./Index.jsx"
import Users from "./Users.jsx"



function App(props) {
    const [currentPage, setCurrentPage] = useState("Index")




    return (
        <>
        {(currentPage == "Index") && (
            <div className="overflow-x-hidden">
            <Index setCurrentPage={setCurrentPage} />
        </div>
        )}
        
        {(currentPage == "Users") && (
            <Users setCurrentPage={setCurrentPage} />
        )}


        </>
        
    )
}



export default App;