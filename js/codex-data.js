/**
 * Codex Universalis - The 15 Folios of Human Genius
 * Archival Dataset of 15 Masterpiece Inventions & Philosophical Milestones
 * Author: Tareq Abuashi (أ. طارق ابوعشي)
 */

const CodexData = [
  // FOLIO 1: FRONTISPICE & PROLEGOMENA
  {
    pageNumber: 1,
    romanNum: 'I',
    titleAr: 'الغلاف الملكي وديباجة مخطوطة الكون (Codex Universalis)',
    titleEn: 'Frontispice & Prolegomena to the Universal Codex',
    category: 'مقدمة الأرشيف • Prolégomènes',
    date: 'من فجر التاريخ إلى عصر التنوير',
    origin: 'خزائن باريس، لندن، وقرطبة',
    latinQuote: '« Sapientia aedificavit sibi domum, excidit columnas septem. »',
    arabicQuote: '« الحكمة ضالة المؤمن، أنى وجدها فهو أحق بها. »',
    essay: `بسم الله الرحمن الرحيم. تفتح هذه المخطوطة الأرشيفية الكبرى أوراقها لتكون <strong>سِجلاً خالداً لأعظم خمسة عشر اختراعاً وفكرة علمية</strong> صاغها العقل البشري لتغيير مجرى التاريخ الإنساني. 
    <br><br>
    من الإسكندرية وقرطبة إلى باريس ولندن، تلتقي عبقرية الشرق والغرب في سيمفونية حضارية واحدة. كل صفحة من صفحات هذه المخطوطة الخمس عشرة تجسد قفزة معرفية كبرى؛ حيث لم تكن الآلات مجرد تروس وحديد، بل كانت تجسيداً للشغف الإنساني في فك نواميس الكون وقهر المسافات وضبط الزمن.`,
    mechanicType: 'cover',
    tags: ['ديباجة', 'أرشيف', 'تراث بشري', 'عصر التنوير']
  },

  // FOLIO 2: ANDALUSIAN ASTROLABE (1067 AD)
  {
    pageNumber: 2,
    romanNum: 'II',
    titleAr: 'الأسطرلاب الفلكي الأندلسي وحاسوب الفضاء التناظري',
    titleEn: 'The Royal Andalusian Astrolabe of Toledo',
    category: 'علم الفلك والملاحة • Astronomia',
    date: '459 هـ / 1067م',
    origin: 'طليطلة وإشبيلية — إبراهيم بن سعيد السهلي والزرقالي',
    latinQuote: '« Coeli enarrant gloriam Dei, et opera manuum eius annuntiat firmamentum. »',
    arabicQuote: '« ونظر نظرة في النجوم... بالنجوم هم يهتدون. »',
    essay: `يمثل الأسطرلاب الأندلسي ذروة الحوسبة التناظرية في العصور الوسطى؛ حيث تمكن علماء طليطلة وقرطبة من <strong>إسقاط القبة السماوية الكروية ثلاثية الأبعاد على صفيحة نحاسية مسطحة</strong> (Stereographic Projection) دون أي تشوه في الزوايا.
    <br><br>
    يحتوي الأسطرلاب على "الشبكة" المنقوشة بشظايا النجوم وحلقة البروج، و"الصفيحة" المحفورة بالمقنطرات ودوائر السمت، و"العضادة" ذات الثقبين لرصد الشمس نهاراً والنجوم ليلاً لاستخراج خط العرض والوقت اللحظي وسمت القبلة بدقة متناهية.`,
    mechanicType: 'astrolabe',
    tags: ['أسطرلاب', 'طليطلة', 'الزرقالي', 'إسقاط مجسم']
  },

  // FOLIO 3: ANTIKYTHERA MECHANISM (150 BC)
  {
    pageNumber: 3,
    romanNum: 'III',
    titleAr: 'آلة أنتيكيثيرا الإغريقية — أول حاسوب تروسي في التاريخ',
    titleEn: 'The Antikythera Astronomical Computer',
    category: 'الميكانيكا الكلاسيكية • Mechanica Antiqua',
    date: '150 قبل الميلاد',
    origin: 'رودس واليونان القديمة — مدرسة أرشميدس وهيبارخوس',
    latinQuote: '« Rerum cognoscere causas per motum orbium. »',
    arabicQuote: '« نظام متقن تدور فيه التروس كدوران الأفلاك. »',
    essay: `عُثر على هذه المعجزة في قاع البحر الأبيض المتوسط عام 1901م، وتبين أنها تحوي <strong>أكثر من 30 ترساً برونزياً متناهي الدقة</strong> يحاكي حركة الشمس والقمر وأطواره ومدارات الكواكب الخمسة المعروفة آنذاك.
    <br><br>
    تستخدم الآلة تروساً تفاضلية (Differential Gears) لحساب دورة ميتون (Metonic cycle) ودورة ساروس للكسوف والخسوف، مما يجعلها سابقة لعصرها بألف وخمسمائة عام كاملة في تكنولوجيا صناعة الآلات الدقيقة.`,
    mechanicType: 'antikythera',
    tags: ['أنتيكيثيرا', 'تروس إغريقية', 'حساب الكسوف', 'أرشميدس']
  },

  // FOLIO 4: IBN AL-HAYTHAM'S CAMERA OBSCURA (1021 AD)
  {
    pageNumber: 4,
    romanNum: 'IV',
    titleAr: 'قمرة ابن الهيثم وتأسيس علم البصريات الحديث',
    titleEn: 'Ibn al-Haytham’s Camera Obscura & Optics',
    category: 'علم الضوء والرؤية • Optica',
    date: '412 هـ / 1021م',
    origin: 'القاهرة — الحسن بن الهيثم (كتاب المناظر)',
    latinQuote: '« Lux est nuntius veritatis in tenebris. »',
    arabicQuote: '« الحق مرغوب فيه لذاته... والوصول إلى الحق صعب. »',
    essay: `في كتابه الخالد "المناظر"، نسف ابن الهيثم نظرية الانبعاث الإغريقية القديمة، وأثبت رياضياً وتجريبياً أن <strong>الضوء ينعكس من الأجسام ويدخل العين في خطوط مستقيمة</strong>.
    <br><br>
    اخترع "القمرة المظلمة" (Camera Obscura) التي أصبحت الأساس المباشر لاختراع الكاميرات والتصوير والسينما الحديثة، ووضع القواعد الصارمة للمنهج العلمي التجريبي (Scientific Method) القائم على الملاحظة والقياس والاستقراء.`,
    mechanicType: 'camera_obscura',
    tags: ['ابن الهيثم', 'البصريات', 'المناظر', 'القمرة المظلمة']
  },

  // FOLIO 5: AL-JAZARI'S ELEPHANT WATER CLOCK (1206 AD)
  {
    pageNumber: 5,
    romanNum: 'V',
    titleAr: 'ساعة الفيل للجزري وهندسة الأوتومات الهيدروليكية',
    titleEn: 'Al-Jazari’s Elephant Clock & Automata',
    category: 'الهندسة الميكانيكية • Ingenium & Automata',
    date: '602 هـ / 1206م',
    origin: 'ديار بكر — بديع الزمان الجزري (كتاب الحيل)',
    latinQuote: '« Mirabilia mechanicae et fluxus aquarum. »',
    arabicQuote: '« علم الحيل النافعة، والجمع بين العلم والعمل. »',
    essay: `تُعد ساعة الفيل أعظم تحفة ميكانيكية وهيدروليكية في العالم الوسيط؛ حيث جمعت رمزياً بين حضارات العالم (الفيل الهندي، والتنين الصيني، والطائر الفينيقي، والشخصيات الأندلسية).
    <br><br>
    تعتمد الساعة على وعاء طافٍ مثقوب بعناية (Tipping Bucket) داخل الفيل يمتلئ بالماء تدريجياً، ليفعل سلسلة من الروافع والكرات التي تسقط في أفواه التنانين كل نصف ساعة، مما يجعل الجزري بحق <strong>الأب الروحي للروبوتات والميكاترونكس الحديثة</strong>.`,
    mechanicType: 'elephant_clock',
    tags: ['الجزري', 'ساعة الفيل', 'روبوتات', 'علم الحيل']
  },

  // FOLIO 6: GUTENBERG'S PRINTING PRESS (1440 AD)
  {
    pageNumber: 6,
    romanNum: 'VI',
    titleAr: 'مطبعة غوتنبرغ بالحروف المعدنية وثورة المعرفة',
    titleEn: 'Gutenberg’s Movable Type Printing Press',
    category: 'ثورة الطباعة والتنوير • Typographia',
    date: '1440م',
    origin: 'ماينتس، ألمانيا — يوهانس غوتنبرغ',
    latinQuote: '« Post tenebras lux per typographiam. »',
    arabicQuote: '« نُقشت الكلمات في الرصاص، فانطلقت المعرفة إلى الآفاق. »',
    essay: `قضى غوتنبرغ على احتكار نسخ المخطوطات اليدوية الباهظ، عبر دمج ثلاثة ابتكارات: <strong>الحروف المعدنية المنفصلة القابلة لإعادة الترتيب (سبائك الرصاص والقصدير)</strong>، وحبر زيتي متماسك، ومكبس لولبي مستوحى من معاصر العنب.
    <br><br>
    حوّل هذا الاختراع نشر العلم من حكر على القصور والأديرة إلى مشاع إنساني عام، ممهداً الطريق مباشرة لعصر النهضة الأوروبية، والثورة العلمية، وعصر التنوير الفرنسي والبريطاني.`,
    mechanicType: 'printing_press',
    tags: ['غوتنبرغ', 'مطبعة', 'عصر النهضة', 'طباعة معدنية']
  },

  // FOLIO 7: OUGHTRED'S SLIDE RULE (1622 AD)
  {
    pageNumber: 7,
    romanNum: 'VII',
    titleAr: 'مسطرة الحساب التناظرية البريطانية (Slide Rule)',
    titleEn: 'William Oughtred’s Logarithmic Slide Rule',
    category: 'الحساب والملاحة • Calculus',
    date: '1622م',
    origin: 'كامبريدج ولندن — ويليام أوترد وجون نابير',
    latinQuote: '« Numeri mutua proportione fidem servant. »',
    arabicQuote: '« تحويل الضرب والقسمة إلى جمع وطرح بانزلاق المسطرة. »',
    essay: `استثمر الرياضي الإنجليزي ويليام أوترد ابتكار اللوغاريتمات لجون نابير، وصنع مسطرة تنزلق فيها تدريجات لوغاريتمية متوازية تسمح بإجراء <strong>عمليات الضرب، القسمة، الجذور، والدوال المثلثية في ثوانٍ معدودة</strong> دون كتابة رقم واحد على الورق!
    <br><br>
    ظلت مسطرة الحساب الرفيق الملازم لمهندسي بريطانيا والعالم لأكثر من ثلاثة قرون، وبها صُممت الجسور الكبرى، وسفن الأسطول الملكي، بل وحتى صواريخ برنامج أبولو للهبوط على القمر!`,
    mechanicType: 'slide_rule',
    tags: ['مسطرة الحساب', 'أوترد', 'لوغاريتمات', 'كامبريدج']
  },

  // FOLIO 8: PASCAL'S MECHANICAL CALCULATOR (1642 AD)
  {
    pageNumber: 8,
    romanNum: 'VIII',
    titleAr: 'حاسبة باسكال الميكانيكية (La Pascaline)',
    titleEn: 'Blaise Pascal’s Mechanical Adding Machine',
    category: 'الحوسبة الميكانيكية • Arithmetica Automata',
    date: '1642م',
    origin: 'باريس ورُووان — بليز باسكال',
    latinQuote: '« Mens agitata rotis et calculis certis. »',
    arabicQuote: '« آلة تحمل العقل البشري عن عناء التكرار والحساب. »',
    essay: `صمم الفيلسوف والفيزيائي الفرنسي بليز باسكال في سن التاسعة عشرة أول حاسبة رقمية ميكانيكية لمساعدة والده في جمع الضرائب. 
    <br><br>
    اعتمدت "الباسكالين" على نظام تروس عبقري يُعرف بـ (Sautoir)؛ حيث يدور الترس دورة كاملة من 0 إلى 9، وعند الانتقال إلى الصفر يُسقط رافعة ذات ثقل تنقل "الواحد المحمول" فوراً إلى خانة العشرات، مما شكل الحجر الأساس لكافة الحواسيب الرقمية اللاحقة.`,
    mechanicType: 'pascaline',
    tags: ['باسكال', 'باسكالين', 'حاسبة ميكانيكية', 'باريس']
  },

  // FOLIO 9: NEWTON'S REFLECTING TELESCOPE (1668 AD)
  {
    pageNumber: 9,
    romanNum: 'IX',
    titleAr: 'تلسكوب نيوتن العاكس وكشف نواميس الجاذبية',
    titleEn: 'Sir Isaac Newton’s Reflecting Telescope',
    category: 'البصريات الفلكية • Telescopium',
    date: '1668م',
    origin: 'الجمعية الملكية بلندن — السير إسحاق نيوتن',
    latinQuote: '« Hypotheses non fingo • Philosophiae Naturalis Principia. »',
    arabicQuote: '« إن رأيتُ أبعد من غيري، فذلك لأني وقفتُ على أكتاف العمالقة. »',
    essay: `للتغلب على مشكلة "الزيغ اللوني" (Chromatic Aberration) في تلسكوبات العدسات القديمة، ابتكر نيوتن تلسكوباً يعتمد على <strong>مرآة مقعرة من سبيكة معدنية عاكسة (Speculum) بدلاً من الزجاج</strong>، تجمع الضوء وتعكسه نحو مرآة مائلة صغيرة إلى عين الراصد.
    <br><br>
    قدّم نيوتن تلسكوبه الصغير والمذهل للجمعية الملكية عام 1671م، وفُتحت به أبواب علم الفلك الرصدي الدقيق الذي قاد مباشرة لصياغة كتاب المبادئ وقوانين الجاذبية الكونية.`,
    mechanicType: 'newton_telescope',
    tags: ['نيوتن', 'تلسكوب عاكس', 'الجمعية الملكية', 'الجاذبية']
  },

  // FOLIO 10: BREGUET'S LEVER ESCAPEMENT & TOURBILLON (1795 AD)
  {
    pageNumber: 10,
    romanNum: 'X',
    titleAr: 'ميزان الساعات الملكية وقفص التوربيون لبريغيه',
    titleEn: 'Breguet’s Precision Tourbillon & Lever Escapement',
    category: 'صناعة الساعات الفاخرة • Horlogerie Royale',
    date: '1795م',
    origin: 'باريس — أبراهام-لويس بريغيه وتوماس مودج',
    latinQuote: '« Tempus fugit, aequalitas motus manet. »',
    arabicQuote: '« ميزان يقهر الجاذبية الأرضية ليحفظ نبض الزمن متناسقاً. »',
    essay: `في قلب باريس الكلاسيكية، واجه عبقري صناعة الساعات لويس بريغيه معضلة تأثير الجاذبية الأرضية على دقة تذبذب رقاص الساعة عندما يتغير وضعها في الجيب.
    <br><br>
    ابتكر **التوربيون (Tourbillon)**: وهو قفص دوار يضم ميزان الساعة والعجلة المسننة ويدور حول نفسه دورة كاملة كل دقيقة، مما يُلغي أخطاء الجاذبية بالكامل، وأصبح التوربيون تاج صناعة الساعات الميكانيكية الملكية في التاريخ.`,
    mechanicType: 'tourbillon',
    tags: ['بريغيه', 'توربيون', 'ساعات ملكية', 'باريس']
  },

  // FOLIO 11: HARRISON'S MARINE CHRONOMETER H4 (1761 AD)
  {
    pageNumber: 11,
    romanNum: 'XI',
    titleAr: 'كرونومتر جون هاريسون H4 وحل معضلة خطوط الطول',
    titleEn: 'John Harrison’s Marine Chronometer H4',
    category: 'الملاحة البحرية الكبرى • Navigatio Regia',
    date: '1761م',
    origin: 'لندن وبورصة غرينتش — جون هاريسون والبرلمان البريطاني',
    latinQuote: '« Longitudo inventa per mensuram temporis. »',
    arabicQuote: '« بساعة جيب دقيقة واحدة، حُفظت أرواح آلاف الملاحين في المحيطات. »',
    essay: `كان تحديد خط الطول الجغرافي (Longitude) في عرض البحر أعظم معضلة علمية واجهت ملوك بريطانيا وفرنسا لقرون، حيث غرقت أساطيل كاملة لجهلها بمواقعها.
    <br><br>
    أمضى النجار وصانع الساعات البريطاني العصامي جون هاريسون أربعين عاماً لتطوير الساعة المعجزة **H4** التي لا تتأثر بحرارة الجو ولا بحركة السفينة العاتية، مما مكن البحارة من معرفة وقت خط غرينتش في أي بقعة من المحيط، وكان هذا مفتاح السيادة البحرية العالمية.`,
    mechanicType: 'harrison_h4',
    tags: ['جون هاريسون', 'كرونومتر H4', 'خطوط الطول', 'غرينتش']
  },

  // FOLIO 12: WATT'S STEAM ENGINE (1769 AD)
  {
    pageNumber: 12,
    romanNum: 'XII',
    titleAr: 'محرك جيمس واط البخاري وانفجار الثورة الصناعية',
    titleEn: 'James Watt’s Steam Engine with Separate Condenser',
    category: 'الطاقة والثورة الصناعية • Motus & Machina',
    date: '1769م',
    origin: 'غلاسكو وبيرمنغهام — جيمس واط وماثيو بولتون',
    latinQuote: '« Vapor vim gignit et orbem movet. »',
    arabicQuote: '« استئناس طاقة البخار لتدوير عجلات المصانع والقطارات. »',
    essay: `لم يخترع جيمس واط محرك البخار الأول، لكنه أحدث الثورة الكبرى بإضافة **المكثف المنفصل (Separate Condenser)**؛ مما منع تبريد الأسطوانة الرئيسية باستمرار ووفّر 75% من استهلاك الفحم.
    <br><br>
    أضاف واط التروس الشمسية والكوكبية (Sun and Planet Gear) لتحويل الحركة الترددية إلى حركة دورانية مستمرة، فولد المحرك الذي حرّك مصانع النسيج، ومناجم الفحم، والقطارات، والسفن البخارية، وأطلق الثورة الصناعية في أرجاء المعمورة.`,
    mechanicType: 'steam_engine',
    tags: ['جيمس واط', 'محرك بخاري', 'الثورة الصناعية', 'مكثف منفصل']
  },

  // FOLIO 13: BABBAGE & LOVELACE ANALYTICAL ENGINE (1837 AD)
  {
    pageNumber: 13,
    romanNum: 'XIII',
    titleAr: 'المحرك التحليلي لتشارلز بيباج وخوارزميات أدا لوفليس',
    titleEn: 'Babbage’s Analytical Engine & Ada Lovelace',
    category: 'فجر الحوسبة والبرمجة • Computatio Universalis',
    date: '1837م',
    origin: 'لندن — تشارلز بيباج والليدي أدا لوفليس',
    latinQuote: '« Machina ratiocinatrix et tela numerorum. »',
    arabicQuote: '« الآلة تنسج الأنماط الجبرية كما ينسج نول جاكارد الزهور. »',
    essay: `صمم الرياضي البريطاني تشارلز بيباج أول كمبيوتر عام ميكانيكي يعمل بالبخار والبطاقات المثقوبة، ويحتوي على "المطحنة" (Mill / وحدة المعالجة المركزية CPU) و"المخزن" (Store / الذاكرة RAM).
    <br><br>
    أما الليدي **أدا لوفليس**، فقد أدركت أن الآلة يمكنها معالجة أي رموز وليس فقط الأرقام، وكتبت أول خوارزمية حاسوبية في التاريخ لحساب أرقام برنولي، لتصبح بحق <strong>أول مبرمجة في تاريخ البشرية</strong>.`,
    mechanicType: 'analytical_engine',
    tags: ['بيباج', 'أدا لوفليس', 'المحرك التحليلي', 'أول خوارزمية']
  },

  // FOLIO 14: MORSE'S ELECTRIC TELEGRAPH (1844 AD)
  {
    pageNumber: 14,
    romanNum: 'XIV',
    titleAr: 'تليغراف صامويل مورس وشبكة الاتصال اللحظية',
    titleEn: 'Samuel Morse’s Electromagnetic Telegraph',
    category: 'الاتصالات والشبكات • Telecommunicatio',
    date: '1844م',
    origin: 'واشنطن وبالتيمور — صامويل مورس وألفريد فيل',
    latinQuote: '« Quid egit Deus? • What hath God wrought! »',
    arabicQuote: '« نبضات كهربائية سريعة اختزلت مسافات القارات في رمشة عين. »',
    essay: `في 24 مايو 1844م، أرسل صامويل مورس أول برقية كهربائية رسمية عبر سلك نحاسي ممتد بين واشنطن وبالتيمور، حاملاً عبارته الشهيرة: <em>«ما أعظم ما صنع الله!»</em>.
    <br><br>
    ابتكر مورس وشريكه ألفريد فيل شفرة صوتية تعتمد على النقطة والشرطة (Morse Code)، وبذلك ألغى التليغراف حاجز الزمان والمكان لأول مرة في تاريخ الحضارة، مشكلاً الجد الأكبر لشبكة الإنترنت والاتصالات الرقمية المعاصرة.`,
    mechanicType: 'morse_telegraph',
    tags: ['تليغراف', 'صامويل مورس', 'شفرة مورس', 'اتصالات كهربائية']
  },

  // FOLIO 15: THE GRAND CHARTER OF HUMAN GENIUS (CONCLUSION)
  {
    pageNumber: 15,
    romanNum: 'XV',
    titleAr: 'ميثاق المعرفة الإنسانية والشهادة الأرشيفية الكبرى',
    titleEn: 'The Grand Charter of Human Genius & Archival Seal',
    category: 'خاتمة المخطوطة والشهادة • Epilogus & Sigillum',
    date: 'القرن الحادي والعشرون وما بعده',
    origin: 'صالون التنوير العالمي — قصر الأرشيف الملكي',
    latinQuote: '« Scientia est potentia et thesaurus immortalis humani generis. »',
    arabicQuote: '« العلم ميراث البشرية الخالد، ومنارة الأجيال نحو المستقبل. »',
    essay: `تُختتم هذه المخطوطة الكبرى بخلاصة الحكمة الإنسانية: <strong>إن التقدم العلمي ليس وليد أمة واحدة ولا عصر بعينه، بل هو تتابع مبارك لمشاعل النور</strong> التي تناقلتها الأيدي عبر آلاف السنين.
    <br><br>
    من نقوش الإسطرلاب وحسابات بابل والإسكندرية، إلى دقة ساعات باريس ومحركات لندن وشبكات الاتصال، يبقى الإنسان صانع الحضارة وباحثها الخالد عن الحقيقة. 
    <br><br>
    هنا في هذه الصفحة الأخيرة، نوثق هذه الشهادة الملكية الأرشيفية تقديراً لكل عقل شغوف بالعلم والأصالة.`,
    mechanicType: 'grand_seal_certificate',
    tags: ['ميثاق المعرفة', 'خاتم الشمع', 'شهادة أصالة', 'أ. طارق ابوعشي']
  }
];

window.CodexData = CodexData;
