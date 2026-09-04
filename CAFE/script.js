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

const paymentButton = document.getElementById("payment-btn");
const paymentMethod = document.getElementById("payment-method");
const paymentMessage = document.getElementById("payment-message");

if (paymentButton) {

    paymentButton.addEventListener("click", function () {

        if (paymentMethod.value === "") {

            paymentMessage.textContent = "Please select a payment method.";
            paymentMessage.style.color = "red";

        } else {

            paymentMessage.textContent =
                "Order placed successfully! 🎉❤️ Thank you for ordering from Foodie Haven!";

            paymentMessage.style.color = "black";

            paymentButton.textContent = "Order Placed ✓";
            paymentButton.disabled = true;

            localStorage.removeItem("cart");
        }

    });

}
