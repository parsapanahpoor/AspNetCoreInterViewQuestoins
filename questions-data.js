window.INTERVIEW_BANK = [
  {
    "title": "C# و مبانی .NET",
    "desc": "پرسش‌های پایه تا پیشرفته زبان C#، سیستم نوع‌ها و کتابخانه‌های اصلی .NET برای مصاحبه‌های ASP.NET Core.",
    "questions": [
      {
        "q": "تفاوت `class` و `struct` در C# چیست؟",
        "a": "`class` یک **نوع ارجاعی** است و معمولاً شیء آن روی Heap نگهداری می‌شود، اما `struct` یک **نوع مقداری** است و داده را مستقیماً در محل استفاده نگه می‌دارد. کپی‌کردن کلاس، مرجع را کپی می‌کند؛ کپی‌کردن ساختار، تمام مقدار را کپی می‌کند. ساختارها وراثت کلاسی و finalizer ندارند و برای داده‌های کوچک، تغییرناپذیر و دارای معنای مقداری مناسب‌اند. بزرگ یا mutable بودن `struct` می‌تواند به کپی‌های پرهزینه و رفتارهای غیرمنتظره منجر شود."
      },
      {
        "q": "تفاوت `interface` و `abstract class` چیست؟",
        "a": "`interface` یک **قرارداد رفتاری** است و یک نوع می‌تواند چندین interface را پیاده‌سازی کند، درحالی‌که فقط از یک کلاس پایه ارث می‌برد. `abstract class` می‌تواند state، constructor، فیلد و پیاده‌سازی مشترک داشته باشد. اعضای پیش‌فرض interface برای تکامل API مفیدند، اما جای state مشترک کلاس پایه را نمی‌گیرند. وقتی رابطه «هست یک» و کد مشترک دارید abstract class، و برای capability مستقل interface انتخاب مناسب‌تری است."
      },
      {
        "q": "کلمه کلیدی `var` چه کاری انجام می‌دهد و آیا نوع را پویا می‌کند؟",
        "a": "`var` فقط **استنتاج نوع در زمان کامپایل** است و متغیر همچنان نوع ثابت و strongly typed دارد. مقدار اولیه باید نوع قابل‌تشخیص داشته باشد و پس از تعریف نمی‌توان نوع متغیر را عوض کرد. این ویژگی با `dynamic` متفاوت است؛ خطاهای `dynamic` ممکن است تا زمان اجرا آشکار نشوند. از `var` وقتی نوع از سمت راست واضح است یا نام نوع طولانی است استفاده کنید، نه برای پنهان‌کردن معنای کد."
      },
      {
        "q": "تفاوت `==` و `Equals` چیست؟",
        "a": "عملگر `==` قابل overload است و رفتار آن به نوع compile-time و پیاده‌سازی عملگر بستگی دارد. متد `Equals` برای **برابری معنایی** طراحی شده و در `object` به‌صورت virtual در دسترس است؛ نوع‌های مقداری معمولاً مقادیرشان را مقایسه می‌کنند. اگر `Equals` را override می‌کنید، باید `GetHashCode` را نیز سازگار پیاده‌سازی کنید، مخصوصاً برای کلیدهای Dictionary. برای مقایسه عمومی بهتر است از `EqualityComparer<T>.Default` استفاده شود."
      },
      {
        "q": "تفاوت `const` و `readonly` چیست؟",
        "a": "`const` در زمان کامپایل تعیین و مقدار آن در اسمبلی مصرف‌کننده **inline** می‌شود؛ بنابراین فقط برخی نوع‌های ساده را می‌پذیرد. `readonly` در زمان تعریف یا constructor مقدار می‌گیرد و می‌تواند برای هر نوعی باشد. تغییر مقدار public const در یک کتابخانه بدون rebuild مصرف‌کننده ممکن است مقدار قدیمی را حفظ کند. برای مقادیر عمومی قابل‌تغییر بین نسخه‌ها معمولاً `static readonly` امن‌تر است."
      },
      {
        "q": "عضو یا کلاس `static` چه ویژگی‌هایی دارد؟",
        "a": "عضو static به **خود نوع** تعلق دارد، نه به نمونه، و در کل AppDomain یا process یک state مشترک ایجاد می‌کند. کلاس static قابل نمونه‌سازی و ارث‌بری نیست و همه اعضایش static هستند. state قابل‌تغییر static باید thread-safe باشد و می‌تواند تست‌پذیری و isolation را کاهش دهد. در ASP.NET Core برای state درخواست یا کاربر از static استفاده نکنید."
      },
      {
        "q": "تفاوت پارامترهای `ref` و `out` چیست؟",
        "a": "هر دو آرگومان را با **ارجاع** عبور می‌دهند و متد می‌تواند متغیر caller را تغییر دهد. متغیر `ref` باید پیش از فراخوانی مقداردهی شده باشد، اما `out` لازم نیست و متد موظف است پیش از خروج آن را مقداردهی کند. `out` برای الگوی `TryParse` مناسب است و `ref` بیشتر برای به‌روزرسانی مقدار موجود کاربرد دارد. استفاده زیاد از آن‌ها می‌تواند API را سخت‌فهم کند؛ اغلب بازگرداندن یک result object روشن‌تر است."
      },
      {
        "q": "عملگرهای `is` و `as` چه تفاوتی دارند؟",
        "a": "`is` سازگاری نوع را بررسی می‌کند و همراه pattern matching می‌تواند مقدار cast‌شده را همان‌جا بسازد. `as` در cast ناموفق به‌جای exception مقدار `null` می‌دهد و فقط برای نوع‌های ارجاعی یا nullable قابل استفاده است. الگوی `if (value is Customer customer)` معمولاً خواناتر و اتمیک‌تر از `as` به‌همراه null check است. cast مستقیم زمانی مناسب است که ناسازگاری نوع واقعاً یک خطای برنامه‌نویسی باشد."
      },
      {
        "q": "Pattern Matching در C# چیست؟",
        "a": "Pattern Matching امکان بررسی **نوع، مقدار و شکل داده** را با syntax یکپارچه فراهم می‌کند. الگوهای type، property، relational، list و ترکیب‌های `and`، `or` و `not` شرط‌های پیچیده را خواناتر می‌کنند. compiler در بسیاری موارد exhaustiveness و unreachable pattern را تشخیص می‌دهد. بهتر است patternها کوتاه بمانند؛ منطق دامنه سنگین را داخل یک pattern بسیار بزرگ پنهان نکنید."
      },
      {
        "q": "تفاوت `switch` statement و `switch` expression چیست؟",
        "a": "`switch` statement برای اجرای چند دستور و control flow مناسب است، اما `switch` expression مستقیماً یک مقدار تولید می‌کند. expression معمولاً کوتاه‌تر، declarative و با pattern matching سازگارتر است. شاخه پیش‌فرض `_` برای پوشش ورودی‌های ناشناخته مهم است، مگر آنکه compiler کامل‌بودن حالت‌ها را تضمین کند. برای side effectهای متعدد، statement خواناتر باقی می‌ماند."
      },
      {
        "q": "Nullable Reference Types چه مشکلی را حل می‌کند؟",
        "a": "این قابلیت با annotationهایی مانند `string?` و تحلیل جریان، احتمال **NullReferenceException** را در زمان کامپایل کاهش می‌دهد. nullable بودن reference type قرارداد API است، نه تغییر representation در runtime. عملگر `!` فقط هشدار compiler را خاموش می‌کند و null check واقعی انجام نمی‌دهد. بهتر است هشدارها اصلاح شوند و ورودی‌های خارجی نیز در runtime اعتبارسنجی شوند."
      },
      {
        "q": "تفاوت Value Type و Reference Type چیست؟",
        "a": "متغیر value type خود داده را نگه می‌دارد، ولی متغیر reference type به یک شیء اشاره می‌کند. assignment در نوع مقداری داده را کپی می‌کند و در نوع ارجاعی مرجع را؛ بنابراین دو مرجع می‌توانند یک شیء mutable را ببینند. محل ذخیره‌سازی صرفاً «Stack در برابر Heap» نیست؛ context، escape analysis و JIT مؤثرند. تفاوت اصلی را باید در **semantics کپی و هویت** توضیح داد."
      },
      {
        "q": "چرا `string` در C# immutable است؟",
        "a": "پس از ساخته‌شدن رشته، محتوای آن تغییر نمی‌کند و عملیات ظاهراً تغییردهنده یک رشته جدید می‌سازند. immutability اشتراک امن، caching hash code و استفاده مطمئن به‌عنوان کلید Dictionary را ممکن می‌کند. الحاق مکرر در حلقه allocation زیادی ایجاد می‌کند؛ در این حالت `StringBuilder` مناسب‌تر است. immutable بودن خود رشته به معنی thread-safe بودن متغیری که مرجع آن را عوض می‌کند نیست."
      },
      {
        "q": "چه زمانی `Dictionary<TKey,TValue>` را به‌جای `List<T>` انتخاب می‌کنید؟",
        "a": "`Dictionary` برای lookup بر اساس کلید به‌طور میانگین پیچیدگی **O(1)** دارد، درحالی‌که جست‌وجوی خطی در List معمولاً O(n) است. List ترتیب و دسترسی index-based را طبیعی نگه می‌دارد و overhead کمتری برای مجموعه کوچک دارد. کیفیت `GetHashCode` و ثبات کلیدها برای Dictionary حیاتی است. اگر هم ترتیب و هم lookup سریع لازم باشد، ساختار ترکیبی یا collection تخصصی را بررسی کنید."
      },
      {
        "q": "تفاوت `IEnumerable<T>`، `ICollection<T>` و `IList<T>` چیست؟",
        "a": "`IEnumerable<T>` حداقل قرارداد پیمایش را می‌دهد و ممکن است lazy یا تک‌بارمصرف باشد. `ICollection<T>` قابلیت‌هایی مانند `Count`، افزودن و حذف را اضافه می‌کند و `IList<T>` دسترسی و تغییر بر اساس index را نیز ارائه می‌دهد. API باید **کمترین abstraction لازم** را دریافت کند تا coupling کاهش یابد. برای خروجی فقط‌خواندنی materialized، `IReadOnlyCollection<T>` یا `IReadOnlyList<T>` اغلب قرارداد دقیق‌تری است."
      },
      {
        "q": "Delegate و Event چه تفاوتی دارند؟",
        "a": "Delegate یک reference type برای اشاره به متدهای دارای signature سازگار و قابل multicast است. Event روی delegate یک لایه **encapsulation** می‌گذارد؛ مصرف‌کننده فقط می‌تواند subscribe یا unsubscribe کند و نمی‌تواند event را از بیرون invoke یا جایگزین کند. publisher مالک انتشار event است و subscriber باید برای جلوگیری از memory leak در عمرهای نامتقارن unsubscribe کند. برای eventهای async باید قرارداد خطا و ترتیب اجرا صریح طراحی شود."
      },
      {
        "q": "Lambda Expression چیست و closure چگونه کار می‌کند؟",
        "a": "Lambda یک تابع بی‌نام است که می‌تواند به delegate یا expression tree تبدیل شود. اگر متغیر بیرونی را capture کند، compiler معمولاً یک **closure object** می‌سازد و عمر متغیر را افزایش می‌دهد. capture در حلقه‌ها یا مسیرهای داغ ممکن است هم خطای منطقی و هم allocation ایجاد کند. lambdaهای `static` از capture ناخواسته جلوگیری می‌کنند."
      },
      {
        "q": "Extension Method چیست؟",
        "a": "Extension method یک متد static است که با پارامتر اول دارای `this` اجازه می‌دهد مانند متد نمونه فراخوانی شود. این قابلیت برای افزودن رفتار کمکی بدون تغییر یا ارث‌بری نوع مفید است و LINQ نمونه اصلی آن است. dispatch آن **static** است و نمی‌تواند عضو واقعی private یا virtual به نوع اضافه کند. extensionهای عمومی و مبهم می‌توانند discoverability و resolution را دشوار کنند."
      },
      {
        "q": "`record` چه تفاوتی با `class` معمولی دارد؟",
        "a": "Record به‌طور پیش‌فرض برای مدل‌های داده با **برابری مقداری**، نمایش مناسب و کپی غیرمخرب با `with` طراحی شده است. `record class` همچنان reference type و `record struct` value type است. propertyهای `init` تغییرناپذیری سطحی ایجاد می‌کنند؛ اشیای mutable داخل record همچنان قابل تغییرند. برای entity دارای identity معمولاً class و برای value object یا DTO اغلب record انتخاب طبیعی‌تری است."
      },
      {
        "q": "تفاوت `Tuple` و `ValueTuple` چیست؟",
        "a": "`System.Tuple` یک reference type قدیمی است، اما `ValueTuple` یک struct با syntax مختصر مانند `(int Id, string Name)` است. ValueTuple معمولاً allocation heap ندارد و نام اعضا را برای خوانایی در compile-time پشتیبانی می‌کند. برای خروجی محلی و کوچک مناسب است، ولی در API عمومی پیچیده نام معنایی یک type اختصاصی بهتر است. نام اعضای tuple بخشی قابل‌اعتماد از قرارداد runtime یا serialization نیست."
      },
      {
        "q": "Boxing و Unboxing چیست و چه هزینه‌ای دارد؟",
        "a": "Boxing تبدیل value type به `object` یا یک interface و معمولاً شامل allocation و کپی مقدار روی Heap است. Unboxing استخراج نوع مقداری دقیق از boxed object است و cast ناسازگار exception می‌دهد. در حلقه‌های داغ، boxing پنهان می‌تواند فشار GC ایجاد کند. استفاده از generic collectionها و APIهای generic این هزینه را تا حد زیادی حذف می‌کند."
      },
      {
        "q": "Generics چه مزایایی نسبت به استفاده از `object` دارند؟",
        "a": "Generics **type safety در زمان کامپایل**، حذف castهای اضافی و کاهش boxing برای value typeها را فراهم می‌کنند. constraintهایی مانند `where T : class`, `new()` یا interface قابلیت‌های مجاز T را مشخص می‌کنند. runtime برای reference typeها می‌تواند کد را share کند و برای value typeها specialization بسازد. طراحی constraint دقیق، API را هم سریع‌تر و هم شفاف‌تر می‌کند."
      },
      {
        "q": "Covariance و Contravariance در Generics چیست؟",
        "a": "Covariance با `out` اجازه می‌دهد مثلاً `IEnumerable<Dog>` به `IEnumerable<Animal>` تبدیل شود، چون T فقط خروجی است. Contravariance با `in` جهت معکوس را برای مصرف ورودی ممکن می‌کند، مانند `IComparer<Animal>` برای مقایسه Dog. این قابلیت فقط روی interface و delegate generic و برای reference typeها اعمال می‌شود. قرارگیری T در ورودی یا خروجی تعیین می‌کند variance از نظر type safety مجاز است یا نه."
      },
      {
        "q": "`IDisposable` و دستور `using` چه کاربردی دارند؟",
        "a": "`IDisposable` برای آزادسازی قطعی منابعی مانند stream، connection و handle است؛ این منابع نباید منتظر GC بمانند. `using` حتی در صورت exception، `Dispose` را از طریق `finally` فراخوانی می‌کند. اگر نوع مالک resource async است، `IAsyncDisposable` و `await using` به‌کار می‌رود. Dispose کردن dependencyای که مالک آن DI container است اشتباه است؛ **مالکیت resource** باید روشن باشد."
      },
      {
        "q": "Garbage Collector در .NET به‌طور خلاصه چگونه کار می‌کند؟",
        "a": "GC حافظه managed را با یافتن اشیای قابل‌دسترسی از rootها مدیریت و اشیای unreachable را جمع‌آوری می‌کند. نسل‌های 0، 1 و 2 بر فرض کوتاه‌عمر بودن بیشتر اشیا تکیه دارند و collection نسل پایین ارزان‌تر است. GC عدم وجود memory leak را تضمین نمی‌کند؛ referenceهای زنده ناخواسته همچنان حافظه را نگه می‌دارند. فراخوانی دستی `GC.Collect` تقریباً همیشه نشانه طراحی یا اندازه‌گیری نادرست است."
      },
      {
        "q": "String Interning چیست؟",
        "a": "Runtime می‌تواند literalهای رشته یکسان را در **intern pool** به یک instance مشترک نگاشت کند. این کار حافظه برخی literalها را کاهش می‌دهد و توضیح می‌دهد چرا گاهی `ReferenceEquals` برای رشته‌ها true می‌شود، اما نباید منطق برنامه بر آن تکیه کند. `string.Intern` دستی ممکن است رشته را برای عمر طولانی process نگه دارد. مقایسه رشته باید با `Equals` و `StringComparison` مناسب انجام شود."
      },
      {
        "q": "کلمه کلیدی `sealed` چه کاربردی دارد؟",
        "a": "کلاس sealed قابل ارث‌بری نیست و متد `sealed override` از override بیشتر در زنجیره جلوگیری می‌کند. این تصمیم invariantها و سطح توسعه نوع را کنترل می‌کند و گاهی فرصت devirtualization به JIT می‌دهد. sealed کردن صرفاً برای performance بدون اندازه‌گیری توجیه خوبی نیست. در طراحی کتابخانه، باز گذاشتن وراثت یک قرارداد بلندمدت است و باید آگاهانه انجام شود."
      },
      {
        "q": "کلاس‌ها و متدهای `partial` چه کاربردی دارند؟",
        "a": "`partial` اجازه می‌دهد تعریف یک type یا برخی methodها میان چند فایل تقسیم و در compile-time یکپارچه شود. کاربرد مهم آن جداسازی **کد تولیدشده** از کد دست‌نویس است، مانند source generatorها یا designerها. همه بخش‌ها باید در یک assembly و module باشند و modifiers سازگار داشته باشند. استفاده از partial برای پنهان‌کردن یک کلاس بیش‌ازحد بزرگ، مشکل طراحی را حل نمی‌کند."
      },
      {
        "q": "`yield return` چگونه کار می‌کند؟",
        "a": "`yield return` یک iterator با اجرای **lazy** می‌سازد و compiler آن را به state machine تبدیل می‌کند. هر بار `MoveNext` اجرا تا yield بعدی پیش می‌رود، پس همه نتایج از ابتدا در حافظه ساخته نمی‌شوند. exceptionها معمولاً هنگام enumeration رخ می‌دهند، نه هنگام گرفتن `IEnumerable`. resourceهای داخل iterator باید با `using` مدیریت شوند تا هنگام dispose شدن enumerator آزاد شوند."
      },
      {
        "q": "Deferred Execution در LINQ چیست و چه خطراتی دارد؟",
        "a": "بسیاری از operatorهای LINQ تا زمانی که sequence enumerate نشود اجرا نمی‌شوند. این رفتار composition و پردازش lazy را ممکن می‌کند، اما enumeration چندباره می‌تواند query یا محاسبه را چند بار اجرا کند. در EF Core، افزودن `ToListAsync` نقطه اجرای SQL و materialization است. تغییر منبع بین ساخت query و اجرای آن نیز نتیجه را عوض می‌کند؛ boundary اجرا را آگاهانه مشخص کنید."
      },
      {
        "q": "تفاوت `IEnumerable<T>` و `IQueryable<T>` چیست؟",
        "a": "`IEnumerable` عملیات را با delegate روی داده‌های درون process انجام می‌دهد، اما `IQueryable` expression tree می‌سازد تا provider آن را مثلاً به SQL ترجمه کند. هر کد C# قابل ترجمه نیست و ممکن است exception یا query ناکارآمد ایجاد کند. بهتر است فیلتر و projection قابل‌ترجمه پیش از materialization انجام شود. برگرداندن IQueryable از لایه repository می‌تواند مرز persistence را نشت دهد و کنترل query را دشوار کند."
      }
    ]
  },
  {
    "title": "Async، Concurrency و Performance",
    "desc": "مفاهیم برنامه‌نویسی ناهمگام، هم‌زمانی، مدیریت حافظه و سنجش کارایی در سرویس‌های ASP.NET Core.",
    "questions": [
      {
        "q": "تفاوت `Thread` و `Task` چیست؟",
        "a": "Thread یک واحد اجرایی سیستم‌عامل با stack و هزینه نسبتاً زیاد است، اما Task نمایش یک **عملیات قابل‌انتظار** است و الزاماً thread اختصاصی ندارد. Taskهای CPU-bound معمولاً روی ThreadPool اجرا می‌شوند و عملیات I/O async هنگام انتظار thread را اشغال نمی‌کند. abstraction مبتنی بر Task امکان composition، cancellation و propagation خطا را بهتر می‌دهد. در کد کاربردی معمولاً Task را مستقیم مدیریت می‌کنیم، نه Thread را."
      },
      {
        "q": "تفاوت `async/await` و `Task.Run` چیست؟",
        "a": "`async/await` syntax مدیریت continuation برای عملیات ناهمگام است و به‌خودی‌خود thread جدید ایجاد نمی‌کند. `Task.Run` کار CPU-bound همگام را به ThreadPool می‌فرستد. در ASP.NET Core پیچیدن I/O async در Task.Run فقط مصرف thread و context switch را افزایش می‌دهد. Task.Run ممکن است برای offload محاسبه CPU-bound محدود مفید باشد، اما جایگزین API واقعاً async نیست."
      },
      {
        "q": "`Parallel.ForEach` چه زمانی مناسب است؟",
        "a": "این API برای پردازش **CPU-bound مستقل و همگام** روی چند هسته مناسب است. تعداد workerها را مدیریت می‌کند، اما shared state، ترتیب خروجی و exceptionها همچنان باید طراحی شوند. برای I/O async از `Parallel.ForEachAsync` یا الگوی Task با محدودسازی concurrency استفاده کنید. موازی‌سازی کار کوچک ممکن است به‌دلیل overhead از اجرای ترتیبی کندتر باشد."
      },
      {
        "q": "تفاوت `Parallel.ForEach` و `Task.WhenAll` چیست؟",
        "a": "`Parallel.ForEach` عمدتاً موازی‌سازی CPU-bound همگام را با partitioning روی ThreadPool هدف می‌گیرد. `Task.WhenAll` چند عملیات Task-based، معمولاً I/O-bound، را compose می‌کند و خودش concurrency را محدود نمی‌کند. ساخت هزاران درخواست هم‌زمان با WhenAll می‌تواند downstream را اشباع کند؛ `SemaphoreSlim` یا batching لازم است. انتخاب بر اساس ماهیت کار و محدودیت منابع است، نه صرفاً سرعت ظاهری."
      },
      {
        "q": "چرا `async void` خطرناک است؟",
        "a": "متد async void قابل await نیست، completion و exception آن در قالب Task در اختیار caller قرار نمی‌گیرد. exception معمولاً به SynchronizationContext منتشر می‌شود و تست و recovery را دشوار می‌کند. تنها کاربرد پذیرفته‌شده آن event handlerهایی است که signature آن‌ها void است. سایر متدهای async باید `Task` یا `Task<T>` برگردانند."
      },
      {
        "q": "`ValueTask` چیست و چه زمانی باید استفاده شود؟",
        "a": "`ValueTask<T>` یک struct awaitable است که در مسیر تکمیل همگام پرتکرار می‌تواند allocation مربوط به Task را کاهش دهد. این مزیت با پیچیدگی و اندازه بیشتر state machine همراه است و همیشه سریع‌تر نیست. یک ValueTask را معمولاً نباید چند بار await کرد یا بدون تبدیل ذخیره کرد، مگر منبع قرارداد آن را تضمین کند. فقط پس از profiling و در APIهای پرتکرار از آن استفاده کنید."
      },
      {
        "q": "`ConfigureAwait(false)` چه اثری دارد؟",
        "a": "این فراخوانی می‌گوید continuation لازم نیست context جاری را capture کند. در UI و ASP.NET قدیمی می‌تواند از deadlock و context switch اضافی جلوگیری کند. ASP.NET Core به‌طور پیش‌فرض SynchronizationContext کلاسیک ندارد، بنابراین اثر آن در کد endpoint اغلب محدود است. در کتابخانه‌های عمومی همچنان استفاده از آن می‌تواند وابستگی به context مصرف‌کننده را کاهش دهد."
      },
      {
        "q": "تفاوت `lock`، `Monitor` و `SemaphoreSlim` چیست؟",
        "a": "`lock` syntax امن و ساده‌ای روی `Monitor.Enter/Exit` برای mutual exclusion همگام در یک process است. Monitor امکاناتی مانند `Wait` و `Pulse` می‌دهد، اما مدیریت آن پیچیده‌تر است. `SemaphoreSlim` ظرفیت بیش از یک و `WaitAsync` دارد، پس برای محدودسازی concurrency در مسیر async مناسب است. داخل lock نباید `await` کرد و object قفل باید private و پایدار باشد."
      },
      {
        "q": "Thread Safety به چه معناست؟",
        "a": "کد thread-safe در دسترسی هم‌زمان، invariantها را حفظ و نتیجه تعریف‌شده تولید می‌کند. راهکارها شامل immutability، حذف state مشترک، synchronization و collectionهای concurrent هستند. thread-safe بودن هر متد به‌تنهایی لزوماً یک workflow چندمرحله‌ای را atomic نمی‌کند. قرارداد باید مشخص کند چه عملیات‌هایی هم‌زمان مجاز و چه تضمین‌هایی ارائه می‌شوند."
      },
      {
        "q": "Deadlock چگونه رخ می‌دهد و چطور پیشگیری می‌شود؟",
        "a": "Deadlock وقتی رخ می‌دهد که چند جریان در چرخه‌ای از منابع منتظر یکدیگر بمانند. ترتیب ثابت گرفتن lockها، کوتاه نگه‌داشتن critical section، timeout و حذف blocking روی async احتمال آن را کم می‌کند. الگوی `.Result` یا `.Wait()` روی Task در context محدود یکی از علل رایج sync-over-async است. در رخداد واقعی باید thread dump و wait chain بررسی شود، نه اینکه حدس بزنیم."
      },
      {
        "q": "Race Condition چیست؟",
        "a": "Race condition یعنی نتیجه به زمان‌بندی غیرقطعی عملیات هم‌زمان وابسته شود. عبارت `counter++` atomic نیست و شامل خواندن، افزایش و نوشتن است. راه‌حل می‌تواند lock، `Interlocked`، طراحی immutable یا انتقال مالکیت state باشد. تست‌های معمولی ممکن است race را نشان ندهند؛ load test و ابزارهای tracing برای بازتولید کمک می‌کنند."
      },
      {
        "q": "`ConcurrentDictionary` چه تضمینی می‌دهد؟",
        "a": "این collection عملیات منفرد thread-safe و دسترسی concurrent با contention کمتر از Dictionary قفل‌شده فراهم می‌کند. متدهایی مانند `GetOrAdd` و `AddOrUpdate` برای عملیات ترکیبی طراحی شده‌اند. delegate factory ممکن است بیش از یک بار اجرا شود، هرچند فقط یک مقدار ثبت شود؛ بنابراین نباید side effect غیرقابل‌تکرار داشته باشد. snapshot کاملاً اتمیک از چند عملیات مجزا تضمین نمی‌شود."
      },
      {
        "q": "`ConcurrentQueue` چه کاربردی دارد؟",
        "a": "`ConcurrentQueue<T>` یک صف FIFO thread-safe و non-blocking برای producer و consumerهای متعدد است. خود صف امکان انتظار async برای رسیدن داده را ندارد؛ polling مداوم طراحی خوبی نیست. برای pipeline دارای backpressure و انتظار async، `Channel<T>` معمولاً مناسب‌تر است. شمارش و سپس dequeue کردن اتمیک نیست؛ مستقیماً `TryDequeue` را بررسی کنید."
      },
      {
        "q": "کلاس `Interlocked` چه زمانی مفید است؟",
        "a": "`Interlocked` عملیات اتمیک کم‌هزینه مانند increment، exchange و compare-exchange را روی مقادیر ساده فراهم می‌کند. برای counter، flag و پیاده‌سازی برخی الگوریتم‌های lock-free مناسب است. اتمیک بودن یک فیلد، invariant میان چند فیلد را حفظ نمی‌کند. الگوریتم lock-free پیچیده را بدون نیاز و آزمون دقیق ترجیح ندهید."
      },
      {
        "q": "`Span<T>` چیست؟",
        "a": "`Span<T>` نمایی type-safe و پیوسته روی بخشی از حافظه است که بدون کپی slicing می‌شود. چون `ref struct` است، روی Heap box نمی‌شود و نمی‌تواند از مرز `await` یا iterator عبور کند. برای parsing و پردازش buffer در مسیرهای داغ allocation را کاهش می‌دهد. APIهای عادی و غیرحساس را صرفاً برای micro-optimization با Span پیچیده نکنید."
      },
      {
        "q": "تفاوت `Memory<T>` و `Span<T>` چیست؟",
        "a": "`Memory<T>` برخلاف Span یک struct معمولی است و می‌تواند روی Heap ذخیره و از مرز async عبور کند. با property به نام `Span` می‌توان در بخش همگام به نمای سریع آن دسترسی گرفت. `ReadOnlyMemory<T>` برای انتقال buffer فقط‌خواندنی در API async مناسب است. مالکیت و طول عمر حافظه، به‌خصوص در pooling، باید صریح باشد."
      },
      {
        "q": "GC چه اثری بر Performance دارد؟",
        "a": "allocation سریع است، اما collection نیازمند پیمایش اشیای زنده و گاهی توقف اجرای managed است. نرخ allocation بالا، objectهای زنده طولانی و finalizerها هزینه GC را افزایش می‌دهند. Server GC برای workloadهای سروری throughput بالاتری هدف می‌گیرد و تنظیمات runtime باید با اندازه‌گیری انتخاب شوند. کاهش allocation فقط وقتی مهم است که trace یا metric آن را bottleneck نشان دهد."
      },
      {
        "q": "Large Object Heap یا LOH چیست؟",
        "a": "اشیای بزرگ، معمولاً حدود 85KB و بیشتر، روی LOH تخصیص می‌یابند و همراه collection نسل 2 جمع‌آوری می‌شوند. allocation و آزادسازی مکرر آن‌ها می‌تواند pause و fragmentation ایجاد کند. buffer pooling، streaming و پرهیز از materialize کردن payload بزرگ کمک می‌کند. نگه‌داشتن بی‌دلیل buffer اجاره‌ای نیز حافظه را بدتر می‌کند؛ pool باید درست بازگردانده شود."
      },
      {
        "q": "برای کاهش Allocation در .NET چه راهکارهایی دارید؟",
        "a": "ابتدا با profiler مسیر پرتخصیص را پیدا می‌کنیم، سپس boxing، closure، LINQ و رشته‌سازی غیرضروری را بررسی می‌کنیم. `Span<T>`، pooling، `StringBuilder` و reuse کنترل‌شده می‌توانند کمک کنند. cache یا pool بدون سقف ممکن است memory retention و پیچیدگی ایجاد کند. هدف کاهش allocation مؤثر بر latency یا GC است، نه حذف کورکورانه همه اشیا."
      },
      {
        "q": "برای Profiling برنامه ASP.NET Core از چه ابزارهایی استفاده می‌کنید؟",
        "a": "ابتدا metricهایی مانند latency percentile، throughput، CPU، allocation rate و GC pause را با OpenTelemetry یا مانیتورینگ محیط جمع می‌کنم. `dotnet-counters` برای شمارنده‌های زنده، `dotnet-trace` و PerfView برای trace، و `dotnet-dump` برای dump مفیدند. BenchmarkDotNet microbenchmark قابل‌اعتماد با warmup و آمار تولید می‌کند. profilerهای Visual Studio، JetBrains dotTrace/dotMemory و ابزارهای APM نیز برای hotspot و distributed trace کاربرد دارند."
      },
      {
        "q": "`CancellationToken` را چگونه درست استفاده می‌کنید؟",
        "a": "Token باید از مرز ورودی، مانند `HttpContext.RequestAborted`، به تمام عملیات پشتیبان‌کننده cancellation منتقل شود. cancellation یک **درخواست مشارکتی** است و کد باید آن را بررسی یا به API پایین‌دست پاس دهد. `OperationCanceledException` با token مرتبط معمولاً خطای 500 نیست. بعد از نقطه‌ای که side effect قطعی شده، لغو باید با دقت انجام شود تا state نیمه‌کاره باقی نماند."
      },
      {
        "q": "`SynchronizationContext` چیست؟",
        "a": "SynchronizationContext سیاست زمان و محل اجرای continuationها را abstract می‌کند، مثلاً بازگشت به thread رابط کاربری. `await` به‌طور پیش‌فرض context موجود را capture می‌کند، مگر با ConfigureAwait غیرفعال شود. ASP.NET Core معمولاً SynchronizationContext سفارشی ندارد و continuation می‌تواند روی هر ThreadPool thread اجرا شود. بااین‌حال `AsyncLocal` و ExecutionContext اطلاعات منطقی درخواست را جداگانه جریان می‌دهند."
      },
      {
        "q": "`Channel<T>` چه مسئله‌ای را حل می‌کند؟",
        "a": "Channel یک صف producer-consumer با API async، چند writer/reader و پشتیبانی از completion است. bounded channel می‌تواند **backpressure** اعمال کند تا تولیدکننده از مصرف‌کننده بسیار جلو نزند. برای background queue درون یک process مناسب است، اما durable نیست و با restart داده از دست می‌رود. برای تضمین تحویل باید broker پایدار مانند RabbitMQ یا سرویس مشابه در نظر گرفت."
      },
      {
        "q": "`IAsyncEnumerable<T>` چیست؟",
        "a": "این interface جریان ناهمگام داده را با `await foreach` ارائه می‌دهد و هر آیتم بدون materialize شدن کل مجموعه تحویل می‌شود. برای streaming نتایج دیتابیس یا شبکه مفید است و مصرف حافظه و time-to-first-item را کاهش می‌دهد. cancellation با `WithCancellation` یا پارامتر token منتقل می‌شود. طول عمر DbContext و connection باید تا پایان enumeration معتبر بماند."
      },
      {
        "q": "Object Pooling و `ArrayPool<T>` چه مزایا و خطراتی دارند؟",
        "a": "Pooling با reuse اشیای پرهزینه یا bufferها، allocation و فشار GC را در مسیر پرتکرار کاهش می‌دهد. آرایه اجاره‌شده ممکن است بزرگ‌تر از درخواست و حاوی داده قبلی باشد؛ فقط محدوده معتبر را بخوانید و برای داده حساس پاک‌سازی کنید. هر اجاره باید در `finally` بازگردانده شود و پس از return نباید استفاده شود. pooling برای اشیای ارزان یا کم‌تکرار معمولاً ارزش پیچیدگی ندارد."
      },
      {
        "q": "ThreadPool Starvation چیست؟",
        "a": "Starvation وقتی رخ می‌دهد که workerهای ThreadPool با کار blocking اشغال شوند و Taskهای جدید دیر نوبت بگیرند. sync-over-async، I/O همگام و lockهای طولانی در وب‌سرور از علل رایج‌اند. نشانه‌ها شامل latency رو به رشد، queue طولانی و CPU نه‌چندان بالا است. راه‌حل اصلی حذف blocking و استفاده end-to-end از async است، نه صرفاً افزایش حداقل threadها."
      },
      {
        "q": "چگونه concurrency عملیات I/O را محدود می‌کنید؟",
        "a": "Task.WhenAll بدون حد می‌تواند connection pool، API مقصد یا حافظه را اشباع کند. `SemaphoreSlim` با `WaitAsync`، bounded Channel یا `Parallel.ForEachAsync` با `MaxDegreeOfParallelism` گزینه‌های رایج‌اند. حد مناسب از ظرفیت downstream و اندازه‌گیری load test به‌دست می‌آید. release semaphore باید در `finally` باشد تا exception ظرفیت را نشت ندهد."
      },
      {
        "q": "تفاوت CPU-bound و I/O-bound در انتخاب راهکار async چیست؟",
        "a": "کار I/O-bound بیشتر زمان را منتظر شبکه، دیسک یا دیتابیس است و API async thread را هنگام انتظار آزاد می‌کند. کار CPU-bound واقعاً پردازنده مصرف می‌کند و برای سرعت بیشتر ممکن است parallelism محدود لازم داشته باشد. async کردن محاسبه CPU آن را سریع‌تر نمی‌کند. در ASP.NET Core باید مراقب بود parallelism هر درخواست در بار بالا مجموعاً CPU را بیش‌ازحد اشباع نکند."
      }
    ]
  },
  {
    "title": "اصول SOLID و Design Patterns",
    "desc": "اصول طراحی شی‌گرا، الگوهای رایج و ضدالگوهای مهم در معماری برنامه‌های ASP.NET Core.",
    "questions": [
      {
        "q": "SOLID چیست و چرا اهمیت دارد؟",
        "a": "SOLID مجموعه پنج اصل برای کاهش coupling، افزایش cohesion و آسان‌تر شدن تغییر و تست نرم‌افزار است. این اصول قانون مطلق یا هدف مستقل نیستند؛ باید در خدمت نیاز واقعی سیستم باشند. اعمال افراطی آن‌ها می‌تواند تعداد abstractionها و پیچیدگی را زیاد کند. در مصاحبه بهتر است هر اصل را با یک trade-off و مثال واقعی توضیح دهید."
      },
      {
        "q": "اصل Single Responsibility یا SRP چیست؟",
        "a": "یک ماژول باید فقط **یک دلیل برای تغییر** داشته باشد، یعنی مسئول یک actor یا سیاست منسجم باشد. کلاسی که validation، persistence، ایمیل و گزارش‌گیری را با هم انجام می‌دهد چند دلیل مستقل برای تغییر دارد. شکستن آن به همکاری‌های معنادار تست و تغییر را ساده می‌کند. SRP به معنی «هر کلاس فقط یک متد» نیست؛ معیار، همبستگی مسئولیت‌هاست."
      },
      {
        "q": "اصل Open/Closed یا OCP چیست؟",
        "a": "نرم‌افزار باید برای توسعه رفتار باز و برای تغییر کد پایدار موجود بسته باشد. polymorphism، composition و Strategy امکان افزودن حالت جدید بدون دست‌کاری زنجیره شرط‌های مرکزی را می‌دهند. بااین‌حال abstraction پیش‌دستانه برای تغییرات فرضی هزینه دارد. ابتدا محور تغییر واقعی را شناسایی و سپس همان نقطه را توسعه‌پذیر کنید."
      },
      {
        "q": "اصل Liskov Substitution یا LSP چیست؟",
        "a": "هر subtype باید بتواند جای base type استفاده شود بدون اینکه رفتار مورد انتظار مصرف‌کننده بشکند. subtype نباید precondition را سخت‌تر، postcondition را ضعیف‌تر یا invariantها را نقض کند. مثال کلاسیک، subtypeای است که متد مجاز base را با `NotSupportedException` رد می‌کند. composition یا interfaceهای کوچک‌تر اغلب از وراثت ناسازگار بهترند."
      },
      {
        "q": "اصل Interface Segregation یا ISP چیست؟",
        "a": "مصرف‌کننده نباید به اعضایی وابسته شود که استفاده نمی‌کند. چند interface کوچک و نقش‌محور معمولاً از یک interface عظیم با متدهای نامرتبط بهتر است. این کار fake و تست را ساده و اثر تغییر را محدود می‌کند. خردکردن افراطی interfaceها نیز discoverability را پایین می‌آورد؛ مرز باید مطابق capability واقعی باشد."
      },
      {
        "q": "اصل Dependency Inversion یا DIP چیست؟",
        "a": "ماژول سطح بالا نباید به جزئیات سطح پایین وابسته باشد؛ هر دو باید به **abstraction** وابسته شوند. abstraction نیز نباید تابع جزئیات باشد، بلکه جزئیات آن را پیاده‌سازی می‌کنند. برای مثال use case به `IEmailSender` وابسته است، نه مستقیماً به SMTP client. abstraction باید در مرز نیاز کسب‌وکار شکل بگیرد، نه اینکه برای هر کلاس یک interface مکانیکی بسازیم."
      },
      {
        "q": "تفاوت Dependency Inversion و Dependency Injection چیست؟",
        "a": "DIP یک **اصل طراحی** درباره جهت وابستگی‌هاست، اما DI تکنیکی برای تأمین dependency از بیرون شیء است. constructor injection رایج‌ترین شکل DI است و ASP.NET Core container آن را resolve می‌کند. می‌توان DI داشت ولی DIP را نقض کرد، مثلاً تزریق مستقیم یک جزئیات نامناسب به لایه دامنه. container ابزار wiring است و نباید داخل منطق دامنه به Service Locator تبدیل شود."
      },
      {
        "q": "Factory Pattern چیست و چه زمانی مفید است؟",
        "a": "Factory منطق ساخت object را متمرکز و caller را از نوع concrete و مراحل construction جدا می‌کند. وقتی انتخاب implementation بر اساس ورودی، configuration یا policy است، factory مفید می‌شود. DI container می‌تواند construction ساده را انجام دهد، ولی factory برای تصمیم runtime یا lifecycle سفارشی همچنان معنا دارد. factoryای که فقط `new` را بدون هیچ سیاستی پنهان می‌کند، ارزش کمی دارد."
      },
      {
        "q": "Strategy Pattern چیست؟",
        "a": "Strategy خانواده‌ای از الگوریتم‌های قابل‌جایگزینی را پشت یک قرارداد مشترک قرار می‌دهد. برای مثال چند روش محاسبه تخفیف می‌توانند `IDiscountStrategy` را پیاده‌سازی کنند و context بر اساس policy یکی را انتخاب کند. این الگو زنجیره `if/switch` رو به رشد را کاهش و تست هر الگوریتم را مستقل می‌کند. انتخاب strategy را از خود الگوریتم‌ها جدا نگه دارید."
      },
      {
        "q": "Decorator Pattern چیست؟",
        "a": "Decorator همان interface سرویس اصلی را پیاده‌سازی و رفتار را پیش یا پس از delegation اضافه می‌کند. logging، caching، retry، authorization و metrics نمونه‌های رایج cross-cutting هستند. چند decorator قابل ترکیب‌اند و ترتیب آن‌ها مهم است؛ مثلاً cache بیرون retry رفتار متفاوتی دارد. decorator نباید قرارداد معنایی سرویس را غیرمنتظره تغییر دهد."
      },
      {
        "q": "Adapter Pattern چیست؟",
        "a": "Adapter interface یک مؤلفه را به قراردادی تبدیل می‌کند که مصرف‌کننده انتظار دارد. این الگو برای جداکردن application از SDK خارجی یا legacy API بسیار مفید است. adapter علاوه بر تغییر signature می‌تواند مدل، exception و semantics را ترجمه کند. منطق کسب‌وکار نباید به DTOها و خطاهای vendor نشت کند."
      },
      {
        "q": "Mediator Pattern چه مزایا و هزینه‌هایی دارد؟",
        "a": "Mediator ارتباط مستقیم فرستنده با handler را حذف و درخواست‌ها را از یک واسط عبور می‌دهد. در CQRS می‌تواند dispatch command/query و pipeline behaviorهایی مانند validation را ساده کند. استفاده افراطی جریان اجرای ساده را پنهان، debugging را دشوار و تعداد فایل‌ها را زیاد می‌کند. Mediator جای طراحی درست aggregate و transaction boundary را نمی‌گیرد."
      },
      {
        "q": "Observer Pattern چیست و Event چه ارتباطی با آن دارد؟",
        "a": "در Observer، subject تغییر یا رخداد را به subscriberهای ثبت‌شده اطلاع می‌دهد بدون شناخت جزئیات آن‌ها. eventهای C# یک پیاده‌سازی درون-process و معمولاً synchronous از این ایده‌اند. subscriber کند یا خطادار می‌تواند publisher را تحت‌تأثیر قرار دهد و عمر subscription ممکن است memory leak بسازد. برای رخداد بین سرویس‌ها به message broker و semantics تحویل نیاز داریم."
      },
      {
        "q": "Repository Pattern چیست و آیا همیشه با EF Core لازم است؟",
        "a": "Repository دسترسی به aggregateها را با زبان دامنه کپسوله و جزئیات persistence را پنهان می‌کند. `DbSet` و `DbContext` خود بسیاری از ویژگی‌های Repository و Unit of Work را دارند، پس wrapper عمومی CRUD اغلب فقط abstraction نشت‌کننده می‌سازد. repository اختصاصی برای queryها و invariantهای دامنه می‌تواند ارزشمند باشد. برگرداندن `IQueryable` یا متدهایی مثل `GetAll` معمولاً کنترل مرز داده را تضعیف می‌کند."
      },
      {
        "q": "Unit of Work Pattern چیست؟",
        "a": "Unit of Work تغییرات چند object را دنبال و در یک transaction منطقی commit می‌کند. `DbContext` در EF Core معمولاً این نقش را با change tracking و `SaveChanges` انجام می‌دهد. طول عمر آن باید کوتاه و معمولاً scoped به یک درخواست یا use case باشد. transactionهای طولانی contention ایجاد می‌کنند و DbContext thread-safe نیست."
      },
      {
        "q": "CQRS چیست و چه زمانی ارزش دارد؟",
        "a": "CQRS مدل و مسیر **Command**های تغییردهنده state را از **Query**های خواندنی جدا می‌کند. این جداسازی می‌تواند مدل، authorization و scaling هر سمت را مستقل کند. CQRS الزاماً به event sourcing، چند دیتابیس یا eventual consistency نیاز ندارد. برای CRUD ساده ممکن است ceremony اضافه باشد؛ پیچیدگی دامنه و تفاوت نیازهای خواندن/نوشتن باید آن را توجیه کند."
      },
      {
        "q": "God Object چه ضدالگویی است؟",
        "a": "God Object کلاسی است که مسئولیت‌ها و دانش بیش‌ازحدی از سیستم را در خود جمع کرده است. چنین کلاسی coupling بالا، تست‌های شکننده و conflict تغییر ایجاد می‌کند. باید خوشه‌های رفتاری و داده‌ای را بر اساس cohesion و مرز دامنه استخراج کرد. صرفاً تقسیم فایل به helperهای static بدون اصلاح جهت وابستگی، مشکل را جابه‌جا می‌کند."
      },
      {
        "q": "Anemic Domain Model چیست و آیا همیشه بد است؟",
        "a": "در مدل دامنه کم‌خون، entityها عمدتاً getter/setter هستند و منطق کسب‌وکار در serviceها پراکنده است. در دامنه پیچیده این وضعیت invariantها را آسیب‌پذیر و رفتار را سخت‌کشف می‌کند؛ بهتر است رفتار مرتبط کنار state قرار گیرد. اما برای سیستم CRUD ساده یا مدل انتقال داده، rich domain model ممکن است هزینه بی‌دلیل باشد. تصمیم باید بر اساس پیچیدگی واقعی قواعد کسب‌وکار باشد."
      },
      {
        "q": "Service Locator چرا Anti-pattern محسوب می‌شود؟",
        "a": "Service Locator dependencyها را با فراخوانی container از داخل کلاس پنهان می‌کند و قرارداد constructor دیگر کامل نیست. خطاهای dependency به runtime منتقل و تست به setup container وابسته می‌شود. constructor injection وابستگی‌های اجباری را صریح و object را مستقل از container نگه می‌دارد. دسترسی محدود به provider در composition root یا factory framework ممکن است استثنا باشد، نه الگوی عمومی."
      },
      {
        "q": "چگونه بین وراثت و Composition انتخاب می‌کنید؟",
        "a": "وراثت coupling قوی ایجاد می‌کند و فقط وقتی مناسب است که رابطه واقعی «هست یک» و قرارداد LSP برقرار باشد. Composition رفتارها را با همکاری objectها می‌سازد و تغییر یا تست آن‌ها معمولاً آسان‌تر است. عبارت **favor composition over inheritance** توصیه به انعطاف است، نه منع کامل وراثت. framework base classهای پایدار یا template methodهای روشن می‌توانند کاربرد معتبر وراثت باشند."
      }
    ]
  },
  {
    "title": "ASP.NET Core",
    "desc": "پرسش‌های مصاحبه‌ای درباره چرخه درخواست، تزریق وابستگی، میزبانی، اعتبارسنجی و قابلیت‌های عملیاتی ASP.NET Core.",
    "questions": [
      {
        "q": "Pipeline در ASP.NET Core چیست و درخواست چگونه در آن حرکت می‌کند؟",
        "a": "**Pipeline** زنجیره‌ای مرتب از Middlewareها است که هر درخواست و پاسخ از آن عبور می‌کند. هر Middleware می‌تواند قبل و بعد از فراخوانی `next` کاری انجام دهد یا با نخواندن آن زنجیره را کوتاه کند. ترتیب ثبت Middlewareها حیاتی است؛ مثلاً احراز هویت باید قبل از مجوزدهی و نگاشت Endpointها قرار گیرد.\nTIP: Pipeline را مانند پشته‌ای در نظر بگیرید که مسیر پاسخ را برعکس طی می‌کند."
      },
      {
        "q": "Middleware چیست و چه زمانی Middleware سفارشی می‌نویسید؟",
        "a": "Middleware مؤلفه‌ای برای رسیدگی به دغدغه‌های سراسری مانند لاگ، شناسه هم‌بستگی، خطا و امنیت است. Middleware سفارشی معمولاً متدی به نام `InvokeAsync(HttpContext)` دارد و وابستگی‌هایش را از DI می‌گیرد. منطق مخصوص یک Action را در Middleware نمی‌گذاریم، چون Middleware برای رفتار مشترک کل درخواست‌ها مناسب است."
      },
      {
        "q": "تفاوت Use، Run و Map چیست؟",
        "a": "`Use` می‌تواند Middleware بعدی را با `next` فراخوانی کند و برای ساخت زنجیره به‌کار می‌رود. `Run` یک Terminal Middleware است و پس از اجرای آن ادامه زنجیره وجود ندارد. `Map` بر اساس پیشوند مسیر یک شاخه مستقل می‌سازد؛ برای شرط‌های پیچیده‌تر نیز `MapWhen` یا `UseWhen` مناسب است."
      },
      {
        "q": "چرا ترتیب Middlewareها مهم است؟",
        "a": "هر Middleware فقط قابلیت‌هایی را می‌بیند که Middlewareهای قبلی فراهم کرده‌اند. برای نمونه `UseCors`، `UseAuthentication` و `UseAuthorization` باید در جای درست نسبت به Routing و Endpointها باشند. ترتیب اشتباه می‌تواند بدون خطای کامپایل، پاسخ امنیتی نادرست، CORS ناموفق یا Exception مدیریت‌نشده ایجاد کند."
      },
      {
        "q": "تفاوت Transient، Scoped و Singleton در DI چیست؟",
        "a": "`Transient` در هر Resolve نمونه جدید، `Scoped` در هر Scope وب معمولاً یک نمونه، و `Singleton` در کل عمر برنامه یک نمونه می‌سازد. سرویس‌های بدون State سبک اغلب Transient و واحد کار مانند `DbContext` معمولاً Scoped هستند. Singleton باید Thread-safe باشد و نباید State وابسته به کاربر یا درخواست را نگه دارد."
      },
      {
        "q": "Captive Dependency چیست و چرا خطرناک است؟",
        "a": "**Captive Dependency** زمانی رخ می‌دهد که یک Singleton به سرویس Scoped یا Transient کوتاه‌عمر وابسته شود و آن را بیش از عمر مورد انتظار نگه دارد. نتیجه می‌تواند State مشترک ناخواسته، مصرف نادرست `DbContext` یا خطاهای هم‌زمانی باشد. راه‌حل معمول اصلاح Lifetime یا ساخت Scope صریح با `IServiceScopeFactory` برای هر عملیات مستقل است."
      },
      {
        "q": "آیا می‌توان Scoped Service را مستقیماً داخل Singleton تزریق کرد؟",
        "a": "خیر، تزریق مستقیم معمولاً طراحی نادرست است و در حالت ValidateScopes خطا می‌دهد. Singleton می‌تواند `IServiceScopeFactory` بگیرد و هنگام نیاز یک Scope کوتاه بسازد، سپس سرویس Scoped را از آن Resolve کند. Scope باید با `using` آزاد شود تا منابعی مانند Connection و `DbContext` نشت نکنند."
      },
      {
        "q": "IHostedService چیست و چه کاربردی دارد؟",
        "a": "`IHostedService` قرارداد اجرای کار در شروع و توقف Host با متدهای `StartAsync` و `StopAsync` است. برای مقداردهی اولیه، مصرف Queue یا هماهنگی سرویس‌های پس‌زمینه استفاده می‌شود. پیاده‌سازی باید Cancellation، خطا و توقف Graceful را رعایت کند و Startup را بی‌دلیل مسدود نسازد."
      },
      {
        "q": "BackgroundService چه تفاوتی با IHostedService دارد؟",
        "a": "`BackgroundService` یک کلاس پایه و پیاده‌سازی ساده‌تر `IHostedService` است که منطق اصلی در `ExecuteAsync` قرار می‌گیرد. حلقه طولانی باید `stoppingToken` را بررسی کند و در Delay یا I/O به آن پاس دهد. برای سرویس‌های Scoped در هر دور باید Scope تازه ساخت، نه اینکه یک نمونه را برای همیشه نگه داشت."
      },
      {
        "q": "Controllerها چگونه ثبت و کشف می‌شوند؟",
        "a": "با `AddControllers` سرویس‌های MVC و Model Binding ثبت می‌شوند و با `MapControllers` Endpointهای Attribute Routing نگاشت می‌گردند. Controller عمومی با پسوند یا ویژگی مناسب و Actionهای قابل دسترس توسط Application Model کشف می‌شود. اگر View هم لازم باشد `AddControllersWithViews` و برای Razor Pages نیز ثبت متناظر استفاده می‌شود."
      },
      {
        "q": "Minimal API بهتر است یا Controller؟",
        "a": "Minimal API برای Endpointهای کوچک، سرویس‌های سبک و کد کم‌تشریفات مناسب است. Controller برای APIهای بزرگ با Convention، Filter، ساختار تیمی و جداسازی Actionها خواناتر می‌شود. انتخاب مطلق نیست؛ معیارها شامل اندازه دامنه، نیازهای تست، استاندارد تیم و قابلیت‌های MVC است."
      },
      {
        "q": "Model Binding در ASP.NET Core چگونه کار می‌کند؟",
        "a": "Model Binding داده‌های Route، Query، Form، Header و Body را به پارامتر یا مدل .NET تبدیل می‌کند. Binderها بر اساس Metadata، Source و Type Converter مقدار را پیدا و تبدیل می‌کنند و خطاها را در `ModelState` می‌گذارند. در Controller دارای `[ApiController]`، خطای Binding یا Validation معمولاً خودکار پاسخ 400 تولید می‌کند."
      },
      {
        "q": "تفاوت FromBody، FromRoute و FromQuery چیست؟",
        "a": "`[FromRoute]` مقدار را از الگوی مسیر، `[FromQuery]` از Query String و `[FromBody]` از بدنه با Input Formatter می‌خواند. معمولاً در هر Action فقط یک پارامتر از Body خوانده می‌شود، چون Stream بدنه یک‌بار مصرف است. برای API شفاف، Source را در موارد مبهم صریح می‌کنیم و قرارداد OpenAPI را نیز بررسی می‌کنیم."
      },
      {
        "q": "اعتبارسنجی مدل‌ها چگونه انجام می‌شود؟",
        "a": "Data Annotationهایی مانند `[Required]` و `[Range]` هنگام Model Binding اجرا و نتیجه در `ModelState` ثبت می‌شود. برای قواعد پیچیده می‌توان از `IValidatableObject` یا کتابخانه‌ای مانند FluentValidation استفاده کرد، ولی قواعد دامنه نباید فقط به لایه HTTP وابسته باشند. پیام خطا باید پایدار، قابل محلی‌سازی و بدون افشای اطلاعات داخلی باشد."
      },
      {
        "q": "Filterها در MVC چه انواعی دارند؟",
        "a": "Filterهای اصلی شامل Authorization، Resource، Action، Exception و Result هستند و هرکدام نقطه متفاوتی از چرخه MVC را پوشش می‌دهند. Filter برای دغدغه وابسته به MVC و Action مناسب است، درحالی‌که Middleware کل Pipeline را پوشش می‌دهد. ترتیب با Scope، `Order` و نوع Filter تعیین می‌شود و باید از منطق تجاری سنگین در آن پرهیز کرد."
      },
      {
        "q": "Action Filter چیست و چه کاربردی دارد؟",
        "a": "Action Filter قبل و بعد از اجرای Action اجرا می‌شود و به آرگومان‌ها، نتیجه و Context دسترسی دارد. برای لاگ ساختاریافته، اندازه‌گیری زمان یا قواعد مشترک Actionها مفید است. اگر رفتار باید Minimal API را هم پوشش دهد، Endpoint Filter یا Middleware گزینه مناسب‌تری است."
      },
      {
        "q": "مدیریت خطا با Exception Middleware چگونه طراحی می‌شود؟",
        "a": "یک Exception Middleware مرکزی خطاهای مدیریت‌نشده را می‌گیرد، لاگ می‌کند و به پاسخ استاندارد تبدیل می‌کند. نگاشت Exception دامنه به Status Code باید مشخص باشد؛ مثلاً NotFound به 404 و Conflict به 409 تبدیل شود. جزئیات Stack Trace در Production ارسال نمی‌شود و پاسخ بهتر است قالب `ProblemDetails` داشته باشد."
      },
      {
        "q": "CORS چیست و چگونه امن تنظیم می‌شود؟",
        "a": "**CORS** سیاست مرورگر برای اجازه دسترسی Cross-Origin است و مکانیزم احراز هویت سرور محسوب نمی‌شود. باید Origin، Method و Headerهای لازم را حداقلی Allow کرد و از ترکیب `AllowAnyOrigin` با Credentials پرهیز نمود. Preflight با متد `OPTIONS` اجرا می‌شود و Middleware باید پیش از Endpoint پاسخ مناسب بدهد."
      },
      {
        "q": "API Versioning را چگونه پیاده‌سازی می‌کنید؟",
        "a": "نسخه می‌تواند در URL، Query، Header یا Media Type قرار گیرد و هر روش Trade-off کش و خوانایی دارد. نسخه URL مانند `/api/v1/orders` شفاف است، ولی Versioning مبتنی بر Header آدرس منابع را ثابت نگه می‌دارد. باید سیاست Deprecation، مستندات نسخه‌ها و بازه پشتیبانی از ابتدا تعریف شود."
      },
      {
        "q": "تفاوت IOptions، IOptionsSnapshot و IOptionsMonitor چیست؟",
        "a": "`IOptions<T>` مقدار تنظیمات را معمولاً یک‌بار می‌دهد و برای Singleton مناسب است. `IOptionsSnapshot<T>` در هر Scope مقدار جدید می‌سازد و در سرویس وب Scoped کاربرد دارد. `IOptionsMonitor<T>` تغییرات Runtime و `OnChange` را پشتیبانی می‌کند؛ Callback آن باید Thread-safe و قابل Dispose باشد."
      },
      {
        "q": "Kestrel چیست و چه نقشی در Hosting دارد؟",
        "a": "Kestrel وب‌سرور چندسکویی و پیش‌فرض ASP.NET Core است که HTTP/1.1، HTTP/2 و در شرایط لازم HTTP/3 را پردازش می‌کند. می‌تواند مستقیم در لبه اجرا شود، اما اغلب پشت Reverse Proxy مانند IIS یا Nginx قرار می‌گیرد. محدودیت اندازه درخواست، Timeout، Certificate و Forwarded Headers باید متناسب با محیط تنظیم شوند."
      },
      {
        "q": "Generic Host و WebApplication چه کاری انجام می‌دهند؟",
        "a": "Host عمر برنامه، Configuration، Logging، DI و Hosted Serviceها را مدیریت می‌کند. `WebApplicationBuilder` API یکپارچه و ساده‌ای روی Generic Host برای برنامه‌های وب ارائه می‌دهد. تنظیمات از Providerهای مختلف با اولویت مشخص خوانده می‌شوند و Secretها نباید داخل فایل منبع Commit شوند."
      },
      {
        "q": "Endpoint Routing چیست؟",
        "a": "Endpoint Routing ابتدا Endpointهای نامزد را Match و سپس Endpoint منتخب را اجرا می‌کند. Metadataهایی مانند Authorization، CORS و Rate Limit به Endpoint متصل می‌شوند و Middlewareها می‌توانند از آن استفاده کنند. `MapControllers`، `MapGet` و Route Groupها همگی Endpoint به جدول Routing اضافه می‌کنند."
      },
      {
        "q": "Rate Limiting Middleware چگونه کار می‌کند؟",
        "a": "Rate Limiting تعداد درخواست را بر اساس Partition مانند کاربر، IP یا API Key محدود می‌کند. الگوریتم‌های Fixed Window، Sliding Window، Token Bucket و Concurrency برای الگوهای بار متفاوت مناسب‌اند. پاسخ ردشده معمولاً 429 است و بهتر است `Retry-After` بدهد؛ محدودسازی توزیع‌شده نیازمند هماهنگی بین Instanceها است."
      },
      {
        "q": "ProblemDetails چیست و چرا مفید است؟",
        "a": "`ProblemDetails` قالب استاندارد RFC برای نمایش خطاهای HTTP با فیلدهایی مانند `type`، `title`، `status` و `detail` است. استفاده یکپارچه از آن قرارداد خطای Client را پایدار و مستندسازی را ساده می‌کند. داده حساس نباید در `detail` بیاید و می‌توان `traceId` را برای عیب‌یابی امن به Extensions افزود."
      },
      {
        "q": "Output Caching چیست و چه تفاوتی با Response Caching دارد؟",
        "a": "Output Caching پاسخ را در سرور ذخیره و سیاست استفاده مجدد را خود برنامه کنترل می‌کند. Response Caching بیشتر به Headerهای استاندارد Cache و رفتار Client یا Proxy متکی است. کلید Cache باید Query، Header یا هویت مؤثر را لحاظ کند و پاسخ شخصی‌سازی‌شده بدون Policy درست نباید Cache شود."
      },
      {
        "q": "چگونه درخواست را به‌صورت Graceful متوقف و لغو می‌کنید؟",
        "a": "`HttpContext.RequestAborted` هنگام قطع Client یا توقف درخواست Cancellation را اعلام می‌کند. این Token باید تا فراخوانی‌های دیتابیس و HTTP پایین‌دست منتقل شود تا منابع بیهوده مصرف نشوند. Cancellation خطای تجاری نیست؛ آن را جداگانه مدیریت می‌کنیم و از بلعیدن بدون دلیل `OperationCanceledException` پرهیز می‌کنیم."
      },
      {
        "q": "تفاوت Middleware و Endpoint Filter چیست؟",
        "a": "Middleware برای همه درخواست‌ها و پیش از انتخاب یا اجرای Handler قابل استفاده است. Endpoint Filter به آرگومان‌ها و نتیجه Handler در Minimal API نزدیک‌تر است و می‌تواند روی Endpoint یا Route Group اعمال شود. اعتبارسنجی پارامترهای Minimal API در Filter طبیعی‌تر است، اما لاگ سراسری در Middleware باقی می‌ماند."
      }
    ]
  },
  {
    "title": "Entity Framework Core",
    "desc": "پرسش‌های عملی EF Core درباره مدل‌سازی، Query، هم‌زمانی، Migration، تراکنش و کارایی.",
    "questions": [
      {
        "q": "DbContext چیست و چه مسئولیتی دارد؟",
        "a": "`DbContext` نماینده Session با دیتابیس و پیاده‌ساز الگوهایی مانند Unit of Work و Identity Map است. Query، Change Tracking، نگاشت مدل و `SaveChanges` را هماهنگ می‌کند. Thread-safe نیست و باید عمر کوتاه و مشخص، معمولاً یک Scope درخواست، داشته باشد."
      },
      {
        "q": "Change Tracking چگونه کار می‌کند؟",
        "a": "EF Core Entityهای بارگذاری‌شده را در Change Tracker نگه می‌دارد و Stateهایی مانند Added، Modified و Deleted به آن‌ها می‌دهد. هنگام `SaveChanges` تغییرات تشخیص داده و SQL مناسب تولید می‌شود. Track کردن تعداد بسیار زیاد Entity حافظه و زمان DetectChanges را افزایش می‌دهد، پس برای خواندن صرف لازم نیست."
      },
      {
        "q": "AsNoTracking چه زمانی استفاده می‌شود؟",
        "a": "`AsNoTracking` برای Queryهای فقط‌خواندنی Tracking را غیرفعال و مصرف حافظه را کمتر می‌کند. Entity حاصل اگر تغییر کند خودکار در `SaveChanges` ثبت نخواهد شد. برای حفظ یک نمونه واحد از Entityهای تکراری بدون Tracking می‌توان `AsNoTrackingWithIdentityResolution` را بررسی کرد."
      },
      {
        "q": "Include و ThenInclude چه می‌کنند؟",
        "a": "`Include` Navigation مرتبط و `ThenInclude` سطوح بعدی رابطه را Eager Load می‌کنند. Include چند Collection ممکن است Join بسیار بزرگ و تکرار داده ایجاد کند. Projection با `Select` معمولاً برای API بهتر است، چون فقط ستون‌ها و شکل داده موردنیاز را می‌گیرد."
      },
      {
        "q": "AsSplitQuery چه مسئله‌ای را حل می‌کند؟",
        "a": "`AsSplitQuery` برای Includeهای مجموعه‌ای به‌جای یک Join عظیم چند Query تولید می‌کند و از Cartesian Explosion جلوگیری می‌نماید. هزینه آن Round-trip بیشتر و احتمال مشاهده Snapshotهای متفاوت بین Queryها است. تصمیم باید با اندازه داده، Latency و اندازه‌گیری واقعی گرفته شود."
      },
      {
        "q": "تفاوت Lazy، Eager و Explicit Loading چیست؟",
        "a": "Eager Loading روابط را همراه Query اصلی با `Include`، و Explicit Loading آن‌ها را به درخواست صریح بارگذاری می‌کند. Lazy Loading هنگام دسترسی به Navigation Query مخفی می‌زند و می‌تواند مشکل N+1 بسازد. در APIها معمولاً Projection یا بارگذاری صریح قابل پیش‌بینی‌تر از Lazy Loading است."
      },
      {
        "q": "Migration در EF Core چیست؟",
        "a": "Migration تغییرات مدل را به عملیات قابل اعمال و بازگشت روی Schema تبدیل می‌کند. فایل Migration باید Review شود، چون SQL تولیدی همیشه برای داده موجود یا Production بی‌خطر نیست. در استقرار حرفه‌ای Script یا Bundle کنترل‌شده اجرا می‌شود و برنامه لزوماً هنگام Startup Schema را تغییر نمی‌دهد."
      },
      {
        "q": "Migrationها را در تیم چگونه مدیریت می‌کنید؟",
        "a": "هر تغییر Schema باید Migration کوچک، نام‌دار و همراه کد مدل در همان Branch داشته باشد. تعارض Snapshot با Rebase و بازتولید Migration حل می‌شود، نه ویرایش کور شناسه‌ها. Migration اعمال‌شده در محیط مشترک معمولاً حذف یا بازنویسی نمی‌شود و اصلاح آن با Migration جدید انجام می‌گیرد."
      },
      {
        "q": "Fluent API چه مزیتی نسبت به Data Annotation دارد؟",
        "a": "Fluent API در `OnModelCreating` تنظیمات کامل‌تر و جدا از کلاس دامنه ارائه می‌دهد. رابطه پیچیده، Index، Conversion، Constraint و Owned Type را دقیق‌تر پیکربندی می‌کند. استفاده از `IEntityTypeConfiguration<T>` تنظیمات بزرگ را ماژولار و قابل نگهداری می‌سازد."
      },
      {
        "q": "رابطه One-to-Many چگونه تعریف می‌شود؟",
        "a": "یک Principal چند Dependent دارد و Foreign Key معمولاً روی Dependent قرار می‌گیرد. با `HasOne(...).WithMany(...).HasForeignKey(...)` رابطه و رفتار حذف مشخص می‌شود. Required بودن FK و `DeleteBehavior` باید آگاهانه انتخاب شود تا Cascade ناخواسته رخ ندهد."
      },
      {
        "q": "رابطه Many-to-Many چگونه مدل می‌شود؟",
        "a": "EF Core می‌تواند Many-to-Many ساده را با Join Entity ضمنی و `UsingEntity` نگاشت کند. اگر رابطه داده‌ای مانند تاریخ عضویت دارد باید Join Entity صریح بسازیم. کلید مرکب یا Unique Index روی دو FK از تکرار رابطه جلوگیری می‌کند."
      },
      {
        "q": "Owned Entity چیست؟",
        "a": "Owned Entity بخشی از مالک است و هویت مستقل دامنه‌ای ندارد. می‌تواند در همان جدول یا جدول جدا نگاشت شود، ولی چرخه عمرش به Owner وابسته است. برای ساختارهایی مانند Address مناسب است، اما برای موجودیتی که مستقل Query یا Share می‌شود انتخاب خوبی نیست."
      },
      {
        "q": "Value Object را چگونه در EF Core نگاشت می‌کنید؟",
        "a": "Value Object با مقدارهایش شناخته می‌شود، Immutable است و برابری ساختاری دارد. می‌توان آن را به‌صورت Complex/Owned Type یا با `ValueConverter` برای مقدار تک‌ستونی نگاشت کرد. Constructor، Comparator و محدودیت‌های دامنه باید مانع ایجاد حالت نامعتبر شوند."
      },
      {
        "q": "Concurrency Token چیست؟",
        "a": "Concurrency Token ستونی است که EF مقدار اولیه آن را در شرط `UPDATE` یا `DELETE` قرار می‌دهد. اگر رکورد بین خواندن و ذخیره تغییر کرده باشد تعداد ردیف اثرکرده صفر و `DbUpdateConcurrencyException` ایجاد می‌شود. برنامه باید سیاست Retry، Merge یا اعلام Conflict به کاربر را صریح انتخاب کند."
      },
      {
        "q": "RowVersion در SQL Server چگونه با EF Core استفاده می‌شود؟",
        "a": "`rowversion` مقدار باینری افزایشی SQL Server برای تشخیص تغییر ردیف است و زمان واقعی نیست. در EF با `IsRowVersion()` یا ویژگی `[Timestamp]` به‌عنوان Concurrency Token تنظیم می‌شود. Client می‌تواند نسخه را برگرداند و در تعارض پاسخ 409 یا 412 مناسب دریافت کند."
      },
      {
        "q": "SaveChanges به‌صورت پیش‌فرض تراکنشی است؟",
        "a": "اگر Provider تراکنش را پشتیبانی کند، یک فراخوانی `SaveChanges` معمولاً همه تغییرات را در تراکنش اجرا می‌کند. در شکست، عملیات آن فراخوانی Commit نمی‌شود. برای چند SaveChanges یا ترکیب عملیات دیگر باید تراکنش صریح و مرز آن کوتاه نگه داشته شود."
      },
      {
        "q": "تراکنش صریح در EF Core چگونه ایجاد می‌شود؟",
        "a": "با `Database.BeginTransactionAsync` تراکنش آغاز و پس از موفقیت `CommitAsync` می‌شود. همه مسیرهای خطا باید Rollback یا Dispose را تضمین کنند و Cancellation نیز منتقل شود. نگه داشتن تراکنش هنگام تماس شبکه‌ای طولانی Lock و احتمال Deadlock را افزایش می‌دهد."
      },
      {
        "q": "TransactionScope چه تفاوتی با تراکنش DbContext دارد؟",
        "a": "`TransactionScope` یک تراکنش Ambient برای چند عملیات هماهنگ ایجاد می‌کند و ممکن است با چند Connection به تراکنش توزیع‌شده ارتقا یابد. در کد Async باید `TransactionScopeAsyncFlowOption.Enabled` فعال باشد. تراکنش مستقیم DbContext شفاف‌تر و برای یک دیتابیس معمولاً ساده‌تر است."
      },
      {
        "q": "Lifetime مناسب DbContext چیست؟",
        "a": "`DbContext` معمولاً Scoped و متناظر با یک درخواست یا یک واحد کار است. Singleton بودن آن به‌دلیل Thread-safety، رشد Tracker و State کهنه خطرناک است. در کار پس‌زمینه یا پردازش موازی از `IDbContextFactory<T>` یا Scope مستقل برای هر واحد کار استفاده می‌شود."
      },
      {
        "q": "Compiled Query چیست و چه زمانی ارزش دارد؟",
        "a": "Compiled Query هزینه ترجمه مکرر یک شکل LINQ به Query Plan داخلی EF را کاهش می‌دهد. با `EF.CompileQuery` یا نسخه Async ساخته می‌شود و برای مسیرهای بسیار پرتکرار با ساختار ثابت مفید است. قبل از استفاده باید Benchmark کرد، چون Cache داخلی EF در بسیاری از سناریوها کافی است."
      },
      {
        "q": "Global Query Filter چیست؟",
        "a": "Global Filter شرطی است که خودکار به Queryهای Entity اضافه می‌شود؛ مثلاً برای Soft Delete یا Tenant. با `HasQueryFilter` تعریف و در موارد کنترل‌شده با `IgnoreQueryFilters` غیرفعال می‌شود. فیلتر Tenant نباید تنها لایه امنیت باشد و مقدار Tenant باید از منبع Scoped معتبر بیاید."
      },
      {
        "q": "Interceptor در EF Core چه کاربردی دارد؟",
        "a": "Interceptor امکان مشاهده یا تغییر Command، Connection، SaveChanges و تراکنش را می‌دهد. برای Audit، اندازه‌گیری، افزودن Tag یا سیاست‌های فنی مشترک مناسب است. منطق دامنه و تغییر مخفی Queryها در Interceptor می‌تواند رفتار را غیرقابل پیش‌بینی کند، پس باید محدود و تست‌شده باشد."
      },
      {
        "q": "Raw SQL را چگونه امن اجرا می‌کنید؟",
        "a": "برای Query Entity می‌توان از `FromSqlInterpolated` یا APIهای پارامتری استفاده کرد تا مقدارها Parameter شوند. چسباندن ورودی کاربر به رشته SQL خطر Injection دارد، مخصوصاً برای نام ستون و Order By که Parameterپذیر نیستند. خروجی باید با مدل سازگار باشد و Tracking و Composition آن آگاهانه انتخاب شود."
      },
      {
        "q": "ExecuteUpdate و ExecuteDelete چه مزیتی دارند؟",
        "a": "`ExecuteUpdate` و `ExecuteDelete` عملیات Set-based را مستقیم در دیتابیس و بدون بارگذاری Entityها اجرا می‌کنند. سریع‌تر و کم‌حافظه‌ترند، اما Change Tracker و رویدادهای معمول SaveChanges را دور می‌زنند. پس از آن Entityهای Trackشده ممکن است کهنه باشند و باید Clear یا Reload شوند."
      },
      {
        "q": "Shadow Property چیست؟",
        "a": "Shadow Property در مدل EF وجود دارد ولی Property متناظر در کلاس CLR ندارد. برای Foreign Key، زمان ثبت یا داده زیرساختی بدون آلوده کردن مدل دامنه استفاده می‌شود. دسترسی در Query با `EF.Property<T>(entity, \"Name\")` انجام می‌شود و نام رشته‌ای باید با تست محافظت شود."
      },
      {
        "q": "N+1 Query چیست و چگونه شناسایی می‌شود؟",
        "a": "N+1 یعنی یک Query اولیه و سپس یک Query جدا برای هر ردیف، معمولاً به‌علت Lazy Loading یا Query داخل حلقه. Logging SQL، Profiler و شمارش Commandها در تست یکپارچه آن را آشکار می‌کنند. Projection، Include مناسب یا Batch Query راه‌حل‌های رایج‌اند، ولی Join عظیم نیز باید کنترل شود."
      },
      {
        "q": "چرا IQueryable را نباید بی‌محابا از Repository بیرون داد؟",
        "a": "`IQueryable` اجرای Query و جزئیات Provider را به لایه مصرف‌کننده نشت می‌دهد و مرز معماری را مبهم می‌کند. همچنین Query ممکن است دیرتر و خارج از عمر DbContext اجرا شود. Specification یا متدهای Query هدفمند کنترل و تست‌پذیری بیشتری می‌دهند، هرچند در لایه Application نزدیک به EF استفاده محدود می‌تواند منطقی باشد."
      },
      {
        "q": "Projection چه مزیتی نسبت به برگرداندن Entity دارد؟",
        "a": "Projection با `Select` فقط ستون‌های لازم را می‌خواند و DTO مناسب قرارداد API می‌سازد. این کار Payload، Tracking و خطر Serialization چرخه‌ای Navigationها را کم می‌کند. محاسبات باید تا حد ممکن قابل ترجمه به SQL باشند و Query تولیدی با `ToQueryString` بررسی شود."
      }
    ]
  },
  {
    "title": "SQL Server و دیتابیس",
    "desc": "پرسش‌های مصاحبه‌ای طراحی Schema، Index، Query Plan، تراکنش، هم‌زمانی و بهینه‌سازی SQL Server.",
    "questions": [
      {
        "q": "تفاوت Primary Key و Unique Constraint چیست؟",
        "a": "Primary Key هویت اصلی هر ردیف است، Null نمی‌پذیرد و در هر جدول فقط یکی وجود دارد. Unique Constraint یکتایی یک یا چند ستون را تضمین می‌کند و می‌توان چند مورد داشت. هر دو معمولاً Index پشتیبان می‌سازند، اما انتخاب Clustered یا Nonclustered مستقل از مفهوم کلید است."
      },
      {
        "q": "Clustered و Nonclustered Index چه تفاوتی دارند؟",
        "a": "Clustered Index ترتیب منطقی ذخیره ردیف‌های داده در B-Tree را تعیین می‌کند و هر جدول فقط یکی دارد. Nonclustered Index ساختار جداگانه‌ای با کلید و Row Locator است و تعداد بیشتری از آن ممکن است. Index بیشتر خواندن را سریع می‌کند، اما هزینه Insert، Update، فضا و نگهداری را افزایش می‌دهد."
      },
      {
        "q": "Composite Index چگونه طراحی می‌شود؟",
        "a": "در Index مرکب ترتیب ستون‌ها مهم است و باید با Predicate، Join و Sort پرتکرار هماهنگ شود. قاعده Leftmost Prefix یعنی استفاده مؤثر معمولاً از ستون‌های ابتدایی آغاز می‌شود. ستون‌های برابری اغلب قبل از Range قرار می‌گیرند، ولی تصمیم نهایی با Selectivity و Execution Plan است."
      },
      {
        "q": "Covering Index چیست؟",
        "a": "Covering Index همه ستون‌های لازم Query را در Key یا `INCLUDE` دارد و نیاز به Lookup جدول را حذف می‌کند. ستون‌های Filter و Sort معمولاً Key و ستون‌های صرفاً خروجی می‌توانند Included باشند. پوشش بیش‌ازحد Index را پهن و هزینه Write و Storage را زیاد می‌کند.\nTIP: یک Query پرتکرار و پرهزینه را پوشش دهید، نه هر Query ممکن را."
      },
      {
        "q": "Execution Plan چه اطلاعاتی می‌دهد؟",
        "a": "Execution Plan عملگرهایی مانند Seek، Scan، Join، Sort و تخمین تعداد ردیف را نشان می‌دهد. اختلاف بزرگ Estimated و Actual Rows معمولاً به آمار، Parameter یا Predicate دشوار اشاره دارد. هزینه درصدی فقط تخمین نسبی است؛ Logical Reads، زمان و Spill نیز باید اندازه‌گیری شوند."
      },
      {
        "q": "Index Seek همیشه بهتر از Index Scan است؟",
        "a": "خیر، Seek برای بخش کوچک داده عالی است ولی اگر درصد بزرگی از جدول لازم باشد Scan می‌تواند ارزان‌تر باشد. Seek همراه هزاران Key Lookup حتی از Scan بدتر می‌شود. معیار درست مصرف I/O، CPU و زمان روی حجم واقعی است، نه نام عملگر."
      },
      {
        "q": "SARGable بودن شرط یعنی چه؟",
        "a": "Predicate نوع SARGable اجازه می‌دهد موتور از ساختار Index برای محدود کردن جست‌وجو استفاده کند. اعمال تابع روی ستون مانند `YEAR(OrderDate)=2026` اغلب Seek را دشوار می‌کند و بهتر است به بازه تاریخ تبدیل شود. تبدیل نوع ضمنی و Wildcard ابتدای `LIKE` نیز می‌تواند استفاده مؤثر از Index را مختل کند."
      },
      {
        "q": "Normalization و Denormalization چه Trade-offی دارند؟",
        "a": "Normalization تکرار داده و ناهنجاری Insert، Update و Delete را با تفکیک موجودیت‌ها کم می‌کند. Denormalization برای مسیرهای خواندن خاص Join را کاهش می‌دهد، اما سازگاری داده را پیچیده‌تر می‌کند. ابتدا مدل صحیح نرمال می‌سازیم و فقط با اندازه‌گیری و سازوکار همگام‌سازی روشن Denormalize می‌کنیم."
      },
      {
        "q": "تفاوت INNER، LEFT و FULL JOIN چیست؟",
        "a": "`INNER JOIN` فقط ردیف‌های Matchشده دو طرف را می‌دهد و `LEFT JOIN` همه ردیف‌های چپ را حفظ می‌کند. `FULL JOIN` ردیف‌های بدون Match هر دو طرف را نیز برمی‌گرداند. قرار دادن شرط جدول راست در `WHERE` ممکن است ناخواسته LEFT JOIN را عملاً به INNER JOIN تبدیل کند."
      },
      {
        "q": "تفاوت WHERE و HAVING چیست؟",
        "a": "`WHERE` ردیف‌ها را پیش از Grouping و Aggregation فیلتر می‌کند. `HAVING` گروه‌های ساخته‌شده را پس از Aggregate محدود می‌نماید. شرط‌های غیرتجمیعی بهتر است در WHERE باشند تا داده کمتری وارد Grouping شود."
      },
      {
        "q": "CTE چیست و چه تفاوتی با Subquery دارد؟",
        "a": "CTE یک نتیجه نام‌گذاری‌شده در محدوده همان Statement است و خوانایی Queryهای چندمرحله‌ای یا Recursive را بهتر می‌کند. به‌طور پیش‌فرض تضمین Materialize شدن ندارد و موتور می‌تواند آن را Inline کند. برای استفاده چندباره سنگین، Temp Table همراه Index و آمار ممکن است بهتر باشد."
      },
      {
        "q": "Window Function چه کاربردی دارد؟",
        "a": "Window Function محاسبه‌ای مانند رتبه، جمع تجمعی یا مقدار ردیف قبلی را بدون Collapse کردن ردیف‌ها انجام می‌دهد. عبارت `OVER(PARTITION BY ... ORDER BY ...)` پنجره را تعریف می‌کند. `ROW_NUMBER` برای انتخاب آخرین رکورد هر گروه مفید است، ولی ترتیب باید یکتا و قطعی باشد."
      },
      {
        "q": "تفاوت DELETE، TRUNCATE و DROP چیست؟",
        "a": "`DELETE` ردیف‌ها را با امکان شرط حذف و عملیات را Row-oriented لاگ می‌کند. `TRUNCATE` همه ردیف‌ها را با آزادسازی Pageها سریع‌تر حذف و Identity را Reset می‌کند، اما محدودیت‌هایی مانند Foreign Key دارد. `DROP` خود Object و Metadata آن را حذف می‌کند و هدف متفاوتی دارد."
      },
      {
        "q": "ACID چیست؟",
        "a": "**Atomicity** همه یا هیچ، **Consistency** حفظ قواعد معتبر، **Isolation** کنترل اثر تراکنش‌های هم‌زمان و **Durability** ماندگاری Commit است. دیتابیس ابزار اجرای این ویژگی‌ها را فراهم می‌کند، ولی طراحی Constraint و مرز تراکنش بر عهده برنامه است. افزایش Isolation معمولاً سازگاری را بیشتر و هم‌زمانی را کمتر می‌کند."
      },
      {
        "q": "Isolation Levelهای رایج SQL Server چه تفاوتی دارند؟",
        "a": "`Read Committed` پیش‌فرض است و Dirty Read را جلوگیری می‌کند، اما Nonrepeatable Read ممکن است رخ دهد. `Repeatable Read` و `Serializable` Lock بیشتری نگه می‌دارند، درحالی‌که Snapshot از Row Versioning برای خواندن سازگار استفاده می‌کند. انتخاب باید بر اساس ناهنجاری قابل‌قبول، Contention و هزینه `tempdb` باشد."
      },
      {
        "q": "Deadlock چیست و چگونه کاهش می‌یابد؟",
        "a": "Deadlock چرخه‌ای از انتظار Lockها است و SQL Server یکی از تراکنش‌ها را Victim می‌کند. ترتیب یکسان دسترسی به منابع، تراکنش کوتاه و Index مناسب احتمال آن را کم می‌کند. برنامه باید خطای Deadlock را با Backoff محدود Retry کند و Deadlock Graph برای علت اصلی تحلیل شود."
      },
      {
        "q": "Blocking با Deadlock چه تفاوتی دارد؟",
        "a": "Blocking انتظار طبیعی یک Session برای آزاد شدن Lock توسط Session دیگر است و ممکن است پایان یابد. Deadlock یک چرخه انتظار بدون راه پیشرفت است که موتور باید آن را بشکند. Blocking طولانی را با Session مسدودکننده، تراکنش باز و Query Plan بررسی می‌کنیم، نه اینکه فوراً همه Lockها را مشکل بدانیم."
      },
      {
        "q": "Parameter Sniffing چیست؟",
        "a": "SQL Server هنگام Compile ممکن است Plan را بر اساس مقدار Parameter نخست بهینه و برای اجراهای بعدی Cache کند. اگر توزیع داده ناهمگون باشد، همان Plan برای مقادیر دیگر بسیار نامناسب می‌شود. راه‌حل‌ها شامل Query بازطراحی‌شده، آمار مناسب، `OPTION(RECOMPILE)` هدفمند یا `OPTIMIZE FOR` است و باید با Plan واقعی اثبات شود."
      },
      {
        "q": "Stored Procedure چه مزایا و معایبی دارد؟",
        "a": "Stored Procedure قرارداد نزدیک دیتابیس، Permission محدود و استفاده مجدد از Plan فراهم می‌کند. در مقابل Versioning، تست و نگهداری منطق پراکنده بین برنامه و دیتابیس را دشوار می‌سازد. برای عملیات داده‌محور سنگین مناسب است، اما انتقال تمام منطق دامنه به Procedure لزوماً معماری خوبی نیست."
      },
      {
        "q": "Temp Table و Table Variable چه تفاوتی دارند؟",
        "a": "Temp Table با نام `#T` در `tempdb` ساخته می‌شود، آمار و Indexهای انعطاف‌پذیر دارد و برای داده متوسط یا زیاد مناسب است. Table Variable Scope محدودتری دارد و در نسخه‌های جدید تخمین آن بهتر شده، اما برای حجم بزرگ همیشه سبک‌تر نیست. انتخاب باید با حجم واقعی، Recompile و Plan سنجیده شود."
      },
      {
        "q": "Indexed View چیست؟",
        "a": "Indexed View نتیجه View را با Unique Clustered Index فیزیکی نگه می‌دارد و می‌تواند Queryهای تجمیعی پرتکرار را سریع کند. محدودیت‌های Schema Binding و گزینه‌های Session دارد و هر Write به جداول پایه هزینه نگهداری ایجاد می‌کند. پیش از استفاده باید نسبت خواندن به نوشتن و امکان استفاده Optimizer بررسی شود."
      },
      {
        "q": "MERGE چه کاربرد و چه ریسک‌هایی دارد؟",
        "a": "`MERGE` می‌تواند Insert، Update و Delete را بر اساس Match در یک Statement بیان کند. بااین‌حال پیچیدگی هم‌زمانی، رفتار چند Match و سابقه اشکالات باعث می‌شود در مسیرهای حساس با احتیاط استفاده شود. اغلب `UPDATE` و `INSERT` جدا در تراکنش، با Constraint یکتا و مدیریت Race، شفاف‌تر است."
      },
      {
        "q": "TRY/CATCH را در تراکنش SQL چگونه می‌نویسید؟",
        "a": "در `TRY` تراکنش آغاز، عملیات اجرا و سپس Commit می‌شود و در `CATCH` وضعیت با `XACT_STATE()` بررسی می‌گردد. اگر تراکنش فعال یا غیرقابل Commit باشد `ROLLBACK` انجام و خطا با `THROW` دوباره پرتاب می‌شود. `SET XACT_ABORT ON` برای بسیاری از خطاهای Runtime رفتار تراکنش را قابل پیش‌بینی‌تر می‌کند."
      },
      {
        "q": "آمار Statistics چه اثری بر Query Plan دارد؟",
        "a": "Optimizer با Statistics توزیع تقریبی مقدارها و Cardinality را تخمین می‌زند. آمار کهنه یا نمونه‌برداری نامناسب می‌تواند Join Order، Memory Grant و نوع دسترسی بدی ایجاد کند. Update Statistics باید هدفمند باشد؛ اجرای بی‌رویه Full Scan روی جداول بزرگ نیز هزینه قابل‌توجه دارد."
      },
      {
        "q": "Pagination با OFFSET چه مشکلی دارد و Keyset چیست؟",
        "a": "`OFFSET/FETCH` ساده است، اما صفحات عمیق باید ردیف‌های زیادی را Sort و رد کنند و در تغییر هم‌زمان داده ممکن است تکرار یا جاافتادگی رخ دهد. Keyset Pagination با آخرین کلید مرتب‌سازی شرط ادامه می‌سازد و عملکرد پایدارتری دارد. ترتیب باید قطعی باشد؛ مثلاً `(CreatedAt, Id)` و Index متناظر داشته باشد."
      },
      {
        "q": "چگونه SQL Injection را جلوگیری می‌کنید؟",
        "a": "مقدار ورودی همیشه باید Parameter شود و Query با اتصال رشته‌ای ساخته نشود. نام جدول، ستون یا جهت Sort را نمی‌توان معمولاً Parameter کرد، پس باید از Allowlist معتبر انتخاب شوند. کمینه‌سازی Permission حساب دیتابیس لایه دفاعی دوم است و جای Parameterization را نمی‌گیرد."
      },
      {
        "q": "چرا SELECT * در Queryهای Production نامناسب است؟",
        "a": "`SELECT *` داده و I/O اضافی منتقل می‌کند و ممکن است مانع Covering Index شود. تغییر Schema نیز ناخواسته قرارداد خروجی و Mapping را تغییر می‌دهد. انتخاب صریح ستون‌ها خوانایی، امنیت داده و پایداری Plan و قرارداد را بهتر می‌کند."
      },
      {
        "q": "Connection Pooling چگونه کار می‌کند؟",
        "a": "Pooling اتصال فیزیکی باز را برای Connection String یکسان دوباره استفاده می‌کند تا هزینه Handshake کم شود. `Close` یا Dispose معمولاً Connection را به Pool برمی‌گرداند، نه اینکه Socket را حتماً ببندد. تراکنش طولانی، Reader باز یا نشت Connection می‌تواند Pool را Exhaust کند و Timeout بسازد."
      }
    ]
  },
  {
    "title": "HTTP، REST و طراحی API",
    "desc": "پرسش‌های طراحی قرارداد HTTP، معنای REST، نسخه‌بندی، مستندسازی، صفحه‌بندی و انتخاب سبک API.",
    "questions": [
      {
        "q": "اصول اصلی REST چیست؟",
        "a": "REST سبک معماری مبتنی بر Resource، رابط یکنواخت، Stateless بودن، Cacheability و تفکیک Client از Server است. URL بهتر است اسم Resource باشد و رفتار با Verbهای HTTP بیان شود. REST فقط JSON روی HTTP نیست؛ رعایت Semantics متدها و Status Codeها بخش مهم قرارداد است."
      },
      {
        "q": "Stateless بودن API یعنی چه؟",
        "a": "هر درخواست باید اطلاعات لازم برای پردازش خود را داشته باشد و Server به Session پنهان درخواست قبلی وابسته نباشد. این ویژگی Scale-out و بازیابی خطا را ساده‌تر می‌کند. Stateless به معنی نداشتن State در دیتابیس نیست؛ State منبع روی Storage پایدار نگه داشته می‌شود."
      },
      {
        "q": "Idempotency چیست و کدام متدها Idempotent هستند؟",
        "a": "عملیات Idempotent با تکرار همان درخواست اثر نهایی یکسانی دارد، هرچند پاسخ یا لاگ می‌تواند متفاوت باشد. `GET`، `PUT` و `DELETE` از نظر Semantics باید Idempotent باشند، ولی `POST` معمولاً نیست. برای پرداخت یا ایجاد حساس، `Idempotency-Key` و ذخیره نتیجه از ایجاد تکراری جلوگیری می‌کند."
      },
      {
        "q": "تفاوت Safe و Idempotent در HTTP چیست؟",
        "a": "متد Safe مانند `GET` نباید State تجاری منبع را تغییر دهد. Idempotent ممکن است State را تغییر دهد، اما تکرار آن اثر اضافه نسازد؛ مانند `DELETE`. ثبت لاگ یا شمارنده فنی در GET مفهوم Safe را نقض نمی‌کند، به‌شرطی که اثر مورد انتظار کاربر تغییر منبع نباشد."
      },
      {
        "q": "PUT و PATCH چه تفاوتی دارند؟",
        "a": "`PUT` معمولاً جایگزینی کامل نمایش منبع در URI مشخص و Idempotent است. `PATCH` تغییر جزئی را با قالبی مانند JSON Patch یا Merge Patch بیان می‌کند. قرارداد فیلدهای حذف‌شده، Null و Validation باید شفاف باشد تا Partial Update داده را ناخواسته پاک نکند."
      },
      {
        "q": "POST چه زمانی باید 201 برگرداند؟",
        "a": "وقتی درخواست منبع جدیدی می‌سازد، پاسخ `201 Created` مناسب است. Header به نام `Location` بهتر است URI منبع ایجادشده را بدهد و Body می‌تواند نمایش آن را برگرداند. اگر کار Async فقط پذیرفته شده، `202 Accepted` همراه URI وضعیت دقیق‌تر است."
      },
      {
        "q": "مهم‌ترین Status Codeهای موفق کدام‌اند؟",
        "a": "`200 OK` برای پاسخ موفق دارای Body، `201 Created` برای ایجاد و `204 No Content` برای موفقیت بدون Body رایج‌اند. `202 Accepted` یعنی پردازش پذیرفته شده ولی هنوز کامل نیست. انتخاب Status باید معنای واقعی عملیات را منتقل کند، نه اینکه همه نتایج با 200 و فیلد داخلی گزارش شوند."
      },
      {
        "q": "تفاوت 400، 401، 403 و 404 چیست؟",
        "a": "`400` درخواست نامعتبر، `401` نبودن یا نامعتبر بودن احراز هویت و `403` نداشتن مجوز با وجود هویت معتبر است. `404` نبودن منبع را می‌رساند و گاهی برای جلوگیری از افشای وجود منبع استفاده می‌شود. پاسخ `401` معمولاً Header به نام `WWW-Authenticate` دارد."
      },
      {
        "q": "چه زمانی 409، 412 و 422 استفاده می‌شوند؟",
        "a": "`409 Conflict` برای تعارض با State فعلی مانند نسخه هم‌زمانی یا کلید تکراری مناسب است. `412 Precondition Failed` وقتی شرط Headerهایی مانند `If-Match` برقرار نیست استفاده می‌شود. `422 Unprocessable Content` برای ساختار قابل‌فهم ولی قواعد معنایی نامعتبر کاربرد دارد، البته قرارداد تیم باید یکدست باشد."
      },
      {
        "q": "HATEOAS چیست و آیا همیشه لازم است؟",
        "a": "HATEOAS یعنی پاسخ علاوه بر داده، Linkهای عملیات و انتقال‌های مجاز بعدی را ارائه کند. این کار Client را از ساخت دستی URL جدا می‌کند و Workflow قابل کشف می‌سازد. برای API داخلی ساده هزینه پیچیدگی ممکن است بیشتر از سود باشد، پس سطح بلوغ REST باید آگاهانه انتخاب شود."
      },
      {
        "q": "Offset Pagination و Cursor Pagination چه تفاوتی دارند؟",
        "a": "Offset Pagination با `page` و `size` ساده و مناسب پرش به صفحه است، اما روی داده بزرگ و متغیر کند یا ناپایدار می‌شود. Cursor Pagination یک Token ادامه بر اساس ترتیب پایدار می‌دهد و برای Feed و داده پرتغییر مناسب‌تر است. Cursor باید Opaque، قابل اعتبارسنجی و وابسته به Filter و Sort فعلی باشد."
      },
      {
        "q": "در پاسخ صفحه‌بندی چه Metadataی می‌دهید؟",
        "a": "حداقل داده شامل Items و نشانه ادامه مانند `nextCursor` یا Link صفحه بعد است. Total Count فقط وقتی محاسبه آن لازم و مقرون‌به‌صرفه است ارائه می‌شود، چون روی Query پیچیده می‌تواند گران باشد. حداکثر اندازه صفحه باید در Server محدود شود تا Client نتواند Payload نامحدود درخواست کند."
      },
      {
        "q": "روش‌های API Versioning چه هستند؟",
        "a": "نسخه در Path مانند `/v1`، Query، Header یا Media Type قابل قرار دادن است. Path برای مشاهده و Routing ساده است، Header URI را تمیز نگه می‌دارد و Media Type دقیق ولی پیچیده‌تر است. راهبرد باید همراه Sunset، Deprecation و Migration Guide باشد، نه فقط افزودن شماره نسخه."
      },
      {
        "q": "چه تغییری Breaking Change محسوب می‌شود؟",
        "a": "حذف یا تغییر نام فیلد، تغییر Type، سخت‌تر کردن Validation و تغییر معنای Status Code معمولاً Breaking است. افزودن فیلد اغلب سازگار است، اما Clientهای سخت‌گیر نیز باید در نظر گرفته شوند. Contract Test و Schema Diff می‌تواند شکست ناخواسته قرارداد را پیش از انتشار کشف کند."
      },
      {
        "q": "OpenAPI چه کاربردی دارد؟",
        "a": "OpenAPI قرارداد ماشین‌خوان Endpointها، پارامترها، Schemaها، پاسخ‌ها و امنیت را توصیف می‌کند. از آن برای مستندات تعاملی، تولید Client و Contract Testing استفاده می‌شود. سند تولیدشده باید Review شود، چون Annotation ناقص می‌تواند مستندی متفاوت از رفتار واقعی بسازد."
      },
      {
        "q": "Content Negotiation چیست؟",
        "a": "Client با Header به نام `Accept` نوع نمایش مطلوب را اعلام و Server با `Content-Type` قالب واقعی را مشخص می‌کند. اگر هیچ Formatter قابل‌قبولی نباشد `406 Not Acceptable` می‌تواند برگردد. در APIهای JSON-only نیز اعلام صریح Media Type و Charset قرارداد را روشن می‌کند."
      },
      {
        "q": "GraphQL چه زمانی از REST مناسب‌تر است؟",
        "a": "GraphQL زمانی مفید است که Clientها شکل‌های داده بسیار متفاوت دارند و نیاز به ترکیب Graph پیچیده در یک درخواست است. Schema قوی و انتخاب فیلد Over-fetching را کم می‌کند، ولی Cache HTTP، Authorization سطح فیلد و کنترل هزینه Query پیچیده‌تر می‌شود. برای CRUD ساده و عملیات همسو با Semantics HTTP، REST غالباً کم‌هزینه‌تر است."
      },
      {
        "q": "چگونه Cache HTTP را طراحی می‌کنید؟",
        "a": "`Cache-Control` سیاست تازگی و اشتراک‌پذیری را مشخص و `ETag` یا `Last-Modified` اعتبارسنجی مجدد را ممکن می‌کند. پاسخ خصوصی نباید در Cache مشترک قرار گیرد و `Vary` باید Headerهای مؤثر را اعلام کند. Cache Invalidation با مدل تغییر داده هماهنگ می‌شود و اطلاعات حساس بدون Policy صریح Cache نمی‌شوند."
      },
      {
        "q": "ETag و If-Match چه کاربردی دارند؟",
        "a": "ETag شناسه نسخه نمایش منبع است و می‌تواند از RowVersion ساخته شود. Client در Update، مقدار قبلی را با `If-Match` می‌فرستد و Server در صورت تغییر منبع پاسخ `412` می‌دهد. این روش Optimistic Concurrency را وارد قرارداد HTTP می‌کند و از Lost Update جلوگیری می‌نماید."
      },
      {
        "q": "طراحی URL مناسب برای REST چگونه است؟",
        "a": "URLها بهتر است Resourceمحور، جمع و پایدار باشند؛ مانند `/orders/{id}/items`. فعل‌هایی مانند `/getOrders` معمولاً زائد‌اند، چون Method عمل را بیان می‌کند. عمق زیاد Nested Resource و افشای ساختار دیتابیس نگهداری قرارداد را سخت می‌کند."
      },
      {
        "q": "چگونه خطاهای API را استاندارد می‌کنید؟",
        "a": "همه Endpointها باید Envelope خطای ثابت، ترجیحاً `application/problem+json` با Status درست برگردانند. کد خطای دامنه‌ای پایدار برای تصمیم Client مفید است و `traceId` عیب‌یابی را ساده می‌کند. Stack Trace، SQL و اطلاعات شخصی نباید در پاسخ Production افشا شوند."
      },
      {
        "q": "Timeout، Retry و Idempotency چگونه به هم مرتبط‌اند؟",
        "a": "Timeout Client به معنی اجرا نشدن عملیات در Server نیست و ممکن است پاسخ فقط گم شده باشد. Retry کور روی POST غیر Idempotent می‌تواند سفارش یا پرداخت تکراری بسازد. عملیات حساس باید Idempotency Key، وضعیت قابل Query و Retry با Backoff و Jitter داشته باشد."
      }
    ]
  },
  {
    "title": "معماری نرم‌افزار و DDD",
    "desc": "پرسش‌های معماری، طراحی دامنه و الگوهای سامانه‌های توزیع‌شده",
    "questions": [
      {
        "q": "Clean Architecture چیست و چه هدفی دارد؟",
        "a": "**Clean Architecture** کد را به حلقه‌هایی با مسئولیت مشخص تقسیم می‌کند تا منطق کسب‌وکار از دیتابیس، وب و فریم‌ورک مستقل بماند. هسته معمولاً شامل `Domain` و `Application` است و جزئیات در لایه‌های بیرونی قرار می‌گیرند. TIP: معیار موفقیت این معماری تعداد پروژه‌ها نیست، بلکه امکان تست و تعویض جزئیات بدون تغییر قواعد کسب‌وکار است."
      },
      {
        "q": "Dependency Rule در Clean Architecture چیست؟",
        "a": "**Dependency Rule** می‌گوید وابستگی‌های کد فقط باید به سمت لایه‌های داخلی‌تر حرکت کنند. برای نمونه `Infrastructure` می‌تواند رابط تعریف‌شده در `Application` را پیاده‌سازی کند، اما Application نباید EF Core را بشناسد. - مدل‌های دیتابیس یا HTTP را نیز مستقیم وارد Domain نکنید."
      },
      {
        "q": "لایه‌های رایج در Clean Architecture چه هستند؟",
        "a": "تقسیم رایج شامل `Domain`، `Application`، `Infrastructure` و `Presentation` است. Domain قواعد بنیادی، Application سناریوهای کاربردی، Infrastructure جزئیات فنی و Presentation ورودی و خروجی را مدیریت می‌کند. TIP: مرزها را بر اساس مسئولیت بسازید و از ایجاد لایه‌های بدون ارزش صرفاً برای پیروی از یک قالب خودداری کنید."
      },
      {
        "q": "DDD چیست و چه زمانی مفید است؟",
        "a": "**Domain-Driven Design** رویکردی برای مدل‌سازی نرم‌افزار حول مفاهیم و قواعد دامنه پیچیده است. تیم فنی و متخصصان کسب‌وکار با `Ubiquitous Language` واژگان مشترکی می‌سازند که در کد نیز دیده می‌شود. برای CRUD ساده، هزینه DDD کامل معمولاً بیشتر از منفعت آن است."
      },
      {
        "q": "Bounded Context چیست؟",
        "a": "**Bounded Context** مرزی است که در آن یک مدل و واژگان معنای دقیق و سازگاری دارند. واژه‌ای مانند `Customer` ممکن است در فروش و پشتیبانی مدل‌ها و قواعد متفاوتی داشته باشد. - ارتباط contextها را با قراردادهای صریح مانند API یا event و یک `Context Map` مشخص کنید."
      },
      {
        "q": "Aggregate و Aggregate Root چه هستند؟",
        "a": "**Aggregate** مجموعه‌ای از Entityها و Value Objectهاست که یک مرز سازگاری تراکنشی تشکیل می‌دهد. همه تغییرات بیرونی باید از طریق `Aggregate Root` انجام شوند تا invariantها حفظ شوند. TIP: aggregate بزرگ باعث contention و بارگذاری اضافه می‌شود؛ آن را بر اساس قواعد سازگاری فوری طراحی کنید."
      },
      {
        "q": "تفاوت Entity و Value Object چیست؟",
        "a": "**Entity** با هویت پایدار شناخته می‌شود، حتی اگر ویژگی‌هایش تغییر کنند؛ مانند `Order` با شناسه سفارش. **Value Object** با مجموعه مقادیرش تعریف می‌شود، معمولاً immutable است و برابری مقداری دارد؛ مانند `Money`. - رفتار و اعتبارسنجی مرتبط را داخل خود مدل قرار دهید تا مدل کم‌خون نشود."
      },
      {
        "q": "Repository Pattern چه نقشی دارد؟",
        "a": "**Repository** دسترسی به aggregateها را با زبانی نزدیک به دامنه پنهان می‌کند و جزئیات persistence را بیرون نگه می‌دارد. رابطی مانند `IOrderRepository.GetPendingAsync()` از افشای queryهای زیرساختی جلوگیری می‌کند. TIP: ساخت repository عمومی روی تمام جدول‌ها اغلب فقط API مربوط به EF Core را تکرار می‌کند."
      },
      {
        "q": "Unit of Work چیست؟",
        "a": "**Unit of Work** تغییرات چند موجودیت را ردیابی و در یک مرز تراکنشی commit می‌کند. در EF Core، خود `DbContext` عملاً این نقش را با `SaveChangesAsync()` دارد. - طول عمر آن را کوتاه و معمولاً برابر یک request یا command نگه دارید."
      },
      {
        "q": "CQRS چیست و چه مزایا و هزینه‌هایی دارد؟",
        "a": "**CQRS** مدل و مسیر write را از read جدا می‌کند تا هرکدام مستقل بهینه شوند. این الگو می‌تواند مدل خواندن ساده و مقیاس‌پذیری بهتر بدهد، اما تعداد مدل‌ها، هماهنگی و eventual consistency را افزایش می‌دهد. TIP: جداسازی کلاس‌های Command و Query الزاماً به معنی دیتابیس‌های جدا نیست."
      },
      {
        "q": "Event Sourcing چیست؟",
        "a": "در **Event Sourcing** وضعیت فعلی از توالی eventهای تغییرناپذیر مانند `OrderPlaced` بازسازی می‌شود. این روش تاریخچه کامل، audit و قابلیت ساخت projectionهای جدید می‌دهد، اما versioning رویدادها و بازپخش را دشوار می‌کند. - فقط وقتی تاریخچه دامنه ارزش محوری دارد آن را انتخاب کنید."
      },
      {
        "q": "Monolith و Microservices چه تفاوتی دارند؟",
        "a": "**Monolith** استقرار و معمولاً داده مشترک دارد، در حالی که microserviceها مستقل deploy می‌شوند و مالک مرز و داده خود هستند. microservice استقلال تیم و مقیاس‌گذاری موضعی می‌دهد، اما شبکه، observability و سازگاری داده را پیچیده می‌کند. TIP: توزیع کد بدون استقلال داده و استقرار، فقط یک distributed monolith می‌سازد."
      },
      {
        "q": "چه زمانی نباید از Microservices استفاده کرد؟",
        "a": "برای تیم کوچک، دامنه نامشخص یا محصولی که هنوز product-market fit ندارد، **microservices** اغلب انتخاب نامناسبی است. هزینه‌های CI/CD، مانیتورینگ، tracing و عملیات ممکن است از ارزش تفکیک بیشتر باشد. - ابتدا با monolith ماژولار مرزها را کشف کنید و فقط گلوگاه‌های واقعی را جدا کنید."
      },
      {
        "q": "Modular Monolith چیست؟",
        "a": "**Modular Monolith** یک واحد استقرار است که درون آن ماژول‌ها مرز و API داخلی صریح دارند. هر ماژول می‌تواند مدل دامنه و حتی schema خود را داشته باشد و دسترسی مستقیم بین جداول ممنوع شود. TIP: این معماری بسیاری از مزایای مرزبندی را بدون هزینه شبکه microservices فراهم می‌کند."
      },
      {
        "q": "Service Mesh چیست؟",
        "a": "**Service Mesh** قابلیت‌های ارتباط سرویس‌به‌سرویس مانند mTLS، retry، routing و telemetry را در لایه زیرساخت فراهم می‌کند. ابزارهایی مانند `Istio` معمولاً از proxy جانبی یا ambient data plane استفاده می‌کنند. - mesh پیچیدگی عملیاتی دارد و جای طراحی درست timeout و idempotency در برنامه را نمی‌گیرد."
      },
      {
        "q": "Coupling و Cohesion در معماری چه مفهومی دارند؟",
        "a": "هدف طراحی، **coupling کم** میان ماژول‌ها و **cohesion بالا** درون هر ماژول است. اشتراک دیتابیس، مدل و چرخه استقرار coupling زمانی و ساختاری ایجاد می‌کند. TIP: تغییر یک قابلیت را بررسی کنید؛ اگر چندین سرویس نامرتبط هم‌زمان تغییر می‌کنند، مرزها احتمالاً مناسب نیستند."
      },
      {
        "q": "Saga Pattern چیست؟",
        "a": "**Saga** یک فرایند چندمرحله‌ای توزیع‌شده را به تراکنش‌های محلی و عملیات جبرانی تقسیم می‌کند. در choreography سرویس‌ها به event واکنش می‌دهند و در orchestration یک هماهنگ‌کننده مراحل را هدایت می‌کند. - compensation بازگردانی بیتی نیست و باید از منظر کسب‌وکار تعریف و idempotent شود."
      },
      {
        "q": "چرا Distributed Transaction دشوار است؟",
        "a": "تراکنش توزیع‌شده باید میان چند منبع مستقل atomicity ایجاد کند و در برابر timeout و partition تصمیم بگیرد. پروتکل‌هایی مانند `2PC` می‌توانند blocking و coupling عملیاتی ایجاد کنند و در cloud همیشه پشتیبانی نمی‌شوند. TIP: اغلب تراکنش محلی همراه outbox و eventual consistency گزینه مقاوم‌تری است."
      },
      {
        "q": "Event-Driven Architecture چیست؟",
        "a": "در **Event-Driven Architecture** تولیدکننده رخداد را منتشر می‌کند و از مصرف‌کنندگان مشخص اطلاع ندارد. این مدل coupling را کاهش می‌دهد و توسعه مستقل را ممکن می‌کند، اما ordering، duplicate و schema evolution را باید مدیریت کرد. - consumerها را idempotent بسازید و correlation ID را برای tracing منتقل کنید."
      },
      {
        "q": "BFF Pattern چیست؟",
        "a": "**Backend for Frontend** برای هر نوع client یک backend متناسب با نیازهای همان رابط ارائه می‌کند. برای مثال `Mobile BFF` می‌تواند چند سرویس را تجمیع و payload را کوچک کند. TIP: منطق اصلی کسب‌وکار را در BFF کپی نکنید؛ نقش آن orchestration و سازگاری با تجربه کاربر است."
      },
      {
        "q": "Eventual Consistency چیست؟",
        "a": "**Eventual Consistency** یعنی replicaها یا مدل‌های مختلف بلافاصله یکسان نیستند، اما در نبود تغییر جدید نهایتاً همگرا می‌شوند. UI باید حالت‌هایی مانند `Pending` را نمایش دهد و کسب‌وکار بازه ناسازگاری را تحمل کند. - این مفهوم مجوزی برای گم‌کردن داده نیست؛ retry، reconciliation و monitoring ضروری‌اند."
      },
      {
        "q": "Outbox Pattern چگونه از گم‌شدن پیام جلوگیری می‌کند؟",
        "a": "در **Transactional Outbox** تغییر دامنه و رکورد پیام در یک تراکنش محلی ذخیره می‌شوند. یک worker رکوردهای outbox را به broker ارسال می‌کند و پس از موفقیت آن‌ها را علامت می‌زند. TIP: تحویل معمولاً `at-least-once` است، پس مصرف‌کننده باید duplicate را با شناسه پیام کنترل کند."
      },
      {
        "q": "Anti-Corruption Layer چیست؟",
        "a": "**Anti-Corruption Layer** مدل یک سیستم خارجی یا legacy را به زبان context داخلی ترجمه می‌کند. این لایه مانع نشت مفاهیم و محدودیت‌های مدل بیرونی به Domain می‌شود. - adapterها، mapperها و facadeهای این مرز را جدا نگه دارید تا تعویض integration ساده‌تر باشد."
      },
      {
        "q": "Idempotency در سیستم‌های توزیع‌شده چرا مهم است؟",
        "a": "عملیات **idempotent** با اجرای چندباره همان اثر اجرای یک‌باره را دارد. چون timeout مشخص نمی‌کند درخواست اجرا نشده یا فقط پاسخ گم شده است، retry بدون idempotency می‌تواند پرداخت تکراری بسازد. TIP: از `Idempotency-Key`، قید یکتا و ذخیره نتیجه قبلی استفاده کنید."
      }
    ]
  },
  {
    "title": "Git، CI/CD و DevOps",
    "desc": "پرسش‌های کنترل نسخه، تحویل مستمر، استقرار و عملیات",
    "questions": [
      {
        "q": "Git چیست و با سیستم متمرکز چه تفاوتی دارد؟",
        "a": "**Git** یک سیستم کنترل نسخه توزیع‌شده است و هر clone تاریخچه و objectهای repository را در اختیار دارد. بیشتر عملیات مانند commit و branch محلی و سریع‌اند و remote فقط نقطه همکاری است. - commitهای کوچک و معنادار، بررسی و rollback را آسان‌تر می‌کنند."
      },
      {
        "q": "تفاوت merge و rebase چیست؟",
        "a": "`merge` تاریخچه دو شاخه را با یک merge commit ترکیب می‌کند و ancestry واقعی را حفظ می‌کند. `rebase` commitها را روی پایه جدید بازنویسی می‌کند و تاریخچه خطی‌تری می‌دهد. TIP: شاخه عمومی مشترک را بدون هماهنگی rebase نکنید، چون شناسه commitها عوض می‌شود."
      },
      {
        "q": "تفاوت git fetch و git pull چیست؟",
        "a": "`git fetch` اطلاعات remote را دریافت می‌کند ولی working branch را تغییر نمی‌دهد. `git pull` عملاً fetch را با merge یا rebase ترکیب می‌کند و ممکن است همان لحظه conflict بسازد. - برای کنترل بیشتر ابتدا fetch کنید، diff را ببینید و سپس روش ادغام را انتخاب کنید."
      },
      {
        "q": "git reset و git revert چه تفاوتی دارند؟",
        "a": "`git reset` اشاره‌گر branch و بسته به mode، index یا working tree را جابه‌جا می‌کند و می‌تواند تاریخچه را بازنویسی کند. `git revert` یک commit جدید با تغییرات معکوس می‌سازد و برای شاخه منتشرشده امن‌تر است. TIP: پیش از `reset --hard` مطمئن شوید تغییر ارزشمندی از بین نمی‌رود."
      },
      {
        "q": "git stash چه کاربردی دارد؟",
        "a": "`git stash` تغییرات موقت working tree و index را کنار می‌گذارد تا بتوانید context را عوض کنید. stash جای commit یا backup بلندمدت نیست و ممکن است هنگام apply conflict داشته باشد. - برای کار قابل‌توجه، یک branch و commit موقت معمولاً شفاف‌تر است."
      },
      {
        "q": "چگونه conflict در Git را حل می‌کنید؟",
        "a": "ابتدا هدف هر دو تغییر را می‌فهمم و صرفاً یکی از طرف‌ها را کورکورانه انتخاب نمی‌کنم. سپس markerها را اصلاح، فایل را stage و تست‌های مرتبط را اجرا می‌کنم تا ادغام از نظر رفتار نیز درست باشد. TIP: conflict کوچک‌تر با branchهای کوتاه‌عمر و sync مکرر به دست می‌آید."
      },
      {
        "q": "Cherry-pick چیست؟",
        "a": "`git cherry-pick` اثر یک یا چند commit مشخص را روی branch فعلی اعمال می‌کند. برای انتقال یک hotfix مفید است، اما commit جدیدی با SHA متفاوت می‌سازد و استفاده زیاد تاریخچه را گیج‌کننده می‌کند. - برای همگام‌سازی کامل شاخه‌ها merge یا rebase مناسب‌تر است."
      },
      {
        "q": "CI چیست؟",
        "a": "**Continuous Integration** یعنی تغییرات کوچک به‌طور مکرر ادغام و به‌صورت خودکار build و test شوند. pipeline باید سریع و قابل‌اعتماد باشد تا خطا نزدیک به زمان ایجاد کشف شود. TIP: flaky test اعتماد تیم به CI را از بین می‌برد و باید مثل bug واقعی اصلاح شود."
      },
      {
        "q": "CD چه تفاوتی با Continuous Deployment دارد؟",
        "a": "**Continuous Delivery** یعنی artifact همیشه آماده انتشار است، اما تأیید نهایی استقرار می‌تواند دستی باشد. **Continuous Deployment** هر تغییر موفق را بدون گام دستی به production می‌فرستد. - هر دو به تست خودکار، observability و rollback مطمئن نیاز دارند."
      },
      {
        "q": "Pipeline استاندارد چه مراحلی دارد؟",
        "a": "مراحل معمول شامل restore، build، static analysis، test، security scan، package و deploy است. همان artifact تولیدشده باید بین محیط‌ها promote شود تا تفاوت build ایجاد نشود. TIP: secretها را در log چاپ نکنید و jobها را با کمترین permission اجرا کنید."
      },
      {
        "q": "Artifact در CI/CD چیست؟",
        "a": "**Artifact** خروجی immutable و نسخه‌دار build مانند image یا package است. ساخت یک‌باره و promote همان artifact تضمین می‌کند چیزی که تست شده دقیقاً به production می‌رود. - checksum، metadata نسخه و provenance را برای قابلیت ردیابی نگه دارید."
      },
      {
        "q": "Docker image و container چه تفاوتی دارند؟",
        "a": "**Image** قالب immutable و لایه‌لایه‌ای است که برنامه و وابستگی‌ها را توصیف می‌کند. **Container** نمونه در حال اجرای همان image با لایه writable و منابع محدودشده است. TIP: image را کوچک، non-root و با base image به‌روز بسازید."
      },
      {
        "q": "Multi-stage build در Docker چه مزیتی دارد؟",
        "a": "در **multi-stage build** ابزارهای build در stage اولیه می‌مانند و فقط خروجی لازم به runtime image منتقل می‌شود. این کار حجم image و سطح حمله را کاهش می‌دهد. - نسخه base image را pin کنید و cache لایه‌ها را با ترتیب مناسب دستورها بهبود دهید."
      },
      {
        "q": "Infrastructure as Code چیست؟",
        "a": "**IaC** زیرساخت را با فایل‌های نسخه‌پذیر و قابل بازتولید مانند `Terraform` تعریف می‌کند. تغییرها review، plan و در pipeline اعمال می‌شوند و drift قابل شناسایی است. TIP: state و secretها را امن نگه دارید و تغییر دستی خارج از فرایند را محدود کنید."
      },
      {
        "q": "Blue-Green Deployment چیست؟",
        "a": "در **Blue-Green** دو محیط مشابه داریم و traffic پس از اعتبارسنجی از نسخه قدیمی به جدید سوییچ می‌شود. rollback معمولاً با بازگرداندن route سریع است، اما نگهداری دو محیط هزینه دارد. - migration دیتابیس باید با هر دو نسخه سازگار باشد."
      },
      {
        "q": "Canary Deployment چیست؟",
        "a": "در **Canary** نسخه جدید ابتدا به درصد کمی از کاربران یا instanceها ارائه می‌شود. metricهای خطا، latency و شاخص‌های کسب‌وکار قبل از افزایش traffic بررسی می‌شوند. TIP: معیار توقف و rollback را پیش از deploy تعریف کنید، نه هنگام حادثه."
      },
      {
        "q": "Rolling Deployment چیست؟",
        "a": "**Rolling Deployment** instanceها را تدریجی با نسخه جدید جایگزین می‌کند و معمولاً ظرفیت سرویس حفظ می‌شود. در بخشی از زمان دو نسخه هم‌زمان فعال‌اند، بنابراین API و schema باید backward-compatible باشند. - readiness probe مانع ارسال traffic به instance آماده‌نشده می‌شود."
      },
      {
        "q": "Rollback و Roll-forward چه تفاوتی دارند؟",
        "a": "**Rollback** بازگشت به نسخه قبلی و **roll-forward** انتشار نسخه جدیدی با fix است. rollback سریع است، اما پس از migration داده ممکن است امن یا ممکن نباشد. TIP: برای تغییر schema از الگوی expand-and-contract استفاده کنید تا هر دو مسیر باز بمانند."
      },
      {
        "q": "Semantic Versioning چیست؟",
        "a": "**SemVer** نسخه را به شکل `MAJOR.MINOR.PATCH` بیان می‌کند. تغییر ناسازگار major، قابلیت سازگار minor و bug fix سازگار patch را افزایش می‌دهد. - SemVer فقط وقتی معنا دارد که قرارداد عمومی و سیاست compatibility روشن باشد."
      },
      {
        "q": "Feature Flag چیست؟",
        "a": "**Feature Flag** انتشار کد را از فعال‌سازی قابلیت جدا می‌کند و rollout تدریجی را ممکن می‌سازد. flag می‌تواند kill switch باشد، اما شاخه‌های رفتاری و بدهی نگهداری ایجاد می‌کند. TIP: owner و تاریخ حذف تعیین کنید و flagهای موقت را پس از rollout پاک کنید."
      },
      {
        "q": "Trunk-Based Development و GitFlow چه trade-offی دارند؟",
        "a": "در **Trunk-Based** شاخه‌ها کوتاه‌عمر و ادغام‌ها مکررند، بنابراین CI و feature flag اهمیت زیادی دارند. **GitFlow** شاخه‌های release و develop بیشتری دارد و برای releaseهای دوره‌ای قابل‌استفاده است، اما merge و divergence را افزایش می‌دهد. - مدل branching را با cadence انتشار و اندازه تیم انتخاب کنید."
      },
      {
        "q": "Observability شامل چه اجزایی است؟",
        "a": "**Observability** معمولاً از log، metric و distributed trace برای استنتاج وضعیت داخلی سیستم استفاده می‌کند. correlation ID اتصال رویدادهای یک درخواست را میان سرویس‌ها ممکن می‌سازد. TIP: alert را روی نشانه‌های اثرگذار بر کاربر مانند SLO بسازید، نه صرفاً مصرف CPU."
      },
      {
        "q": "SLA، SLO و SLI چه تفاوتی دارند؟",
        "a": "**SLI** اندازه‌گیری واقعی مانند availability است و **SLO** هدف داخلی برای آن شاخص است. **SLA** تعهد قراردادی و معمولاً دارای پیامد تجاری است. - error budget فاصله تا SLO را نشان می‌دهد و بین سرعت انتشار و پایداری تعادل ایجاد می‌کند."
      },
      {
        "q": "Health Check و Readiness/Liveness چه هستند؟",
        "a": "**Liveness** مشخص می‌کند process باید restart شود و **readiness** تعیین می‌کند فعلاً traffic دریافت کند یا نه. وابستگی موقت دیتابیس معمولاً نباید liveness را fail کند، چون restartهای زنجیره‌ای می‌سازد. TIP: probeها را سبک نگه دارید و endpoint آن‌ها را بدون اطلاعات حساس ارائه کنید."
      }
    ]
  },
  {
    "title": "امنیت",
    "desc": "پرسش‌های امنیت وب، توکن، ورودی‌ها و دفاع چندلایه",
    "questions": [
      {
        "q": "تفاوت Authentication و Authorization چیست؟",
        "a": "**Authentication** هویت کاربر را اثبات می‌کند و **Authorization** تصمیم می‌گیرد آن هویت چه کاری مجاز است انجام دهد. ورود با رمز نمونه AuthN و بررسی policy برای ویرایش سفارش نمونه AuthZ است. TIP: صرف authenticated بودن به معنی دسترسی به همه resourceها نیست."
      },
      {
        "q": "JWT چیست و از چه بخش‌هایی تشکیل می‌شود؟",
        "a": "`JWT` توکنی متشکل از header، payload و signature است که به‌صورت Base64Url نمایش داده می‌شوند. signature دست‌کاری را آشکار می‌کند، اما payload به‌طور پیش‌فرض رمزگذاری نشده است. - اطلاعات محرمانه را داخل claimها قرار ندهید و `iss`، `aud` و `exp` را اعتبارسنجی کنید."
      },
      {
        "q": "Access Token و Refresh Token چه تفاوتی دارند؟",
        "a": "**Access Token** کوتاه‌عمر است و برای دسترسی به API ارسال می‌شود. **Refresh Token** عمر بلندتری دارد و فقط برای دریافت access token جدید به authorization server ارائه می‌شود. TIP: refresh token را امن ذخیره، rotate و در صورت reuse کل خانواده آن را revoke کنید."
      },
      {
        "q": "معایب JWT چیست؟",
        "a": "JWT پس از صدور تا پایان اعتبار به‌سادگی قابل لغو نیست و بزرگ‌شدن claimها هزینه هر request را بالا می‌برد. مدیریت key rotation، clock skew و validation اشتباه نیز ریسک امنیتی ایجاد می‌کند. - اگر stateful session نیاز را ساده‌تر حل می‌کند، JWT الزاماً انتخاب بهتری نیست."
      },
      {
        "q": "Token Revocation چگونه پیاده‌سازی می‌شود؟",
        "a": "برای access token کوتاه‌عمر معمولاً زمان انقضا محدود و refresh token در سرور revoke می‌شود. در نیاز فوری می‌توان `jti` را در denylist نگه داشت، ولی این کار بخشی از مزیت stateless بودن را کم می‌کند. TIP: تغییر رمز یا خروج از همه دستگاه‌ها باید sessionها و refresh tokenهای مرتبط را باطل کند."
      },
      {
        "q": "CSRF چیست و چگونه مهار می‌شود؟",
        "a": "**CSRF** مرورگر قربانی را وادار می‌کند یک درخواست ناخواسته با credential خودکار مانند cookie بفرستد. anti-forgery token، `SameSite` مناسب و بررسی origin دفاع‌های رایج هستند. - APIای که Bearer token را فقط از header می‌گیرد معمولاً در برابر CSRF کلاسیک آسیب‌پذیر نیست."
      },
      {
        "q": "XSS چیست؟",
        "a": "**XSS** اجرای JavaScript مهاجم در origin برنامه است و می‌تواند session یا داده کاربر را سرقت کند. output encoding متناسب با context و پرهیز از APIهایی مانند `innerHTML` دفاع اصلی است. TIP: CSP لایه دفاعی مکمل است و جای encoding صحیح را نمی‌گیرد."
      },
      {
        "q": "Content Security Policy چیست؟",
        "a": "**CSP** با header مشخص می‌کند مرورگر script، style و سایر resourceها را از چه منابعی بپذیرد. policy مبتنی بر nonce یا hash از `unsafe-inline` امن‌تر است. - ابتدا حالت `Content-Security-Policy-Report-Only` را برای کشف شکست‌ها آزمایش کنید."
      },
      {
        "q": "CORS و CSRF چه تفاوتی دارند؟",
        "a": "**CORS** سیاست مرورگر برای اجازه خواندن response میان originهاست، نه مکانیزم authentication. **CSRF** سوءاستفاده از ارسال خودکار credential برای انجام عمل ناخواسته است. TIP: بازکردن CORS با originهای کنترل‌نشده، مخصوصاً همراه credential، یک پیکربندی خطرناک است."
      },
      {
        "q": "رمز عبور باید چگونه ذخیره شود؟",
        "a": "رمز عبور باید با password hash کند و دارای salt یکتا مانند `Argon2id` یا bcrypt ذخیره شود. پارامتر هزینه باید متناسب با سخت‌افزار تنظیم و امکان rehash پس از login فراهم شود. - رمز خام، کلید بازیابی‌پذیر یا log رمز هرگز نگهداری نشود."
      },
      {
        "q": "چرا MD5 و SHA-1 برای رمز عبور مناسب نیستند؟",
        "a": "`MD5` و `SHA-1` بسیار سریع‌اند و مهاجم می‌تواند میلیاردها حدس را ارزان امتحان کند. salt به‌تنهایی سرعت brute force را کم نمی‌کند و collision weakness نیز اعتبار این الگوریتم‌ها را کاهش داده است. TIP: برای password از الگوریتم کند و memory-hard استفاده کنید."
      },
      {
        "q": "bcrypt و Argon2 چه تفاوتی دارند؟",
        "a": "`bcrypt` الگوریتم جاافتاده‌ای با cost قابل‌تنظیم است، اما محدودیت طول ورودی و مقاومت حافظه‌ای کمتری دارد. `Argon2id` برنده Password Hashing Competition و memory-hard است و در برابر GPU دفاع بهتری می‌دهد. - انتخاب پارامترها و کتابخانه معتبر به اندازه نام الگوریتم مهم است."
      },
      {
        "q": "Rate Limiting چیست؟",
        "a": "**Rate Limiting** تعداد درخواست را بر اساس کلیدی مانند کاربر، API key یا IP محدود می‌کند. الگوریتم‌هایی مانند token bucket امکان burst کنترل‌شده می‌دهند و پاسخ معمول `429` است. TIP: IP به‌تنهایی هویت قابل‌اعتمادی نیست و پشت proxy باید headerها فقط از proxy مورداعتماد پذیرفته شوند."
      },
      {
        "q": "چگونه از Brute Force جلوگیری می‌کنید؟",
        "a": "ترکیب rate limit، تأخیر تدریجی، MFA و تشخیص رفتار مشکوک هزینه **brute force** را بالا می‌برد. lockout دائمی بر اساس username می‌تواند ابزار denial-of-service علیه قربانی شود. - پیام خطا نباید وجود یا عدم وجود حساب را افشا کند."
      },
      {
        "q": "Secure Headers مهم کدام‌اند؟",
        "a": "headerهایی مانند `Content-Security-Policy`، `X-Content-Type-Options: nosniff` و `Referrer-Policy` سطح حمله مرورگر را کم می‌کنند. `frame-ancestors` در CSP یا X-Frame-Options از clickjacking دفاع می‌کند. TIP: headerها را با نیاز واقعی برنامه تنظیم و با ابزارهای تست بررسی کنید."
      },
      {
        "q": "چرا HTTPS ضروری است؟",
        "a": "**HTTPS** با TLS محرمانگی، یکپارچگی و احراز هویت سرور را در مسیر شبکه تأمین می‌کند و جلوی شنود یا دست‌کاری Token، Cookie و داده را می‌گیرد. بدون HTTPS حتی احراز هویت قوی هم در برابر Man-in-the-Middle آسیب‌پذیر است. البته HTTPS به‌تنهایی XSS یا Injection را حل نمی‌کند. TIP: redirect اجباری به HTTPS، فعال‌سازی HSTS و مدیریت درست Certificate را در نظر بگیرید."
      },
      {
        "q": "Secrets چگونه مدیریت می‌شوند؟",
        "a": "**Secret** نباید در source control، image یا فایل تنظیمات عمومی commit شود. از secret manager، managed identity و rotation دوره‌ای استفاده کنید و دسترسی را audit کنید. TIP: اگر secret افشا شد، حذف آن از آخرین commit کافی نیست؛ فوراً آن را revoke و جایگزین کنید."
      },
      {
        "q": "اصل Least Privilege چیست؟",
        "a": "**Least Privilege** یعنی هر کاربر و workload فقط حداقل مجوز لازم برای مدت لازم را داشته باشد. account دیتابیس برنامه نباید مالک سرور باشد و pipeline deploy نیز نباید permission نامحدود داشته باشد. - مجوزها را دوره‌ای بازبینی و دسترسی‌های بلااستفاده را حذف کنید."
      },
      {
        "q": "OWASP Top 10 چیست؟",
        "a": "**OWASP Top 10** فهرستی آگاهی‌بخش از ریسک‌های رایج مانند broken access control، injection و security misconfiguration است. این فهرست checklist کامل یا جایگزین threat modeling و تست امنیتی نیست. TIP: کنترل‌ها را بر اساس دارایی‌ها، مسیرهای حمله و ریسک واقعی سیستم اولویت‌بندی کنید."
      },
      {
        "q": "SQL Injection چیست و چگونه جلوگیری می‌شود؟",
        "a": "**SQL Injection** زمانی رخ می‌دهد که ورودی کاربر بخشی از ساختار query شود. query پارامتری و APIهای ORM که parameterization دارند دفاع اصلی‌اند؛ string concatenation حتی با validation خطرناک است. - account دیتابیس را محدود کنید تا اثر exploit نیز کاهش یابد."
      },
      {
        "q": "SSRF چیست؟",
        "a": "**SSRF** مهاجم را قادر می‌کند سرور به مقصدی انتخاب‌شده درخواست بفرستد و شاید به metadata یا شبکه داخلی برسد. allowlist مقصد، resolve و اعتبارسنجی IP، محدودیت redirect و egress filtering دفاع‌های مهم‌اند. TIP: فقط بررسی رشته URL کافی نیست، چون DNS rebinding و encodingهای متفاوت وجود دارند."
      },
      {
        "q": "Open Redirect چیست؟",
        "a": "**Open Redirect** پارامتر مقصد کنترل‌نشده‌ای است که کاربر را از دامنه معتبر به سایت مهاجم می‌فرستد. این ضعف در phishing و گاهی زنجیره حملات OAuth کاربرد دارد. - فقط URL محلی یا allowlist دقیق مقصد را بپذیرید و از مقایسه prefix ساده استفاده نکنید."
      },
      {
        "q": "Insecure Deserialization چه خطری دارد؟",
        "a": "deserialization داده غیرقابل‌اعتماد به typeهای دلخواه می‌تواند اجرای کد، تغییر state یا حمله DoS ایجاد کند. polymorphic type handling را محدود و قرارداد DTO را صریح تعریف کنید. TIP: هرگز داده client را صرفاً به دلیل امضا یا encoding، امن فرض نکنید."
      },
      {
        "q": "Mass Assignment چیست؟",
        "a": "**Mass Assignment** زمانی است که تمام فیلدهای ورودی خودکار روی entity bind می‌شوند و مهاجم ویژگی‌ای مانند `IsAdmin` را تغییر می‌دهد. DTOهای مخصوص هر operation و mapping صریح، سطح قابل‌تغییر را محدود می‌کنند. - authorization فیلدهای حساس را در سمت سرور اعمال کنید."
      },
      {
        "q": "Security Logging چه ملاحظاتی دارد؟",
        "a": "رویدادهایی مانند login ناموفق، تغییر نقش و دسترسی ممنوع باید با زمان و correlation مناسب ثبت شوند. log نباید password، token، اطلاعات کارت یا داده شخصی غیرضروری را ذخیره کند. TIP: alert و retention امن لازم است؛ log بدون پایش فقط هزینه ذخیره‌سازی است."
      },
      {
        "q": "Threat Modeling چیست؟",
        "a": "**Threat Modeling** دارایی‌ها، trust boundaryها، مهاجمان و مسیرهای سوءاستفاده را پیش از حادثه بررسی می‌کند. چارچوبی مانند `STRIDE` کمک می‌کند تهدیدها منظم شناسایی و کنترل‌ها اولویت‌بندی شوند. - مدل را با تغییر معماری و integrationها به‌روز کنید."
      }
    ]
  },
  {
    "title": "Authentication و Identity در ASP.NET Core",
    "desc": "پرسش‌های احراز هویت، مجوزدهی، Identity و پروتکل‌های استاندارد",
    "questions": [
      {
        "q": "Cookie Authentication در ASP.NET Core چگونه کار می‌کند؟",
        "a": "middleware پس از login یک authentication ticket را محافظت کرده و در **cookie** قرار می‌دهد. مرورگر cookie را در requestهای بعدی می‌فرستد و handler یک `ClaimsPrincipal` می‌سازد. TIP: گزینه‌های `HttpOnly`، `Secure`، `SameSite` و expiration را متناسب با جریان برنامه تنظیم کنید."
      },
      {
        "q": "ASP.NET Core Identity چیست؟",
        "a": "**Identity** چارچوب مدیریت کاربر، password، role، claim، token و external login است. کلاس‌هایی مانند `UserManager<TUser>` و `SignInManager<TUser>` عملیات استاندارد و کنترل‌های امنیتی را فراهم می‌کنند. - Identity یک پروتکل OAuth server نیست و برای صدور توکن استاندارد ممکن است authorization server جدا لازم باشد."
      },
      {
        "q": "Claim، Role و Policy چه تفاوتی دارند؟",
        "a": "**Claim** گزاره‌ای درباره هویت مانند department است و role یک نوع گروه‌بندی مجوز محسوب می‌شود. **Policy** می‌تواند چند requirement را روی claim، role یا منطق سفارشی ترکیب کند. TIP: برای قواعد پیچیده و دامنه‌ای، policy از شرط‌های پراکنده `if` قابل نگهداری‌تر است."
      },
      {
        "q": "AddAuthentication و schemeها چه نقشی دارند؟",
        "a": "`AddAuthentication` سرویس‌های احراز هویت و schemeهای پیش‌فرض authenticate، challenge و forbid را پیکربندی می‌کند. هر scheme یک handler مانند Cookie یا JwtBearer را به نام مشخص ثبت می‌کند. - در برنامه چند scheme‌ای، scheme درست را صریح در policy یا با policy scheme انتخاب کنید."
      },
      {
        "q": "Authenticate، Challenge و Forbid چه تفاوتی دارند؟",
        "a": "`Authenticate` تلاش می‌کند هویت request را از scheme بسازد. `Challenge` برای کاربر احرازنشده معمولاً `401` یا redirect به login تولید می‌کند، ولی `Forbid` برای کاربر شناخته‌شده بدون مجوز معمولاً `403` می‌دهد. TIP: تفاوت 401 و 403 را حفظ کنید تا رفتار client و audit دقیق باشد."
      },
      {
        "q": "ClaimsPrincipal و ClaimsIdentity چیستند؟",
        "a": "`ClaimsIdentity` یک هویت با authentication type و مجموعه claimهاست. `ClaimsPrincipal` می‌تواند یک یا چند identity داشته باشد و در `HttpContext.User` قرار می‌گیرد. - claimهای دریافتی از provider را پیش از استفاده در authorization از نظر issuer و mapping کنترل کنید."
      },
      {
        "q": "Policy-Based Authorization چگونه کار می‌کند؟",
        "a": "یک policy شامل یک یا چند `IAuthorizationRequirement` است و همه requirementهای لازم باید موفق شوند. handlerها با `AuthorizationHandler<TRequirement>` منطق ارزیابی را اجرا می‌کنند. TIP: policy را با `RequireAuthorization` روی endpoint اعمال کنید تا endpoint فراموش‌شده ناخواسته public نماند."
      },
      {
        "q": "Authorization Handler سفارشی چه زمانی لازم است؟",
        "a": "وقتی مجوز به resource، مالکیت یا قاعده دامنه وابسته است، handler سفارشی مناسب است. handler می‌تواند resource جاری را بررسی و در صورت تحقق شرط `context.Succeed(requirement)` را فراخوانی کند. - handler نباید با `Fail()` مانع موفقیت handlerهای جایگزین شود، مگر شکست قطعی مدنظر باشد."
      },
      {
        "q": "Resource-Based Authorization چیست؟",
        "a": "**Resource-Based Authorization** تصمیم را بر اساس شیء واقعی مانند document یا order می‌گیرد. چون resource معمولاً پس از route resolution بارگذاری می‌شود، از `IAuthorizationService.AuthorizeAsync(user, resource, policy)` استفاده می‌شود. TIP: ابتدا فقط داده لازم را بخوانید و سپس مجوز عملیات را ارزیابی کنید."
      },
      {
        "q": "OAuth 2.0 و OpenID Connect چه تفاوتی دارند؟",
        "a": "**OAuth 2.0** چارچوب delegation برای دسترسی به API است و به‌تنهایی پروتکل login نیست. **OpenID Connect** لایه identity روی OAuth است و `id_token` و UserInfo را تعریف می‌کند. - access token را برای API و id token را برای client مصرف کنید."
      },
      {
        "q": "Authorization Code Flow با PKCE چیست؟",
        "a": "client کاربر را برای login هدایت می‌کند و پس از callback یک code کوتاه‌عمر دریافت می‌کند. با **PKCE**، code فقط همراه `code_verifier` اولیه قابل تبدیل به token است و سرقت code کم‌اثر می‌شود. TIP: این جریان برای SPA، mobile و برنامه‌های وب انتخاب استاندارد است."
      },
      {
        "q": "Client Credentials Flow چه کاربردی دارد؟",
        "a": "**Client Credentials** برای ارتباط machine-to-machine بدون کاربر نهایی است. سرویس با client authentication توکن مربوط به هویت خودش را دریافت می‌کند و scopeهای محدود دارد. - از این flow برای impersonation کاربر استفاده نکنید و secret یا private key را rotate کنید."
      },
      {
        "q": "چرا Implicit Flow دیگر توصیه نمی‌شود؟",
        "a": "در **Implicit Flow** token مستقیماً از authorization endpoint به مرورگر برمی‌گشت و امکان حفاظت مناسب از تبادل code وجود نداشت. اکنون Authorization Code همراه PKCE امنیت و کنترل بهتری فراهم می‌کند. TIP: مهاجرت فقط تغییر response type نیست و redirect URI و token storage نیز باید بازبینی شوند."
      },
      {
        "q": "External Login در ASP.NET Core چگونه پیاده می‌شود؟",
        "a": "providerهایی مانند Google با یک scheme خارجی ثبت و challenge می‌شوند و پس از callback claimهای کاربر برمی‌گردند. برنامه معمولاً external identity را به حساب محلی link می‌کند و سپس cookie داخلی خود را صادر می‌کند. - ایمیل را فقط وقتی provider آن را verified اعلام کرده برای اتصال حساب قابل‌اعتماد بدانید."
      },
      {
        "q": "Token Validation در JwtBearer شامل چه مواردی است؟",
        "a": "handler باید signature، issuer، audience، lifetime و الگوریتم مجاز را بررسی کند. تنظیمات `TokenValidationParameters` نباید validationهای اصلی را برای راحتی غیرفعال کند. TIP: key rotation را از metadata معتبر پشتیبانی کنید و clock skew را کوچک و آگاهانه تنظیم کنید."
      },
      {
        "q": "Data Protection در ASP.NET Core چه نقشی دارد؟",
        "a": "**Data Protection** داده‌هایی مانند authentication cookie و anti-forgery token را encrypt و sign می‌کند. در محیط چند instance‌ای، key ring باید مشترک، پایدار و با دسترسی محدود باشد. - از بین رفتن keyها می‌تواند همه sessionها را باطل کند و افشای آن‌ها جعل cookie را ممکن سازد."
      },
      {
        "q": "Security Stamp در ASP.NET Core Identity چیست؟",
        "a": "`SecurityStamp` مقداری است که با تغییرهای امنیتی حساب مانند password عوض می‌شود. validator دوره‌ای stamp داخل cookie را با مقدار ذخیره‌شده مقایسه و session قدیمی را رد می‌کند. TIP: فاصله validation تعادلی میان سرعت ابطال و تعداد queryهای دیتابیس است."
      },
      {
        "q": "چگونه چند Authentication Scheme را مدیریت می‌کنید؟",
        "a": "ممکن است UI از cookie و API از `JwtBearer` استفاده کند و هر دو scheme هم‌زمان ثبت شوند. policy یا `[Authorize(AuthenticationSchemes = ...)]` تعیین می‌کند کدام handler هویت را بسازد. - از default اشتباه پرهیز کنید، چون می‌تواند به redirect HTML برای API یا پذیرش هویت ناخواسته منجر شود."
      }
    ]
  },
  {
    "title": "تست و کیفیت",
    "desc": "اصول طراحی تست، تست‌پذیری و تضمین کیفیت در ASP.NET Core",
    "questions": [
      {
        "q": "تفاوت Unit Test و Integration Test چیست؟",
        "a": "**Unit Test** یک واحد کوچک را سریع و جدا از زیرساخت بررسی می‌کند. **Integration Test** همکاری چند جزء واقعی مانند API، دیتابیس و middleware را می‌سنجد. TIP: تعداد زیادی تست واحد و تعداد کمتری تست یکپارچه هدفمند نگه دارید."
      },
      {
        "q": "Mock و Stub چه تفاوتی دارند؟",
        "a": "**Stub** پاسخ از پیش تعیین‌شده می‌دهد تا مسیر تست کنترل شود. **Mock** علاوه بر پاسخ، تعامل‌هایی مثل تعداد و ترتیب فراخوانی را نیز تأیید می‌کند. TIP: فقط رفتارهای مهم را verify کنید تا تست شکننده نشود."
      },
      {
        "q": "Fake در تست چیست؟",
        "a": "**Fake** پیاده‌سازی ساده اما اجرایی یک وابستگی است، مثل repository درون‌حافظه‌ای. برخلاف mock معمولاً منطق و state واقعی محدودی دارد. TIP: رفتار Fake باید با قرارداد نسخه production سازگار بماند."
      },
      {
        "q": "Test Coverage چه چیزی را نشان می‌دهد؟",
        "a": "Coverage درصد خطوط یا شاخه‌های اجراشده توسط تست‌ها را نشان می‌دهد، نه کیفیت assertionها را. پوشش بالا می‌تواند همچنان با تست‌های بی‌ارزش همراه باشد. TIP: روی مسیرهای پرریسک و **branch coverage** تمرکز کنید."
      },
      {
        "q": "چگونه سرویس خارجی را تست می‌کنید؟",
        "a": "در تست واحد، مرز سرویس را پشت interface قرار داده و stub یا mock می‌کنیم. در تست یکپارچه، fake server مانند `WireMock.Net` پاسخ HTTP کنترل‌شده می‌دهد. TIP: timeout، retry و پاسخ‌های خطا را هم آزمایش کنید."
      },
      {
        "q": "Contract Testing چیست؟",
        "a": "Contract Test سازگاری درخواست و پاسخ بین provider و consumer را بررسی می‌کند. این روش تغییرات breaking را پیش از deployment آشکار می‌سازد. TIP: قراردادها را در CI هر دو سرویس اجرا و نسخه‌بندی کنید."
      },
      {
        "q": "Integration Test در ASP.NET Core چگونه نوشته می‌شود؟",
        "a": "معمولاً برنامه با `WebApplicationFactory<Program>` در یک host آزمایشی بالا می‌آید. سپس با `HttpClient` مسیر کامل routing، middleware و serialization تست می‌شود. TIP: زیرساخت حساس را تا حد ممکن واقعی نگه دارید."
      },
      {
        "q": "WebApplicationFactory چه کاربردی دارد؟",
        "a": "`WebApplicationFactory` سرور تست درون‌پردازه‌ای برای برنامه ASP.NET Core می‌سازد. با آن می‌توان DI، configuration و authentication را برای سناریوی تست جایگزین کرد. TIP: custom factory مشترک، setup تکراری را کم می‌کند."
      },
      {
        "q": "Test Isolation یعنی چه؟",
        "a": "هر تست باید مستقل از ترتیب اجرا و نتیجه تست‌های دیگر باشد. state مشترک، رکورد دیتابیس و clock سراسری باید کنترل یا بازنشانی شوند. TIP: تست‌ها را تصادفی و موازی اجرا کنید تا وابستگی پنهان پیدا شود."
      },
      {
        "q": "Flaky Test چیست و چگونه رفع می‌شود؟",
        "a": "تست flaky بدون تغییر کد گاهی موفق و گاهی ناموفق می‌شود. زمان واقعی، race condition، شبکه و داده مشترک علت‌های متداول‌اند. TIP: به‌جای retry کور، علت را ثبت و تست را قرنطینه و اصلاح کنید."
      },
      {
        "q": "با تست‌های کند چه می‌کنید؟",
        "a": "ابتدا زمان هر تست را اندازه‌گیری و بخش کند را مشخص می‌کنیم. setup مشترک امن، parallelization و کاهش I/O غیرضروری کمک می‌کند. TIP: مجموعه‌های unit، integration و E2E را در pipelineهای مناسب جدا کنید."
      },
      {
        "q": "ویژگی‌های یک تست خوب چیست؟",
        "a": "تست خوب **سریع، مستقل، تکرارپذیر و خوانا** است. نام تست باید رفتار و نتیجه مورد انتظار را توضیح دهد. TIP: هر تست فقط یک دلیل روشن برای شکست داشته باشد."
      },
      {
        "q": "Arrange-Act-Assert چیست؟",
        "a": "الگوی **AAA** ساختار استاندارد تست واحد است: در `Arrange` داده و وابستگی‌ها آماده می‌شوند، در `Act` فقط یک رفتار هدف اجرا می‌شود و در `Assert` نتیجه و اثر جانبی بررسی می‌گردد. این جداسازی باعث می‌شود تست کوتاه، خوانا و قابل‌نگهداری بماند. TIP: اگر بخش Act بیش از یک عمل معنی‌دار دارد، معمولاً تست بیش از حد بزرگ شده است."
      },
      {
        "q": "Snapshot Testing چه زمانی مناسب است؟",
        "a": "Snapshot خروجی بزرگ و پایدار مانند JSON یا HTML را با نسخه تأییدشده مقایسه می‌کند. تغییر عمدی باید با بازبینی انسانی snapshot جدید همراه باشد. TIP: داده‌های ناپایدار مثل timestamp را پیش از مقایسه حذف کنید."
      },
      {
        "q": "Brittle Test چیست؟",
        "a": "تست شکننده با refactor بی‌اثر بر رفتار عمومی می‌شکند. assertion روی جزئیات داخلی و mockهای بیش‌ازحد علت رایج است. TIP: خروجی و قرارداد قابل مشاهده را تست کنید، نه نحوه پیاده‌سازی را."
      },
      {
        "q": "E2E Test چه مزایا و هزینه‌ای دارد؟",
        "a": "E2E جریان واقعی کاربر را از ورودی تا زیرساخت نهایی بررسی می‌کند. اعتماد بالایی می‌دهد اما کند، گران و عیب‌یابی آن دشوار است. TIP: فقط مسیرهای حیاتی کسب‌وکار را E2E کنید."
      },
      {
        "q": "داده تست را چگونه مدیریت می‌کنید؟",
        "a": "برای هر تست داده کمینه و صریح با builder یا fixture می‌سازیم. داده باید مستقل، قابل پاک‌سازی و بدون وابستگی به محیط باشد. TIP: شناسه‌های یکتا مانع تداخل اجرای موازی می‌شوند."
      },
      {
        "q": "تست هم‌زمانی چگونه انجام می‌شود؟",
        "a": "چند عملیات را هماهنگ و هم‌زمان روی state مشترک اجرا می‌کنیم. نتیجه باید invariant، قفل‌گذاری یا optimistic concurrency را تأیید کند. TIP: race را با barrier کنترل کنید، نه با `Task.Delay` تصادفی."
      },
      {
        "q": "کیفیت تست‌ها در CI چگونه کنترل می‌شود؟",
        "a": "CI باید build، تست‌ها و گزارش coverage را در محیط تمیز اجرا کند. شکست تست، lint یا تحلیل ایستا باید merge را متوقف سازد. TIP: نتیجه و artifactها را برای عیب‌یابی نگه دارید."
      },
      {
        "q": "Quality Gate و Testcontainers چه نقشی دارند؟",
        "a": "**Quality Gate** حداقل‌های قابل‌اندازه‌گیری مانند تست موفق و نبود آسیب‌پذیری بحرانی را الزام می‌کند. `Testcontainers` دیتابیس یا broker واقعی و موقت را برای تست بالا می‌آورد. TIP: gate را واقع‌بینانه تنظیم کنید تا تیم آن را دور نزند."
      },
      {
        "q": "Mutation Testing چیست؟",
        "a": "Mutation Testing تغییرات کوچک عمدی در کد ایجاد می‌کند و انتظار دارد تست‌ها شکست بخورند. mutant زنده نشان می‌دهد assertionها رفتار را کافی کنترل نکرده‌اند. TIP: آن را دوره‌ای روی منطق حیاتی اجرا کنید چون پرهزینه است."
      },
      {
        "q": "چگونه زمان و تاریخ را تست‌پذیر می‌کنید؟",
        "a": "دسترسی مستقیم به `DateTime.UtcNow` کنترل تست را کم می‌کند. در .NET جدید می‌توان `TimeProvider` را تزریق و در تست زمان را ثابت کرد. TIP: timezone و مرز تغییر روز را هم پوشش دهید."
      },
      {
        "q": "آیا باید متد private را مستقیم تست کرد؟",
        "a": "معمولاً متد private از طریق رفتار public پوشش داده می‌شود. نیاز شدید به تست مستقیم می‌تواند علامت مسئولیت زیاد کلاس باشد. TIP: منطق مستقل را به یک سرویس کوچک با API عمومی استخراج کنید."
      },
      {
        "q": "تست پارامتری چه مزیتی دارد؟",
        "a": "تست پارامتری یک رفتار را با ورودی‌های متعدد بدون تکرار کد می‌سنجد. در xUnit از `[Theory]` و `[InlineData]` استفاده می‌شود. TIP: نام و داده‌ها را طوری انتخاب کنید که شکست قابل تشخیص باشد."
      },
      {
        "q": "تفاوت State Verification و Behavior Verification چیست؟",
        "a": "State Verification نتیجه نهایی یا تغییر وضعیت را بررسی می‌کند. Behavior Verification تعامل با وابستگی را با mock می‌سنجد. TIP: حالت نهایی را ترجیح دهید و رفتار را فقط برای side effect مهم verify کنید."
      }
    ]
  },
  {
    "title": "Monitoring، Logging و Performance",
    "desc": "مشاهده‌پذیری، عیب‌یابی و بهینه‌سازی سامانه‌های ASP.NET Core",
    "questions": [
      {
        "q": "سطوح Logging چه هستند و چگونه انتخاب می‌شوند؟",
        "a": "`Trace` و `Debug` برای جزئیات توسعه، `Information` برای رخداد عادی و `Warning` برای وضعیت غیرعادی‌اند. `Error` شکست قابل مدیریت و `Critical` خرابی جدی سرویس را نشان می‌دهد. TIP: سطح را بر اساس اقدام موردنیاز اپراتور انتخاب کنید."
      },
      {
        "q": "Structured Logging چیست؟",
        "a": "در Structured Logging داده‌ها به‌صورت فیلدهای قابل جست‌وجو ثبت می‌شوند. مثلاً `LogInformation(\"Order {OrderId}\", id)` بهتر از الحاق رشته است. TIP: نام propertyها را ثابت و معنایی نگه دارید."
      },
      {
        "q": "Correlation ID چیست؟",
        "a": "Correlation ID شناسه مشترک تمام logهای یک درخواست یا جریان توزیع‌شده است. middleware آن را دریافت یا تولید کرده و به فراخوانی‌های بعدی منتقل می‌کند. TIP: از `traceparent` استاندارد W3C برای tracing توزیع‌شده استفاده کنید."
      },
      {
        "q": "APM چه کمکی می‌کند؟",
        "a": "APM latency، خطا، throughput و dependency callها را در سطح برنامه جمع می‌کند. با آن می‌توان مسیر کند را میان چند سرویس دنبال کرد. TIP: sampling و حذف داده حساس را از ابتدا تنظیم کنید."
      },
      {
        "q": "Health Check در ASP.NET Core چیست؟",
        "a": "Health Check وضعیت آماده‌بودن برنامه و وابستگی‌های حیاتی را اعلام می‌کند. endpoint با `AddHealthChecks` و `MapHealthChecks` ارائه می‌شود. TIP: liveness را سبک و readiness را وابسته به سرویس‌های ضروری نگه دارید."
      },
      {
        "q": "Metrics و Tracing چه تفاوتی دارند؟",
        "a": "Metrics اعداد تجمیعی کم‌هزینه مانند نرخ درخواست و latency را نشان می‌دهد. Tracing مسیر یک درخواست خاص را میان عملیات و سرویس‌ها دنبال می‌کند. TIP: metric برای کشف و trace برای توضیح مشکل مناسب است."
      },
      {
        "q": "چگونه bottleneck را پیدا می‌کنید؟",
        "a": "ابتدا با metric و trace مشخص می‌کنیم زمان در CPU، دیتابیس، شبکه یا lock مصرف شده است. سپس profiler و query plan فرضیه را با داده تأیید می‌کنند. TIP: پیش از بهینه‌سازی baseline قابل تکرار بسازید."
      },
      {
        "q": "چه زمانی از Cache استفاده می‌کنید؟",
        "a": "Cache برای داده پرتکرار، نسبتاً پایدار و پرهزینه مناسب است. هزینه miss، stale data و invalidation باید از سود latency کمتر باشد. TIP: ابتدا TTL و سقف حافظه را مشخص کنید."
      },
      {
        "q": "Memory Cache و Redis چه تفاوتی دارند؟",
        "a": "`IMemoryCache` سریع و محلی است اما میان instanceها مشترک نیست. Redis cache توزیع‌شده و مناسب scale-out است ولی هزینه شبکه و عملیات دارد. TIP: برای session یا داده مشترک چند instance از cache توزیع‌شده استفاده کنید."
      },
      {
        "q": "Cache Invalidation چگونه انجام می‌شود؟",
        "a": "راه‌های رایج TTL، حذف هنگام write و versioned key هستند. انتخاب به میزان تحمل داده stale و مالکیت داده بستگی دارد. TIP: **cache-aside** ساده است اما race و stampede را مدیریت کنید."
      },
      {
        "q": "چگونه Memory Leak را تشخیص می‌دهید؟",
        "a": "رشد پایدار heap پس از GC و افزایش working set نشانه بررسی است. dump حافظه و ابزارهایی مثل `dotnet-gcdump` مسیر reference را نشان می‌دهند. TIP: event handler، cache بدون سقف و singletonهای نگهدارنده object را بررسی کنید."
      },
      {
        "q": "CPU-bound و I/O-bound چه تفاوتی دارند؟",
        "a": "کار CPU-bound زمان پردازنده مصرف می‌کند و شاید از parallelism محدود سود ببرد. کار I/O-bound منتظر شبکه یا دیسک است و باید با `async/await` thread را آزاد کند. TIP: `Task.Run` درمان عملیات I/O نیست."
      },
      {
        "q": "زمان پاسخ درخواست را چگونه اندازه می‌گیرید؟",
        "a": "middleware می‌تواند با `Stopwatch` latency کل درخواست را ثبت کند. tracing زمان هر span مانند دیتابیس و HTTP را جدا نشان می‌دهد. TIP: به percentileهای `p95` و `p99` نگاه کنید، نه فقط میانگین."
      },
      {
        "q": "Over-fetching و Under-fetching چیست؟",
        "a": "Over-fetching داده بیش از نیاز و under-fetching داده ناکافی با round trip اضافه ایجاد می‌کند. DTO هدفمند و projection این مشکل را در REST کاهش می‌دهد. TIP: payload و تعداد درخواست را با رفتار واقعی client اندازه بگیرید."
      },
      {
        "q": "Pagination را چگونه طراحی می‌کنید؟",
        "a": "Offset pagination ساده است اما در صفحات عمیق کند و در داده متغیر ناپایدار می‌شود. Keyset pagination با cursor روی ترتیب یکتا عملکرد پایدارتری دارد. TIP: اندازه صفحه را محدود و ترتیب را قطعی کنید."
      },
      {
        "q": "مشکل N+1 چیست؟",
        "a": "N+1 یعنی یک query اولیه و سپس یک query برای هر ردیف اجرا شود. projection، join یا eager loading هدفمند تعداد round tripها را کم می‌کند. TIP: SQL تولیدشده EF Core را در محیط تست مشاهده کنید."
      },
      {
        "q": "چگونه query دیتابیس را بهینه می‌کنید؟",
        "a": "ابتدا query کند و execution plan آن را ثبت می‌کنیم. index مناسب، projection محدود و حذف scan غیرضروری معمولاً مؤثر است. TIP: هر index هزینه write و فضا دارد، پس با workload واقعی بسنجید."
      },
      {
        "q": "Response Compression چه زمانی مفید است؟",
        "a": "فشرده‌سازی برای payload متنی بزرگ پهنای باند را کم می‌کند. برای فایل از قبل فشرده یا پاسخ کوچک ممکن است هزینه CPU بیشتر از سود باشد. TIP: HTTPS، MIME type و پشتیبانی client را درست تنظیم کنید."
      },
      {
        "q": "Rate Limiting چه نقشی در کارایی دارد؟",
        "a": "Rate Limiting مصرف یک client را محدود و از اشباع منابع جلوگیری می‌کند. ASP.NET Core الگوریتم‌هایی مانند token bucket و concurrency limiter دارد. TIP: پاسخ `429` و سیاست retry روشن به client بدهید."
      },
      {
        "q": "چگونه Log پرحجم را کنترل می‌کنید؟",
        "a": "سطح مناسب، sampling و aggregation حجم log را کاهش می‌دهد. رخدادهای تکراری نباید در loop با سطح بالا ثبت شوند. TIP: بودجه نگهداری و retention را بر اساس ارزش عملیاتی تعیین کنید."
      },
      {
        "q": "OpenTelemetry چیست؟",
        "a": "OpenTelemetry استاندارد و SDK مشترک برای metrics، logs و traces است. instrumentation برنامه را از vendor مقصد جدا می‌کند. TIP: resource attributeهایی مثل service name و environment را یکسان تعریف کنید."
      },
      {
        "q": "SLA، SLO و SLI چه تفاوتی دارند؟",
        "a": "SLI اندازه‌گیری واقعی مانند درصد درخواست موفق است. SLO هدف داخلی همان شاخص و SLA تعهد قراردادی همراه پیامد است. TIP: alert را بر اساس مصرف error budget تنظیم کنید."
      },
      {
        "q": "چگونه Cache Stampede را مهار می‌کنید؟",
        "a": "در stampede چند درخواست هم‌زمان پس از انقضا داده را دوباره محاسبه می‌کنند. lock تک‌پرواز، TTL تصادفی و refresh زودهنگام بار را پخش می‌کند. TIP: هنگام شکست منبع، stale data کنترل‌شده می‌تواند بهتر از outage باشد."
      },
      {
        "q": "برای Performance Test چه معیارهایی مهم‌اند؟",
        "a": "throughput، latency percentile، error rate و مصرف منابع معیارهای اصلی‌اند. سناریو باید warm-up، بار پایدار و اوج واقع‌بینانه داشته باشد. TIP: نتیجه را با baseline و SLO مقایسه کنید."
      },
      {
        "q": "اگر بخواهید یک سیستم بانکی پرتراکنش را طراحی کنید، مهم‌ترین ملاحظات شما چیست؟",
        "a": "اولویت با **صحت مالی** است: دفترکل دوطرفه (double-entry ledger)، تراکنش اتمیک، کنترل هم‌زمانی روی حساب، و `idempotency key` برای جلوگیری از دوباره‌کار شدن انتقال. سپس جداسازی نوشتن‌های حیاتی از خواندن‌های گزارش، الگوی Outbox برای انتشار رویداد، و Audit Log تغییرناپذیر ضروری است. از نظر عملیاتی باید Latency، Throughput، نرخ خطای مالی، Reconciliation دوره‌ای، و Disaster Recovery اندازه‌گیری و تمرین شوند. TIP: در مصاحبه بگویید Consistency مالی مهم‌تر از Microservices زودرس است؛ Modular Monolith یا سرویس‌های محدود با مرزهای واضح اغلب نقطه شروع بهتر است."
      }
    ]
  },
  {
    "title": "Messaging و Event Brokers",
    "desc": "صف، رویداد، تحویل قابل‌اعتماد و پردازش پیام در سامانه‌های توزیع‌شده",
    "questions": [
      {
        "q": "RabbitMQ و Kafka چه تفاوتی دارند؟",
        "a": "RabbitMQ broker صف‌محور با routing انعطاف‌پذیر و ack پیام است. Kafka یک log توزیع‌شده با retention و replay پرقدرت برای جریان داده است. TIP: انتخاب را بر اساس الگوی مصرف و نیاز replay انجام دهید، نه محبوبیت."
      },
      {
        "q": "Queue و Topic چه تفاوتی دارند؟",
        "a": "در queue معمولاً هر پیام توسط یکی از workerهای رقیب پردازش می‌شود. در topic هر subscription می‌تواند نسخه مستقل پیام را دریافت کند. TIP: برای fan-out رویداد از topic و برای توزیع کار از queue استفاده کنید."
      },
      {
        "q": "At-most-once و At-least-once چیست؟",
        "a": "At-most-once پیام را حداکثر یک‌بار می‌رساند اما احتمال گم‌شدن دارد. At-least-once از گم‌شدن جلوگیری می‌کند ولی duplicate ممکن است. TIP: اغلب at-least-once همراه consumer idempotent انتخاب عملی است."
      },
      {
        "q": "Exactly-once واقعاً ممکن است؟",
        "a": "Exactly-once سرتاسری میان چند سیستم بسیار دشوار و معمولاً پرهزینه است. برخی brokerها آن را در محدوده مشخص و با transaction فراهم می‌کنند. TIP: اثر دقیقاً یک‌بار را با idempotency و deduplication طراحی کنید."
      },
      {
        "q": "MassTransit و NServiceBus چه هستند؟",
        "a": "هر دو abstraction سطح بالا برای messaging در .NET ارائه می‌کنند. retry، saga، routing و integration با brokerها را ساده‌تر می‌سازند. TIP: مدل هزینه، پشتیبانی و نیازهای عملیاتی را پیش از انتخاب مقایسه کنید."
      },
      {
        "q": "Outbox Pattern چیست؟",
        "a": "Outbox تغییر business و رکورد پیام را در یک transaction دیتابیس ذخیره می‌کند. worker بعداً پیام ثبت‌شده را با اطمینان به broker می‌فرستد. TIP: انتشار تکراری ممکن است، پس consumer همچنان idempotent باشد."
      },
      {
        "q": "Inbox Pattern چیست؟",
        "a": "Inbox شناسه پیام‌های دریافت‌شده را پیش از اعمال اثر ذخیره می‌کند. پیام تکراری با مشاهده شناسه قبلی نادیده گرفته می‌شود. TIP: retention رکوردهای inbox را متناسب با پنجره تکرار تعیین کنید."
      },
      {
        "q": "Idempotent Consumer چگونه ساخته می‌شود؟",
        "a": "پردازش چندباره یک پیام باید همان نتیجه یک‌بار را ایجاد کند. شناسه یکتا، unique constraint یا عملیات upsert راه‌های متداول‌اند. TIP: ثبت deduplication و تغییر business را اتمیک کنید."
      },
      {
        "q": "Poison Message چیست؟",
        "a": "Poison message پیامی است که با retry معمول همچنان شکست می‌خورد. تکرار بی‌پایان آن queue را مسدود و منابع را مصرف می‌کند. TIP: پس از تعداد محدود تلاش آن را به DLQ منتقل کنید."
      },
      {
        "q": "Dead Letter Queue چه کاربردی دارد؟",
        "a": "DLQ پیام‌های منقضی، ردشده یا شکست‌خورده را جدا نگه می‌دارد. تیم می‌تواند علت را بررسی و پس از اصلاح replay کند. TIP: برای عمق DLQ و سن پیام alert بسازید."
      },
      {
        "q": "Retry در مصرف پیام چگونه طراحی می‌شود؟",
        "a": "خطای گذرا با exponential backoff و jitter قابل retry است. خطای validation یا business معمولاً با تکرار حل نمی‌شود. TIP: retry فوری را محدود و retry تأخیری را از worker اصلی جدا کنید."
      },
      {
        "q": "Ordering پیام‌ها چگونه تضمین می‌شود؟",
        "a": "ترتیب سراسری معمولاً throughput و مقیاس‌پذیری را کاهش می‌دهد. partition بر اساس aggregate ID ترتیب محلی مرتبط را حفظ می‌کند. TIP: consumer باید پیام قدیمی یا خارج از ترتیب را تشخیص دهد."
      },
      {
        "q": "Message Broker را چگونه مانیتور می‌کنید؟",
        "a": "عمق queue، consumer lag، نرخ publish و consume و تعداد retry مهم‌اند. سن قدیمی‌ترین پیام اغلب از طول queue معنادارتر است. TIP: alert را با ظرفیت و SLO پردازش هماهنگ کنید."
      },
      {
        "q": "Event و Command چه تفاوتی دارند؟",
        "a": "Command درخواست انجام کار و معمولاً خطاب به یک handler است. Event بیان واقعیتی رخ‌داده و ممکن است چند subscriber داشته باشد. TIP: نام event را گذشته و تغییرناپذیر، مانند `OrderPlaced`، انتخاب کنید."
      },
      {
        "q": "Schema Evolution پیام چگونه مدیریت می‌شود؟",
        "a": "consumer و producer ممکن است هم‌زمان deploy نشوند، پس سازگاری لازم است. افزودن فیلد optional امن‌تر از حذف یا تغییر معنای فیلد است. TIP: schema را نسخه‌بندی و compatibility را در CI بررسی کنید."
      },
      {
        "q": "Saga چیست؟",
        "a": "Saga یک فرایند business چندمرحله‌ای میان سرویس‌ها را هماهنگ می‌کند. شکست با compensating action جبران می‌شود، نه transaction توزیع‌شده طولانی. TIP: state، timeout و مسیرهای جبران را صریح مدل کنید."
      },
      {
        "q": "Backpressure در messaging چیست؟",
        "a": "Backpressure زمانی است که producer سریع‌تر از ظرفیت consumer پیام می‌فرستد. محدودکردن prefetch، scale consumer و rate limit از انباشت کنترل‌نشده جلوگیری می‌کند. TIP: فقط با افزودن worker مشکل دیتابیس پایین‌دست را بدتر نکنید."
      },
      {
        "q": "امنیت پیام‌ها چگونه تأمین می‌شود؟",
        "a": "ارتباط broker باید با TLS و اعتبارنامه کم‌اختیار محافظت شود. داده حساس می‌تواند در سطح payload رمز و دسترسی topic محدود شود. TIP: secret را داخل پیام یا log ثبت نکنید."
      }
    ]
  },
  {
    "title": "Docker و Containers",
    "desc": "بسته‌بندی، اجرای قابل‌تکرار و استقرار ASP.NET Core در محیط کانتینری",
    "questions": [
      {
        "q": "چرا برای ASP.NET Core از Container استفاده می‌کنیم؟",
        "a": "Container برنامه و وابستگی‌های runtime را به‌شکل قابل‌تکرار بسته‌بندی می‌کند. اختلاف محیط توسعه و production کمتر و scale-out ساده‌تر می‌شود. TIP: container را immutable و process را stateless طراحی کنید."
      },
      {
        "q": "Dockerfile مناسب .NET چه بخش‌هایی دارد؟",
        "a": "مرحله build از image مربوط به SDK برای restore و publish استفاده می‌کند. مرحله نهایی فقط runtime سبک و artifactهای publishشده را دارد. TIP: نسخه image پایه را pin و مرتباً patch کنید."
      },
      {
        "q": "Image Layer چیست؟",
        "a": "هر دستور Dockerfile یک لایه cacheشدنی روی image می‌سازد. تغییر یک لایه cache لایه‌های پس از آن را باطل می‌کند. TIP: فایل پروژه را پیش از source کپی کنید تا `dotnet restore` بهتر cache شود."
      },
      {
        "q": "Multi-stage Build چه مزیتی دارد؟",
        "a": "Multi-stage ابزار build را از image نهایی حذف می‌کند. در نتیجه image کوچک‌تر و سطح حمله کمتر می‌شود. TIP: فقط خروجی `dotnet publish` را به مرحله runtime منتقل کنید."
      },
      {
        "q": "docker-compose چه کاربردی دارد؟",
        "a": "Compose چند سرویس مانند API، دیتابیس و Redis را محلی تعریف و اجرا می‌کند. network، volume و environment در یک فایل هماهنگ می‌شوند. TIP: آن را ابزار راحتی توسعه بدانید و secret واقعی commit نکنید."
      },
      {
        "q": "تفاوت Image و Container چیست؟",
        "a": "Image قالب immutable شامل filesystem و metadata اجرا است. Container نمونه درحال‌اجرای همان image با لایه writable موقت است. TIP: داده ماندگار را در volume یا سرویس خارجی نگه دارید."
      },
      {
        "q": "Pod، Service و Deployment در Kubernetes چیستند؟",
        "a": "Pod کوچک‌ترین واحد اجرا و شامل یک یا چند container نزدیک است. Deployment تعداد replica و rollout را مدیریت و Service آدرس پایدار شبکه می‌دهد. TIP: برنامه را به IP یا نام Pod وابسته نکنید."
      },
      {
        "q": "Liveness، Readiness و Startup Probe چه تفاوتی دارند؟",
        "a": "Liveness گیرکردن process را تشخیص و موجب restart می‌شود. Readiness ورود traffic را کنترل و startup برای شروع طولانی فرصت ایجاد می‌کند. TIP: وابستگی خارجی ناپایدار را در liveness قرار ندهید."
      },
      {
        "q": "Configuration در Container چگونه تزریق می‌شود؟",
        "a": "تنظیمات با environment variable، فایل mountشده یا provider خارجی وارد می‌شوند. ASP.NET Core نام‌های تو‌در‌تو را با `__` مانند `Db__Host` می‌خواند. TIP: image یکسان را در همه محیط‌ها نگه دارید."
      },
      {
        "q": "Secret در Container چگونه مدیریت می‌شود؟",
        "a": "Secret نباید در Dockerfile، image یا repository ذخیره شود. orchestrator یا secret manager آن را هنگام اجرا تزریق می‌کند. TIP: دسترسی کمینه، rotation و جلوگیری از logشدن secret ضروری است."
      },
      {
        "q": "چرا Container نباید با root اجرا شود؟",
        "a": "اجرای root در صورت نفوذ دامنه آسیب را افزایش می‌دهد. user غیرممتاز و filesystem فقط‌خواندنی ریسک را کم می‌کند. TIP: مجوز port و مسیرهای writable را پیش از تغییر user بررسی کنید."
      },
      {
        "q": "چگونه حجم Docker Image را کاهش می‌دهید؟",
        "a": "از runtime image مناسب، multi-stage build و `.dockerignore` استفاده می‌کنیم. artifact، cache و ابزار غیرضروری نباید وارد image نهایی شوند. TIP: کاهش اندازه را در برابر نیازهای globalization و diagnostics بسنجید."
      },
      {
        "q": "Volume چه کاربردی دارد؟",
        "a": "Volume داده را مستقل از عمر container نگه می‌دارد. برای فایل موقت shared یا داده محلی لازم می‌شود، هرچند دیتابیس مدیریت‌شده معمولاً بهتر است. TIP: مالکیت، backup و permission volume را مشخص کنید."
      },
      {
        "q": "Graceful Shutdown در Container چگونه است؟",
        "a": "orchestrator ابتدا `SIGTERM` می‌فرستد و مهلتی برای پایان کار می‌دهد. ASP.NET Core باید درخواست جدید نپذیرد و کار جاری را تا حد امن تمام کند. TIP: timeout خاموشی را با طول jobها هماهنگ کنید."
      },
      {
        "q": "چگونه Container را عیب‌یابی می‌کنید؟",
        "a": "ابتدا log، exit code، health و مصرف CPU و memory را بررسی می‌کنیم. سپس configuration، network و eventهای orchestrator مسیر مشکل را روشن می‌کنند. TIP: image production را با نصب دستی ابزار تغییر ندهید؛ artifact تشخیصی بگیرید."
      }
    ]
  },
  {
    "title": "LINQ و کار با داده",
    "desc": "اجرای query، ترجمه عبارت‌ها و جلوگیری از خطاهای رایج دسترسی داده",
    "questions": [
      {
        "q": "Deferred Execution در LINQ چیست؟",
        "a": "بسیاری از queryهای LINQ هنگام تعریف اجرا نمی‌شوند. اجرا با enumeration یا عملیاتی مانند `ToList` آغاز می‌شود. TIP: تغییر منبع پیش از enumeration می‌تواند نتیجه را تغییر دهد."
      },
      {
        "q": "IQueryable و IEnumerable چه تفاوتی دارند؟",
        "a": "`IQueryable` expression را برای provider مانند EF Core نگه می‌دارد تا به SQL ترجمه شود. `IEnumerable` ادامه پردازش را در حافظه و با کد .NET انجام می‌دهد. TIP: filter و projection را پیش از materialization اعمال کنید."
      },
      {
        "q": "Select و SelectMany چه تفاوتی دارند؟",
        "a": "`Select` هر عنصر را به یک خروجی نگاشت می‌کند. `SelectMany` مجموعه‌های تو‌در‌تو را نگاشت و در یک sequence تخت می‌کند. TIP: برای فرزندان همه والدها معمولاً `SelectMany` مناسب است."
      },
      {
        "q": "Join در LINQ چگونه کار می‌کند؟",
        "a": "`Join` دو مجموعه را بر اساس key برابر ترکیب و نتیجه تخت می‌سازد. در `IQueryable` معمولاً به `INNER JOIN` ترجمه می‌شود. TIP: برای left join از `GroupJoin` همراه `DefaultIfEmpty` استفاده کنید."
      },
      {
        "q": "چه pitfallsی در GroupBy وجود دارد؟",
        "a": "`GroupBy` روی داده بزرگ می‌تواند حافظه زیادی مصرف کند. همه شکل‌های grouping پیچیده نیز توسط provider دیتابیس ترجمه نمی‌شوند. TIP: SQL تولیدشده و محل انجام aggregation را بررسی کنید."
      },
      {
        "q": "Expression Tree چیست؟",
        "a": "Expression Tree کد lambda را به ساختار داده قابل بازرسی تبدیل می‌کند. providerهایی مثل EF Core آن را تحلیل و به زبان مقصد ترجمه می‌کنند. TIP: هر متد .NET قابل تبدیل به SQL نیست."
      },
      {
        "q": "چه زمانی AsEnumerable استفاده می‌کنیم؟",
        "a": "`AsEnumerable` ادامه query را از provider به LINQ-to-Objects منتقل می‌کند. وقتی بخش کوچکی قابل ترجمه نیست و داده قبلاً محدود شده مفید است. TIP: استفاده زودهنگام ممکن است کل جدول را به حافظه بیاورد."
      },
      {
        "q": "ToList زودهنگام چه مشکلی ایجاد می‌کند؟",
        "a": "`ToList` query را فوراً اجرا و تمام نتایج را materialize می‌کند. پس از آن filterها در حافظه اجرا و امکان ترکیب SQL از بین می‌رود. TIP: materialization را تا انتهای query به تأخیر بیندازید."
      },
      {
        "q": "Any و Count برای بررسی وجود داده چه تفاوتی دارند؟",
        "a": "`Any` با یافتن اولین مورد می‌تواند متوقف شود. `Count` برای شمارش کامل طراحی شده و ممکن است کار بیشتری انجام دهد. TIP: برای سؤال وجود داشتن از `Any` استفاده کنید."
      },
      {
        "q": "First، Single و نسخه‌های OrDefault چه تفاوتی دارند؟",
        "a": "`First` اولین مورد را می‌گیرد و تعدد را مجاز می‌داند. `Single` دقیقاً یک مورد می‌خواهد و در صورت تعدد خطا می‌دهد. TIP: پسوند `OrDefault` فقط نبود نتیجه را تحمل می‌کند، نه تعدد در `SingleOrDefault`."
      },
      {
        "q": "AsNoTracking چه زمانی مناسب است؟",
        "a": "`AsNoTracking` نگهداری state تغییرات entity را غیرفعال می‌کند. برای query فقط‌خواندنی حافظه و CPU کمتری مصرف می‌شود. TIP: وقتی قرار است entity ذخیره شود tracking را آگاهانه حفظ کنید."
      },
      {
        "q": "چگونه Dynamic Query امن می‌سازید؟",
        "a": "شرط‌ها را با expressionهای پارامتری و whitelist فیلدهای مجاز ترکیب می‌کنیم. ساخت SQL با الحاق ورودی کاربر خطر injection دارد. TIP: query نهایی، محدودیت صفحه و translation آن را تست کنید."
      }
    ]
  },
  {
    "title": "SignalR و Real-time",
    "desc": "ارتباط بلادرنگ، مقیاس‌پذیری و امنیت اتصال‌های طولانی",
    "questions": [
      {
        "q": "SignalR چیست؟",
        "a": "SignalR چارچوب ASP.NET Core برای ارتباط بلادرنگ server و client است. transport مناسب را مذاکره و مدیریت connection و group را ساده می‌کند. TIP: برای notification تعاملی مناسب است، نه جایگزین broker پایدار."
      },
      {
        "q": "Hub در SignalR چیست؟",
        "a": "Hub API سطح بالا برای فراخوانی متد میان client و server است. اتصال‌ها transient هستند و instance هاب برای نگهداری state مناسب نیست. TIP: state را در سرویس خارجی یا دیتابیس نگه دارید."
      },
      {
        "q": "WebSockets و SSE چه تفاوتی دارند؟",
        "a": "WebSocket ارتباط دوطرفه full-duplex روی یک اتصال فراهم می‌کند. SSE یک‌طرفه از server به client و مبتنی بر HTTP است. TIP: نیاز ارتباط برگشتی، proxyها و محدودیت client را در انتخاب لحاظ کنید."
      },
      {
        "q": "SignalR چگونه transport را انتخاب می‌کند؟",
        "a": "client معمولاً negotiation انجام می‌دهد و بهترین transport قابل‌دسترسی را برمی‌گزیند. WebSockets ترجیح دارد و fallbackها در محیط محدود استفاده می‌شوند. TIP: پشتیبانی WebSocket را در proxy و load balancer بررسی کنید."
      },
      {
        "q": "احراز هویت در SignalR چگونه انجام می‌شود؟",
        "a": "اتصال SignalR می‌تواند از cookie یا bearer token استفاده کند. `[Authorize]` روی Hub یا method دسترسی را محدود می‌کند. TIP: مجوز عضویت group را در server بررسی کنید و به نام group اعتماد نکنید."
      },
      {
        "q": "SignalR را چگونه scale-out می‌کنید؟",
        "a": "در چند instance، پیام و اطلاعات اتصال باید میان nodeها هماهنگ شود. Redis backplane یا Azure SignalR Service این انتشار را انجام می‌دهد. TIP: sticky session به‌تنهایی broadcast بین nodeها را حل نمی‌کند."
      },
      {
        "q": "Group در SignalR چیست؟",
        "a": "Group راهی برای ارسال پیام به مجموعه منطقی connectionها است. عضویت معمولاً با قطع اتصال پایدار نمی‌ماند و باید دوباره برقرار شود. TIP: group سازوکار authorization نیست و کنترل دسترسی جدا لازم دارد."
      },
      {
        "q": "Reconnect و از دست رفتن پیام چگونه مدیریت می‌شود؟",
        "a": "client باید automatic reconnect و تغییر connection ID را مدیریت کند. SignalR به‌تنهایی تضمین صف پایدار و replay همه پیام‌ها را نمی‌دهد. TIP: برای پیام حیاتی sequence number، ذخیره پایدار و endpoint جبران در نظر بگیرید."
      }
    ]
  }
]
