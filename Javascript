document.addEventListener('DOMContentLoaded', () => {
    const passwordScreen = document.getElementById('password-screen');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');
    const bookLibrary = document.getElementById('book-library');
    const bookshelf = document.querySelector('.bookshelf');
    const bookDetailModal = document.getElementById('book-detail-modal');
    const modalContent = bookDetailModal.querySelector('.modal-content');
    const closeButton = bookDetailModal.querySelector('.close-button');

    // 本のダミーデータ (300冊)
    const booksData = Array.from({ length: 300 }, (_, i) => ({
        number: i + 1,
        name: `サンプル本 ${i + 1}`,
        loanAmount: `¥${(1000 + i * 100).toLocaleString()}`,
        email: `book${i + 1}@example.com`,
        phone: `090-XXXX-${String(1000 + i).padStart(4, '0')}`,
        lineId: `line_book_${i + 1}`
    }));

    const CORRECT_PASSWORD = '0101'; // 設定するパスワード

    // --- パスワード認証機能 ---
    loginButton.addEventListener('click', () => {
        if (passwordInput.value === CORRECT_PASSWORD) {
            passwordScreen.classList.remove('active');
            // アニメーションのために少し遅延させてから表示
            setTimeout(() => {
                passwordScreen.style.display = 'none'; // 完全に非表示にする
                bookLibrary.classList.remove('hidden');
                bookLibrary.classList.add('visible');
            }, 500); // CSSアニメーションの時間と合わせる
            
            // パスワード入力フィールドを無効化（一度のみのため）
            passwordInput.disabled = true;
            loginButton.disabled = true;

            renderBooks(); // 本棚を生成
        } else {
            errorMessage.textContent = 'パスワードが違います。もう一度お試しください。';
            passwordInput.value = ''; // 入力ミス時にクリア
            passwordInput.focus();
        }
    });

    // Enterキーでもログインできるように
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginButton.click();
        }
    });

    // --- 本棚の生成 ---
    function renderBooks() {
        bookshelf.innerHTML = ''; // 既存の本をクリア
        booksData.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.dataset.bookNumber = book.number; // データ属性に番号を保存
            bookElement.textContent = book.number; // 本に番号を表示
            bookElement.addEventListener('click', () => handleBookClick(bookElement, book));
            bookshelf.appendChild(bookElement);
        });
    }

    // --- 本のクリックとアニメーション ---
    let animatingBook = false; // アニメーション中に他のクリックを防止

    function handleBookClick(bookElement, bookData) {
        if (animatingBook) return;
        animatingBook = true;

        // 本の取り出しアニメーション
        bookElement.classList.add('active');

        // アニメーション終了後にモーダル表示
        bookElement.addEventListener('animationend', () => {
            bookElement.classList.remove('active'); // アニメーションクラスを削除
            bookElement.style.opacity = '1'; // 次回クリックのためにリセット
            bookElement.style.transform = 'none';
            bookElement.style.zIndex = 'auto'; // z-indexを元に戻す

            displayBookDetails(bookData);
            animatingBook = false;
        }, { once: true }); // アニメーション終了イベントは一度だけ実行
    }

    // --- 本の詳細モーダル表示 ---
    function displayBookDetails(bookData) {
        // モーダルの情報更新
        document.getElementById('info-number').textContent = bookData.number;
        document.getElementById('info-name').textContent = bookData.name;
        document.getElementById('info-loan').textContent = bookData.loanAmount;
        document.getElementById('info-email').textContent = bookData.email;
        document.getElementById('info-phone').textContent = bookData.phone;
        document.getElementById('info-line').textContent = bookData.lineId;

        bookDetailModal.classList.add('active'); // モーダルを表示

        // 本が開くアニメーションを遅延実行
        setTimeout(() => {
            modalContent.classList.add('book-opened');
        }, 100); // モーダルが表示されてから少し遅れて開くアニメーション開始
    }

    // --- モーダルを閉じる ---
    closeButton.addEventListener('click', () => {
        closeBookDetailModal();
    });

    // モーダル外クリックで閉じる
    bookDetailModal.addEventListener('click', (e) => {
        if (e.target === bookDetailModal) {
            closeBookDetailModal();
        }
    });

    function closeBookDetailModal() {
        modalContent.classList.remove('book-opened'); // 本を閉じるアニメーション
        // アニメーション終了後にモーダルを非表示
        setTimeout(() => {
            bookDetailModal.classList.remove('active');
        }, 500); // CSSアニメーションの時間と合わせる

        // パスワード画面を初期表示（起動時のみなので、通常は不要な処理）
        // ここは削除するか、ロジックを調整してください。
        // パスワードは初回のみなので、今回は不要
        // passwordScreen.classList.add('active'); 
    }

    // 初期表示: パスワード画面を表示
    passwordScreen.classList.add('active');
    passwordInput.focus(); // パスワード入力欄にフォーカス
});
