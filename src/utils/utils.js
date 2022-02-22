function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function calculateTotal(cart) {
    let totalPrice = 0;
    for(let key of Object.keys(cart)){
      if(key !== "totalQty")
        totalPrice = totalPrice+(cart[key].qty*cart[key].eachPrice);
    }

    return totalPrice;
}

export { calculateTotal, capitalizeFirstLetter };