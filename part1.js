window.__PART1 = [
  {
    title: "C# و مبانی .NET",
    desc: "پرسش‌های پایه تا پیشرفته زبان C#، سیستم نوع‌ها و کتابخانه‌های اصلی .NET برای مصاحبه‌های ASP.NET Core.",
    questions: [
      {
        q: "تفاوت `class` و `struct` در C# چیست؟",
        a: "`class` یک **نوع ارجاعی** است و معمولاً شیء آن روی Heap نگهداری می‌شود، اما `struct` یک **نوع مقداری** است و داده را مستقیماً در محل استفاده نگه می‌دارد. کپی‌کردن کلاس، مرجع را کپی می‌کند؛ کپی‌کردن ساختار، تمام مقدار را کپی می‌کند. ساختارها وراثت کلاسی و finalizer ندارند و برای داده‌های کوچک، تغییرناپذیر و دارای معنای مقداری مناسب‌اند. بزرگ یا mutable بودن `struct` می‌تواند به کپی‌های پرهزینه و رفتارهای غیرمنتظره منجر شود."
      },
      {
        q: "تفاوت `interface` و `abstract class` چیست؟",
        a: "`interface` یک **قرارداد رفتاری** است و یک نوع می‌تواند چندین interface را پیاده‌سازی کند، درحالی‌که فقط از یک کلاس پایه ارث می‌برد. `abstract class` می‌تواند state، constructor، فیلد و پیاده‌سازی مشترک داشته باشد. اعضای پیش‌فرض interface برای تکامل API مفیدند، اما جای state مشترک کلاس پایه را نمی‌گیرند. وقتی رابطه «هست یک» و کد مشترک دارید abstract class، و برای capability مستقل interface انتخاب مناسب‌تری است."
      },
      {
        q: "کلمه کلیدی `var` چه کاری انجام می‌دهد و آیا نوع را پویا می‌کند؟",
        a: "`var` فقط **استنتاج نوع در زمان کامپایل** است و متغیر همچنان نوع ثابت و strongly typed دارد. مقدار اولیه باید نوع قابل‌تشخیص داشته باشد و پس از تعریف نمی‌توان نوع متغیر را عوض کرد. این ویژگی با `dynamic` متفاوت است؛ خطاهای `dynamic` ممکن است تا زمان اجرا آشکار نشوند. از `var` وقتی نوع از سمت راست واضح است یا نام نوع طولانی است استفاده کنید، نه برای پنهان‌کردن معنای کد."
      },
      {
        q: "تفاوت `==` و `Equals` چیست؟",
        a: "عملگر `==` قابل overload است و رفتار آن به نوع compile-time و پیاده‌سازی عملگر بستگی دارد. متد `Equals` برای **برابری معنایی** طراحی شده و در `object` به‌صورت virtual در دسترس است؛ نوع‌های مقداری معمولاً مقادیرشان را مقایسه می‌کنند. اگر `Equals` را override می‌کنید، باید `GetHashCode` را نیز سازگار پیاده‌سازی کنید، مخصوصاً برای کلیدهای Dictionary. برای مقایسه عمومی بهتر است از `EqualityComparer<T>.Default` استفاده شود."
      },
      {
        q: "تفاوت `const` و `readonly` چیست؟",
        a: "`const` در زمان کامپایل تعیین و مقدار آن در اسمبلی مصرف‌کننده **inline** می‌شود؛ بنابراین فقط برخی نوع‌های ساده را می‌پذیرد. `readonly` در زمان تعریف یا constructor مقدار می‌گیرد و می‌تواند برای هر نوعی باشد. تغییر مقدار public const در یک کتابخانه بدون rebuild مصرف‌کننده ممکن است مقدار قدیمی را حفظ کند. برای مقادیر عمومی قابل‌تغییر بین نسخه‌ها معمولاً `static readonly` امن‌تر است."
      },
      {
        q: "عضو یا کلاس `static` چه ویژگی‌هایی دارد؟",
        a: "عضو static به **خود نوع** تعلق دارد، نه به نمونه، و در کل AppDomain یا process یک state مشترک ایجاد می‌کند. کلاس static قابل نمونه‌سازی و ارث‌بری نیست و همه اعضایش static هستند. state قابل‌تغییر static باید thread-safe باشد و می‌تواند تست‌پذیری و isolation را کاهش دهد. در ASP.NET Core برای state درخواست یا کاربر از static استفاده نکنید."
      },
      {
        q: "تفاوت پارامترهای `ref` و `out` چیست؟",
        a: "هر دو آرگومان را با **ارجاع** عبور می‌دهند و متد می‌تواند متغیر caller را تغییر دهد. متغیر `ref` باید پیش از فراخوانی مقداردهی شده باشد، اما `out` لازم نیست و متد موظف است پیش از خروج آن را مقداردهی کند. `out` برای الگوی `TryParse` مناسب است و `ref` بیشتر برای به‌روزرسانی مقدار موجود کاربرد دارد. استفاده زیاد از آن‌ها می‌تواند API را سخت‌فهم کند؛ اغلب بازگرداندن یک result object روشن‌تر است."
      },
      {
        q: "عملگرهای `is` و `as` چه تفاوتی دارند؟",
        a: "`is` سازگاری نوع را بررسی می‌کند و همراه pattern matching می‌تواند مقدار cast‌شده را همان‌جا بسازد. `as` در cast ناموفق به‌جای exception مقدار `null` می‌دهد و فقط برای نوع‌های ارجاعی یا nullable قابل استفاده است. الگوی `if (value is Customer customer)` معمولاً خواناتر و اتمیک‌تر از `as` به‌همراه null check است. cast مستقیم زمانی مناسب است که ناسازگاری نوع واقعاً یک خطای برنامه‌نویسی باشد."
      },
      {
        q: "Pattern Matching در C# چیست؟",
        a: "Pattern Matching امکان بررسی **نوع، مقدار و شکل داده** را با syntax یکپارچه فراهم می‌کند. الگوهای type، property، relational، list و ترکیب‌های `and`، `or` و `not` شرط‌های پیچیده را خواناتر می‌کنند. compiler در بسیاری موارد exhaustiveness و unreachable pattern را تشخیص می‌دهد. بهتر است patternها کوتاه بمانند؛ منطق دامنه سنگین را داخل یک pattern بسیار بزرگ پنهان نکنید."
      },
      {
        q: "تفاوت `switch` statement و `switch` expression چیست؟",
        a: "`switch` statement برای اجرای چند دستور و control flow مناسب است، اما `switch` expression مستقیماً یک مقدار تولید می‌کند. expression معمولاً کوتاه‌تر، declarative و با pattern matching سازگارتر است. شاخه پیش‌فرض `_` برای پوشش ورودی‌های ناشناخته مهم است، مگر آنکه compiler کامل‌بودن حالت‌ها را تضمین کند. برای side effectهای متعدد، statement خواناتر باقی می‌ماند."
      },
      {
        q: "Nullable Reference Types چه مشکلی را حل می‌کند؟",
        a: "این قابلیت با annotationهایی مانند `string?` و تحلیل جریان، احتمال **NullReferenceException** را در زمان کامپایل کاهش می‌دهد. nullable بودن reference type قرارداد API است، نه تغییر representation در runtime. عملگر `!` فقط هشدار compiler را خاموش می‌کند و null check واقعی انجام نمی‌دهد. بهتر است هشدارها اصلاح شوند و ورودی‌های خارجی نیز در runtime اعتبارسنجی شوند."
      },
      {
        q: "تفاوت Value Type و Reference Type چیست؟",
        a: "متغیر value type خود داده را نگه می‌دارد، ولی متغیر reference type به یک شیء اشاره می‌کند. assignment در نوع مقداری داده را کپی می‌کند و در نوع ارجاعی مرجع را؛ بنابراین دو مرجع می‌توانند یک شیء mutable را ببینند. محل ذخیره‌سازی صرفاً «Stack در برابر Heap» نیست؛ context، escape analysis و JIT مؤثرند. تفاوت اصلی را باید در **semantics کپی و هویت** توضیح داد."
      },
      {
        q: "چرا `string` در C# immutable است؟",
        a: "پس از ساخته‌شدن رشته، محتوای آن تغییر نمی‌کند و عملیات ظاهراً تغییردهنده یک رشته جدید می‌سازند. immutability اشتراک امن، caching hash code و استفاده مطمئن به‌عنوان کلید Dictionary را ممکن می‌کند. الحاق مکرر در حلقه allocation زیادی ایجاد می‌کند؛ در این حالت `StringBuilder` مناسب‌تر است. immutable بودن خود رشته به معنی thread-safe بودن متغیری که مرجع آن را عوض می‌کند نیست."
      },
      {
        q: "چه زمانی `Dictionary<TKey,TValue>` را به‌جای `List<T>` انتخاب می‌کنید؟",
        a: "`Dictionary` برای lookup بر اساس کلید به‌طور میانگین پیچیدگی **O(1)** دارد، درحالی‌که جست‌وجوی خطی در List معمولاً O(n) است. List ترتیب و دسترسی index-based را طبیعی نگه می‌دارد و overhead کمتری برای مجموعه کوچک دارد. کیفیت `GetHashCode` و ثبات کلیدها برای Dictionary حیاتی است. اگر هم ترتیب و هم lookup سریع لازم باشد، ساختار ترکیبی یا collection تخصصی را بررسی کنید."
      },
      {
        q: "تفاوت `IEnumerable<T>`، `ICollection<T>` و `IList<T>` چیست؟",
        a: "`IEnumerable<T>` حداقل قرارداد پیمایش را می‌دهد و ممکن است lazy یا تک‌بارمصرف باشد. `ICollection<T>` قابلیت‌هایی مانند `Count`، افزودن و حذف را اضافه می‌کند و `IList<T>` دسترسی و تغییر بر اساس index را نیز ارائه می‌دهد. API باید **کمترین abstraction لازم** را دریافت کند تا coupling کاهش یابد. برای خروجی فقط‌خواندنی materialized، `IReadOnlyCollection<T>` یا `IReadOnlyList<T>` اغلب قرارداد دقیق‌تری است."
      },
      {
        q: "Delegate و Event چه تفاوتی دارند؟",
        a: "Delegate یک reference type برای اشاره به متدهای دارای signature سازگار و قابل multicast است. Event روی delegate یک لایه **encapsulation** می‌گذارد؛ مصرف‌کننده فقط می‌تواند subscribe یا unsubscribe کند و نمی‌تواند event را از بیرون invoke یا جایگزین کند. publisher مالک انتشار event است و subscriber باید برای جلوگیری از memory leak در عمرهای نامتقارن unsubscribe کند. برای eventهای async باید قرارداد خطا و ترتیب اجرا صریح طراحی شود."
      },
      {
        q: "Lambda Expression چیست و closure چگونه کار می‌کند؟",
        a: "Lambda یک تابع بی‌نام است که می‌تواند به delegate یا expression tree تبدیل شود. اگر متغیر بیرونی را capture کند، compiler معمولاً یک **closure object** می‌سازد و عمر متغیر را افزایش می‌دهد. capture در حلقه‌ها یا مسیرهای داغ ممکن است هم خطای منطقی و هم allocation ایجاد کند. lambdaهای `static` از capture ناخواسته جلوگیری می‌کنند."
      },
      {
        q: "Extension Method چیست؟",
        a: "Extension method یک متد static است که با پارامتر اول دارای `this` اجازه می‌دهد مانند متد نمونه فراخوانی شود. این قابلیت برای افزودن رفتار کمکی بدون تغییر یا ارث‌بری نوع مفید است و LINQ نمونه اصلی آن است. dispatch آن **static** است و نمی‌تواند عضو واقعی private یا virtual به نوع اضافه کند. extensionهای عمومی و مبهم می‌توانند discoverability و resolution را دشوار کنند."
      },
      {
        q: "`record` چه تفاوتی با `class` معمولی دارد؟",
        a: "Record به‌طور پیش‌فرض برای مدل‌های داده با **برابری مقداری**، نمایش مناسب و کپی غیرمخرب با `with` طراحی شده است. `record class` همچنان reference type و `record struct` value type است. propertyهای `init` تغییرناپذیری سطحی ایجاد می‌کنند؛ اشیای mutable داخل record همچنان قابل تغییرند. برای entity دارای identity معمولاً class و برای value object یا DTO اغلب record انتخاب طبیعی‌تری است."
      },
      {
        q: "تفاوت `Tuple` و `ValueTuple` چیست؟",
        a: "`System.Tuple` یک reference type قدیمی است، اما `ValueTuple` یک struct با syntax مختصر مانند `(int Id, string Name)` است. ValueTuple معمولاً allocation heap ندارد و نام اعضا را برای خوانایی در compile-time پشتیبانی می‌کند. برای خروجی محلی و کوچک مناسب است، ولی در API عمومی پیچیده نام معنایی یک type اختصاصی بهتر است. نام اعضای tuple بخشی قابل‌اعتماد از قرارداد runtime یا serialization نیست."
      },
      {
        q: "Boxing و Unboxing چیست و چه هزینه‌ای دارد؟",
        a: "Boxing تبدیل value type به `object` یا یک interface و معمولاً شامل allocation و کپی مقدار روی Heap است. Unboxing استخراج نوع مقداری دقیق از boxed object است و cast ناسازگار exception می‌دهد. در حلقه‌های داغ، boxing پنهان می‌تواند فشار GC ایجاد کند. استفاده از generic collectionها و APIهای generic این هزینه را تا حد زیادی حذف می‌کند."
      },
      {
        q: "Generics چه مزایایی نسبت به استفاده از `object` دارند؟",
        a: "Generics **type safety در زمان کامپایل**، حذف castهای اضافی و کاهش boxing برای value typeها را فراهم می‌کنند. constraintهایی مانند `where T : class`, `new()` یا interface قابلیت‌های مجاز T را مشخص می‌کنند. runtime برای reference typeها می‌تواند کد را share کند و برای value typeها specialization بسازد. طراحی constraint دقیق، API را هم سریع‌تر و هم شفاف‌تر می‌کند."
      },
      {
        q: "Covariance و Contravariance در Generics چیست؟",
        a: "Covariance با `out` اجازه می‌دهد مثلاً `IEnumerable<Dog>` به `IEnumerable<Animal>` تبدیل شود، چون T فقط خروجی است. Contravariance با `in` جهت معکوس را برای مصرف ورودی ممکن می‌کند، مانند `IComparer<Animal>` برای مقایسه Dog. این قابلیت فقط روی interface و delegate generic و برای reference typeها اعمال می‌شود. قرارگیری T در ورودی یا خروجی تعیین می‌کند variance از نظر type safety مجاز است یا نه."
      },
      {
        q: "`IDisposable` و دستور `using` چه کاربردی دارند؟",
        a: "`IDisposable` برای آزادسازی قطعی منابعی مانند stream، connection و handle است؛ این منابع نباید منتظر GC بمانند. `using` حتی در صورت exception، `Dispose` را از طریق `finally` فراخوانی می‌کند. اگر نوع مالک resource async است، `IAsyncDisposable` و `await using` به‌کار می‌رود. Dispose کردن dependencyای که مالک آن DI container است اشتباه است؛ **مالکیت resource** باید روشن باشد."
      },
      {
        q: "Garbage Collector در .NET به‌طور خلاصه چگونه کار می‌کند؟",
        a: "GC حافظه managed را با یافتن اشیای قابل‌دسترسی از rootها مدیریت و اشیای unreachable را جمع‌آوری می‌کند. نسل‌های 0، 1 و 2 بر فرض کوتاه‌عمر بودن بیشتر اشیا تکیه دارند و collection نسل پایین ارزان‌تر است. GC عدم وجود memory leak را تضمین نمی‌کند؛ referenceهای زنده ناخواسته همچنان حافظه را نگه می‌دارند. فراخوانی دستی `GC.Collect` تقریباً همیشه نشانه طراحی یا اندازه‌گیری نادرست است."
      },
      {
        q: "String Interning چیست؟",
        a: "Runtime می‌تواند literalهای رشته یکسان را در **intern pool** به یک instance مشترک نگاشت کند. این کار حافظه برخی literalها را کاهش می‌دهد و توضیح می‌دهد چرا گاهی `ReferenceEquals` برای رشته‌ها true می‌شود، اما نباید منطق برنامه بر آن تکیه کند. `string.Intern` دستی ممکن است رشته را برای عمر طولانی process نگه دارد. مقایسه رشته باید با `Equals` و `StringComparison` مناسب انجام شود."
      },
      {
        q: "کلمه کلیدی `sealed` چه کاربردی دارد؟",
        a: "کلاس sealed قابل ارث‌بری نیست و متد `sealed override` از override بیشتر در زنجیره جلوگیری می‌کند. این تصمیم invariantها و سطح توسعه نوع را کنترل می‌کند و گاهی فرصت devirtualization به JIT می‌دهد. sealed کردن صرفاً برای performance بدون اندازه‌گیری توجیه خوبی نیست. در طراحی کتابخانه، باز گذاشتن وراثت یک قرارداد بلندمدت است و باید آگاهانه انجام شود."
      },
      {
        q: "کلاس‌ها و متدهای `partial` چه کاربردی دارند؟",
        a: "`partial` اجازه می‌دهد تعریف یک type یا برخی methodها میان چند فایل تقسیم و در compile-time یکپارچه شود. کاربرد مهم آن جداسازی **کد تولیدشده** از کد دست‌نویس است، مانند source generatorها یا designerها. همه بخش‌ها باید در یک assembly و module باشند و modifiers سازگار داشته باشند. استفاده از partial برای پنهان‌کردن یک کلاس بیش‌ازحد بزرگ، مشکل طراحی را حل نمی‌کند."
      },
      {
        q: "`yield return` چگونه کار می‌کند؟",
        a: "`yield return` یک iterator با اجرای **lazy** می‌سازد و compiler آن را به state machine تبدیل می‌کند. هر بار `MoveNext` اجرا تا yield بعدی پیش می‌رود، پس همه نتایج از ابتدا در حافظه ساخته نمی‌شوند. exceptionها معمولاً هنگام enumeration رخ می‌دهند، نه هنگام گرفتن `IEnumerable`. resourceهای داخل iterator باید با `using` مدیریت شوند تا هنگام dispose شدن enumerator آزاد شوند."
      },
      {
        q: "Deferred Execution در LINQ چیست و چه خطراتی دارد؟",
        a: "بسیاری از operatorهای LINQ تا زمانی که sequence enumerate نشود اجرا نمی‌شوند. این رفتار composition و پردازش lazy را ممکن می‌کند، اما enumeration چندباره می‌تواند query یا محاسبه را چند بار اجرا کند. در EF Core، افزودن `ToListAsync` نقطه اجرای SQL و materialization است. تغییر منبع بین ساخت query و اجرای آن نیز نتیجه را عوض می‌کند؛ boundary اجرا را آگاهانه مشخص کنید."
      },
      {
        q: "تفاوت `IEnumerable<T>` و `IQueryable<T>` چیست؟",
        a: "`IEnumerable` عملیات را با delegate روی داده‌های درون process انجام می‌دهد، اما `IQueryable` expression tree می‌سازد تا provider آن را مثلاً به SQL ترجمه کند. هر کد C# قابل ترجمه نیست و ممکن است exception یا query ناکارآمد ایجاد کند. بهتر است فیلتر و projection قابل‌ترجمه پیش از materialization انجام شود. برگرداندن IQueryable از لایه repository می‌تواند مرز persistence را نشت دهد و کنترل query را دشوار کند."
      }
    ]
  },
  {
    title: "Async، Concurrency و Performance",
    desc: "مفاهیم برنامه‌نویسی ناهمگام، هم‌زمانی، مدیریت حافظه و سنجش کارایی در سرویس‌های ASP.NET Core.",
    questions: [
      {
        q: "تفاوت `Thread` و `Task` چیست؟",
        a: "Thread یک واحد اجرایی سیستم‌عامل با stack و هزینه نسبتاً زیاد است، اما Task نمایش یک **عملیات قابل‌انتظار** است و الزاماً thread اختصاصی ندارد. Taskهای CPU-bound معمولاً روی ThreadPool اجرا می‌شوند و عملیات I/O async هنگام انتظار thread را اشغال نمی‌کند. abstraction مبتنی بر Task امکان composition، cancellation و propagation خطا را بهتر می‌دهد. در کد کاربردی معمولاً Task را مستقیم مدیریت می‌کنیم، نه Thread را."
      },
      {
        q: "تفاوت `async/await` و `Task.Run` چیست؟",
        a: "`async/await` syntax مدیریت continuation برای عملیات ناهمگام است و به‌خودی‌خود thread جدید ایجاد نمی‌کند. `Task.Run` کار CPU-bound همگام را به ThreadPool می‌فرستد. در ASP.NET Core پیچیدن I/O async در Task.Run فقط مصرف thread و context switch را افزایش می‌دهد. Task.Run ممکن است برای offload محاسبه CPU-bound محدود مفید باشد، اما جایگزین API واقعاً async نیست."
      },
      {
        q: "`Parallel.ForEach` چه زمانی مناسب است؟",
        a: "این API برای پردازش **CPU-bound مستقل و همگام** روی چند هسته مناسب است. تعداد workerها را مدیریت می‌کند، اما shared state، ترتیب خروجی و exceptionها همچنان باید طراحی شوند. برای I/O async از `Parallel.ForEachAsync` یا الگوی Task با محدودسازی concurrency استفاده کنید. موازی‌سازی کار کوچک ممکن است به‌دلیل overhead از اجرای ترتیبی کندتر باشد."
      },
      {
        q: "تفاوت `Parallel.ForEach` و `Task.WhenAll` چیست؟",
        a: "`Parallel.ForEach` عمدتاً موازی‌سازی CPU-bound همگام را با partitioning روی ThreadPool هدف می‌گیرد. `Task.WhenAll` چند عملیات Task-based، معمولاً I/O-bound، را compose می‌کند و خودش concurrency را محدود نمی‌کند. ساخت هزاران درخواست هم‌زمان با WhenAll می‌تواند downstream را اشباع کند؛ `SemaphoreSlim` یا batching لازم است. انتخاب بر اساس ماهیت کار و محدودیت منابع است، نه صرفاً سرعت ظاهری."
      },
      {
        q: "چرا `async void` خطرناک است؟",
        a: "متد async void قابل await نیست، completion و exception آن در قالب Task در اختیار caller قرار نمی‌گیرد. exception معمولاً به SynchronizationContext منتشر می‌شود و تست و recovery را دشوار می‌کند. تنها کاربرد پذیرفته‌شده آن event handlerهایی است که signature آن‌ها void است. سایر متدهای async باید `Task` یا `Task<T>` برگردانند."
      },
      {
        q: "`ValueTask` چیست و چه زمانی باید استفاده شود؟",
        a: "`ValueTask<T>` یک struct awaitable است که در مسیر تکمیل همگام پرتکرار می‌تواند allocation مربوط به Task را کاهش دهد. این مزیت با پیچیدگی و اندازه بیشتر state machine همراه است و همیشه سریع‌تر نیست. یک ValueTask را معمولاً نباید چند بار await کرد یا بدون تبدیل ذخیره کرد، مگر منبع قرارداد آن را تضمین کند. فقط پس از profiling و در APIهای پرتکرار از آن استفاده کنید."
      },
      {
        q: "`ConfigureAwait(false)` چه اثری دارد؟",
        a: "این فراخوانی می‌گوید continuation لازم نیست context جاری را capture کند. در UI و ASP.NET قدیمی می‌تواند از deadlock و context switch اضافی جلوگیری کند. ASP.NET Core به‌طور پیش‌فرض SynchronizationContext کلاسیک ندارد، بنابراین اثر آن در کد endpoint اغلب محدود است. در کتابخانه‌های عمومی همچنان استفاده از آن می‌تواند وابستگی به context مصرف‌کننده را کاهش دهد."
      },
      {
        q: "تفاوت `lock`، `Monitor` و `SemaphoreSlim` چیست؟",
        a: "`lock` syntax امن و ساده‌ای روی `Monitor.Enter/Exit` برای mutual exclusion همگام در یک process است. Monitor امکاناتی مانند `Wait` و `Pulse` می‌دهد، اما مدیریت آن پیچیده‌تر است. `SemaphoreSlim` ظرفیت بیش از یک و `WaitAsync` دارد، پس برای محدودسازی concurrency در مسیر async مناسب است. داخل lock نباید `await` کرد و object قفل باید private و پایدار باشد."
      },
      {
        q: "Thread Safety به چه معناست؟",
        a: "کد thread-safe در دسترسی هم‌زمان، invariantها را حفظ و نتیجه تعریف‌شده تولید می‌کند. راهکارها شامل immutability، حذف state مشترک، synchronization و collectionهای concurrent هستند. thread-safe بودن هر متد به‌تنهایی لزوماً یک workflow چندمرحله‌ای را atomic نمی‌کند. قرارداد باید مشخص کند چه عملیات‌هایی هم‌زمان مجاز و چه تضمین‌هایی ارائه می‌شوند."
      },
      {
        q: "Deadlock چگونه رخ می‌دهد و چطور پیشگیری می‌شود؟",
        a: "Deadlock وقتی رخ می‌دهد که چند جریان در چرخه‌ای از منابع منتظر یکدیگر بمانند. ترتیب ثابت گرفتن lockها، کوتاه نگه‌داشتن critical section، timeout و حذف blocking روی async احتمال آن را کم می‌کند. الگوی `.Result` یا `.Wait()` روی Task در context محدود یکی از علل رایج sync-over-async است. در رخداد واقعی باید thread dump و wait chain بررسی شود، نه اینکه حدس بزنیم."
      },
      {
        q: "Race Condition چیست؟",
        a: "Race condition یعنی نتیجه به زمان‌بندی غیرقطعی عملیات هم‌زمان وابسته شود. عبارت `counter++` atomic نیست و شامل خواندن، افزایش و نوشتن است. راه‌حل می‌تواند lock، `Interlocked`، طراحی immutable یا انتقال مالکیت state باشد. تست‌های معمولی ممکن است race را نشان ندهند؛ load test و ابزارهای tracing برای بازتولید کمک می‌کنند."
      },
      {
        q: "`ConcurrentDictionary` چه تضمینی می‌دهد؟",
        a: "این collection عملیات منفرد thread-safe و دسترسی concurrent با contention کمتر از Dictionary قفل‌شده فراهم می‌کند. متدهایی مانند `GetOrAdd` و `AddOrUpdate` برای عملیات ترکیبی طراحی شده‌اند. delegate factory ممکن است بیش از یک بار اجرا شود، هرچند فقط یک مقدار ثبت شود؛ بنابراین نباید side effect غیرقابل‌تکرار داشته باشد. snapshot کاملاً اتمیک از چند عملیات مجزا تضمین نمی‌شود."
      },
      {
        q: "`ConcurrentQueue` چه کاربردی دارد؟",
        a: "`ConcurrentQueue<T>` یک صف FIFO thread-safe و non-blocking برای producer و consumerهای متعدد است. خود صف امکان انتظار async برای رسیدن داده را ندارد؛ polling مداوم طراحی خوبی نیست. برای pipeline دارای backpressure و انتظار async، `Channel<T>` معمولاً مناسب‌تر است. شمارش و سپس dequeue کردن اتمیک نیست؛ مستقیماً `TryDequeue` را بررسی کنید."
      },
      {
        q: "کلاس `Interlocked` چه زمانی مفید است؟",
        a: "`Interlocked` عملیات اتمیک کم‌هزینه مانند increment، exchange و compare-exchange را روی مقادیر ساده فراهم می‌کند. برای counter، flag و پیاده‌سازی برخی الگوریتم‌های lock-free مناسب است. اتمیک بودن یک فیلد، invariant میان چند فیلد را حفظ نمی‌کند. الگوریتم lock-free پیچیده را بدون نیاز و آزمون دقیق ترجیح ندهید."
      },
      {
        q: "`Span<T>` چیست؟",
        a: "`Span<T>` نمایی type-safe و پیوسته روی بخشی از حافظه است که بدون کپی slicing می‌شود. چون `ref struct` است، روی Heap box نمی‌شود و نمی‌تواند از مرز `await` یا iterator عبور کند. برای parsing و پردازش buffer در مسیرهای داغ allocation را کاهش می‌دهد. APIهای عادی و غیرحساس را صرفاً برای micro-optimization با Span پیچیده نکنید."
      },
      {
        q: "تفاوت `Memory<T>` و `Span<T>` چیست؟",
        a: "`Memory<T>` برخلاف Span یک struct معمولی است و می‌تواند روی Heap ذخیره و از مرز async عبور کند. با property به نام `Span` می‌توان در بخش همگام به نمای سریع آن دسترسی گرفت. `ReadOnlyMemory<T>` برای انتقال buffer فقط‌خواندنی در API async مناسب است. مالکیت و طول عمر حافظه، به‌خصوص در pooling، باید صریح باشد."
      },
      {
        q: "GC چه اثری بر Performance دارد؟",
        a: "allocation سریع است، اما collection نیازمند پیمایش اشیای زنده و گاهی توقف اجرای managed است. نرخ allocation بالا، objectهای زنده طولانی و finalizerها هزینه GC را افزایش می‌دهند. Server GC برای workloadهای سروری throughput بالاتری هدف می‌گیرد و تنظیمات runtime باید با اندازه‌گیری انتخاب شوند. کاهش allocation فقط وقتی مهم است که trace یا metric آن را bottleneck نشان دهد."
      },
      {
        q: "Large Object Heap یا LOH چیست؟",
        a: "اشیای بزرگ، معمولاً حدود 85KB و بیشتر، روی LOH تخصیص می‌یابند و همراه collection نسل 2 جمع‌آوری می‌شوند. allocation و آزادسازی مکرر آن‌ها می‌تواند pause و fragmentation ایجاد کند. buffer pooling، streaming و پرهیز از materialize کردن payload بزرگ کمک می‌کند. نگه‌داشتن بی‌دلیل buffer اجاره‌ای نیز حافظه را بدتر می‌کند؛ pool باید درست بازگردانده شود."
      },
      {
        q: "برای کاهش Allocation در .NET چه راهکارهایی دارید؟",
        a: "ابتدا با profiler مسیر پرتخصیص را پیدا می‌کنیم، سپس boxing، closure، LINQ و رشته‌سازی غیرضروری را بررسی می‌کنیم. `Span<T>`، pooling، `StringBuilder` و reuse کنترل‌شده می‌توانند کمک کنند. cache یا pool بدون سقف ممکن است memory retention و پیچیدگی ایجاد کند. هدف کاهش allocation مؤثر بر latency یا GC است، نه حذف کورکورانه همه اشیا."
      },
      {
        q: "برای Profiling برنامه ASP.NET Core از چه ابزارهایی استفاده می‌کنید؟",
        a: "ابتدا metricهایی مانند latency percentile، throughput، CPU، allocation rate و GC pause را با OpenTelemetry یا مانیتورینگ محیط جمع می‌کنم. `dotnet-counters` برای شمارنده‌های زنده، `dotnet-trace` و PerfView برای trace، و `dotnet-dump` برای dump مفیدند. BenchmarkDotNet microbenchmark قابل‌اعتماد با warmup و آمار تولید می‌کند. profilerهای Visual Studio، JetBrains dotTrace/dotMemory و ابزارهای APM نیز برای hotspot و distributed trace کاربرد دارند."
      },
      {
        q: "`CancellationToken` را چگونه درست استفاده می‌کنید؟",
        a: "Token باید از مرز ورودی، مانند `HttpContext.RequestAborted`، به تمام عملیات پشتیبان‌کننده cancellation منتقل شود. cancellation یک **درخواست مشارکتی** است و کد باید آن را بررسی یا به API پایین‌دست پاس دهد. `OperationCanceledException` با token مرتبط معمولاً خطای 500 نیست. بعد از نقطه‌ای که side effect قطعی شده، لغو باید با دقت انجام شود تا state نیمه‌کاره باقی نماند."
      },
      {
        q: "`SynchronizationContext` چیست؟",
        a: "SynchronizationContext سیاست زمان و محل اجرای continuationها را abstract می‌کند، مثلاً بازگشت به thread رابط کاربری. `await` به‌طور پیش‌فرض context موجود را capture می‌کند، مگر با ConfigureAwait غیرفعال شود. ASP.NET Core معمولاً SynchronizationContext سفارشی ندارد و continuation می‌تواند روی هر ThreadPool thread اجرا شود. بااین‌حال `AsyncLocal` و ExecutionContext اطلاعات منطقی درخواست را جداگانه جریان می‌دهند."
      },
      {
        q: "`Channel<T>` چه مسئله‌ای را حل می‌کند؟",
        a: "Channel یک صف producer-consumer با API async، چند writer/reader و پشتیبانی از completion است. bounded channel می‌تواند **backpressure** اعمال کند تا تولیدکننده از مصرف‌کننده بسیار جلو نزند. برای background queue درون یک process مناسب است، اما durable نیست و با restart داده از دست می‌رود. برای تضمین تحویل باید broker پایدار مانند RabbitMQ یا سرویس مشابه در نظر گرفت."
      },
      {
        q: "`IAsyncEnumerable<T>` چیست؟",
        a: "این interface جریان ناهمگام داده را با `await foreach` ارائه می‌دهد و هر آیتم بدون materialize شدن کل مجموعه تحویل می‌شود. برای streaming نتایج دیتابیس یا شبکه مفید است و مصرف حافظه و time-to-first-item را کاهش می‌دهد. cancellation با `WithCancellation` یا پارامتر token منتقل می‌شود. طول عمر DbContext و connection باید تا پایان enumeration معتبر بماند."
      },
      {
        q: "Object Pooling و `ArrayPool<T>` چه مزایا و خطراتی دارند؟",
        a: "Pooling با reuse اشیای پرهزینه یا bufferها، allocation و فشار GC را در مسیر پرتکرار کاهش می‌دهد. آرایه اجاره‌شده ممکن است بزرگ‌تر از درخواست و حاوی داده قبلی باشد؛ فقط محدوده معتبر را بخوانید و برای داده حساس پاک‌سازی کنید. هر اجاره باید در `finally` بازگردانده شود و پس از return نباید استفاده شود. pooling برای اشیای ارزان یا کم‌تکرار معمولاً ارزش پیچیدگی ندارد."
      },
      {
        q: "ThreadPool Starvation چیست؟",
        a: "Starvation وقتی رخ می‌دهد که workerهای ThreadPool با کار blocking اشغال شوند و Taskهای جدید دیر نوبت بگیرند. sync-over-async، I/O همگام و lockهای طولانی در وب‌سرور از علل رایج‌اند. نشانه‌ها شامل latency رو به رشد، queue طولانی و CPU نه‌چندان بالا است. راه‌حل اصلی حذف blocking و استفاده end-to-end از async است، نه صرفاً افزایش حداقل threadها."
      },
      {
        q: "چگونه concurrency عملیات I/O را محدود می‌کنید؟",
        a: "Task.WhenAll بدون حد می‌تواند connection pool، API مقصد یا حافظه را اشباع کند. `SemaphoreSlim` با `WaitAsync`، bounded Channel یا `Parallel.ForEachAsync` با `MaxDegreeOfParallelism` گزینه‌های رایج‌اند. حد مناسب از ظرفیت downstream و اندازه‌گیری load test به‌دست می‌آید. release semaphore باید در `finally` باشد تا exception ظرفیت را نشت ندهد."
      },
      {
        q: "تفاوت CPU-bound و I/O-bound در انتخاب راهکار async چیست؟",
        a: "کار I/O-bound بیشتر زمان را منتظر شبکه، دیسک یا دیتابیس است و API async thread را هنگام انتظار آزاد می‌کند. کار CPU-bound واقعاً پردازنده مصرف می‌کند و برای سرعت بیشتر ممکن است parallelism محدود لازم داشته باشد. async کردن محاسبه CPU آن را سریع‌تر نمی‌کند. در ASP.NET Core باید مراقب بود parallelism هر درخواست در بار بالا مجموعاً CPU را بیش‌ازحد اشباع نکند."
      }
    ]
  },
  {
    title: "اصول SOLID و Design Patterns",
    desc: "اصول طراحی شی‌گرا، الگوهای رایج و ضدالگوهای مهم در معماری برنامه‌های ASP.NET Core.",
    questions: [
      {
        q: "SOLID چیست و چرا اهمیت دارد؟",
        a: "SOLID مجموعه پنج اصل برای کاهش coupling، افزایش cohesion و آسان‌تر شدن تغییر و تست نرم‌افزار است. این اصول قانون مطلق یا هدف مستقل نیستند؛ باید در خدمت نیاز واقعی سیستم باشند. اعمال افراطی آن‌ها می‌تواند تعداد abstractionها و پیچیدگی را زیاد کند. در مصاحبه بهتر است هر اصل را با یک trade-off و مثال واقعی توضیح دهید."
      },
      {
        q: "اصل Single Responsibility یا SRP چیست؟",
        a: "یک ماژول باید فقط **یک دلیل برای تغییر** داشته باشد، یعنی مسئول یک actor یا سیاست منسجم باشد. کلاسی که validation، persistence، ایمیل و گزارش‌گیری را با هم انجام می‌دهد چند دلیل مستقل برای تغییر دارد. شکستن آن به همکاری‌های معنادار تست و تغییر را ساده می‌کند. SRP به معنی «هر کلاس فقط یک متد» نیست؛ معیار، همبستگی مسئولیت‌هاست."
      },
      {
        q: "اصل Open/Closed یا OCP چیست؟",
        a: "نرم‌افزار باید برای توسعه رفتار باز و برای تغییر کد پایدار موجود بسته باشد. polymorphism، composition و Strategy امکان افزودن حالت جدید بدون دست‌کاری زنجیره شرط‌های مرکزی را می‌دهند. بااین‌حال abstraction پیش‌دستانه برای تغییرات فرضی هزینه دارد. ابتدا محور تغییر واقعی را شناسایی و سپس همان نقطه را توسعه‌پذیر کنید."
      },
      {
        q: "اصل Liskov Substitution یا LSP چیست؟",
        a: "هر subtype باید بتواند جای base type استفاده شود بدون اینکه رفتار مورد انتظار مصرف‌کننده بشکند. subtype نباید precondition را سخت‌تر، postcondition را ضعیف‌تر یا invariantها را نقض کند. مثال کلاسیک، subtypeای است که متد مجاز base را با `NotSupportedException` رد می‌کند. composition یا interfaceهای کوچک‌تر اغلب از وراثت ناسازگار بهترند."
      },
      {
        q: "اصل Interface Segregation یا ISP چیست؟",
        a: "مصرف‌کننده نباید به اعضایی وابسته شود که استفاده نمی‌کند. چند interface کوچک و نقش‌محور معمولاً از یک interface عظیم با متدهای نامرتبط بهتر است. این کار fake و تست را ساده و اثر تغییر را محدود می‌کند. خردکردن افراطی interfaceها نیز discoverability را پایین می‌آورد؛ مرز باید مطابق capability واقعی باشد."
      },
      {
        q: "اصل Dependency Inversion یا DIP چیست؟",
        a: "ماژول سطح بالا نباید به جزئیات سطح پایین وابسته باشد؛ هر دو باید به **abstraction** وابسته شوند. abstraction نیز نباید تابع جزئیات باشد، بلکه جزئیات آن را پیاده‌سازی می‌کنند. برای مثال use case به `IEmailSender` وابسته است، نه مستقیماً به SMTP client. abstraction باید در مرز نیاز کسب‌وکار شکل بگیرد، نه اینکه برای هر کلاس یک interface مکانیکی بسازیم."
      },
      {
        q: "تفاوت Dependency Inversion و Dependency Injection چیست؟",
        a: "DIP یک **اصل طراحی** درباره جهت وابستگی‌هاست، اما DI تکنیکی برای تأمین dependency از بیرون شیء است. constructor injection رایج‌ترین شکل DI است و ASP.NET Core container آن را resolve می‌کند. می‌توان DI داشت ولی DIP را نقض کرد، مثلاً تزریق مستقیم یک جزئیات نامناسب به لایه دامنه. container ابزار wiring است و نباید داخل منطق دامنه به Service Locator تبدیل شود."
      },
      {
        q: "Factory Pattern چیست و چه زمانی مفید است؟",
        a: "Factory منطق ساخت object را متمرکز و caller را از نوع concrete و مراحل construction جدا می‌کند. وقتی انتخاب implementation بر اساس ورودی، configuration یا policy است، factory مفید می‌شود. DI container می‌تواند construction ساده را انجام دهد، ولی factory برای تصمیم runtime یا lifecycle سفارشی همچنان معنا دارد. factoryای که فقط `new` را بدون هیچ سیاستی پنهان می‌کند، ارزش کمی دارد."
      },
      {
        q: "Strategy Pattern چیست؟",
        a: "Strategy خانواده‌ای از الگوریتم‌های قابل‌جایگزینی را پشت یک قرارداد مشترک قرار می‌دهد. برای مثال چند روش محاسبه تخفیف می‌توانند `IDiscountStrategy` را پیاده‌سازی کنند و context بر اساس policy یکی را انتخاب کند. این الگو زنجیره `if/switch` رو به رشد را کاهش و تست هر الگوریتم را مستقل می‌کند. انتخاب strategy را از خود الگوریتم‌ها جدا نگه دارید."
      },
      {
        q: "Decorator Pattern چیست؟",
        a: "Decorator همان interface سرویس اصلی را پیاده‌سازی و رفتار را پیش یا پس از delegation اضافه می‌کند. logging، caching، retry، authorization و metrics نمونه‌های رایج cross-cutting هستند. چند decorator قابل ترکیب‌اند و ترتیب آن‌ها مهم است؛ مثلاً cache بیرون retry رفتار متفاوتی دارد. decorator نباید قرارداد معنایی سرویس را غیرمنتظره تغییر دهد."
      },
      {
        q: "Adapter Pattern چیست؟",
        a: "Adapter interface یک مؤلفه را به قراردادی تبدیل می‌کند که مصرف‌کننده انتظار دارد. این الگو برای جداکردن application از SDK خارجی یا legacy API بسیار مفید است. adapter علاوه بر تغییر signature می‌تواند مدل، exception و semantics را ترجمه کند. منطق کسب‌وکار نباید به DTOها و خطاهای vendor نشت کند."
      },
      {
        q: "Mediator Pattern چه مزایا و هزینه‌هایی دارد؟",
        a: "Mediator ارتباط مستقیم فرستنده با handler را حذف و درخواست‌ها را از یک واسط عبور می‌دهد. در CQRS می‌تواند dispatch command/query و pipeline behaviorهایی مانند validation را ساده کند. استفاده افراطی جریان اجرای ساده را پنهان، debugging را دشوار و تعداد فایل‌ها را زیاد می‌کند. Mediator جای طراحی درست aggregate و transaction boundary را نمی‌گیرد."
      },
      {
        q: "Observer Pattern چیست و Event چه ارتباطی با آن دارد؟",
        a: "در Observer، subject تغییر یا رخداد را به subscriberهای ثبت‌شده اطلاع می‌دهد بدون شناخت جزئیات آن‌ها. eventهای C# یک پیاده‌سازی درون-process و معمولاً synchronous از این ایده‌اند. subscriber کند یا خطادار می‌تواند publisher را تحت‌تأثیر قرار دهد و عمر subscription ممکن است memory leak بسازد. برای رخداد بین سرویس‌ها به message broker و semantics تحویل نیاز داریم."
      },
      {
        q: "Repository Pattern چیست و آیا همیشه با EF Core لازم است؟",
        a: "Repository دسترسی به aggregateها را با زبان دامنه کپسوله و جزئیات persistence را پنهان می‌کند. `DbSet` و `DbContext` خود بسیاری از ویژگی‌های Repository و Unit of Work را دارند، پس wrapper عمومی CRUD اغلب فقط abstraction نشت‌کننده می‌سازد. repository اختصاصی برای queryها و invariantهای دامنه می‌تواند ارزشمند باشد. برگرداندن `IQueryable` یا متدهایی مثل `GetAll` معمولاً کنترل مرز داده را تضعیف می‌کند."
      },
      {
        q: "Unit of Work Pattern چیست؟",
        a: "Unit of Work تغییرات چند object را دنبال و در یک transaction منطقی commit می‌کند. `DbContext` در EF Core معمولاً این نقش را با change tracking و `SaveChanges` انجام می‌دهد. طول عمر آن باید کوتاه و معمولاً scoped به یک درخواست یا use case باشد. transactionهای طولانی contention ایجاد می‌کنند و DbContext thread-safe نیست."
      },
      {
        q: "CQRS چیست و چه زمانی ارزش دارد؟",
        a: "CQRS مدل و مسیر **Command**های تغییردهنده state را از **Query**های خواندنی جدا می‌کند. این جداسازی می‌تواند مدل، authorization و scaling هر سمت را مستقل کند. CQRS الزاماً به event sourcing، چند دیتابیس یا eventual consistency نیاز ندارد. برای CRUD ساده ممکن است ceremony اضافه باشد؛ پیچیدگی دامنه و تفاوت نیازهای خواندن/نوشتن باید آن را توجیه کند."
      },
      {
        q: "God Object چه ضدالگویی است؟",
        a: "God Object کلاسی است که مسئولیت‌ها و دانش بیش‌ازحدی از سیستم را در خود جمع کرده است. چنین کلاسی coupling بالا، تست‌های شکننده و conflict تغییر ایجاد می‌کند. باید خوشه‌های رفتاری و داده‌ای را بر اساس cohesion و مرز دامنه استخراج کرد. صرفاً تقسیم فایل به helperهای static بدون اصلاح جهت وابستگی، مشکل را جابه‌جا می‌کند."
      },
      {
        q: "Anemic Domain Model چیست و آیا همیشه بد است؟",
        a: "در مدل دامنه کم‌خون، entityها عمدتاً getter/setter هستند و منطق کسب‌وکار در serviceها پراکنده است. در دامنه پیچیده این وضعیت invariantها را آسیب‌پذیر و رفتار را سخت‌کشف می‌کند؛ بهتر است رفتار مرتبط کنار state قرار گیرد. اما برای سیستم CRUD ساده یا مدل انتقال داده، rich domain model ممکن است هزینه بی‌دلیل باشد. تصمیم باید بر اساس پیچیدگی واقعی قواعد کسب‌وکار باشد."
      },
      {
        q: "Service Locator چرا Anti-pattern محسوب می‌شود؟",
        a: "Service Locator dependencyها را با فراخوانی container از داخل کلاس پنهان می‌کند و قرارداد constructor دیگر کامل نیست. خطاهای dependency به runtime منتقل و تست به setup container وابسته می‌شود. constructor injection وابستگی‌های اجباری را صریح و object را مستقل از container نگه می‌دارد. دسترسی محدود به provider در composition root یا factory framework ممکن است استثنا باشد، نه الگوی عمومی."
      },
      {
        q: "چگونه بین وراثت و Composition انتخاب می‌کنید؟",
        a: "وراثت coupling قوی ایجاد می‌کند و فقط وقتی مناسب است که رابطه واقعی «هست یک» و قرارداد LSP برقرار باشد. Composition رفتارها را با همکاری objectها می‌سازد و تغییر یا تست آن‌ها معمولاً آسان‌تر است. عبارت **favor composition over inheritance** توصیه به انعطاف است، نه منع کامل وراثت. framework base classهای پایدار یا template methodهای روشن می‌توانند کاربرد معتبر وراثت باشند."
      }
    ]
  }
];
