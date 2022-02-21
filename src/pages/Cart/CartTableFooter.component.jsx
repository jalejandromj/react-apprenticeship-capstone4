export const CartTableFooter = ({calculateTotal}) => {
    return(
        <tfoot className='no-border'>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{textAlign: "right"}}><em><span>$ {calculateTotal()}</span></em></td>
                <td></td>
            </tr>
        </tfoot>
    )
}