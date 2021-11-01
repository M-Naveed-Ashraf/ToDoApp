import React from 'react';

const ToDoList = (props) =>{

    

    return (
        <>
            <li className="list-group-item my-2">
                <div className="row">
                    <div className="col-9 d-flex">
                    {/*  */}
                        <input className={props.complete ? "form-check-input me-1 check__box" : "form-check-input me-1"}   type="checkbox"  onClick={ () => {props.onComplete(props.id)}} checked={props.complete} />
                        <label className="item form-check-label"  >{props.Item}</label>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-danger rounded-pill" onClick={ () => {
                            props.onSelect(props.id);
                        }}> <i class="las la-times-circle la-lg"></i> </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default ToDoList