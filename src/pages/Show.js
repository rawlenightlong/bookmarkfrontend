import { Link, useLoaderData, Form } from 'react-router-dom';

function Show(props) {
	const bookmark = useLoaderData();
	const handleLink = (clickedURL) => {
		window.location.replace(clickedURL);
	};
	return (
		<div className="bookmarkShowPage">
			<div className="showTitleArea">
				<div className="showTitle">{bookmark.title}</div>
				<div className="showLink">
					<Link onClick={() => handleLink(bookmark.url)}>{bookmark.url}</Link>
				</div>
			</div>
			<div className="showControlArea">
				<div className="showUpdateArea">
					<h2>Update Bookmark</h2>
					<Form action={`/update/${bookmark._id}`} method="post">
						<input
							defaultValue={bookmark.title}
							type="input"
							name="title"
							placeholder="Bookmark Name"
						/>
						<input
							defaultValue={bookmark.url}
							type="input"
							name="url"
							placeholder="Bookmark URL"
						/>
						<input
							type="submit"
							value={`Update Bookmark}`}
							id="showUpdateSubmitButton"
						/>
					</Form>
				</div>
				<div className="showDeleteArea">
					<h2>Delete Bookmark</h2>
					<Form action={`/delete/${bookmark._id}`} method="post">
						<input type="submit" value={`Delete Bookmark`} />
					</Form>
				</div>
			</div>
		</div>
	);
}

export default Show;
