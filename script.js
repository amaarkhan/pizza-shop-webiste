// Language Switcher Functionality
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_menu: "Menu",
        nav_deals: "Deals",
        nav_contact: "Contact",
        hero_title: "Welcome to Haj Pizza & Kebab",
        hero_subtitle: "Authentic Turkish Cuisine in the Heart of Elvas",
        hero_view_menu: "View Menu",
        hero_order_now: "Order Now",
        about_title: "About Haj Pizza & Kebab",
        about_desc: "Located in the historic city of Elvas, Portugal, Haj Pizza & Kebab brings you the authentic flavors of Turkish cuisine. Our commitment to fresh ingredients, traditional recipes, and exceptional service makes us the go-to destination for kebabs, pizzas, and Turkish specialties.",
        feature_halal_title: "100% Halal Certified",
        feature_halal_desc: "All our meat and ingredients are halal certified for your peace of mind",
        feature_fresh_title: "Fresh Ingredients",
        feature_fresh_desc: "We use only the freshest ingredients in all our dishes",
        feature_fast_title: "Fast Service",
        feature_fast_desc: "Quick preparation without compromising on quality",
        feature_authentic_title: "Authentic Recipes",
        feature_authentic_desc: "Traditional Turkish recipes passed down through generations",
        halal_menu_badge: "All our meat is 100% HALAL certified",
        tab_kebab: "Kebab",
        tab_pizza: "Pizza",
        tab_durum: "Durum",
        tab_plates: "Plates",
        tab_menus: "Menus",
        menu_header: "🍟 Complete Menus (Includes + Batatas + Refresco)",
        deals_halal_badge: "✨ 100% HALAL CERTIFIED DEALS ✨",
        footer_title: "Haj Pizza & Kebab",
        footer_desc: "Authentic Turkish cuisine in Elvas, Portugal. Fresh ingredients, traditional recipes, exceptional service.",
        footer_links: "Quick Links",
        footer_contact: "Contact Info",
        footer_address: "R. de Alcamim 29, Elvas",
        footer_phone: "+351 937 854 433",
        footer_hours: "Open until 11:30 PM"
    },
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_menu: "Menu",
        nav_deals: "Promoções",
        nav_contact: "Contato",
        hero_title: "Bem-vindo ao Haj Pizza & Kebab",
        hero_subtitle: "Culinária Turca Autêntica no Coração de Elvas",
        hero_view_menu: "Ver Menu",
        hero_order_now: "Pedir Agora",
        about_title: "Sobre o Haj Pizza & Kebab",
        about_desc: "Localizado na histórica cidade de Elvas, Portugal, o Haj Pizza & Kebab traz para você os autênticos sabores da culinária turca. Nosso compromisso com ingredientes frescos, receitas tradicionais e serviço excepcional faz de nós o destino ideal para kebabs, pizzas e especialidades turcas.",
        feature_halal_title: "100% Halal Certificado",
        feature_halal_desc: "Toda a nossa carne e ingredientes são certificados halal para sua tranquilidade",
        feature_fresh_title: "Ingredientes Frescos",
        feature_fresh_desc: "Usamos apenas os ingredientes mais frescos em todos os nossos pratos",
        feature_fast_title: "Serviço Rápido",
        feature_fast_desc: "Preparação rápida sem comprometer a qualidade",
        feature_authentic_title: "Receitas Autênticas",
        feature_authentic_desc: "Receitas turcas tradicionais passadas de geração em geração",
        halal_menu_badge: "Toda a nossa carne é 100% HALAL certificada",
        tab_kebab: "Kebab",
        tab_pizza: "Pizza",
        tab_durum: "Durum",
        tab_plates: "Pratos",
        tab_menus: "Menus",
        menu_header: "🍟 Menus Completos (Inclui + Batatas + Refrigerante)",
        deals_halal_badge: "✨ PROMOÇÕES 100% HALAL CERTIFICADAS ✨",
        footer_title: "Haj Pizza & Kebab",
        footer_desc: "Culinária turca autêntica em Elvas, Portugal. Ingredientes frescos, receitas tradicionais, serviço excepcional.",
        footer_links: "Links Rápidos",
        footer_contact: "Informações de Contato",
        footer_address: "R. de Alcamim 29, Elvas",
        footer_phone: "+351 937 854 433",
        footer_hours: "Aberto até 23:30"
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const lang = this.dataset.lang;
        switchLanguage(lang);
    });
});

// Set default language on load
document.addEventListener('DOMContentLoaded', function() {
    // Set default language to Portuguese (pt)
    switchLanguage('pt');
    // Set PT button as active
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const ptBtn = document.querySelector('.lang-btn[data-lang="pt"]');
    if (ptBtn) ptBtn.classList.add('active');
});
// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Menu Tab Functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');
    
    // Add entrance animation to menu items
    const menuItems = selectedTab.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'all 0.3s ease';
        }, index * 100);
    });
}

