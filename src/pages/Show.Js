import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const bookmark = useLoaderData();

  return (
    <div className="bookmark">
      <div>{bookmark.title}</div>
      <div>{bookmark.url}</div>
      <img src={cheese.image} alt={cheese.name} />

      <h2>Update Bookmark</h2>
      <Form action={`/update/${bookmark._id}`} method="post">
        <input defaultValue={bookmark.title} type="input" name="title" placeholder="Bookmark's name" />
        <input defaultValue={bookmark.url} type="input" name="url" placeholder="Bookmark's URL" />
        <input type="submit" value={`update ${cheese.name}`} />
      </Form>
      <h2>Delete Bookmark</h2>
      <Form action={`/delete/${bookmark._id}`} method="post">
      <input type="submit" value={`Delete Bookmark`} />
      </Form>
    </div>
  );
}

export default Show;