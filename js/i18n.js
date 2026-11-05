// ============================================================
// SkillNova — i18n.js
// Full-site translations (UZ / RU / EN). Every element carrying
// a data-i18n="key" attribute gets its text replaced when the
// language changes. Selection is persisted in localStorage.
// ============================================================

(function () {
  'use strict';

  const LANG_KEY = 'skillnova-lang';

  const dict = {
    uz: {
      // Navbar
      nav_home: "Bosh sahifa", nav_courses: "Kurslar", nav_subjects: "Fanlar",
      nav_features: "Imkoniyatlar", nav_contact: "Aloqa", nav_cabinet: "Kabinet",
      nav_cabinet_mobile: "Kabinetga kirish",

      // Hero
      hero_badge: "10,000+ o'quvchi bilan birga o'sing",
      hero_title1: "Kelajagingni", hero_title_accent: "SkillNova", hero_title2: "bilan qur",
      hero_lead: "Zamonaviy bilimlarni o'rganing, yangi ko'nikmalar egallang va o'z maqsadlaringizga tezroq erishing — dasturlash, AI va Englishni bitta platformada.",
      hero_cta_primary: "Kurslarni boshlash", hero_cta_secondary: "Ko'proq bilish",
      hero_trust: "o'quvchi allaqachon o'rganmoqda",
      hero_mock_role: "Frontend yo'nalishi", hero_mock_progress: "Umumiy progress",
      hero_mock_frontend: "Frontend", hero_mock_python: "Python", hero_mock_english: "English",
      hero_float_task_label: "Bugungi vazifa",
      hero_float_cert_title: "Yangi sertifikat!", hero_float_cert_sub: "Python Asoslari",

      // Marquee
      marquee_web: "Frontend Development", marquee_python: "Python", marquee_ai: "Artificial Intelligence",
      marquee_english: "English & IELTS", marquee_data: "Kompyuter savodxonligi",

      // Subjects
      subjects_eyebrow: "Fanlar", subjects_title: "Qaysi yo'nalishdan boshlaysiz?",
      subjects_desc: "Har bir fan siznikidek loyihalar, testlar va amaliyot bilan qadamma-qadam tuzilgan.",
      subj_lit_title: "Kompyuter savodxonligi",
      subj_lit_desc: "Kompyuter bilan ishlash asoslari, fayllar, internet va raqamli xavfsizlik.",
      subj_web_title: "Frontend Development",
      subj_web_desc: "HTML, CSS, JavaScript va zamonaviy web texnologiyalarni amaliyot orqali o'rganing.",
      subj_python_title: "Python",
      subj_python_desc: "Python asoslaridan boshlab, real loyihalar yaratishgacha bo'lgan yo'l.",
      subj_ai_title: "Artificial Intelligence",
      subj_ai_desc: "AI asoslari, machine learning va zamonaviy AI vositalaridan foydalanish.",
      subj_en_title: "English",
      subj_en_desc: "Grammar, Vocabulary, Speaking va IELTS uchun tayyorgarlik.",
      subj_css_title: "HTML & CSS",
      subj_css_desc: "Zamonaviy va chiroyli veb-sahifalar yaratish uchun HTML5 va CSS3 asoslari.",

      level_beginner: "Boshlang'ich", level_medium: "O'rta", level_advanced: "Ilg'or", level_all: "Barcha daraja",
      lessons_word: "dars", student_word: "o'quvchi", currency_som: "so'm", price_free: "Bepul",

      // Courses
      courses_eyebrow: "Kurslar", courses_title: "Eng mashhur kurslar",
      courses_desc: "Mentorlar tomonidan tayyorlangan, amaliyotga yo'naltirilgan kurslar to'plami.",
      tab_all: "Barchasi", tab_web: "Web Development", tab_python: "Python", tab_english: "English",
      course_web_title: "Zamonaviy Web Development",
      course_web_desc: "HTML, CSS, JavaScript va zamonaviy web texnologiyalar asosida sayt qurishni o'rganing.",
      course_web_pricetag: "/ boshlang'ich",
      course_python_title: "Python Asoslari va Amaliyot",
      course_python_desc: "Python tilini o'rganib, amaliy loyihalar orqali ko'nikmalaringizni mustahkamlang.",
      course_en_title: "English & IELTS Tayyorgarlik",
      course_en_desc: "Grammar, Vocabulary, Speaking va IELTS bo'yicha to'liq tayyorgarlik kursi.",
      btn_enroll: "Yozilish", courses_more: "Barcha kurslarni ko'rish",

      // Features
      features_eyebrow: "Imkoniyatlar", features_title: "O'rganishni osonlashtiradigan vositalar",
      features_desc: "SkillNova shunchaki kurslar to'plami emas — bu sizning shaxsiy o'quv ekotizimingiz.",
      feat_1_title: "Personal Learning Plan",
      feat_1_desc: "Sizning maqsadlaringiz va vaqtingizga moslashtirilgan shaxsiy o'quv rejasi avtomatik tuziladi.",
      feat_2_title: "AI Assistant",
      feat_2_desc: "24/7 mavjud AI yordamchi savollaringizga javob beradi va tushunmagan mavzularni tushuntiradi.",
      feat_3_title: "Certificates",
      feat_3_desc: "Har bir kursni tugatganingizda haqiqiyligini tasdiqlovchi raqamli sertifikat olasiz.",
      feat_4_title: "Progress Tracking",
      feat_4_desc: "Har bir fan va kurs bo'yicha progressingizni real vaqtda kuzatib boring.",
      feat_5_title: "Quizzes",
      feat_5_desc: "Har bir mavzudan so'ng bilimingizni sinovdan o'tkazadigan interaktiv testlar.",

      // Stats
      stat_students: "O'quvchilar", stat_courses: "Kurslar", stat_mentors: "Mentorlar", stat_satisfaction: "Mamnun o'quvchilar",

      // CTA
      cta_title: "O'rganishni bugundan boshlang",
      cta_desc: "Minglab o'quvchilar qatoriga qo'shiling va yangi ko'nikmalarni bepul kurslar bilan boshlang.",
      cta_button: "Bepul boshlash",

      // Footer
      footer_about: "Kelajagingizni quradigan zamonaviy online ta'lim platformasi. Dasturlash, AI va English — bitta joyda.",
      footer_platform: "Platforma", footer_company: "Kompaniya", footer_help: "Yordam",
      footer_about_us: "Biz haqimizda", footer_mentors: "Mentorlar", footer_blog: "Blog",
      footer_faq: "Ko'p so'raladigan savollar", footer_privacy: "Maxfiylik siyosati",
      footer_copyright: "© 2026 SkillNova. Barcha huquqlar himoyalangan.",

      // ---- Course detail page ----
      cd_breadcrumb_home: "Bosh sahifa", cd_breadcrumb_subjects: "Fanlar", cd_breadcrumb_current: "HTML & CSS",
      cd_title: "HTML & CSS Asoslari",
      cd_subtitle: "Nol darajadan boshlab, chiroyli va responsiv veb-sahifalar yaratishni o'rganing.",
      cd_meta_lessons: "38 video dars", cd_meta_level: "Boshlang'ich", cd_meta_students: "4,120 o'quvchi", cd_meta_rating: "4.9 (860 sharh)",
      cd_tab_overview: "Umumiy ma'lumot", cd_tab_videos: "Video darslar", cd_tab_practice: "Amaliy mashg'ulotlar", cd_tab_tests: "Testlar",
      cd_overview_heading: "Kurs haqida",
      cd_overview_text: "Bu kurs sizni dasturlash olamiga olib kiradi. HTML5 va CSS3 asoslarini amaliyot orqali o'rganib, real loyihalar — shaxsiy sayt, landing page va portfolio — yaratishni o'rganasiz. Har bir dars video, matnli tushuntirish va amaliy topshiriq bilan mustahkamlanadi.",
      cd_overview_learn_heading: "Bu kursda nimalarni o'rganasiz",
      cd_learn_1: "HTML5 semantik teglar va sahifa strukturasi",
      cd_learn_2: "CSS3 bilan stilizatsiya, flexbox va grid tizimi",
      cd_learn_3: "Responsiv dizayn — mobil, tablet va desktop",
      cd_learn_4: "Animatsiya va o'tishlar (transition, animation)",
      cd_learn_5: "Formalar va foydalanuvchi interfeysi elementlari",
      cd_learn_6: "Real loyiha: portfolio saytini noldan qurish",
      cd_videos_heading: "Video darslar ro'yxati",
      cd_video_1: "Kirish: HTML nima va u qanday ishlaydi?",
      cd_video_2: "HTML sahifa strukturasi va teglar",
      cd_video_3: "Rasm, havola va ro'yxatlar bilan ishlash",
      cd_video_4: "CSS asoslari: selektorlar va xususiyatlar",
      cd_video_5: "Box model, margin va padding",
      cd_video_6: "Flexbox yordamida joylashtirish",
      cd_video_7: "CSS Grid tizimi bilan layout qurish",
      cd_video_8: "Amaliyot: portfolio sahifasini qurish",
      cd_practice_heading: "Amaliy mashg'ulotlar",
      cd_practice_1_title: "Shaxsiy vizit-kartochka sahifasi",
      cd_practice_1_desc: "HTML va CSS yordamida oddiy shaxsiy sahifa yaratish.",
      cd_practice_2_title: "Flexbox bilan navigatsiya paneli",
      cd_practice_2_desc: "Responsiv navigatsiya menyusini flexbox asosida qurish.",
      cd_practice_3_title: "Mahsulot kartochkalari (Grid)",
      cd_practice_3_desc: "CSS Grid yordamida mahsulotlar to'plamini joylashtirish.",
      cd_practice_4_title: "Yakuniy loyiha: Portfolio sayti",
      cd_practice_4_desc: "O'rganilgan barcha bilimlarni birlashtirib, to'liq portfolio sayt qurish.",
      cd_tests_heading: "Testlar",
      cd_test_1_title: "HTML asoslari bo'yicha test",
      cd_test_2_title: "CSS selektorlari va box model testi",
      cd_test_3_title: "Flexbox va Grid bo'yicha yakuniy test",
      cd_word_questions: "savol", cd_word_min: "daqiqa", cd_word_locked: "Yopiq", cd_word_preview: "Ko'rish",
      cd_sidebar_price_label: "Bepul", cd_sidebar_includes_heading: "Kursga kiradi",
      cd_sidebar_include_1: "38 video dars", cd_sidebar_include_2: "4 amaliy mashg'ulot",
      cd_sidebar_include_3: "3 test va yakuniy baholash", cd_sidebar_include_4: "Umrbod kirish huquqi",
      cd_sidebar_include_5: "Kurs tugagach sertifikat",
      cd_sidebar_enroll_btn: "Kursga yozilish", cd_sidebar_instructor_role: "Frontend mentor",
    },

    ru: {
      nav_home: "Главная", nav_courses: "Курсы", nav_subjects: "Предметы",
      nav_features: "Возможности", nav_contact: "Контакты", nav_cabinet: "Кабинет",
      nav_cabinet_mobile: "Войти в кабинет",

      hero_badge: "Растите вместе с 10,000+ учениками",
      hero_title1: "Построй своё будущее с", hero_title_accent: "SkillNova", hero_title2: "",
      hero_lead: "Изучайте современные знания, получайте новые навыки и быстрее достигайте своих целей — программирование, AI и English на одной платформе.",
      hero_cta_primary: "Начать курсы", hero_cta_secondary: "Узнать больше",
      hero_trust: "учеников уже учатся",
      hero_mock_role: "Направление Frontend", hero_mock_progress: "Общий прогресс",
      hero_mock_frontend: "Frontend", hero_mock_python: "Python", hero_mock_english: "English",
      hero_float_task_label: "Задача на сегодня",
      hero_float_cert_title: "Новый сертификат!", hero_float_cert_sub: "Основы Python",

      marquee_web: "Frontend Development", marquee_python: "Python", marquee_ai: "Искусственный интеллект",
      marquee_english: "English & IELTS", marquee_data: "Компьютерная грамотность",

      subjects_eyebrow: "Предметы", subjects_title: "С какого направления начнём?",
      subjects_desc: "Каждый предмет построен пошагово — с проектами, тестами и практикой.",
      subj_lit_title: "Компьютерная грамотность",
      subj_lit_desc: "Основы работы с компьютером, файлы, интернет и цифровая безопасность.",
      subj_web_title: "Frontend Development",
      subj_web_desc: "Изучайте HTML, CSS, JavaScript и современные веб-технологии на практике.",
      subj_python_title: "Python",
      subj_python_desc: "Путь от основ Python до создания реальных проектов.",
      subj_ai_title: "Искусственный интеллект",
      subj_ai_desc: "Основы AI, машинное обучение и использование современных AI-инструментов.",
      subj_en_title: "English",
      subj_en_desc: "Grammar, Vocabulary, Speaking и подготовка к IELTS.",
      subj_css_title: "HTML & CSS",
      subj_css_desc: "Основы HTML5 и CSS3 для создания современных и красивых веб-страниц.",

      level_beginner: "Начальный", level_medium: "Средний", level_advanced: "Продвинутый", level_all: "Все уровни",
      lessons_word: "уроков", student_word: "учеников", currency_som: "сум", price_free: "Бесплатно",

      courses_eyebrow: "Курсы", courses_title: "Самые популярные курсы",
      courses_desc: "Курсы, подготовленные менторами, ориентированные на практику.",
      tab_all: "Все", tab_web: "Web Development", tab_python: "Python", tab_english: "English",
      course_web_title: "Современный Web Development",
      course_web_desc: "Учитесь создавать сайты на основе HTML, CSS, JavaScript и современных веб-технологий.",
      course_web_pricetag: "/ начальный",
      course_python_title: "Основы Python и практика",
      course_python_desc: "Изучите Python и закрепите навыки через практические проекты.",
      course_en_title: "Подготовка English & IELTS",
      course_en_desc: "Полный курс подготовки по Grammar, Vocabulary, Speaking и IELTS.",
      btn_enroll: "Записаться", courses_more: "Смотреть все курсы",

      features_eyebrow: "Возможности", features_title: "Инструменты, облегчающие обучение",
      features_desc: "SkillNova — это не просто набор курсов, это ваша личная образовательная экосистема.",
      feat_1_title: "Персональный план обучения",
      feat_1_desc: "Автоматически создаётся личный учебный план, адаптированный под ваши цели и время.",
      feat_2_title: "AI-помощник",
      feat_2_desc: "Доступный 24/7 AI-помощник отвечает на вопросы и объясняет непонятные темы.",
      feat_3_title: "Сертификаты",
      feat_3_desc: "По завершении каждого курса вы получаете цифровой сертификат, подтверждающий подлинность.",
      feat_4_title: "Отслеживание прогресса",
      feat_4_desc: "Следите за своим прогрессом по каждому предмету и курсу в реальном времени.",
      feat_5_title: "Тесты",
      feat_5_desc: "Интерактивные тесты, проверяющие ваши знания после каждой темы.",

      stat_students: "Учеников", stat_courses: "Курсов", stat_mentors: "Менторов", stat_satisfaction: "Довольных учеников",

      cta_title: "Начните учиться уже сегодня",
      cta_desc: "Присоединяйтесь к тысячам учеников и начните с бесплатных курсов.",
      cta_button: "Начать бесплатно",

      footer_about: "Современная онлайн-платформа обучения, которая строит ваше будущее. Программирование, AI и English — в одном месте.",
      footer_platform: "Платформа", footer_company: "Компания", footer_help: "Помощь",
      footer_about_us: "О нас", footer_mentors: "Менторы", footer_blog: "Блог",
      footer_faq: "Часто задаваемые вопросы", footer_privacy: "Политика конфиденциальности",
      footer_copyright: "© 2026 SkillNova. Все права защищены.",

      cd_breadcrumb_home: "Главная", cd_breadcrumb_subjects: "Предметы", cd_breadcrumb_current: "HTML & CSS",
      cd_title: "Основы HTML & CSS",
      cd_subtitle: "Начните с нуля и научитесь создавать красивые адаптивные веб-страницы.",
      cd_meta_lessons: "38 видеоуроков", cd_meta_level: "Начальный", cd_meta_students: "4,120 учеников", cd_meta_rating: "4.9 (860 отзывов)",
      cd_tab_overview: "Обзор", cd_tab_videos: "Видеоуроки", cd_tab_practice: "Практика", cd_tab_tests: "Тесты",
      cd_overview_heading: "О курсе",
      cd_overview_text: "Этот курс введёт вас в мир программирования. Изучив основы HTML5 и CSS3 на практике, вы научитесь создавать реальные проекты — личный сайт, landing page и портфолио. Каждый урок закрепляется видео, текстовым объяснением и практическим заданием.",
      cd_overview_learn_heading: "Что вы изучите на этом курсе",
      cd_learn_1: "Семантические теги HTML5 и структура страницы",
      cd_learn_2: "Стилизация с CSS3, flexbox и grid",
      cd_learn_3: "Адаптивный дизайн — мобильные, планшеты и десктоп",
      cd_learn_4: "Анимации и переходы (transition, animation)",
      cd_learn_5: "Формы и элементы пользовательского интерфейса",
      cd_learn_6: "Реальный проект: создание портфолио с нуля",
      cd_videos_heading: "Список видеоуроков",
      cd_video_1: "Введение: что такое HTML и как он работает?",
      cd_video_2: "Структура страницы HTML и теги",
      cd_video_3: "Работа с изображениями, ссылками и списками",
      cd_video_4: "Основы CSS: селекторы и свойства",
      cd_video_5: "Box model, margin и padding",
      cd_video_6: "Размещение элементов с помощью Flexbox",
      cd_video_7: "Создание layout с CSS Grid",
      cd_video_8: "Практика: создание страницы портфолио",
      cd_practice_heading: "Практические занятия",
      cd_practice_1_title: "Личная визитная страница",
      cd_practice_1_desc: "Создание простой личной страницы с помощью HTML и CSS.",
      cd_practice_2_title: "Навигационная панель на Flexbox",
      cd_practice_2_desc: "Создание адаптивного меню навигации на основе flexbox.",
      cd_practice_3_title: "Карточки товаров (Grid)",
      cd_practice_3_desc: "Размещение набора товаров с помощью CSS Grid.",
      cd_practice_4_title: "Финальный проект: сайт-портфолио",
      cd_practice_4_desc: "Объединение всех изученных знаний в полноценный сайт-портфолио.",
      cd_tests_heading: "Тесты",
      cd_test_1_title: "Тест по основам HTML",
      cd_test_2_title: "Тест по селекторам CSS и box model",
      cd_test_3_title: "Финальный тест по Flexbox и Grid",
      cd_word_questions: "вопросов", cd_word_min: "минут", cd_word_locked: "Закрыто", cd_word_preview: "Просмотр",
      cd_sidebar_price_label: "Бесплатно", cd_sidebar_includes_heading: "Курс включает",
      cd_sidebar_include_1: "38 видеоуроков", cd_sidebar_include_2: "4 практических занятия",
      cd_sidebar_include_3: "3 теста и итоговая оценка", cd_sidebar_include_4: "Доступ навсегда",
      cd_sidebar_include_5: "Сертификат по завершении",
      cd_sidebar_enroll_btn: "Записаться на курс", cd_sidebar_instructor_role: "Frontend-ментор",
    },

    en: {
      nav_home: "Home", nav_courses: "Courses", nav_subjects: "Subjects",
      nav_features: "Features", nav_contact: "Contact", nav_cabinet: "Dashboard",
      nav_cabinet_mobile: "Go to dashboard",

      hero_badge: "Grow together with 10,000+ students",
      hero_title1: "Build your future with", hero_title_accent: "SkillNova", hero_title2: "",
      hero_lead: "Learn modern skills, gain new abilities and reach your goals faster — programming, AI and English, all on one platform.",
      hero_cta_primary: "Start learning", hero_cta_secondary: "Learn more",
      hero_trust: "students are already learning",
      hero_mock_role: "Frontend track", hero_mock_progress: "Overall progress",
      hero_mock_frontend: "Frontend", hero_mock_python: "Python", hero_mock_english: "English",
      hero_float_task_label: "Today's task",
      hero_float_cert_title: "New certificate!", hero_float_cert_sub: "Python Basics",

      marquee_web: "Frontend Development", marquee_python: "Python", marquee_ai: "Artificial Intelligence",
      marquee_english: "English & IELTS", marquee_data: "Computer Literacy",

      subjects_eyebrow: "Subjects", subjects_title: "Which track will you start with?",
      subjects_desc: "Every subject is structured step by step with projects, tests and practice.",
      subj_lit_title: "Computer Literacy",
      subj_lit_desc: "The basics of using a computer, files, the internet and digital safety.",
      subj_web_title: "Frontend Development",
      subj_web_desc: "Learn HTML, CSS, JavaScript and modern web technologies through practice.",
      subj_python_title: "Python",
      subj_python_desc: "A path from Python basics all the way to building real projects.",
      subj_ai_title: "Artificial Intelligence",
      subj_ai_desc: "AI fundamentals, machine learning and using modern AI tools.",
      subj_en_title: "English",
      subj_en_desc: "Grammar, vocabulary, speaking and IELTS preparation.",
      subj_css_title: "HTML & CSS",
      subj_css_desc: "HTML5 and CSS3 fundamentals for building beautiful, modern web pages.",

      level_beginner: "Beginner", level_medium: "Intermediate", level_advanced: "Advanced", level_all: "All levels",
      lessons_word: "lessons", student_word: "students", currency_som: "UZS", price_free: "Free",

      courses_eyebrow: "Courses", courses_title: "Most popular courses",
      courses_desc: "A practice-oriented course library, built by mentors.",
      tab_all: "All", tab_web: "Web Development", tab_python: "Python", tab_english: "English",
      course_web_title: "Modern Web Development",
      course_web_desc: "Learn to build websites with HTML, CSS, JavaScript and modern web technologies.",
      course_web_pricetag: "/ beginner",
      course_python_title: "Python Basics & Practice",
      course_python_desc: "Learn Python and reinforce your skills through hands-on projects.",
      course_en_title: "English & IELTS Prep",
      course_en_desc: "A complete prep course covering grammar, vocabulary, speaking and IELTS.",
      btn_enroll: "Enroll", courses_more: "View all courses",

      features_eyebrow: "Features", features_title: "Tools that make learning easier",
      features_desc: "SkillNova isn't just a course library — it's your personal learning ecosystem.",
      feat_1_title: "Personal Learning Plan",
      feat_1_desc: "A personal study plan is generated automatically, tailored to your goals and schedule.",
      feat_2_title: "AI Assistant",
      feat_2_desc: "A 24/7 AI assistant answers your questions and explains topics you didn't understand.",
      feat_3_title: "Certificates",
      feat_3_desc: "Get a verifiable digital certificate whenever you complete a course.",
      feat_4_title: "Progress Tracking",
      feat_4_desc: "Track your progress across every subject and course in real time.",
      feat_5_title: "Quizzes",
      feat_5_desc: "Interactive quizzes that test your knowledge after every topic.",

      stat_students: "Students", stat_courses: "Courses", stat_mentors: "Mentors", stat_satisfaction: "Satisfied students",

      cta_title: "Start learning today",
      cta_desc: "Join thousands of students and get started with free courses.",
      cta_button: "Start for free",

      footer_about: "A modern online learning platform that builds your future. Programming, AI and English — all in one place.",
      footer_platform: "Platform", footer_company: "Company", footer_help: "Help",
      footer_about_us: "About us", footer_mentors: "Mentors", footer_blog: "Blog",
      footer_faq: "FAQ", footer_privacy: "Privacy policy",
      footer_copyright: "© 2026 SkillNova. All rights reserved.",

      cd_breadcrumb_home: "Home", cd_breadcrumb_subjects: "Subjects", cd_breadcrumb_current: "HTML & CSS",
      cd_title: "HTML & CSS Fundamentals",
      cd_subtitle: "Start from zero and learn to build beautiful, responsive web pages.",
      cd_meta_lessons: "38 video lessons", cd_meta_level: "Beginner", cd_meta_students: "4,120 students", cd_meta_rating: "4.9 (860 reviews)",
      cd_tab_overview: "Overview", cd_tab_videos: "Video lessons", cd_tab_practice: "Practice", cd_tab_tests: "Tests",
      cd_overview_heading: "About this course",
      cd_overview_text: "This course introduces you to the world of programming. By learning HTML5 and CSS3 fundamentals hands-on, you'll build real projects — a personal site, a landing page and a portfolio. Every lesson is reinforced with video, written explanation and a practical assignment.",
      cd_overview_learn_heading: "What you'll learn in this course",
      cd_learn_1: "HTML5 semantic tags and page structure",
      cd_learn_2: "Styling with CSS3, flexbox and the grid system",
      cd_learn_3: "Responsive design — mobile, tablet and desktop",
      cd_learn_4: "Animation and transitions (transition, animation)",
      cd_learn_5: "Forms and user-interface elements",
      cd_learn_6: "Real project: building a portfolio site from scratch",
      cd_videos_heading: "Video lesson list",
      cd_video_1: "Intro: what is HTML and how does it work?",
      cd_video_2: "HTML page structure and tags",
      cd_video_3: "Working with images, links and lists",
      cd_video_4: "CSS basics: selectors and properties",
      cd_video_5: "Box model, margin and padding",
      cd_video_6: "Laying things out with Flexbox",
      cd_video_7: "Building layouts with CSS Grid",
      cd_video_8: "Practice: building a portfolio page",
      cd_practice_heading: "Practical exercises",
      cd_practice_1_title: "Personal bio-card page",
      cd_practice_1_desc: "Build a simple personal page using HTML and CSS.",
      cd_practice_2_title: "Flexbox navigation bar",
      cd_practice_2_desc: "Build a responsive navigation menu using flexbox.",
      cd_practice_3_title: "Product cards (Grid)",
      cd_practice_3_desc: "Lay out a set of product cards using CSS Grid.",
      cd_practice_4_title: "Final project: portfolio site",
      cd_practice_4_desc: "Combine everything you've learned into a complete portfolio site.",
      cd_tests_heading: "Tests",
      cd_test_1_title: "HTML fundamentals test",
      cd_test_2_title: "CSS selectors & box model test",
      cd_test_3_title: "Final Flexbox & Grid test",
      cd_word_questions: "questions", cd_word_min: "min", cd_word_locked: "Locked", cd_word_preview: "Preview",
      cd_sidebar_price_label: "Free", cd_sidebar_includes_heading: "This course includes",
      cd_sidebar_include_1: "38 video lessons", cd_sidebar_include_2: "4 practical exercises",
      cd_sidebar_include_3: "3 tests and a final assessment", cd_sidebar_include_4: "Lifetime access",
      cd_sidebar_include_5: "Certificate on completion",
      cd_sidebar_enroll_btn: "Enroll in course", cd_sidebar_instructor_role: "Frontend mentor",
    },
  };

  function getSavedLang() {
    return localStorage.getItem(LANG_KEY) || 'uz';
  }

  function t(key, lang) {
    const l = lang || getSavedLang();
    return (dict[l] && dict[l][key]) || (dict.uz && dict.uz[key]) || key;
  }

  function applyLanguage(lang) {
    if (!dict[lang]) lang = 'uz';
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key] !== undefined) {
        el.textContent = dict[lang][key];
      }
    });

    document.querySelectorAll('[data-lang-current]').forEach((el) => {
      el.textContent = lang.toUpperCase();
    });

    document.querySelectorAll('[data-lang-option]').forEach((el) => {
      el.classList.toggle('active', el.getAttribute('data-lang-option') === lang);
    });

    document.dispatchEvent(new CustomEvent('skillnova:languagechange', { detail: { lang } }));
  }

  window.SkillNovaI18n = { dict, t, applyLanguage, getSavedLang };

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getSavedLang());

    document.querySelectorAll('[data-lang-option]').forEach((opt) => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.getAttribute('data-lang-option'));
        const menu = opt.closest('[data-lang-menu]');
        if (menu) menu.classList.remove('open');
      });
    });

    const langBtn = document.querySelector('[data-lang-btn]');
    const langMenu = document.querySelector('[data-lang-menu]');
    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = langMenu.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', () => {
        langMenu.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    }
  });
})();
