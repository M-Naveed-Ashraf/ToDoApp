import React from 'react';


function Text(props) {
    
    return (
        <>
            <p className="col"> <span class="badge bg-primary rounded-pill">{props.tasks}</span> Tasks</p>
            <p className="col"> <span id="complete" class="badge bg-primary rounded-pill">{props.completed}</span> complete</p>
            <p className="col"><span class="badge bg-primary rounded-pill">{props.open}</span> Open</p>
        </>
    );
}

export default Text;