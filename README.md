# موقع شركة الهندسة لخدمات النظافة المنزلية (React + Vite)

## التشغيل
npm install
npm run dev      # تشغيل محلي
npm run build    # بناء نسخة الإنتاج داخل مجلد dist

## أين أعدّل؟
- src/config/site.js      : رقم الواتساب، الهاتف، ساعات العمل، اسم الشركة
- src/data/*.js           : الخدمات، الخطوات، المميزات، الأحياء، الآراء، الأرقام
- src/components/*.jsx    : كل قسم في الموقع في ملف منفصل
- src/styles/global.css   : التصميم والألوان (المتغيرات في أول الملف)
- src/assets/logo.png     : الشعار

## قبل النشر (مهم)
1. رقم الواتساب والاتصال مضبوط على +966 56 497 4015 (غيّره من src/config/site.js لو لزم)، وراجع ساعات العمل هناك
2. استبدل YOUR-DOMAIN.com في index.html و public/robots.txt و public/sitemap.xml، وغيّر الهاتف داخل JSON-LD في index.html
3. قسم آراء العملاء مخفي افتراضياً. بعد جمع آراء حقيقية ضعها في src/data/misc.js وفعّل showReviews في site.js
4. أضف صور شغل حقيقية لكل خدمة: ضع الصورة في src/assets/services واستوردها في data/services.js داخل الحقل image
5. النشر على Vercel: ارفع المشروع وسيقرأ vercel.json (ترويسات الأمان) تلقائياً

## الاختبار
npx playwright install chromium
npm run test:e2e   # يختبر الديسكتوب واللاب والآيباد والموبايل
