import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';

function Index(props) {
	const bookmarks = useLoaderData();
	return (
		<div className="index">
			<div className="bookmarkCreate">
				<h2>Add a Bookmark</h2>
				<Form action="/create" method="post">
					<input type="input" name="title" placeholder="Bookmark's name" />
					<input type="input" name="url" placeholder="Bookmark's URL" />

					<input type="submit" value="Add Bookmark" />
				</Form>
			</div>
			<div className="container">
				{bookmarks.map((bookmark) => {
					return (
						<div className="card" key={bookmark._id}>
							<div className="mainPageBookmarkTitle">
								<Link to={`/${bookmark._id}`} className="bookmark">
									<h1>{bookmark.title}</h1>
								</Link>
							</div>

							<Form
								action={`/delete/${bookmark._id}`}
								method="post"
								id="mainPageDeleteButton"
							>
								<input type="submit" value={`X`} />
							</Form>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Index;
