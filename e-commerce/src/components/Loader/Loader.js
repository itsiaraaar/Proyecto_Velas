import React from 'react';
/* import 'semantic-ui-css/semantic.min.css'; */

function Loader() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loader;