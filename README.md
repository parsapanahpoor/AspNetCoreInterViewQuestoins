# AspNetCoreInterViewQuestoins

بانک سوالات مصاحبه **ASP.NET Core Backend Developer** — صفحهٔ تعاملی با پاسخ‌های مصاحبه‌محور.

## نسخه آنلاین (GitHub Pages)

برای دانشجویان:

**https://parsapanahpoor.github.io/AspNetCoreInterViewQuestoins/**

## اجرا به‌صورت محلی

فایل `index.html` را در مرورگر باز کنید (در کنار `questions-data.js` باشد).

```text
AspNetCoreInterViewQuestoins/
├── index.html          # رابط کاربری (جستجو، اکاردئون، فهرست موضوعات)
├── questions-data.js   # بانک سوالات و پاسخ‌ها
└── part1.js … part4.js # منبع ویرایش دسته‌بندی‌ها (اختیاری)
```

اگر داده را در `part*.js` تغییر دادید:

```bash
node merge.js
```

## امکانات

- دسته‌بندی موضوعی با فهرست کناری
- باز/بسته شدن پاسخ با کلیک روی سوال (آکاردئون)
- جستجو در سوال و پاسخ
- دکمه‌های باز کردن / بستن همه
- پاسخ‌ها به سبک جلسه مصاحبه

## موضوعات

C# و .NET، Async/Concurrency، SOLID و Design Patterns، ASP.NET Core، EF Core، SQL Server، HTTP/REST، معماری و DDD، Git/CI/CD، امنیت، Identity، تست، Monitoring، Messaging، Docker، LINQ، SignalR
