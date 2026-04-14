$(document).ready(function () {

    /* =========================
       DATA
    ========================= */
    const books = [
        {
            id: 1,
            title: "JavaScript программчлалын үндэс",
            author: "Б. Тэмүүлэн",
            category: "programming",
            categoryName: "Програмчлал",
            price: 28000,
            image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
            description: "JavaScript хэлний үндсэн ойлголт, хувьсагч, нөхцөл, давталт, функцийн талаар."
        },
        {
            id: 2,
            title: "HTML ба CSS практик",
            author: "Н. Энхжин",
            category: "programming",
            categoryName: "Програмчлал",
            price: 24000,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=500&q=80",
            description: "Веб хуудасны бүтэц, загварчлал, responsive дизайн хийх практик гарын авлага."
        },
        {
            id: 3,
            title: "Python сурах хялбар арга",
            author: "Э. Саруул",
            category: "programming",
            categoryName: "Програмчлал",
            price: 27000,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
            description: "Python хэлний үндэс, өгөгдлийн бүтэц, функц, файлтай ажиллах талаар."
        },
        {
            id: 4,
            title: "Харри Поттер ба Нууц өрөө",
            author: "J.K. Rowling",
            category: "literature",
            categoryName: "Уран зохиол",
            price: 30000,
            image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=500&q=80",
            description: "Шидтэний сургуулийн адал явдал, нөхөрлөл, ид шидийн ертөнцийн тухай өгүүлнэ."
        },
        {
            id: 5,
            title: "Алхимич",
            author: "Paulo Coelho",
            category: "literature",
            categoryName: "Уран зохиол",
            price: 25000,
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80",
            description: "Мөрөөдлөө дагах, амьдралын утга учрыг олох тухай гүн утгатай роман."
        },
        {
            id: 6,
            title: "Монголын нууц товчоо",
            author: "Эртний зохиолч",
            category: "history",
            categoryName: "Түүх",
            price: 32000,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
            description: "Монголын эзэнт гүрний үүсэл хөгжил, түүхэн үйл явдлыг өгүүлсэн сонгодог бүтээл."
        },
        {
            id: 7,
            title: "Дэлхийн түүхийн тойм",
            author: "П. Батсайхан",
            category: "history",
            categoryName: "Түүх",
            price: 34000,
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80",
            description: "Эрт үеэс орчин үе хүртэлх дэлхийн томоохон түүхэн үйл явдлуудын тухай."
        },
        {
            id: 8,
            title: "Баян аав, ядуу аав",
            author: "Robert Kiyosaki",
            category: "business",
            categoryName: "Бизнес",
            price: 26000,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
            description: "Санхүүгийн боловсрол, мөнгөний сэтгэлгээ, хөрөнгө ба өрийн ялгааг тайлбарласан ном."
        },
        {
            id: 9,
            title: "Startup бизнес эхлүүлэхүй",
            author: "Г. Амар",
            category: "business",
            categoryName: "Бизнес",
            price: 29000,
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80",
            description: "Шинэ бизнес эхлүүлэх, санаагаа хөгжүүлэх, зах зээлд нэвтрэх аргууд."
        },
        {
            id: 10,
            title: "Сэтгэл зүйн нууц",
            author: "Д. Мөнхзул",
            category: "psychology",
            categoryName: "Сэтгэл зүй",
            price: 22000,
            image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
            description: "Хүний зан төлөв, сэтгэл хөдлөл, харилцааны онцлогийг ойлгоход туслах ном."
        },
        {
            id: 11,
            title: "Өөрийгөө ялах урлаг",
            author: "С. Болд",
            category: "psychology",
            categoryName: "Сэтгэл зүй",
            price: 21000,
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=500&q=80",
            description: "Өөрийгөө хөгжүүлэх, сахилга баттай болох, амжилттай сэтгэлгээг бий болгох тухай."
        },
        {
            id: 12,
            title: "Амжилтын сэтгэлгээ",
            author: "Б. Одгэрэл",
            category: "psychology",
            categoryName: "Сэтгэл зүй",
            price: 23000,
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=500&q=80",
            description: "Амжилттай хүмүүсийн зуршил, өдөр тутмын сахилга бат, сэтгэлгээний талаар."
        }
    ];

    let selectedCategory = "all";
    let searchText = "";
    let cart = [];

    /* =========================
       DROPDOWN MENU
    ========================= */
    $(".dropdown-menu-custom").hide();

    $("#book").click(function (e) {
        e.stopPropagation();
        $(".dropdown-menu-custom").hide();
        $("#bookMenu").show();
    });

    $("#account").click(function (e) {
        e.stopPropagation();
        $(".dropdown-menu-custom").hide();
        $("#accountMenu").show();
    });

    $("#help").click(function (e) {
        e.stopPropagation();
        $(".dropdown-menu-custom").hide();
        $("#helpMenu").show();
    });

    $("#book").mouseleave(function () {
        $("#bookMenu").hide();
    });

    $("#account").mouseleave(function () {
        $("#accountMenu").hide();
    });

    $("#help").mouseleave(function () {
        $("#helpMenu").hide();
    });

    $(document).click(function () {
        $(".dropdown-menu-custom").hide();
    });

    /* =========================
       FUNCTIONS
    ========================= */
    function formatPrice(price) {
        return price.toLocaleString("mn-MN") + "₮";
    }

    function renderBooks() {
        const filteredBooks = books.filter(book => {
            const matchCategory = selectedCategory === "all" || book.category === selectedCategory;
            const matchSearch =
                book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                book.author.toLowerCase().includes(searchText.toLowerCase());

            return matchCategory && matchSearch;
        });

        $("#resultText").text("Нийт " + filteredBooks.length + " ном");

        if (filteredBooks.length === 0) {
            $("#bookList").html(`
                <div class="col-12">
                    <div class="no-result">Илэрц олдсонгүй.</div>
                </div>
            `);
            return;
        }

        let html = "";

        filteredBooks.forEach(function (book) {
            html += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="book-card">
                        <img src="${book.image}" alt="${book.title}">
                        <div class="book-info">
                            <span class="book-category">${book.categoryName}</span>
                            <div class="book-title">${book.title}</div>
                            <div class="book-author">Зохиогч: ${book.author}</div>
                            <div class="book-desc">${book.description}</div>

                            <div class="book-bottom">
                                <div class="book-price">${formatPrice(book.price)}</div>
                                <button class="btn-buy" data-id="${book.id}">
                                    Сагсанд нэмэх
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        $("#bookList").html(html);
    }

    function renderCart() {
        if (cart.length === 0) {
            $("#cartItems").html(`<p class="empty-cart">Сагс хоосон байна.</p>`);
            $("#cartCount").text("0");
            $("#cartTotal").text("0₮");
            return;
        }

        let html = "";

        cart.forEach(function (item) {
            html += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>

                        <div class="cart-item-controls">
                            <button class="qty-btn decrease-btn" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn increase-btn" data-id="${item.id}">+</button>
                            <button class="remove-btn" data-id="${item.id}">Устгах</button>
                        </div>
                    </div>
                </div>
            `;
        });

        $("#cartItems").html(html);

        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        $("#cartCount").text(totalCount);
        $("#cartTotal").text(formatPrice(totalPrice));
    }

    function openCart() {
        $("#cartSidebar").addClass("open");
        $("#cartOverlay").addClass("show");
    }

    function closeCart() {
        $("#cartSidebar").removeClass("open");
        $("#cartOverlay").removeClass("show");
    }

    /* =========================
       SEARCH
    ========================= */
    $("#searchInput").on("keyup", function () {
        searchText = $(this).val().trim();
        renderBooks();
    });

    /* =========================
       CATEGORY
    ========================= */
    $(document).on("click", "#bookMenu .category-btn", function (e) {
        e.stopPropagation();

        $("#bookMenu .category-btn").removeClass("active");
        $(this).addClass("active");

        selectedCategory = $(this).data("category");
        renderBooks();
        $("#bookMenu").hide();
    });

    /* =========================
       ADD TO CART
    ========================= */
    $(document).on("click", ".btn-buy", function () {
        const id = $(this).data("id");
        const foundBook = books.find(book => book.id === id);
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...foundBook,
                quantity: 1
            });
        }

        renderCart();
        openCart();
    });

    /* =========================
       CART BUTTONS
    ========================= */
    $(document).on("click", ".increase-btn", function () {
        const id = $(this).data("id");
        const item = cart.find(item => item.id === id);

        if (item) {
            item.quantity += 1;
            renderCart();
        }
    });

    $(document).on("click", ".decrease-btn", function () {
        const id = $(this).data("id");
        const item = cart.find(item => item.id === id);

        if (item) {
            item.quantity -= 1;

            if (item.quantity <= 0) {
                cart = cart.filter(cartItem => cartItem.id !== id);
            }

            renderCart();
        }
    });

    $(document).on("click", ".remove-btn", function () {
        const id = $(this).data("id");
        cart = cart.filter(item => item.id !== id);
        renderCart();
    });

    /* =========================
       CART OPEN/CLOSE
    ========================= */
    $("#openCartBtn").click(function () {
        openCart();
    });

    $("#closeCartBtn").click(function () {
        closeCart();
    });

    $("#cartOverlay").click(function () {
        closeCart();
    });

    $("#clearCartBtn").click(function () {
        cart = [];
        renderCart();
    });

    $("#checkoutBtn").click(function () {
        if (cart.length === 0) {
            alert("Сагс хоосон байна.");
            return;
        }

        alert("Таны захиалга амжилттай бүртгэгдлээ.");
        cart = [];
        renderCart();
        closeCart();
    });

    /* =========================
       INITIAL RENDER
    ========================= */
    renderBooks();
    renderCart();
});