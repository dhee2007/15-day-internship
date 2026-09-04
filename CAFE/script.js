// ================= THEME TOGGLE =================

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }

    });

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        successMessage.textContent = "Message sent successfully! ❤️";
        successMessage.style.color = "#c85a17";
        successMessage.style.fontWeight = "bold";

        contactForm.reset();

    });

}


// ================= ADD TO CART =================

const addToCartButtons = document.querySelectorAll(".menu-card button");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.parentElement;

        const name = card.querySelector("h2").textContent;
        const price = card.querySelector("h3").textContent;

        const item = {
            name: name,
            price: price
        };

        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart! 🛒");

    });

});


// ================= DISPLAY CART =================

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if (cartItems && cartTotal) {

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach(function(item) {

            const itemElement = document.createElement("div");

            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            `;

            cartItems.appendChild(itemElement);

            total += parseInt(item.price.replace("₹", ""));

        });

        cartTotal.textContent = "Total: ₹" + total;

    }

}
// ================= CHECKOUT =================

const checkoutForm = document.getElementById("checkout-form");
const paymentMethod = document.getElementById("payment-method");
const paymentMessage = document.getElementById("payment-message");
const paymentButton = document.getElementById("payment-btn");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get customer details
        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const address = document.getElementById("customer-address").value.trim();

        // Check name
        if (name === "") {
            paymentMessage.textContent = "Please enter your full name.";
            paymentMessage.style.color = "red";
            return;
        }

        // Check phone
        if (phone === "") {
            paymentMessage.textContent = "Please enter your phone number.";
            paymentMessage.style.color = "red";
            return;
        }

        // Check address
        if (address === "") {
            paymentMessage.textContent = "Please enter your delivery address.";
            paymentMessage.style.color = "red";
            return;
        }

        // Check payment
        if (paymentMethod.value === "") {
            paymentMessage.textContent = "Please select a payment method.";
            paymentMessage.style.color = "red";
            return;
        }

        // Successful order
        paymentMessage.textContent =
            "Order placed successfully! 🎉❤️ Thank you for ordering from Foodie Haven!";

        paymentMessage.style.color = "green";
        paymentMessage.style.fontWeight = "bold";

        paymentButton.textContent = "Order Placed ✓";
        paymentButton.disabled = true;

        // Clear cart
        localStorage.removeItem("cart");

    });

}
