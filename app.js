// 12 fitness products with gym equipment, protein, fruit salad images
const products = [
    {
        id: 1,
        name: "Resistance Band Set",
        category: "Accessories",
        price: 5.99,
        img: "https://cdn.webshopapp.com/shops/38765/files/376178204/resistance-bands-set-workout-set-with-handles-11-p.jpg",
        desc: "Multifunctional elastic band for strength and flexibility training. Suitable for beginners to professional athletes, can be used for hand, leg and upper body training.",
        rating: 4.6,
        reviews: [
            {name: "Alice", text: "Smooth Set experience."},
        ]
    },
    {
        id: 2,
        name: "Skipping Rope",
        category: "Cardio",
        price: 4.99,
        img: "https://subhanfitness.com/wp-content/uploads/2019/07/65d2196520b67318eac721000b4f66a0-1.jpg_720x720q80-1.jpg",
        desc: "Simple cardio tool that is effective for burning calories and increasing stamina. Lightweight design and anti-slip handles make it easy to use.",
        rating: 4.5,
        reviews: [
            {name: "Nina", text: "Great for daily exercise."}
        ]
    },
     {
        id: 3,
        name: "Push-Up Bar",
        category: "Strength",
        price: 3.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUjuXjd9NK1w7cv1pF4q9ZE_auwcRkokVbg&s",
        desc: "Push-up aid that helps stabilize the wrist and increase the range of motion of the chest, shoulder and tricep muscles.",
        rating: 4.7,
        reviews: []
    },
    {
        id: 4,
        name: "Ab Roller",
        category: "Accessories",
        price: 8.99,
        img: "https://img.id.my-best.com/product_images/604df227a1b5f6dbd59692b76a8b1a0d.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=e2441905125c5ad7cacaa91802e3cdd5",
        desc: "Abdominal roller to strengthen the core muscles. The double-wheel design provides stability when used.",
        rating: 4.8,
        reviews: []
    },
    {
        id: 5,
        name: "Dumbbell Adjustable",
        category: "Strength",
        price: 49.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD6E5cDkOHSEmk2yEqaH04KIRV5X2AcM9eQ&s",
        desc: "Dumbbell with a locking system that can be adjusted according to training needs. Efficient and space-saving for home gym.",
        rating: 4.9,
        reviews: []
    },
    {
        id: 6,
        name: "Anti-Slip Yoga Mat",
        category: "Accessories",
        price: 9.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo6EOSNafRHCQezHrVDYJWL9bB6iS13o10A&s",
        desc: "Exercise mat with anti-slip surface that is comfortable to use for yoga, pilates, stretching, and bodyweight training.",
        rating: 4.8,
        reviews: []
    },
    {
        id: 7,
        name: "Whey Protein Isolate (Chocolate)",
        category: "Protein",
        price: 25.99,
        img: "https://sportigo.co.id/storage/product/344ecaa9833dc0565e0a0a2ff7ceac1e.webp",
        desc: "High protein supplement quickly absorbed by the body. Suitable for muscle recovery after exercise and increasing daily protein intake.",
        rating: 4.7,
        reviews: []
    },  
    {
        id: 8,
        name: "Casein Protein (Vanilla)",
        category: "Protein",
        price: 23.99,
        img: "https://api.hy-vee.cloud/cdn-cgi/image/f=auto,w=828,q=60,dpr=1/https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/a96f49ff-6474-4875-aa56-c97345c3e69b_large.png",
        desc: "Slow-absorbing protein that is suitable for consumption before bed, helps muscle recovery during sleep at night.",
        rating: 4.6,
        reviews: []
    },
    {
        id: 9,
        name: "Mass Gainer (Strawberry)",
        category: "Protein",
        price: 29.99,
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_328,ar_328:426/dpr_1.5/cultgear-content/vLycuMSn1ek1kqUJLCgCyvBR",
        desc: "High-calorie and carbohydrate supplement to help increase muscle mass and weight. Ideal for hardgainers.",
        rating: 4.5,
        reviews: []
    },
    {
        id: 10,
        name: "Vegan Protein Blend (Chocolate Mint)",
        category: "Protein",
        price: 12.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kqFCpMkGtXltxlO_xRXvVhjQpniB5NzsDA&s",
        desc: "Plant-based protein from peas and brown rice. Lactose-free, suitable for vegans and dairy intolerance.",
        rating: 4.7,
        reviews: []
    }   ,
    {
        id: 11,
        name: "Protein Bar (Cookies & Cream)",
        category: "Accessories",
        price: 20.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qu16zpbvdyjutJ7FEB-Pwn2GY5GnmhSFRA&s",
        desc: "Practical high-protein snack with delicious taste. Ideal for healthy snacks before/after exercise.",
        rating: 4.6,
        reviews: []
    },
    {
        id: 12,
        name: "BCAA Powder (Grape Flavor)",
        category: "Protein",
        price: 19.99,
        img: "https://www.torpedo7.co.nz/content/products/optimum-nutrition-bcaa-boost-390g-grape-image01-i026239.jpg?auto=webp&width=360",
        desc: "Branched chain amino acids (Leucine, Isoleucine, Valine) that help reduce fatigue and improve muscle recovery.",
        rating: 4.5,
        reviews: []
    }
];

