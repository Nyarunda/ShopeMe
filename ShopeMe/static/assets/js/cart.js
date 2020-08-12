let updateBtns = document.getElementsByClassName('update-cart');

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener('click', function () {
    var productId = this.dataset.product;
    var action = this.dataset.action;
    console.log({ productId }, { action });
    console.log({ user });
    if (user === 'AnonymousUser') {
      addCookieItem(productId, action)
    } else {
      updateUserOrder(productId, action);
    }
  });
}

const addCookieItem =(productId, action) => {
    if (action == 'add') {
        if (cart[productId] == undefined) {
            cart[productId] = {'quantity': 1}
        } else {
            cart[productId]['quantity'] += 1
        }
        console.log({cart})
    }
    if (action == 'remove') {
        cart[productId]['quantity'] -= 1
        if (cart[productId]['quantity'] <= 0) {
            console.log('Item Removed')
            delete cart[productId]
        }
    }
    console.log({cart})
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/";
    location.reload()
}

const updateUserOrder = (productId, action) => {
  const url = '/update_item/';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },

    body: JSON.stringify({
      'productId': productId,
      'action': action,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      location.reload();
    });
};

