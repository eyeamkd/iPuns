import  type { LinksFunction ,LoaderFunction } from "remix";
import {Link,Outlet, useLoaderData} from "remix";  
import {db} from "~/utils/db.server"; 
import stylesUrl from "../../styles/puns.css"; 

export let links: LinksFunction = () => {
    return [ 
        { 
            rel:"stylesheet",
            href:stylesUrl
        }
    ]
}  

type LoaderData = { 
    punsList : Array<{id:string, name:string}>;
}

export let loader: LoaderFunction = async () => {
    let puns: LoaderData = {
        punsList: await db.pun.findMany()
    };  

    return puns;
}

function PunsIndexRoute() { 
    let puns = useLoaderData<LoaderData>()
    return (
        <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="iPuns"
              aria-label="iPuns"
            >
              <span className="logo-medium">iPuns</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random Pun</Link>
            <p>Here are a few more puns to check out:</p>
            <ul>
              {puns.punsList.map(pun => (
                <li key={pun.id}>
                  <Link to={pun.id}>{pun.name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
    )
}

export default PunsIndexRoute
