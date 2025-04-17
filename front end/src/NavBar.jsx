import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./useUser";

export default function NavBar() {
  const { isLoading, user } = useUser();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          <>
            {user && <li>Logged as in {user.email}</li>}
            <li>
              {user ? (
                <button onClick={() => signOut(getAuth())}>Sign Out</button>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
