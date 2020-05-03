import React from 'react';

export const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.addTask}>
                <div className="form-group">
                    <label>To do name</label>
                    <input
                        type="text" 
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}