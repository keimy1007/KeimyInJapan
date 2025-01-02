document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    const currentMonthSpan = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const blogContentContainer = document.getElementById('blog-content-container');

    let currentDate = new Date();
    const fileCache = new Map(); // キャッシュを導入

    /**
     * 指定したURLの存在を確認する（キャッシュを利用）。
     * @param {string[]} dates - チェックする日付リスト
     * @returns {Promise<boolean[]>} 各URLの存在結果
     */
    async function checkFilesExistence(dates) {
        const checks = dates.map(date => {
            const url = `blog/${date}.html`;
            if (fileCache.has(url)) {
                return Promise.resolve(fileCache.get(url));
            }
            return fetch(url, { method: 'HEAD' })
                .then(res => {
                    const exists = res.ok;
                    fileCache.set(url, exists);
                    return exists;
                })
                .catch(() => {
                    fileCache.set(url, false);
                    return false;
                });
        });
        return Promise.all(checks);
    }

    /**
     * カレンダーを描画する。
     * @param {Date} date - 描画する月のDateオブジェクト
     */
    async function renderCalendar(date) {
        calendarContainer.innerHTML = ''; // カレンダーをリセット
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfWeek = new Date(year, month, 1).getDay();

        currentMonthSpan.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

        const table = document.createElement('table');
        table.className = "calendar";

        // 曜日ヘッダーの作成
        const headerRow = document.createElement('tr');
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // 空白セルを追加
        let row = document.createElement('tr');
        for (let i = 0; i < firstDayOfWeek; i++) {
            row.appendChild(document.createElement('td'));
        }

        // 日付リストを生成
        const dates = [];
        for (let day = 1; day <= daysInMonth; day++) {
            const formattedDate = `${year}${String(month + 1).padStart(2, '0')}${String(day).padStart(2, '0')}`;
            dates.push(formattedDate);
        }

        // 日付ごとのファイル存在チェック
        const fileExistence = await checkFilesExistence(dates);

        // 日付セルを生成
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('td');
            const formattedDate = dates[day - 1];
            const filePath = `blog/${formattedDate}.html`;

            if (fileExistence[day - 1]) {
                const link = document.createElement('a');
                link.href = filePath;
                link.textContent = day;
                link.className = "active-link";

                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    loadBlogContent(filePath);
                });

                cell.appendChild(link);
            } else {
                cell.textContent = day;
                cell.className = "inactive";
            }

            row.appendChild(cell);

            if ((firstDayOfWeek + day) % 7 === 0) {
                table.appendChild(row);
                row = document.createElement('tr');
            }
        }

        // 最後の行を追加
        table.appendChild(row);
        calendarContainer.appendChild(table);
    }

    /**
     * 指定したファイルのコンテンツをロードする。
     * @param {string} filePath - 読み込むファイルのパス
     */
    async function loadBlogContent(filePath) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const content = await response.text();
                blogContentContainer.innerHTML = content;
            } else {
                blogContentContainer.innerHTML = '<p>記事が見つかりません。</p>';
            }
        } catch (error) {
            blogContentContainer.innerHTML = '<p>記事を読み込めませんでした。</p>';
        }
    }

    /**
     * 月を変更してカレンダーを更新する。
     * @param {number} offset - 現在の月からのオフセット
     */
    function changeMonth(offset) {
        currentDate.setMonth(currentDate.getMonth() + offset);
        renderCalendar(currentDate);
    }

    // イベントリスナーの設定
    prevMonthBtn.addEventListener('click', () => changeMonth(-1));
    nextMonthBtn.addEventListener('click', () => changeMonth(1));

    // 初期カレンダーの描画
    renderCalendar(currentDate);
});