// ===== دیتابیس دستورات =====
const commands = [
    // ===== مقدماتی =====
    {
        name: 'git init',
        description: 'ایجاد یک ریپازیتوری جدید گیت در پوشه‌ی فعلی',
        category: 'basic',
        example: 'git init'
    },
    {
        name: 'git clone',
        description: 'کلون کردن یک ریپازیتوری از گیت‌هاب به سیستم',
        category: 'basic',
        example: 'git clone https://github.com/user/repo.git'
    },
    {
        name: 'git add',
        description: 'اضافه کردن فایل‌ها به staging area برای کامیت',
        category: 'basic',
        example: 'git add .'
    },
    {
        name: 'git add [file]',
        description: 'اضافه کردن یک فایل خاص به staging area',
        category: 'basic',
        example: 'git add index.html'
    },
    {
        name: 'git commit -m',
        description: 'ثبت تغییرات با یک پیام توضیحی',
        category: 'basic',
        example: 'git commit -m "fix: bug fixed"'
    },
    {
        name: 'git status',
        description: 'نمایش وضعیت فعلی فایل‌ها و تغییرات',
        category: 'basic',
        example: 'git status'
    },
    {
        name: 'git log',
        description: 'نمایش تاریخچه کامیت‌ها',
        category: 'basic',
        example: 'git log --oneline'
    },
    {
        name: 'git diff',
        description: 'نمایش تفاوت‌های فایل‌ها با آخرین کامیت',
        category: 'basic',
        example: 'git diff'
    },
    {
        name: 'git pull',
        description: 'دریافت آخرین تغییرات از ریموت',
        category: 'basic',
        example: 'git pull origin main'
    },
    {
        name: 'git push',
        description: 'ارسال تغییرات به ریموت',
        category: 'basic',
        example: 'git push origin main'
    },
    {
        name: 'git remote -v',
        description: 'نمایش آدرس ریموت‌های متصل',
        category: 'basic',
        example: 'git remote -v'
    },

    // ===== شاخه‌ها =====
    {
        name: 'git branch',
        description: 'نمایش لیست شاخه‌ها',
        category: 'branch',
        example: 'git branch'
    },
    {
        name: 'git branch [name]',
        description: 'ایجاد یک شاخه‌ی جدید',
        category: 'branch',
        example: 'git branch feature-login'
    },
    {
        name: 'git checkout [branch]',
        description: 'تغییر به شاخه‌ی مورد نظر',
        category: 'branch',
        example: 'git checkout main'
    },
    {
        name: 'git checkout -b [branch]',
        description: 'ایجاد و تغییر به شاخه‌ی جدید',
        category: 'branch',
        example: 'git checkout -b feature-new'
    },
    {
        name: 'git merge [branch]',
        description: 'ادغام یک شاخه با شاخه‌ی فعلی',
        category: 'branch',
        example: 'git merge feature-login'
    },
    {
        name: 'git branch -d [branch]',
        description: 'حذف یک شاخه (با امنیت)',
        category: 'branch',
        example: 'git branch -d feature-old'
    },
    {
        name: 'git branch -D [branch]',
        description: 'حذف اجباری یک شاخه',
        category: 'branch',
        example: 'git branch -D feature-old'
    },
    {
        name: 'git switch [branch]',
        description: 'تغییر به شاخه‌ی دیگر (جایگزین checkout)',
        category: 'branch',
        example: 'git switch main'
    },

    // ===== پیشرفته =====
    {
        name: 'git stash',
        description: 'ذخیره‌سازی موقت تغییرات بدون کامیت',
        category: 'advanced',
        example: 'git stash'
    },
    {
        name: 'git stash pop',
        description: 'بازیابی آخرین stash و حذف از لیست',
        category: 'advanced',
        example: 'git stash pop'
    },
    {
        name: 'git stash list',
        description: 'نمایش لیست همه stash‌ها',
        category: 'advanced',
        example: 'git stash list'
    },
    {
        name: 'git reset',
        description: 'برگشت به یک کامیت قبلی (نرم)',
        category: 'advanced',
        example: 'git reset HEAD~1'
    },
    {
        name: 'git reset --hard [commit]',
        description: 'برگشت کامل به یک کامیت خاص (خطری)',
        category: 'advanced',
        example: 'git reset --hard abc123'
    },
    {
        name: 'git rebase [branch]',
        description: 'ادغام با تغییر ترتیب کامیت‌ها',
        category: 'advanced',
        example: 'git rebase main'
    },
    {
        name: 'git cherry-pick [commit]',
        description: 'انتقال یک کامیت خاص به شاخه‌ی فعلی',
        category: 'advanced',
        example: 'git cherry-pick abc123'
    },
    {
        name: 'git reflog',
        description: 'نمایش تاریخچه‌ی کامل تغییرات HEAD',
        category: 'advanced',
        example: 'git reflog'
    },
    {
        name: 'git bisect',
        description: 'پیدا کردن کامیتی که باعث باگ شده',
        category: 'advanced',
        example: 'git bisect start'
    },
    {
        name: 'git tag',
        description: 'ایجاد تگ برای نسخه‌های مهم',
        category: 'advanced',
        example: 'git tag v1.0.0'
    },
    {
        name: 'git tag -a [name] -m',
        description: 'ایجاد تگ با توضیح',
        category: 'advanced',
        example: 'git tag -a v1.0.0 -m "نسخه‌ی اول"'
    },

    // ===== ریموت =====
    {
        name: 'git remote add [name] [url]',
        description: 'اضافه کردن یک ریموت جدید',
        category: 'remote',
        example: 'git remote add origin https://github.com/user/repo.git'
    },
    {
        name: 'git remote remove [name]',
        description: 'حذف یک ریموت',
        category: 'remote',
        example: 'git remote remove origin'
    },
    {
        name: 'git push --tags',
        description: 'ارسال تگ‌ها به ریموت',
        category: 'remote',
        example: 'git push --tags'
    },
    {
        name: 'git fetch',
        description: 'دریافت تغییرات از ریموت بدون ادغام',
        category: 'remote',
        example: 'git fetch origin'
    },
    {
        name: 'git pull --rebase',
        description: 'دریافت تغییرات و اعمال با rebase',
        category: 'remote',
        example: 'git pull --rebase origin main'
    }
];

