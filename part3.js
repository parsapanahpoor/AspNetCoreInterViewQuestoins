window.__PART3 = [
  {
    title: "معماری نرم‌افزار و DDD",
    desc: "پرسش‌های معماری، طراحی دامنه و الگوهای سامانه‌های توزیع‌شده",
    questions: [
      {
        q: "Clean Architecture چیست و چه هدفی دارد؟",
        a: "**Clean Architecture** کد را به حلقه‌هایی با مسئولیت مشخص تقسیم می‌کند تا منطق کسب‌وکار از دیتابیس، وب و فریم‌ورک مستقل بماند. هسته معمولاً شامل `Domain` و `Application` است و جزئیات در لایه‌های بیرونی قرار می‌گیرند. TIP: معیار موفقیت این معماری تعداد پروژه‌ها نیست، بلکه امکان تست و تعویض جزئیات بدون تغییر قواعد کسب‌وکار است."
      },
      {
        q: "Dependency Rule در Clean Architecture چیست؟",
        a: "**Dependency Rule** می‌گوید وابستگی‌های کد فقط باید به سمت لایه‌های داخلی‌تر حرکت کنند. برای نمونه `Infrastructure` می‌تواند رابط تعریف‌شده در `Application` را پیاده‌سازی کند، اما Application نباید EF Core را بشناسد. - مدل‌های دیتابیس یا HTTP را نیز مستقیم وارد Domain نکنید."
      },
      {
        q: "لایه‌های رایج در Clean Architecture چه هستند؟",
        a: "تقسیم رایج شامل `Domain`، `Application`، `Infrastructure` و `Presentation` است. Domain قواعد بنیادی، Application سناریوهای کاربردی، Infrastructure جزئیات فنی و Presentation ورودی و خروجی را مدیریت می‌کند. TIP: مرزها را بر اساس مسئولیت بسازید و از ایجاد لایه‌های بدون ارزش صرفاً برای پیروی از یک قالب خودداری کنید."
      },
      {
        q: "DDD چیست و چه زمانی مفید است؟",
        a: "**Domain-Driven Design** رویکردی برای مدل‌سازی نرم‌افزار حول مفاهیم و قواعد دامنه پیچیده است. تیم فنی و متخصصان کسب‌وکار با `Ubiquitous Language` واژگان مشترکی می‌سازند که در کد نیز دیده می‌شود. برای CRUD ساده، هزینه DDD کامل معمولاً بیشتر از منفعت آن است."
      },
      {
        q: "Bounded Context چیست؟",
        a: "**Bounded Context** مرزی است که در آن یک مدل و واژگان معنای دقیق و سازگاری دارند. واژه‌ای مانند `Customer` ممکن است در فروش و پشتیبانی مدل‌ها و قواعد متفاوتی داشته باشد. - ارتباط contextها را با قراردادهای صریح مانند API یا event و یک `Context Map` مشخص کنید."
      },
      {
        q: "Aggregate و Aggregate Root چه هستند؟",
        a: "**Aggregate** مجموعه‌ای از Entityها و Value Objectهاست که یک مرز سازگاری تراکنشی تشکیل می‌دهد. همه تغییرات بیرونی باید از طریق `Aggregate Root` انجام شوند تا invariantها حفظ شوند. TIP: aggregate بزرگ باعث contention و بارگذاری اضافه می‌شود؛ آن را بر اساس قواعد سازگاری فوری طراحی کنید."
      },
      {
        q: "تفاوت Entity و Value Object چیست؟",
        a: "**Entity** با هویت پایدار شناخته می‌شود، حتی اگر ویژگی‌هایش تغییر کنند؛ مانند `Order` با شناسه سفارش. **Value Object** با مجموعه مقادیرش تعریف می‌شود، معمولاً immutable است و برابری مقداری دارد؛ مانند `Money`. - رفتار و اعتبارسنجی مرتبط را داخل خود مدل قرار دهید تا مدل کم‌خون نشود."
      },
      {
        q: "Repository Pattern چه نقشی دارد؟",
        a: "**Repository** دسترسی به aggregateها را با زبانی نزدیک به دامنه پنهان می‌کند و جزئیات persistence را بیرون نگه می‌دارد. رابطی مانند `IOrderRepository.GetPendingAsync()` از افشای queryهای زیرساختی جلوگیری می‌کند. TIP: ساخت repository عمومی روی تمام جدول‌ها اغلب فقط API مربوط به EF Core را تکرار می‌کند."
      },
      {
        q: "Unit of Work چیست؟",
        a: "**Unit of Work** تغییرات چند موجودیت را ردیابی و در یک مرز تراکنشی commit می‌کند. در EF Core، خود `DbContext` عملاً این نقش را با `SaveChangesAsync()` دارد. - طول عمر آن را کوتاه و معمولاً برابر یک request یا command نگه دارید."
      },
      {
        q: "CQRS چیست و چه مزایا و هزینه‌هایی دارد؟",
        a: "**CQRS** مدل و مسیر write را از read جدا می‌کند تا هرکدام مستقل بهینه شوند. این الگو می‌تواند مدل خواندن ساده و مقیاس‌پذیری بهتر بدهد، اما تعداد مدل‌ها، هماهنگی و eventual consistency را افزایش می‌دهد. TIP: جداسازی کلاس‌های Command و Query الزاماً به معنی دیتابیس‌های جدا نیست."
      },
      {
        q: "Event Sourcing چیست؟",
        a: "در **Event Sourcing** وضعیت فعلی از توالی eventهای تغییرناپذیر مانند `OrderPlaced` بازسازی می‌شود. این روش تاریخچه کامل، audit و قابلیت ساخت projectionهای جدید می‌دهد، اما versioning رویدادها و بازپخش را دشوار می‌کند. - فقط وقتی تاریخچه دامنه ارزش محوری دارد آن را انتخاب کنید."
      },
      {
        q: "Monolith و Microservices چه تفاوتی دارند؟",
        a: "**Monolith** استقرار و معمولاً داده مشترک دارد، در حالی که microserviceها مستقل deploy می‌شوند و مالک مرز و داده خود هستند. microservice استقلال تیم و مقیاس‌گذاری موضعی می‌دهد، اما شبکه، observability و سازگاری داده را پیچیده می‌کند. TIP: توزیع کد بدون استقلال داده و استقرار، فقط یک distributed monolith می‌سازد."
      },
      {
        q: "چه زمانی نباید از Microservices استفاده کرد؟",
        a: "برای تیم کوچک، دامنه نامشخص یا محصولی که هنوز product-market fit ندارد، **microservices** اغلب انتخاب نامناسبی است. هزینه‌های CI/CD، مانیتورینگ، tracing و عملیات ممکن است از ارزش تفکیک بیشتر باشد. - ابتدا با monolith ماژولار مرزها را کشف کنید و فقط گلوگاه‌های واقعی را جدا کنید."
      },
      {
        q: "Modular Monolith چیست؟",
        a: "**Modular Monolith** یک واحد استقرار است که درون آن ماژول‌ها مرز و API داخلی صریح دارند. هر ماژول می‌تواند مدل دامنه و حتی schema خود را داشته باشد و دسترسی مستقیم بین جداول ممنوع شود. TIP: این معماری بسیاری از مزایای مرزبندی را بدون هزینه شبکه microservices فراهم می‌کند."
      },
      {
        q: "Service Mesh چیست؟",
        a: "**Service Mesh** قابلیت‌های ارتباط سرویس‌به‌سرویس مانند mTLS، retry، routing و telemetry را در لایه زیرساخت فراهم می‌کند. ابزارهایی مانند `Istio` معمولاً از proxy جانبی یا ambient data plane استفاده می‌کنند. - mesh پیچیدگی عملیاتی دارد و جای طراحی درست timeout و idempotency در برنامه را نمی‌گیرد."
      },
      {
        q: "Coupling و Cohesion در معماری چه مفهومی دارند؟",
        a: "هدف طراحی، **coupling کم** میان ماژول‌ها و **cohesion بالا** درون هر ماژول است. اشتراک دیتابیس، مدل و چرخه استقرار coupling زمانی و ساختاری ایجاد می‌کند. TIP: تغییر یک قابلیت را بررسی کنید؛ اگر چندین سرویس نامرتبط هم‌زمان تغییر می‌کنند، مرزها احتمالاً مناسب نیستند."
      },
      {
        q: "Saga Pattern چیست؟",
        a: "**Saga** یک فرایند چندمرحله‌ای توزیع‌شده را به تراکنش‌های محلی و عملیات جبرانی تقسیم می‌کند. در choreography سرویس‌ها به event واکنش می‌دهند و در orchestration یک هماهنگ‌کننده مراحل را هدایت می‌کند. - compensation بازگردانی بیتی نیست و باید از منظر کسب‌وکار تعریف و idempotent شود."
      },
      {
        q: "چرا Distributed Transaction دشوار است؟",
        a: "تراکنش توزیع‌شده باید میان چند منبع مستقل atomicity ایجاد کند و در برابر timeout و partition تصمیم بگیرد. پروتکل‌هایی مانند `2PC` می‌توانند blocking و coupling عملیاتی ایجاد کنند و در cloud همیشه پشتیبانی نمی‌شوند. TIP: اغلب تراکنش محلی همراه outbox و eventual consistency گزینه مقاوم‌تری است."
      },
      {
        q: "Event-Driven Architecture چیست؟",
        a: "در **Event-Driven Architecture** تولیدکننده رخداد را منتشر می‌کند و از مصرف‌کنندگان مشخص اطلاع ندارد. این مدل coupling را کاهش می‌دهد و توسعه مستقل را ممکن می‌کند، اما ordering، duplicate و schema evolution را باید مدیریت کرد. - consumerها را idempotent بسازید و correlation ID را برای tracing منتقل کنید."
      },
      {
        q: "BFF Pattern چیست؟",
        a: "**Backend for Frontend** برای هر نوع client یک backend متناسب با نیازهای همان رابط ارائه می‌کند. برای مثال `Mobile BFF` می‌تواند چند سرویس را تجمیع و payload را کوچک کند. TIP: منطق اصلی کسب‌وکار را در BFF کپی نکنید؛ نقش آن orchestration و سازگاری با تجربه کاربر است."
      },
      {
        q: "Eventual Consistency چیست؟",
        a: "**Eventual Consistency** یعنی replicaها یا مدل‌های مختلف بلافاصله یکسان نیستند، اما در نبود تغییر جدید نهایتاً همگرا می‌شوند. UI باید حالت‌هایی مانند `Pending` را نمایش دهد و کسب‌وکار بازه ناسازگاری را تحمل کند. - این مفهوم مجوزی برای گم‌کردن داده نیست؛ retry، reconciliation و monitoring ضروری‌اند."
      },
      {
        q: "Outbox Pattern چگونه از گم‌شدن پیام جلوگیری می‌کند؟",
        a: "در **Transactional Outbox** تغییر دامنه و رکورد پیام در یک تراکنش محلی ذخیره می‌شوند. یک worker رکوردهای outbox را به broker ارسال می‌کند و پس از موفقیت آن‌ها را علامت می‌زند. TIP: تحویل معمولاً `at-least-once` است، پس مصرف‌کننده باید duplicate را با شناسه پیام کنترل کند."
      },
      {
        q: "Anti-Corruption Layer چیست؟",
        a: "**Anti-Corruption Layer** مدل یک سیستم خارجی یا legacy را به زبان context داخلی ترجمه می‌کند. این لایه مانع نشت مفاهیم و محدودیت‌های مدل بیرونی به Domain می‌شود. - adapterها، mapperها و facadeهای این مرز را جدا نگه دارید تا تعویض integration ساده‌تر باشد."
      },
      {
        q: "Idempotency در سیستم‌های توزیع‌شده چرا مهم است؟",
        a: "عملیات **idempotent** با اجرای چندباره همان اثر اجرای یک‌باره را دارد. چون timeout مشخص نمی‌کند درخواست اجرا نشده یا فقط پاسخ گم شده است، retry بدون idempotency می‌تواند پرداخت تکراری بسازد. TIP: از `Idempotency-Key`، قید یکتا و ذخیره نتیجه قبلی استفاده کنید."
      }
    ]
  },
  {
    title: "Git، CI/CD و DevOps",
    desc: "پرسش‌های کنترل نسخه، تحویل مستمر، استقرار و عملیات",
    questions: [
      {
        q: "Git چیست و با سیستم متمرکز چه تفاوتی دارد؟",
        a: "**Git** یک سیستم کنترل نسخه توزیع‌شده است و هر clone تاریخچه و objectهای repository را در اختیار دارد. بیشتر عملیات مانند commit و branch محلی و سریع‌اند و remote فقط نقطه همکاری است. - commitهای کوچک و معنادار، بررسی و rollback را آسان‌تر می‌کنند."
      },
      {
        q: "تفاوت merge و rebase چیست؟",
        a: "`merge` تاریخچه دو شاخه را با یک merge commit ترکیب می‌کند و ancestry واقعی را حفظ می‌کند. `rebase` commitها را روی پایه جدید بازنویسی می‌کند و تاریخچه خطی‌تری می‌دهد. TIP: شاخه عمومی مشترک را بدون هماهنگی rebase نکنید، چون شناسه commitها عوض می‌شود."
      },
      {
        q: "تفاوت git fetch و git pull چیست؟",
        a: "`git fetch` اطلاعات remote را دریافت می‌کند ولی working branch را تغییر نمی‌دهد. `git pull` عملاً fetch را با merge یا rebase ترکیب می‌کند و ممکن است همان لحظه conflict بسازد. - برای کنترل بیشتر ابتدا fetch کنید، diff را ببینید و سپس روش ادغام را انتخاب کنید."
      },
      {
        q: "git reset و git revert چه تفاوتی دارند؟",
        a: "`git reset` اشاره‌گر branch و بسته به mode، index یا working tree را جابه‌جا می‌کند و می‌تواند تاریخچه را بازنویسی کند. `git revert` یک commit جدید با تغییرات معکوس می‌سازد و برای شاخه منتشرشده امن‌تر است. TIP: پیش از `reset --hard` مطمئن شوید تغییر ارزشمندی از بین نمی‌رود."
      },
      {
        q: "git stash چه کاربردی دارد؟",
        a: "`git stash` تغییرات موقت working tree و index را کنار می‌گذارد تا بتوانید context را عوض کنید. stash جای commit یا backup بلندمدت نیست و ممکن است هنگام apply conflict داشته باشد. - برای کار قابل‌توجه، یک branch و commit موقت معمولاً شفاف‌تر است."
      },
      {
        q: "چگونه conflict در Git را حل می‌کنید؟",
        a: "ابتدا هدف هر دو تغییر را می‌فهمم و صرفاً یکی از طرف‌ها را کورکورانه انتخاب نمی‌کنم. سپس markerها را اصلاح، فایل را stage و تست‌های مرتبط را اجرا می‌کنم تا ادغام از نظر رفتار نیز درست باشد. TIP: conflict کوچک‌تر با branchهای کوتاه‌عمر و sync مکرر به دست می‌آید."
      },
      {
        q: "Cherry-pick چیست؟",
        a: "`git cherry-pick` اثر یک یا چند commit مشخص را روی branch فعلی اعمال می‌کند. برای انتقال یک hotfix مفید است، اما commit جدیدی با SHA متفاوت می‌سازد و استفاده زیاد تاریخچه را گیج‌کننده می‌کند. - برای همگام‌سازی کامل شاخه‌ها merge یا rebase مناسب‌تر است."
      },
      {
        q: "CI چیست؟",
        a: "**Continuous Integration** یعنی تغییرات کوچک به‌طور مکرر ادغام و به‌صورت خودکار build و test شوند. pipeline باید سریع و قابل‌اعتماد باشد تا خطا نزدیک به زمان ایجاد کشف شود. TIP: flaky test اعتماد تیم به CI را از بین می‌برد و باید مثل bug واقعی اصلاح شود."
      },
      {
        q: "CD چه تفاوتی با Continuous Deployment دارد؟",
        a: "**Continuous Delivery** یعنی artifact همیشه آماده انتشار است، اما تأیید نهایی استقرار می‌تواند دستی باشد. **Continuous Deployment** هر تغییر موفق را بدون گام دستی به production می‌فرستد. - هر دو به تست خودکار، observability و rollback مطمئن نیاز دارند."
      },
      {
        q: "Pipeline استاندارد چه مراحلی دارد؟",
        a: "مراحل معمول شامل restore، build، static analysis، test، security scan، package و deploy است. همان artifact تولیدشده باید بین محیط‌ها promote شود تا تفاوت build ایجاد نشود. TIP: secretها را در log چاپ نکنید و jobها را با کمترین permission اجرا کنید."
      },
      {
        q: "Artifact در CI/CD چیست؟",
        a: "**Artifact** خروجی immutable و نسخه‌دار build مانند image یا package است. ساخت یک‌باره و promote همان artifact تضمین می‌کند چیزی که تست شده دقیقاً به production می‌رود. - checksum، metadata نسخه و provenance را برای قابلیت ردیابی نگه دارید."
      },
      {
        q: "Docker image و container چه تفاوتی دارند؟",
        a: "**Image** قالب immutable و لایه‌لایه‌ای است که برنامه و وابستگی‌ها را توصیف می‌کند. **Container** نمونه در حال اجرای همان image با لایه writable و منابع محدودشده است. TIP: image را کوچک، non-root و با base image به‌روز بسازید."
      },
      {
        q: "Multi-stage build در Docker چه مزیتی دارد؟",
        a: "در **multi-stage build** ابزارهای build در stage اولیه می‌مانند و فقط خروجی لازم به runtime image منتقل می‌شود. این کار حجم image و سطح حمله را کاهش می‌دهد. - نسخه base image را pin کنید و cache لایه‌ها را با ترتیب مناسب دستورها بهبود دهید."
      },
      {
        q: "Infrastructure as Code چیست؟",
        a: "**IaC** زیرساخت را با فایل‌های نسخه‌پذیر و قابل بازتولید مانند `Terraform` تعریف می‌کند. تغییرها review، plan و در pipeline اعمال می‌شوند و drift قابل شناسایی است. TIP: state و secretها را امن نگه دارید و تغییر دستی خارج از فرایند را محدود کنید."
      },
      {
        q: "Blue-Green Deployment چیست؟",
        a: "در **Blue-Green** دو محیط مشابه داریم و traffic پس از اعتبارسنجی از نسخه قدیمی به جدید سوییچ می‌شود. rollback معمولاً با بازگرداندن route سریع است، اما نگهداری دو محیط هزینه دارد. - migration دیتابیس باید با هر دو نسخه سازگار باشد."
      },
      {
        q: "Canary Deployment چیست؟",
        a: "در **Canary** نسخه جدید ابتدا به درصد کمی از کاربران یا instanceها ارائه می‌شود. metricهای خطا، latency و شاخص‌های کسب‌وکار قبل از افزایش traffic بررسی می‌شوند. TIP: معیار توقف و rollback را پیش از deploy تعریف کنید، نه هنگام حادثه."
      },
      {
        q: "Rolling Deployment چیست؟",
        a: "**Rolling Deployment** instanceها را تدریجی با نسخه جدید جایگزین می‌کند و معمولاً ظرفیت سرویس حفظ می‌شود. در بخشی از زمان دو نسخه هم‌زمان فعال‌اند، بنابراین API و schema باید backward-compatible باشند. - readiness probe مانع ارسال traffic به instance آماده‌نشده می‌شود."
      },
      {
        q: "Rollback و Roll-forward چه تفاوتی دارند؟",
        a: "**Rollback** بازگشت به نسخه قبلی و **roll-forward** انتشار نسخه جدیدی با fix است. rollback سریع است، اما پس از migration داده ممکن است امن یا ممکن نباشد. TIP: برای تغییر schema از الگوی expand-and-contract استفاده کنید تا هر دو مسیر باز بمانند."
      },
      {
        q: "Semantic Versioning چیست؟",
        a: "**SemVer** نسخه را به شکل `MAJOR.MINOR.PATCH` بیان می‌کند. تغییر ناسازگار major، قابلیت سازگار minor و bug fix سازگار patch را افزایش می‌دهد. - SemVer فقط وقتی معنا دارد که قرارداد عمومی و سیاست compatibility روشن باشد."
      },
      {
        q: "Feature Flag چیست؟",
        a: "**Feature Flag** انتشار کد را از فعال‌سازی قابلیت جدا می‌کند و rollout تدریجی را ممکن می‌سازد. flag می‌تواند kill switch باشد، اما شاخه‌های رفتاری و بدهی نگهداری ایجاد می‌کند. TIP: owner و تاریخ حذف تعیین کنید و flagهای موقت را پس از rollout پاک کنید."
      },
      {
        q: "Trunk-Based Development و GitFlow چه trade-offی دارند؟",
        a: "در **Trunk-Based** شاخه‌ها کوتاه‌عمر و ادغام‌ها مکررند، بنابراین CI و feature flag اهمیت زیادی دارند. **GitFlow** شاخه‌های release و develop بیشتری دارد و برای releaseهای دوره‌ای قابل‌استفاده است، اما merge و divergence را افزایش می‌دهد. - مدل branching را با cadence انتشار و اندازه تیم انتخاب کنید."
      },
      {
        q: "Observability شامل چه اجزایی است؟",
        a: "**Observability** معمولاً از log، metric و distributed trace برای استنتاج وضعیت داخلی سیستم استفاده می‌کند. correlation ID اتصال رویدادهای یک درخواست را میان سرویس‌ها ممکن می‌سازد. TIP: alert را روی نشانه‌های اثرگذار بر کاربر مانند SLO بسازید، نه صرفاً مصرف CPU."
      },
      {
        q: "SLA، SLO و SLI چه تفاوتی دارند؟",
        a: "**SLI** اندازه‌گیری واقعی مانند availability است و **SLO** هدف داخلی برای آن شاخص است. **SLA** تعهد قراردادی و معمولاً دارای پیامد تجاری است. - error budget فاصله تا SLO را نشان می‌دهد و بین سرعت انتشار و پایداری تعادل ایجاد می‌کند."
      },
      {
        q: "Health Check و Readiness/Liveness چه هستند؟",
        a: "**Liveness** مشخص می‌کند process باید restart شود و **readiness** تعیین می‌کند فعلاً traffic دریافت کند یا نه. وابستگی موقت دیتابیس معمولاً نباید liveness را fail کند، چون restartهای زنجیره‌ای می‌سازد. TIP: probeها را سبک نگه دارید و endpoint آن‌ها را بدون اطلاعات حساس ارائه کنید."
      }
    ]
  },
  {
    title: "امنیت",
    desc: "پرسش‌های امنیت وب، توکن، ورودی‌ها و دفاع چندلایه",
    questions: [
      {
        q: "تفاوت Authentication و Authorization چیست؟",
        a: "**Authentication** هویت کاربر را اثبات می‌کند و **Authorization** تصمیم می‌گیرد آن هویت چه کاری مجاز است انجام دهد. ورود با رمز نمونه AuthN و بررسی policy برای ویرایش سفارش نمونه AuthZ است. TIP: صرف authenticated بودن به معنی دسترسی به همه resourceها نیست."
      },
      {
        q: "JWT چیست و از چه بخش‌هایی تشکیل می‌شود؟",
        a: "`JWT` توکنی متشکل از header، payload و signature است که به‌صورت Base64Url نمایش داده می‌شوند. signature دست‌کاری را آشکار می‌کند، اما payload به‌طور پیش‌فرض رمزگذاری نشده است. - اطلاعات محرمانه را داخل claimها قرار ندهید و `iss`، `aud` و `exp` را اعتبارسنجی کنید."
      },
      {
        q: "Access Token و Refresh Token چه تفاوتی دارند؟",
        a: "**Access Token** کوتاه‌عمر است و برای دسترسی به API ارسال می‌شود. **Refresh Token** عمر بلندتری دارد و فقط برای دریافت access token جدید به authorization server ارائه می‌شود. TIP: refresh token را امن ذخیره، rotate و در صورت reuse کل خانواده آن را revoke کنید."
      },
      {
        q: "معایب JWT چیست؟",
        a: "JWT پس از صدور تا پایان اعتبار به‌سادگی قابل لغو نیست و بزرگ‌شدن claimها هزینه هر request را بالا می‌برد. مدیریت key rotation، clock skew و validation اشتباه نیز ریسک امنیتی ایجاد می‌کند. - اگر stateful session نیاز را ساده‌تر حل می‌کند، JWT الزاماً انتخاب بهتری نیست."
      },
      {
        q: "Token Revocation چگونه پیاده‌سازی می‌شود؟",
        a: "برای access token کوتاه‌عمر معمولاً زمان انقضا محدود و refresh token در سرور revoke می‌شود. در نیاز فوری می‌توان `jti` را در denylist نگه داشت، ولی این کار بخشی از مزیت stateless بودن را کم می‌کند. TIP: تغییر رمز یا خروج از همه دستگاه‌ها باید sessionها و refresh tokenهای مرتبط را باطل کند."
      },
      {
        q: "CSRF چیست و چگونه مهار می‌شود؟",
        a: "**CSRF** مرورگر قربانی را وادار می‌کند یک درخواست ناخواسته با credential خودکار مانند cookie بفرستد. anti-forgery token، `SameSite` مناسب و بررسی origin دفاع‌های رایج هستند. - APIای که Bearer token را فقط از header می‌گیرد معمولاً در برابر CSRF کلاسیک آسیب‌پذیر نیست."
      },
      {
        q: "XSS چیست؟",
        a: "**XSS** اجرای JavaScript مهاجم در origin برنامه است و می‌تواند session یا داده کاربر را سرقت کند. output encoding متناسب با context و پرهیز از APIهایی مانند `innerHTML` دفاع اصلی است. TIP: CSP لایه دفاعی مکمل است و جای encoding صحیح را نمی‌گیرد."
      },
      {
        q: "Content Security Policy چیست؟",
        a: "**CSP** با header مشخص می‌کند مرورگر script، style و سایر resourceها را از چه منابعی بپذیرد. policy مبتنی بر nonce یا hash از `unsafe-inline` امن‌تر است. - ابتدا حالت `Content-Security-Policy-Report-Only` را برای کشف شکست‌ها آزمایش کنید."
      },
      {
        q: "CORS و CSRF چه تفاوتی دارند؟",
        a: "**CORS** سیاست مرورگر برای اجازه خواندن response میان originهاست، نه مکانیزم authentication. **CSRF** سوءاستفاده از ارسال خودکار credential برای انجام عمل ناخواسته است. TIP: بازکردن CORS با originهای کنترل‌نشده، مخصوصاً همراه credential، یک پیکربندی خطرناک است."
      },
      {
        q: "رمز عبور باید چگونه ذخیره شود؟",
        a: "رمز عبور باید با password hash کند و دارای salt یکتا مانند `Argon2id` یا bcrypt ذخیره شود. پارامتر هزینه باید متناسب با سخت‌افزار تنظیم و امکان rehash پس از login فراهم شود. - رمز خام، کلید بازیابی‌پذیر یا log رمز هرگز نگهداری نشود."
      },
      {
        q: "چرا MD5 و SHA-1 برای رمز عبور مناسب نیستند؟",
        a: "`MD5` و `SHA-1` بسیار سریع‌اند و مهاجم می‌تواند میلیاردها حدس را ارزان امتحان کند. salt به‌تنهایی سرعت brute force را کم نمی‌کند و collision weakness نیز اعتبار این الگوریتم‌ها را کاهش داده است. TIP: برای password از الگوریتم کند و memory-hard استفاده کنید."
      },
      {
        q: "bcrypt و Argon2 چه تفاوتی دارند؟",
        a: "`bcrypt` الگوریتم جاافتاده‌ای با cost قابل‌تنظیم است، اما محدودیت طول ورودی و مقاومت حافظه‌ای کمتری دارد. `Argon2id` برنده Password Hashing Competition و memory-hard است و در برابر GPU دفاع بهتری می‌دهد. - انتخاب پارامترها و کتابخانه معتبر به اندازه نام الگوریتم مهم است."
      },
      {
        q: "Rate Limiting چیست؟",
        a: "**Rate Limiting** تعداد درخواست را بر اساس کلیدی مانند کاربر، API key یا IP محدود می‌کند. الگوریتم‌هایی مانند token bucket امکان burst کنترل‌شده می‌دهند و پاسخ معمول `429` است. TIP: IP به‌تنهایی هویت قابل‌اعتمادی نیست و پشت proxy باید headerها فقط از proxy مورداعتماد پذیرفته شوند."
      },
      {
        q: "چگونه از Brute Force جلوگیری می‌کنید؟",
        a: "ترکیب rate limit، تأخیر تدریجی، MFA و تشخیص رفتار مشکوک هزینه **brute force** را بالا می‌برد. lockout دائمی بر اساس username می‌تواند ابزار denial-of-service علیه قربانی شود. - پیام خطا نباید وجود یا عدم وجود حساب را افشا کند."
      },
      {
        q: "Secure Headers مهم کدام‌اند؟",
        a: "headerهایی مانند `Content-Security-Policy`، `X-Content-Type-Options: nosniff` و `Referrer-Policy` سطح حمله مرورگر را کم می‌کنند. `frame-ancestors` در CSP یا X-Frame-Options از clickjacking دفاع می‌کند. TIP: headerها را با نیاز واقعی برنامه تنظیم و با ابزارهای تست بررسی کنید."
      },
      {
        q: "چرا HTTPS ضروری است؟",
        a: "**HTTPS** با TLS محرمانگی، یکپارچگی و احراز هویت سرور را در مسیر شبکه تأمین می‌کند و جلوی شنود یا دست‌کاری Token، Cookie و داده را می‌گیرد. بدون HTTPS حتی احراز هویت قوی هم در برابر Man-in-the-Middle آسیب‌پذیر است. البته HTTPS به‌تنهایی XSS یا Injection را حل نمی‌کند. TIP: redirect اجباری به HTTPS، فعال‌سازی HSTS و مدیریت درست Certificate را در نظر بگیرید."
      },
      {
        q: "Secrets چگونه مدیریت می‌شوند؟",
        a: "**Secret** نباید در source control، image یا فایل تنظیمات عمومی commit شود. از secret manager، managed identity و rotation دوره‌ای استفاده کنید و دسترسی را audit کنید. TIP: اگر secret افشا شد، حذف آن از آخرین commit کافی نیست؛ فوراً آن را revoke و جایگزین کنید."
      },
      {
        q: "اصل Least Privilege چیست؟",
        a: "**Least Privilege** یعنی هر کاربر و workload فقط حداقل مجوز لازم برای مدت لازم را داشته باشد. account دیتابیس برنامه نباید مالک سرور باشد و pipeline deploy نیز نباید permission نامحدود داشته باشد. - مجوزها را دوره‌ای بازبینی و دسترسی‌های بلااستفاده را حذف کنید."
      },
      {
        q: "OWASP Top 10 چیست؟",
        a: "**OWASP Top 10** فهرستی آگاهی‌بخش از ریسک‌های رایج مانند broken access control، injection و security misconfiguration است. این فهرست checklist کامل یا جایگزین threat modeling و تست امنیتی نیست. TIP: کنترل‌ها را بر اساس دارایی‌ها، مسیرهای حمله و ریسک واقعی سیستم اولویت‌بندی کنید."
      },
      {
        q: "SQL Injection چیست و چگونه جلوگیری می‌شود؟",
        a: "**SQL Injection** زمانی رخ می‌دهد که ورودی کاربر بخشی از ساختار query شود. query پارامتری و APIهای ORM که parameterization دارند دفاع اصلی‌اند؛ string concatenation حتی با validation خطرناک است. - account دیتابیس را محدود کنید تا اثر exploit نیز کاهش یابد."
      },
      {
        q: "SSRF چیست؟",
        a: "**SSRF** مهاجم را قادر می‌کند سرور به مقصدی انتخاب‌شده درخواست بفرستد و شاید به metadata یا شبکه داخلی برسد. allowlist مقصد، resolve و اعتبارسنجی IP، محدودیت redirect و egress filtering دفاع‌های مهم‌اند. TIP: فقط بررسی رشته URL کافی نیست، چون DNS rebinding و encodingهای متفاوت وجود دارند."
      },
      {
        q: "Open Redirect چیست؟",
        a: "**Open Redirect** پارامتر مقصد کنترل‌نشده‌ای است که کاربر را از دامنه معتبر به سایت مهاجم می‌فرستد. این ضعف در phishing و گاهی زنجیره حملات OAuth کاربرد دارد. - فقط URL محلی یا allowlist دقیق مقصد را بپذیرید و از مقایسه prefix ساده استفاده نکنید."
      },
      {
        q: "Insecure Deserialization چه خطری دارد؟",
        a: "deserialization داده غیرقابل‌اعتماد به typeهای دلخواه می‌تواند اجرای کد، تغییر state یا حمله DoS ایجاد کند. polymorphic type handling را محدود و قرارداد DTO را صریح تعریف کنید. TIP: هرگز داده client را صرفاً به دلیل امضا یا encoding، امن فرض نکنید."
      },
      {
        q: "Mass Assignment چیست؟",
        a: "**Mass Assignment** زمانی است که تمام فیلدهای ورودی خودکار روی entity bind می‌شوند و مهاجم ویژگی‌ای مانند `IsAdmin` را تغییر می‌دهد. DTOهای مخصوص هر operation و mapping صریح، سطح قابل‌تغییر را محدود می‌کنند. - authorization فیلدهای حساس را در سمت سرور اعمال کنید."
      },
      {
        q: "Security Logging چه ملاحظاتی دارد؟",
        a: "رویدادهایی مانند login ناموفق، تغییر نقش و دسترسی ممنوع باید با زمان و correlation مناسب ثبت شوند. log نباید password، token، اطلاعات کارت یا داده شخصی غیرضروری را ذخیره کند. TIP: alert و retention امن لازم است؛ log بدون پایش فقط هزینه ذخیره‌سازی است."
      },
      {
        q: "Threat Modeling چیست؟",
        a: "**Threat Modeling** دارایی‌ها، trust boundaryها، مهاجمان و مسیرهای سوءاستفاده را پیش از حادثه بررسی می‌کند. چارچوبی مانند `STRIDE` کمک می‌کند تهدیدها منظم شناسایی و کنترل‌ها اولویت‌بندی شوند. - مدل را با تغییر معماری و integrationها به‌روز کنید."
      }
    ]
  },
  {
    title: "Authentication و Identity در ASP.NET Core",
    desc: "پرسش‌های احراز هویت، مجوزدهی، Identity و پروتکل‌های استاندارد",
    questions: [
      {
        q: "Cookie Authentication در ASP.NET Core چگونه کار می‌کند؟",
        a: "middleware پس از login یک authentication ticket را محافظت کرده و در **cookie** قرار می‌دهد. مرورگر cookie را در requestهای بعدی می‌فرستد و handler یک `ClaimsPrincipal` می‌سازد. TIP: گزینه‌های `HttpOnly`، `Secure`، `SameSite` و expiration را متناسب با جریان برنامه تنظیم کنید."
      },
      {
        q: "ASP.NET Core Identity چیست؟",
        a: "**Identity** چارچوب مدیریت کاربر، password، role، claim، token و external login است. کلاس‌هایی مانند `UserManager<TUser>` و `SignInManager<TUser>` عملیات استاندارد و کنترل‌های امنیتی را فراهم می‌کنند. - Identity یک پروتکل OAuth server نیست و برای صدور توکن استاندارد ممکن است authorization server جدا لازم باشد."
      },
      {
        q: "Claim، Role و Policy چه تفاوتی دارند؟",
        a: "**Claim** گزاره‌ای درباره هویت مانند department است و role یک نوع گروه‌بندی مجوز محسوب می‌شود. **Policy** می‌تواند چند requirement را روی claim، role یا منطق سفارشی ترکیب کند. TIP: برای قواعد پیچیده و دامنه‌ای، policy از شرط‌های پراکنده `if` قابل نگهداری‌تر است."
      },
      {
        q: "AddAuthentication و schemeها چه نقشی دارند؟",
        a: "`AddAuthentication` سرویس‌های احراز هویت و schemeهای پیش‌فرض authenticate، challenge و forbid را پیکربندی می‌کند. هر scheme یک handler مانند Cookie یا JwtBearer را به نام مشخص ثبت می‌کند. - در برنامه چند scheme‌ای، scheme درست را صریح در policy یا با policy scheme انتخاب کنید."
      },
      {
        q: "Authenticate، Challenge و Forbid چه تفاوتی دارند؟",
        a: "`Authenticate` تلاش می‌کند هویت request را از scheme بسازد. `Challenge` برای کاربر احرازنشده معمولاً `401` یا redirect به login تولید می‌کند، ولی `Forbid` برای کاربر شناخته‌شده بدون مجوز معمولاً `403` می‌دهد. TIP: تفاوت 401 و 403 را حفظ کنید تا رفتار client و audit دقیق باشد."
      },
      {
        q: "ClaimsPrincipal و ClaimsIdentity چیستند؟",
        a: "`ClaimsIdentity` یک هویت با authentication type و مجموعه claimهاست. `ClaimsPrincipal` می‌تواند یک یا چند identity داشته باشد و در `HttpContext.User` قرار می‌گیرد. - claimهای دریافتی از provider را پیش از استفاده در authorization از نظر issuer و mapping کنترل کنید."
      },
      {
        q: "Policy-Based Authorization چگونه کار می‌کند؟",
        a: "یک policy شامل یک یا چند `IAuthorizationRequirement` است و همه requirementهای لازم باید موفق شوند. handlerها با `AuthorizationHandler<TRequirement>` منطق ارزیابی را اجرا می‌کنند. TIP: policy را با `RequireAuthorization` روی endpoint اعمال کنید تا endpoint فراموش‌شده ناخواسته public نماند."
      },
      {
        q: "Authorization Handler سفارشی چه زمانی لازم است؟",
        a: "وقتی مجوز به resource، مالکیت یا قاعده دامنه وابسته است، handler سفارشی مناسب است. handler می‌تواند resource جاری را بررسی و در صورت تحقق شرط `context.Succeed(requirement)` را فراخوانی کند. - handler نباید با `Fail()` مانع موفقیت handlerهای جایگزین شود، مگر شکست قطعی مدنظر باشد."
      },
      {
        q: "Resource-Based Authorization چیست؟",
        a: "**Resource-Based Authorization** تصمیم را بر اساس شیء واقعی مانند document یا order می‌گیرد. چون resource معمولاً پس از route resolution بارگذاری می‌شود، از `IAuthorizationService.AuthorizeAsync(user, resource, policy)` استفاده می‌شود. TIP: ابتدا فقط داده لازم را بخوانید و سپس مجوز عملیات را ارزیابی کنید."
      },
      {
        q: "OAuth 2.0 و OpenID Connect چه تفاوتی دارند؟",
        a: "**OAuth 2.0** چارچوب delegation برای دسترسی به API است و به‌تنهایی پروتکل login نیست. **OpenID Connect** لایه identity روی OAuth است و `id_token` و UserInfo را تعریف می‌کند. - access token را برای API و id token را برای client مصرف کنید."
      },
      {
        q: "Authorization Code Flow با PKCE چیست؟",
        a: "client کاربر را برای login هدایت می‌کند و پس از callback یک code کوتاه‌عمر دریافت می‌کند. با **PKCE**، code فقط همراه `code_verifier` اولیه قابل تبدیل به token است و سرقت code کم‌اثر می‌شود. TIP: این جریان برای SPA، mobile و برنامه‌های وب انتخاب استاندارد است."
      },
      {
        q: "Client Credentials Flow چه کاربردی دارد؟",
        a: "**Client Credentials** برای ارتباط machine-to-machine بدون کاربر نهایی است. سرویس با client authentication توکن مربوط به هویت خودش را دریافت می‌کند و scopeهای محدود دارد. - از این flow برای impersonation کاربر استفاده نکنید و secret یا private key را rotate کنید."
      },
      {
        q: "چرا Implicit Flow دیگر توصیه نمی‌شود؟",
        a: "در **Implicit Flow** token مستقیماً از authorization endpoint به مرورگر برمی‌گشت و امکان حفاظت مناسب از تبادل code وجود نداشت. اکنون Authorization Code همراه PKCE امنیت و کنترل بهتری فراهم می‌کند. TIP: مهاجرت فقط تغییر response type نیست و redirect URI و token storage نیز باید بازبینی شوند."
      },
      {
        q: "External Login در ASP.NET Core چگونه پیاده می‌شود؟",
        a: "providerهایی مانند Google با یک scheme خارجی ثبت و challenge می‌شوند و پس از callback claimهای کاربر برمی‌گردند. برنامه معمولاً external identity را به حساب محلی link می‌کند و سپس cookie داخلی خود را صادر می‌کند. - ایمیل را فقط وقتی provider آن را verified اعلام کرده برای اتصال حساب قابل‌اعتماد بدانید."
      },
      {
        q: "Token Validation در JwtBearer شامل چه مواردی است؟",
        a: "handler باید signature، issuer، audience، lifetime و الگوریتم مجاز را بررسی کند. تنظیمات `TokenValidationParameters` نباید validationهای اصلی را برای راحتی غیرفعال کند. TIP: key rotation را از metadata معتبر پشتیبانی کنید و clock skew را کوچک و آگاهانه تنظیم کنید."
      },
      {
        q: "Data Protection در ASP.NET Core چه نقشی دارد؟",
        a: "**Data Protection** داده‌هایی مانند authentication cookie و anti-forgery token را encrypt و sign می‌کند. در محیط چند instance‌ای، key ring باید مشترک، پایدار و با دسترسی محدود باشد. - از بین رفتن keyها می‌تواند همه sessionها را باطل کند و افشای آن‌ها جعل cookie را ممکن سازد."
      },
      {
        q: "Security Stamp در ASP.NET Core Identity چیست؟",
        a: "`SecurityStamp` مقداری است که با تغییرهای امنیتی حساب مانند password عوض می‌شود. validator دوره‌ای stamp داخل cookie را با مقدار ذخیره‌شده مقایسه و session قدیمی را رد می‌کند. TIP: فاصله validation تعادلی میان سرعت ابطال و تعداد queryهای دیتابیس است."
      },
      {
        q: "چگونه چند Authentication Scheme را مدیریت می‌کنید؟",
        a: "ممکن است UI از cookie و API از `JwtBearer` استفاده کند و هر دو scheme هم‌زمان ثبت شوند. policy یا `[Authorize(AuthenticationSchemes = ...)]` تعیین می‌کند کدام handler هویت را بسازد. - از default اشتباه پرهیز کنید، چون می‌تواند به redirect HTML برای API یا پذیرش هویت ناخواسته منجر شود."
      }
    ]
  }
];