// Cart state
let cart = [];

// Render stars for rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += '<span class="star">&#9733;</span>';
        } else if (rating + 0.5 >= i) {
            stars += '<span class="star">&#9733;</span>';
        } else {
            stars += '<span class="star" style="color:#e0e0e0;">&#9733;</span>';
        }
    }
    return stars;
}

// Render products
function renderProducts(productsList) {
    const section = document.querySelector('.products-section');
    section.innerHTML = '';
    productsList.forEach(product => {
        const article = document.createElement('article');
        article.className = 'product-card';
        article.innerHTML = `
            <img src="${product.img}" class="product-img" alt="${product.name}">
            <div class="product-title">${product.name}</div>
            <div class="product-desc">${product.desc}</div>
            <div class="product-rating" title="Rating: ${product.rating}">
                ${renderStars(product.rating)} <span style="font-size:0.98rem;color:#666;">(${product.rating.toFixed(1)})</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="buyNow(${product.id})">Buy Now</button>
            </div>
            <div class="reviews">
                <div class="reviews-list">
                  ${
                    product.reviews.length
                      ? product.reviews.map(r => `<div class="review-entry"><b>${r.name}:</b> <span>${r.text}</span></div>`).join('')
                      : '<div class="review-entry" style="color:#aaa;">No reviews yet.</div>'
                  }
                </div>
                <form class="review-form" data-id="${product.id}">
                    <input type="text" placeholder="Your name" required>
                    <input type="text" placeholder="Write a review..." required>
                    <button type="submit">Post</button>
                </form>
            </div>
        `;
        section.appendChild(article);
    });
    // Review forms event
    document.querySelectorAll('.review-form').forEach(form => {
        form.onsubmit = function(e) {
            e.preventDefault();
            const id = +form.getAttribute('data-id');
            const name = form[0].value.trim();
            const text = form[1].value.trim();
            if (!name || !text) return;
            const prod = products.find(p => p.id === id);
            prod.reviews.push({name, text});
            renderProducts(filterProducts());
        };
    });
}