// ===== متغیرها =====
let currentFilter = 'all';
let searchQuery = '';

// ===== رندر کردن دستورات =====
function renderCommands() {
    const container = document.getElementById('commandsContainer');
    
    // فیلتر کردن
    let filtered = commands;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(cmd => cmd.category === currentFilter);
    }
    
    if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(cmd => 
            cmd.name.toLowerCase().includes(query) ||
            cmd.description.toLowerCase().includes(query)
        );
    }
    
    // به‌روزرسانی آمار
    document.getElementById('totalCommands').textContent = filtered.length;
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <span>🔍</span>
                <p>هیچ دستوری پیدا نشد!</p>
                <p style="font-size:14px;margin-top:5px;">سعی کنید با کلمه‌ی دیگری جستجو کنید</p>
            </div>
        `;
        return;
    }
    
    // رندر کردن کارت‌ها
    let html = '';
    filtered.forEach(cmd => {
        const categoryLabels = {
            basic: 'مقدماتی',
            advanced: 'پیشرفته',
            branch: 'شاخه‌ها',
            remote: 'ریموت'
        };
        
        html += `
            <div class="command-card">
                <span class="badge ${cmd.category}">${categoryLabels[cmd.category]}</span>
                <div class="name">${cmd.name}</div>
                <div class="description">${cmd.description}</div>
                <div class="command-code">
                    <span>${cmd.example}</span>
                    <button class="copy-btn" onclick="copyCommand('${cmd.example.replace(/'/g, "\\'")}')">📋 کپی</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ===== کپی کردن =====
function copyCommand(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btns = document.querySelectorAll('.copy-btn');
        btns.forEach(btn => {
            if (btn.textContent.includes('کپی')) {
                btn.textContent = '✅ کپی شد';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = '📋 کپی';
                    btn.classList.remove('copied');
                }, 2000);
            }
        });
    });
}

// ===== جستجو =====
function searchCommands() {
    const input = document.getElementById('searchInput');
    searchQuery = input.value;
    renderCommands();
}

// ===== فیلتر =====
function filterCommands(category) {
    currentFilter = category;
    
    // به‌روزرسانی دکمه‌های فیلتر
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    renderCommands();
}

// ===== تغییر تم =====
function toggleTheme() {
    document.body.classList.toggle('light');
    const btn = document.getElementById('themeToggle');
    btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

// ===== بارگذاری اولیه =====
document.addEventListener('DOMContentLoaded', () => {
    renderCommands();
});

// ===== توابع گلوبال =====
window.searchCommands = searchCommands;
window.filterCommands = filterCommands;
window.toggleTheme = toggleTheme;
window.copyCommand = copyCommand;
