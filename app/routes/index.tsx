import type { LinksFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "../styles/index.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
           <span>iPuns!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="puns">Read Puns</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}