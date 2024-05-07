import React from 'react'

export const DeleteUser = () => {
    const type = useParams().type;


    return verify(type) ? <div className="dashboard">
        <Navbar />
        <div className="AppContent">
            <Topbar />
            
        </div>
    </div> : <Page404 />;
}
