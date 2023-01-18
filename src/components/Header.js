import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Bookmarks</div>
      </Link>
    </nav>
  )
}

export default Header