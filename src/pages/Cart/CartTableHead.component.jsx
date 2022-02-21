export const CartTableHead = () => {
    return(
        <thead>
            <tr>
            <th style={{width: "15%"}}></th>
            <th style={{width: "30%"}}><h5>Name</h5></th>
            <th style={{width: "10%"}}><h5>Price (each) USD</h5></th>
            <th style={{width: "15%", textAlign: "center"}}><h5>Qty</h5></th>
            <th style={{width: "10%", textAlign: "right"}}><h5>Subtotal USD</h5></th>
            <th style={{width: "15%"}}></th>
            </tr>
        </thead>
    )
}