// Cart functions
function addToCart(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.qty++;
    } else {
        const prod = products.find(p => p.id === id);
        cart.push({id, name: prod.name, price: prod.price, qty: 1});
    }
    updateCartCount();
    showCart();
}
function buyNow(id) {
    addToCart(id);
    showCart();
}
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, p) => sum + p.qty, 0);
}
function showCart() {
    document.getElementById('cart-modal').classList.add('active');
    renderCartItems();
}
function closeCart() {
    document.getElementById('cart-modal').classList.remove('active');
}
function renderCartItems() {
    const list = document.getElementById('cart-item-list');
    list.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span class="cart-item-title">${item.name}</span>
            <span class="cart-item-qty">
                <button onclick="updateQty(${item.id},-1)">-</button>
                ${item.qty}
                <button onclick="updateQty(${item.id},1)">+</button>
            </span>
            <span>$${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})" style="color:#f76c35;background:none;border:none;font-size:1.15rem;cursor:pointer;">&times;</button>
        `;
        list.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total > 0 ? `Total: $${total.toFixed(2)}` : 'Cart is empty.';
    document.getElementById('checkout-btn').style.display = cart.length ? '' : 'none';
}
function updateQty(id, change) {
    const item = cart.find(p => p.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
        }
    }
    updateCartCount();
    renderCartItems();
}
function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    updateCartCount();
    renderCartItems();
}
window.addToCart = addToCart;
window.buyNow = buyNow;
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;

// Filtering and search
function filterProducts() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const cat = document.getElementById('filter-category').value;
    const r = +document.getElementById('filter-rating').value;
    return products.filter(p => {
        return (p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search))
            && (cat ? p.category === cat : true)
            && (r ? p.rating >= r : true);
    });
}
function updateProductList() {
    renderProducts(filterProducts());
}

// Navigation
function showSection(hash) {
    // Hide all
    document.querySelectorAll('main > section').forEach(sec => sec.style.display = 'none');
    // Show relevant
    if (!hash || hash === '#home') {
        document.getElementById('home').style.display = '';
        document.querySelector('.search-filter-section').style.display = '';
        document.getElementById('products').style.display = '';
    } else if (hash === '#products') {
        document.getElementById('home').style.display = 'none';
        document.querySelector('.search-filter-section').style.display = '';
        document.getElementById('products').style.display = '';
    } else if (hash === '#cart') {
        showCart();
    } else if (hash === '#contact') {
        document.getElementById('contact').style.display = '';
    } else if (hash === '#account') {
        document.getElementById('account').style.display = '';
        setTimeout(() => {
            document.getElementById('account').scrollIntoView({behavior:'smooth'});
        }, 50);
    }
    // Set nav active
    document.querySelectorAll('.nav-menu a').forEach(a => {
        if (a.getAttribute('href') === hash) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}

// Account/Login/Register tab switch and logic
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginMsg = document.getElementById('login-msg');
const registerMsg = document.getElementById('register-msg');

loginTab.onclick = function() {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    loginMsg.textContent = '';
    registerMsg.textContent = '';
};
registerTab.onclick = function() {
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    loginMsg.textContent = '';
    registerMsg.textContent = '';
};

loginForm.onsubmit = function(e) {
    e.preventDefault();
    loginMsg.textContent = 'Login is demo only, no real authentication.';
};
registerForm.onsubmit = function(e) {
    e.preventDefault();
    const pw = registerForm[1].value;
    const pw2 = registerForm[2].value;
    if (pw !== pw2) {
        registerMsg.textContent = "Passwords do not match.";
        return;
    }
    registerMsg.textContent = 'Registration is demo only, no real authentication.';
};

// Contact form
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('contact-msg').textContent = 'Thank you for contacting us! We will reply soon.';
};

// Event Listeners
document.getElementById('search-input').addEventListener('input', updateProductList);
document.getElementById('filter-category').addEventListener('change', updateProductList);
document.getElementById('filter-rating').addEventListener('change', updateProductList);
document.getElementById('cart-btn').addEventListener('click', showCart);
document.getElementById('nav-cart-link').addEventListener('click', function(e) {
    e.preventDefault(); showCart();
});
document.getElementById('close-cart').addEventListener('click', closeCart);
window.onclick = function(e) {
    if (e.target === document.getElementById('cart-modal')) closeCart();
};
// Navigation
document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', function(e) {
        const hash = a.getAttribute('href');
        if (hash === '#cart') {
            e.preventDefault();
            showCart();
        } else {
            showSection(hash);
        }
    });
});

// On load
window.onload = function() {
    updateProductList();
    updateCartCount();
    showSection('#home');
    if (window.location.hash) showSection(window.location.hash);
}
window.onhashchange = function() {
    showSection(window.location.hash);
};

// ...existing JS code...

// HOMEPAGE SLIDESHOW ANIMATION CODE
(function() {   
    const slideshow = document.getElementById('home-slideshow');
    if (!slideshow) return;
    const slides = Array.from(slideshow.getElementsByClassName('slide'));
    let current = 0;
    let animating = false;
    let timer = null;

    function showSlide(idx, direction = 1) {
        if (animating || idx === current) return;
        animating = true;
        let from = current;
        let to = idx;

        slides[from].style.transition = 'none';
        slides[to].style.transition = 'none';
        slides[to].style.opacity = 0;
        slides[to].style.transform = `translateX(${direction * 100}%)`;
        slides[to].classList.add('active');
        setTimeout(() => {
            slides[from].style.transition = 'transform 0.7s cubic-bezier(0.4,0.25,0.3,1), opacity 0.5s';
            slides[to].style.transition = 'transform 0.7s cubic-bezier(0.4,0.25,0.3,1), opacity 0.5s';
            slides[from].style.transform = `translateX(${-direction * 100}%)`;
            slides[from].style.opacity = 0;
            slides[to].style.transform = "translateX(0%)";
            slides[to].style.opacity = 1;
            setTimeout(() => {
                slides[from].classList.remove('active');
                slides[from].style.transition = '';
                slides[from].style.transform = '';
                slides[to].style.transition = '';
                slides[to].style.transform = '';
                current = to;
                animating = false;
            }, 700);
        }, 10);
    }
    function nextSlide() {
        showSlide((current + 1) % slides.length, 1);
        resetTimer();
    }
    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length, -1);
        resetTimer();
    }
    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(nextSlide, 5500);
    }
    document.getElementById('slide-next').onclick = nextSlide;
    document.getElementById('slide-prev').onclick = prevSlide;
    // Touch swipe
    let startX = null;
    slideshow.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    slideshow.addEventListener('touchend', e => {
        if(startX===null) return;
        let dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 45) {
            if (dx<0) nextSlide(); else prevSlide();
        }
        startX = null;
    });
    resetTimer();
})();

// ...rest of your existing JS code...
// No changes to the main e-commerce/product/account logic!