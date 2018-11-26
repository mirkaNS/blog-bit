import React from "react";
import "./NewPostPage.css"

const NewPostPage = () => {
    return (
        <form className="container">
            <div className="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Post Title" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Content</label>
                <input type="text" className="form-control content" id="exampleInputPassword1" placeholder="Input your text here..." />
            </div>

            <button type="button" className="btn btn-primary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
}

export { NewPostPage }