const Header = () : JSX.Element => {
    return(
        <div className="header">
        <h1 className="header">Payments Application</h1>
        {/* <ul>
            <li className="menuList">Payments Application</li>
            <li className= "menuList"><button id="findTransactionMenu">Find a Transaction</button></li>
            <li className = "menuList"><button id="newTransactionMenu">New Transaction</button></li>
        </ul> */}

        <p className= "menuList"><button id="findTransactionMenu">Find a Transaction</button></p>
        <p className = "menuList"><button id="newTransactionMenu">New Transaction</button></p>
        </div>
    )
}

export default Header;