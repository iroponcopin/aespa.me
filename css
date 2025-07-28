/* 基本的なリセットとフォント */
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #f2f2f7; /* Apple風の背景色 */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden; /* 本棚がはみ出さないように */
}

/* パスワード入力画面 */
.password-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 半透明のオーバーレイ */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.password-screen.active {
    opacity: 1;
    visibility: visible;
}

.password-box {
    background-color: #fff;
    padding: 40px;
    border-radius: 14px; /* Apple風の角丸 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 90%;
}

.apple-id-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    object-fit: cover; /* 画像がはみ出さないように */
}

.password-box h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
}

.password-box p {
    font-size: 15px;
    color: #555;
    margin-bottom: 25px;
}

#password-input {
    width: calc(100% - 20px);
    padding: 12px 10px;
    margin-bottom: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    appearance: none; /* iOSのデフォルトスタイルをリセット */
    -webkit-appearance: none;
    outline: none; /* フォーカス時の青い枠線を削除 */
}

#password-input:focus {
    border-color: #007aff; /* Apple Blue */
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}

#login-button {
    background-color: #007aff; /* Apple Blue */
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

#login-button:hover {
    background-color: #005bb5;
}

#login-button:active {
    transform: scale(0.98);
}

.error-message {
    color: #ff3b30; /* Apple Red */
    font-size: 14px;
    margin-top: 15px;
    height: 18px; /* エラーメッセージがない時も高さを確保 */
}

/* 本棚コンテンツ */
.book-library {
    width: 90%;
    max-width: 1200px;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 30px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
}

.book-library.hidden {
    display: none; /* JavaScriptで表示を切り替えるため */
}

.book-library.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.bookshelf {
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10列 */
    gap: 15px;
    margin-top: 30px;
    justify-content: center;
}

.book {
    width: 100px; /* 本の幅 */
    height: 150px; /* 本の高さ */
    background-color: #a0522d; /* 本の基本色（茶色系） */
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    font-size: 1.5em;
    position: relative;
    transform-origin: bottom center; /* 取り出しアニメーションの原点 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform; /* アニメーションのパフォーマンス最適化 */
}

.book:hover {
    transform: translateY(-5px); /* ホバーで少し浮き上がる */
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
}

/* 本の取り出しアニメーション */
.book.active {
    animation: pullOutBook 0.5s forwards ease-out;
}

@keyframes pullOutBook {
    0% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-20px) scale(1.05); /* 少し手前に出て拡大 */
        z-index: 10; /* 手前に表示 */
    }
    100% {
        transform: translateY(-100vh) scale(1.2); /* 画面上部へ消える */
        opacity: 0;
    }
}


/* 本の詳細モーダル */
.book-detail-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001; /* パスワード画面より上に */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.book-detail-modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background-color: #fff;
    padding: 30px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 600px;
    width: 90%;
    transform: scale(0.8); /* 初期状態は小さく */
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden; /* 本の開閉アニメーションのため */
}

.book-detail-modal.active .modal-content {
    transform: scale(1); /* アクティブ時に拡大 */
}

.close-button {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 30px;
    color: #aaa;
    cursor: pointer;
    transition: color 0.2s ease;
}

.close-button:hover {
    color: #555;
}

/* 本の開閉アニメーション（簡易版） */
.book-open-animation {
    position: relative;
    width: 250px; /* 開いた本の幅 */
    height: 180px; /* 開いた本の高さ */
    margin: 30px auto;
    perspective: 1000px; /* 3D効果のため */
    transform-style: preserve-3d;
}

.book-cover-left, .book-cover-right, .book-page {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #8B4513; /* 表紙の色 */
    transform-origin: left center; /* 左側は左端を中心に回転 */
    transition: transform 0.8s ease-in-out;
    backface-visibility: hidden; /* 裏面を見せない */
}

.book-cover-left, .book-cover-right {
    width: 50%; /* 片面の幅 */
    border-radius: 0 5px 5px 0;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.book-cover-left {
    left: 0;
    transform-origin: right center; /* 右端を中心に回転 */
    background-color: #A0522D; /* 少し明るい色 */
    border-radius: 5px 0 0 5px;
}

.book-cover-right {
    right: 0;
    background-color: #A0522D;
    border-radius: 0 5px 5px 0;
}

.book-page {
    width: calc(50% - 5px); /* ページ幅はカバーより少し狭く */
    background-color: #f5f5dc; /* ページの色 */
    border: 1px solid #ddd;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

.left-page {
    left: 5px; /* 左カバーの内側 */
    transform-origin: right center;
}

.right-page {
    right: 5px; /* 右カバーの内側 */
    transform-origin: left center;
}

/* 本が開いた状態のスタイル */
.modal-content.book-opened .book-cover-left {
    transform: rotateY(-170deg); /* 左に大きく開く */
}

.modal-content.book-opened .book-cover-right {
    transform: rotateY(170deg); /* 右に大きく開く */
}

.modal-content.book-opened .left-page {
    transform: rotateY(-175deg); /* 左に大きく開く */
    left: 0; /* 左ページの位置調整 */
}

.modal-content.book-opened .right-page {
    transform: rotateY(175deg); /* 右に大きく開く */
    right: 0; /* 右ページの位置調整 */
}

.book-info-display {
    margin-top: 20px;
    text-align: left;
    max-height: 0; /* 初期は非表示 */
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out 0.8s, opacity 0.5s ease-out 0.8s; /* アニメーション後に表示 */
}

.modal-content.book-opened .book-info-display {
    max-height: 300px; /* 本が開いたら表示 */
    opacity: 1;
}

.book-info-display h2 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
}

.book-info-display p {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
    margin-bottom: 8px;
}

.book-info-display strong {
    color: #000;
    min-width: 80px; /* ラベルの幅を揃える */
    display: inline-block;
}
