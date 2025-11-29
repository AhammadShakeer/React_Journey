export function NavBar(props)
{
    return(
        <nav className={`d-flex justify-content-between border border-1`}>
            <div>{props.brand}</div>
            <div>
                {
                    props.menu.map(item=>
                        <span key={item}>item</span>
                    )
                }
            </div>
            <div>
                <button className="bi bi-person-fill">signin</button>
            </div>
        </nav>
    )
}