export const CheckoutTableFooter = ({calculateTotal, cart}) => {
    return(
        <tfoot className='no-border'>
            <tr>
                <td></td>
                <td></td>
                <td style={{textAlign: "right"}}><em><span>$ {calculateTotal(cart)}</span></em></td>
            </tr>
        </tfoot>
    )
}