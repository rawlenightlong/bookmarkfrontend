import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<nav className="nav">
			<Link to="/" id="navBox">
				<div>Bookmarks</div>
			</Link>
		</nav>
	);
}

export default Header;