// Menu Images Toggle Functionality
function toggleMenuImages() {
    const menuImages = document.getElementById('menu-images');
    const toggleBtn = document.querySelector('.menu-toggle-btn');
    
    if (menuImages.style.display === 'none' || menuImages.style.display === '') {
        menuImages.style.display = 'block';
        toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Menu';
        
        // Smooth scroll to menu images
        setTimeout(() => {
            menuImages.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 100);
    } else {
        menuImages.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-images"></i> View Full Menu';
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .deal-item, .feature, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${rate}px`;
    }
});

// Loading Animation for Page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Phone Number Click Analytics (Optional)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked');
        // You can add analytics tracking here
    });
});

// Social Media Link Analytics (Optional)
document.querySelectorAll('a[href*="facebook"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Facebook link clicked');
        // You can add analytics tracking here
    });
});

// Image Lazy Loading (for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error Handling for Images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
        this.alt = 'Delicious food at Haj Pizza & Kebab';
    });
});

// Cart System
let cart = JSON.parse(localStorage.getItem('hajPizzaCart')) || [];

// Add to Cart Functionality
function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: parseFloat(price),
            quantity: 1
        });
    }
    
    localStorage.setItem('hajPizzaCart', JSON.stringify(cart));
    updateCartDisplay();
    showCartNotification(itemName);
}

// Pizza Size Selection and Add to Cart
function addPizzaToCart(button, pizzaName) {
    const menuItem = button.closest('.menu-item');
    const activeSizeBtn = menuItem.querySelector('.size-btn.active');
    const size = activeSizeBtn.dataset.size;
    const price = parseFloat(activeSizeBtn.dataset.price);
    const sizeText = size === 'small' ? 'Small' : 'Grande';
    const fullName = `${pizzaName} (${sizeText})`;
    
    addToCart(fullName, price);
}

// Pizza Size Selector Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for pizza size buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('size-btn')) {
            const menuItem = e.target.closest('.menu-item');
            const sizeButtons = menuItem.querySelectorAll('.size-btn');
            
            // Remove active class from all size buttons in this menu item
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
        }
    });
});

// Update Cart Display
function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update cart counter
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
        cartCounter.textContent = cartCount;
        cartCounter.style.display = cartCount > 0 ? 'block' : 'none';
    }
    
    // Update cart total in sidebar
    const cartTotalElement = document.querySelector('.cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: €${cartTotal.toFixed(2)}`;
    }
    
    // Update cart items list
    const cartItemsList = document.querySelector('.cart-items');
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">€${item.price.toFixed(2)}</span>
                </div>
                <div class="cart-item-controls">
                    <button onclick="updateCartItemQuantity('${item.name}', -1)" class="cart-btn-minus">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button onclick="updateCartItemQuantity('${item.name}', 1)" class="cart-btn-plus">+</button>
                    <button onclick="removeFromCart('${item.name}')" class="cart-btn-remove">🗑️</button>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    }
}

// Update Cart Item Quantity
function updateCartItemQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemName);
            return;
        }
        localStorage.setItem('hajPizzaCart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Remove Item from Cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('hajPizzaCart', JSON.stringify(cart));
    updateCartDisplay();
}

// Clear Cart
function clearCart() {
    cart = [];
    localStorage.setItem('hajPizzaCart', JSON.stringify(cart));
    updateCartDisplay();
}

// Show Cart Notification
function showCartNotification(itemName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        ${itemName} added to cart!
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Toggle Cart Sidebar
function toggleCart() {
    const cartSidebar = document.querySelector('.cart-sidebar');
    cartSidebar.classList.toggle('open');
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.quantity}x ${item.name}`).join('\n');
    
    const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${itemsList}\n\nTotal: €${total.toFixed(2)}\n\nObrigado!`;
    const phoneNumber = "+351937854433";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Contact Form Validation (if form is added later)
function validateContactForm(form) {
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');
    
    if (!email.value || !message.value) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}

// Search Functionality (Future Enhancement)
function searchMenu(query) {
    const menuItems = document.querySelectorAll('.menu-item');
    const searchTerm = query.toLowerCase();
    
    menuItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Scroll to Top Button (Future Enhancement)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #ff6b35;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Initialize cart display
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// WhatsApp Button Click Analytics
document.querySelector('.whatsapp-btn').addEventListener('click', () => {
    console.log('WhatsApp button clicked');
    // You can add analytics tracking here
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-related functionality here
}, 16)); // ~60fps
