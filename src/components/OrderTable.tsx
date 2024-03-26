const OrderTable = () : JSX.Element => {
    return(
        <>
        <table className= "orderTable">
            <thead>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>123</td>
                <td>3/26</td>
                <td>USA</td>
                <td>USD$</td>
                <td>500</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td>123</td>
                <td>3/26</td>
                <td>USA</td>
                <td>USD$</td>
                <td>500</td>
            </tr>   
            </tbody>         
        </table>
        </>
    )
}

export default OrderTable;