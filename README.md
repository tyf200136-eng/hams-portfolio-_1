# موقع همس الثبيتي — بورتفوليو مصممة جرافيك

موقع تعريفي بسيط (HTML/CSS/JS خالص، بدون أي build tools أو npm)، مبني على تصميم الـ PDF اللي رفعتيه.

## هيكل المشروع
```
hams-portfolio/
├── index.html        الصفحة الرئيسية
├── css/style.css      التنسيق
├── js/script.js       التفاعل (قائمة الجوال)
├── assets/favicon.svg أيقونة الموقع
└── vercel.json        إعدادات النشر على Vercel
```

## 1) تشغيله محلياً على VS Code

بما إنه HTML عادي، ما يحتاج npm install ولا أي إعداد. أسهل طريقة:

1. افتحي مجلد `hams-portfolio` في VS Code (File → Open Folder).
2. ثبّتي إضافة **Live Server** (من Extensions، دوري على "Live Server" لـ Ritwick Dey).
3. كليك يمين على `index.html` → **Open with Live Server**.
4. المتصفح بيفتح تلقائياً على شي زي `http://127.0.0.1:5500` وأي تعديل تحفظينه ينعكس فوراً.

بديل بدون إضافات: افتحي `index.html` مباشرة بالمتصفح (دبل كليك)، بس Live Server أفضل لأنه يحدّث تلقائياً.

## 2) التعديل عليه

- **النصوص والمحتوى**: كلها داخل `index.html`.
- **الألوان والخطوط والمسافات**: في `css/style.css` تحت `:root` بالأعلى فيه كل الألوان كمتغيرات (`--accent-pink`, `--accent-purple`, ...) عدّليها من مكان واحد وتنعكس بكل الموقع.
- **الصورة الرمزية (الأفتار)**: حالياً مرسومة بـ SVG بسيط داخل الـ HTML كبديل مؤقت. إذا عندك صورة/رسمة جاهزة تشبهين فيها الرسمة الأصلية من الـ PDF، حطيها في `assets/` (مثلاً `assets/avatar.png`) واستبدلي وسم الـ `<svg class="avatar-svg">` بـ:
  ```html
  <img src="assets/avatar.png" alt="همس الثبيتي" class="avatar-svg">
  ```
- **الروابط**: عدّلي روابط التواصل (إيميل، واتساب، لينكدإن، تيك توك، إكس) داخل قسم `<footer>` في `index.html`.

## 3) النشر على Vercel

### الطريقة الأسهل (بدون GitHub) — عن طريق Vercel CLI
```bash
npm install -g vercel     # مرة وحدة بس، إذا ما كان مثبت
cd hams-portfolio
vercel                    # أول مرة بيسألك تسجيل دخول وبعض الأسئلة (خليها كلها افتراضية)
vercel --prod              # للنشر النهائي على الدومين الرسمي
```
بعد أول أمر `vercel` بيعطيك رابط preview، وبعد `vercel --prod` بيصير عندك رابط نهائي زي:
`https://hams-portfolio.vercel.app`

### الطريقة الثانية — عن طريق GitHub (تحديثات تلقائية)
1. ارفعي المجلد كـ repository جديد على GitHub.
2. سجلي دخول على [vercel.com](https://vercel.com) بحساب GitHub.
3. من Dashboard اضغطي **Add New → Project** واختاري الـ repo.
4. Framework Preset خلّيه **Other** (لأنه HTML عادي بدون build)، واضغطي **Deploy**.
5. أي `git push` بعدين ينشر تلقائياً نسخة جديدة.

## 4) ربط دومين خاص (اختياري)
من إعدادات المشروع في Vercel → **Domains** → أضيفي الدومين وتابعي تعليمات الـ DNS اللي بتظهر لك.

---
بالتوفيق في إطلاق البورتفوليو! ✨
