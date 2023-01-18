import {Form, Link, useLoaderData} from "react-router-dom"

function Index(props){
    const bookmarks = useLoaderData()

    return(
        <div className="index">
            <h2>Add A Bookmark</h2>
            <Form action="/create" method="post">
                <input type="input" name="title" placeholder="Add Bookmark"/>
                <input type

            </Form>
        </div>
    )
}