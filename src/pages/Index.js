import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const bookmarks = useLoaderData();
    return (
        <div>
            <h2>Add a Bookmark</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="title" placeholder="Bookmark's name" />
                <input type="input" name="url" placeholder="Bookmark's URL" />

                <input type="submit" value="Add Bookmark" />
            </Form>

            <div className='container'>
                {bookmarks.map((bookmark) => (
                    <div className="card" key={bookmark._id}>
                        <Link to={`/${cheese._id}`} className="bookmark">
                            <h1>{bookmark.title}</h1>
                        </Link>
                        <div className='xButton'>X</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;