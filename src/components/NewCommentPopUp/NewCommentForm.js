import React from 'react';

export default function Form({
    onSubmit,
    user,
    createComment,
    newComment,
    setNewComment,
    closeModal
}) {
    
    const handleChange = (evt) => {
       
        setNewComment({ ...newComment, [evt.target.name]: evt.target.value })
    }
    const handleClick = () => {
        createComment()
        
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <h3
                    value="username"
                    name='username'
                    className="form-control"
                    id="username" >{user.name}</h3>
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input
                    type='comment'
                    name='text'
                    className="form-control"
                    id="text"
                    value={newComment.text}
                    onChange={handleChange}
                    placeholder="Comment Here"
                />
            </div>
           
            <div className="form-group">
                <button onClick={handleClick} className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

