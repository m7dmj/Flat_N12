/*
  FILE: app.js - ENHANCED VERSION (COMPLETE)
  New Features: Multilingual support, Region/City navigation, Calendar filter
*/

// ==================== TRANSLATIONS DATA ====================
const translations = {
  tr: {
    
    select_city: 'Şehir Seç',
    search_placeholder: 'Ne arıyorsunuz? (/ tuşu ile odakla)',
    search_placeholder_mobile: 'İlan ara...',
    location_placeholder: '📍 Şehir / Bölge',
    post_ad: 'İlan Ver',
    select_region: 'Bölge Seç',
    select_category: 'Kategori Seçin',
    search_cities: 'Şehir ara...',
    date_filter: 'Tarih Filtresi',
    today: 'Bugün',
    yesterday: 'Dün',
    last_7_days: 'Son 7 Gün',
    last_30_days: 'Son 30 Gün',
    all_dates: 'Tüm Tarihler',
    custom_range: 'Özel Aralık',
    from_date: 'Başlangıç:',
    to_date: 'Bitiş:',
    apply_filter: 'Filtreyi Uygula',
    clear_filter: 'Filtreyi Temizle',
    all: 'Tümü',
    housing: 'Kalacak Yer',
    jobs: 'İş İlanları',
    for_sale: 'Satılık',
    services: 'Hizmetler',
    community: 'Topluluk',
    vehicles: 'Vasıtalar',
    listings: 'ilan',
    newest: 'En Yeni',
    oldest: 'En Eski',
    price_low_high: 'Fiyat: Düşükten Yükseğe',
    price_high_low: 'Fiyat: Yüksekten Düşüğe',
    no_listings_found: 'İlan Bulunamadı',
    no_listings_message: 'Arama kriterlerinize uygun ilan bulunamadı. Farklı filtreler deneyin.',
    listing_detail: 'İlan Detayı',
    post_new_ad: 'Yeni İlan Ver',
    ad_title: 'İlan Başlığı *',
    ad_title_placeholder: 'örn: 2+1 Kiralık Daire - Merkez',
    category: 'Kategori *',
    price: 'Fiyat (₺)',
    location: 'Konum *',
    location_example: 'örn: İstanbul, Kadıköy',
    description: 'Açıklama *',
    description_placeholder: 'İlanınızın detaylı açıklamasını yazın...',
    contact_info: 'İletişim Bilgisi *',
    contact_placeholder: 'Telefon veya Email',
    cancel: 'İptal',
    publish_ad: 'İlanı Yayınla',
    my_favorites: 'Favorilerim',
    help: 'Yardım',
    safety: 'Güvenlik',
    privacy: 'Gizlilik',
    terms: 'Kurallar',
    about: 'Hakkında',
    app: 'Uygulama',
    rights: 'Tüm hakları saklıdır',
    show_contact: 'İletişim Bilgisini Göster',
    copy: 'Kopyala',
    copied: 'Kopyalandı!',
    free: 'Ücretsiz',
    days_ago: 'gün önce',
    weeks_ago: 'hafta önce',
    delete_ad: 'İlanı Sil',
    confirm_delete: 'Bu ilanı silmek istediğinizden emin misiniz?',
    delete_confirm: 'Evet, Sil',
    cancel: 'İptal',
    ad_deleted: 'İlan silindi',
  },
  en: {
    
    select_city: 'Select City',
    search_placeholder: 'What are you looking for? (/ to focus)',
    search_placeholder_mobile: 'Search listings...',
    location_placeholder: '📍 City / Region',
    post_ad: 'Post Ad',
    select_region: 'Select Region',
    select_category: 'Select Category',
    search_cities: 'Search cities...',
    date_filter: 'Date Filter',
    today: 'Today',
    yesterday: 'Yesterday',
    last_7_days: 'Last 7 Days',
    last_30_days: 'Last 30 Days',
    all_dates: 'All Dates',
    custom_range: 'Custom Range',
    from_date: 'From:',
    to_date: 'To:',
    apply_filter: 'Apply Filter',
    clear_filter: 'Clear Filter',
    all: 'All',
    housing: 'Housing',
    jobs: 'Jobs',
    for_sale: 'For Sale',
    services: 'Services',
    community: 'Community',
    vehicles: 'Vehicles',
    listings: 'listings',
    newest: 'Newest',
    oldest: 'Oldest',
    price_low_high: 'Price: Low to High',
    price_high_low: 'Price: High to Low',
    no_listings_found: 'No Listings Found',
    no_listings_message: 'No listings match your search criteria. Try different filters.',
    listing_detail: 'Listing Detail',
    post_new_ad: 'Post New Ad',
    ad_title: 'Ad Title *',
    ad_title_placeholder: 'e.g: 2+1 Apartment for Rent - Downtown',
    category: 'Category *',
    price: 'Price (₺)',
    location: 'Location *',
    location_example: 'e.g: Istanbul, Kadıköy',
    description: 'Description *',
    description_placeholder: 'Write detailed description of your listing...',
    contact_info: 'Contact Info *',
    contact_placeholder: 'Phone or Email',
    cancel: 'Cancel',
    publish_ad: 'Publish Ad',
    my_favorites: 'My Favorites',
    help: 'Help',
    safety: 'Safety',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    app: 'App',
    rights: 'All rights reserved',
    show_contact: 'Show Contact Info',
    copy: 'Copy',
    copied: 'Copied!',
    free: 'Free',
    days_ago: 'days ago',
    weeks_ago: 'weeks ago',
    delete_ad: 'Delete Ad',
    confirm_delete: 'Are you sure you want to delete this ad?',
    delete_confirm: 'Yes, Delete',
    cancel: 'Cancel',
    ad_deleted: 'Ad deleted',
  },
  ar: {
    
    select_city: 'اختر المدينة',
    search_placeholder: 'ماذا تبحث عنه؟ (/ للتركيز)',
    search_placeholder_mobile: 'بحث في الإعلانات...',
    location_placeholder: '📍 المدينة / المنطقة',
    post_ad: 'نشر إعلان',
    select_region: 'اختر المنطقة',
    select_category: 'اختر الفئة',
    search_cities: 'بحث عن المدن...',
    date_filter: 'تصفية التاريخ',
    today: 'اليوم',
    yesterday: 'أمس',
    last_7_days: 'آخر 7 أيام',
    last_30_days: 'آخر 30 يومًا',
    all_dates: 'جميع التواريخ',
    custom_range: 'نطاق مخصص',
    from_date: 'من:',
    to_date: 'إلى:',
    apply_filter: 'تطبيق التصفية',
    clear_filter: 'مسح التصفية',
    all: 'الكل',
    housing: 'سكن',
    jobs: 'وظائف',
    for_sale: 'للبيع',
    services: 'خدمات',
    community: 'مجتمع',
    vehicles: 'مركبات',
    listings: 'إعلان',
    newest: 'الأحدث',
    oldest: 'الأقدم',
    price_low_high: 'السعر: من الأقل للأعلى',
    price_high_low: 'السعر: من الأعلى للأقل',
    no_listings_found: 'لم يتم العثور على إعلانات',
    no_listings_message: 'لا توجد إعلانات تطابق معايير البحث. جرب تصفيات مختلفة.',
    listing_detail: 'تفاصيل الإعلان',
    post_new_ad: 'نشر إعلان جديد',
    ad_title: 'عنوان الإعلان *',
    ad_title_placeholder: 'مثال: شقة 2+1 للإيجار - وسط المدينة',
    category: 'الفئة *',
    price: 'السعر (₺)',
    location: 'الموقع *',
    location_example: 'مثال: إسطنبول، كاديكوي',
    description: 'الوصف *',
    description_placeholder: 'اكتب وصفًا مفصلاً لإعلانك...',
    contact_info: 'معلومات الاتصال *',
    contact_placeholder: 'الهاتف أو البريد الإلكتروني',
    cancel: 'إلغاء',
    publish_ad: 'نشر الإعلان',
    my_favorites: 'المفضلة',
    help: 'مساعدة',
    safety: 'الأمان',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    about: 'حول',
    app: 'التطبيق',
    rights: 'جميع الحقوق محفوظة',
    show_contact: 'عرض معلومات الاتصال',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    free: 'مجاني',
    days_ago: 'أيام مضت',
    weeks_ago: 'أسابيع مضت',
    delete_ad: 'حذف الإعلان',
    confirm_delete: 'هل أنت متأكد من حذف هذا الإعلان؟',
    delete_confirm: 'نعم، احذف',
    cancel: 'إلغاء',
    ad_deleted: 'تم حذف الإعلان',
  }
};

// ==================== REGIONS & COUNTRIES DATA ====================
const regionsData = {
  'Europe': {
    icon: '🇪🇺',
    countries: {
      'Turkey': { flag: '🇹🇷', cities: ['Istanbul', 'Ankara', 'Izmir', 'Antalya', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Eskişehir', 'Trabzon'] },
      'Germany': { flag: '🇩🇪', cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Dortmund'] },
      'France': { flag: '🇫🇷', cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Bordeaux'] },
      'United Kingdom': { flag: '🇬🇧', cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Edinburgh', 'Bristol'] },
      'Italy': { flag: '🇮🇹', cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Florence', 'Venice', 'Bologna', 'Genoa'] },
      'Spain': { flag: '🇪🇸', cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Bilbao', 'Granada'] }
    }
  },
  'Middle East': {
    icon: '🕌',
    countries: {
      'Saudi Arabia': { flag: '🇸🇦', cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Buraidah'] },
      'UAE': { flag: '🇦🇪', cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Al Ain'] },
      'Egypt': { flag: '🇪🇬', cities: ['Cairo', 'Alexandria', 'Giza', 'Sharm El Sheikh', 'Luxor', 'Aswan', 'Hurghada', 'Port Said'] },
      'Jordan': { flag: '🇯🇴', cities: ['Amman', 'Zarqa', 'Irbid', 'Aqaba', 'Madaba', 'Jerash', 'Petra', 'Karak'] },
      'Lebanon': { flag: '🇱🇧', cities: ['Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Jounieh', 'Zahlé', 'Baalbek', 'Byblos'] }
    }
  },
  'Asia': {
    icon: '🌏',
    countries: {
      'Japan': { flag: '🇯🇵', cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe'] },
      'South Korea': { flag: '🇰🇷', cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan'] },
      'China': { flag: '🇨🇳', cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou', 'Wuhan', 'Xi\'an'] },
      'India': { flag: '🇮🇳', cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'] },
      'Thailand': { flag: '🇹🇭', cities: ['Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket', 'Krabi', 'Hua Hin', 'Chiang Rai', 'Ayutthaya'] }
    }
  },
  'North America': {
    icon: '🗽',
    countries: {
      'USA': { flag: '🇺🇸', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'] },
      'Canada': { flag: '🇨🇦', cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City'] },
      'Mexico': { flag: '🇲🇽', cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Cancún', 'Mérida'] }
    }
  },
  'South America': {
    icon: '🌎',
    countries: {
      'Brazil': { flag: '🇧🇷', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba'] },
      'Argentina': { flag: '🇦🇷', cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'San Miguel de Tucumán', 'La Plata', 'Mar del Plata'] },
      'Colombia': { flag: '🇨🇴', cities: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Bucaramanga', 'Pereira'] },
      'Chile': { flag: '🇨🇱', cities: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Viña del Mar', 'Temuco'] }
    }
  },
  'Africa': {
    icon: '🌍',
    countries: {
      'South Africa': { flag: '🇿🇦', cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'Nelspruit'] },
      'Nigeria': { flag: '🇳🇬', cities: ['Lagos', 'Abuja', 'Kano', 'Ibadan', 'Port Harcourt', 'Benin City', 'Kaduna', 'Enugu'] },
      'Kenya': { flag: '🇰🇪', cities: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale'] },
      'Morocco': { flag: '🇲🇦', cities: ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Agadir', 'Meknes', 'Oujda'] }
    }
  },
  'Oceania': {
    icon: '🏝️',
    countries: {
      'Australia': { flag: '🇦🇺', cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle'] },
      'New Zealand': { flag: '🇳🇿', cities: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Palmerston North'] }
    }
  }
};

// ==================== GEOGRAPHY TRANSLATIONS ====================
const geographyTranslations = {
  continents: {
    tr: {
      'Europe': 'Avrupa',
      'Middle East': 'Orta Doğu',
      'Asia': 'Asya',
      'North America': 'Kuzey Amerika',
      'South America': 'Güney Amerika',
      'Africa': 'Afrika',
      'Oceania': 'Okyanusya'
    },
    en: {
      'Europe': 'Europe',
      'Middle East': 'Middle East',
      'Asia': 'Asia',
      'North America': 'North America',
      'South America': 'South America',
      'Africa': 'Africa',
      'Oceania': 'Oceania'
    },
    ar: {
      'Europe': 'أوروبا',
      'Middle East': 'الشرق الأوسط',
      'Asia': 'آسيا',
      'North America': 'أمريكا الشمالية',
      'South America': 'أمريكا الجنوبية',
      'Africa': 'أفريقيا',
      'Oceania': 'أوقيانوسيا'
    }
  },
  countries: {
    tr: {
      'Turkey': 'Türkiye',
      'Germany': 'Almanya',
      'France': 'Fransa',
      'United Kingdom': 'İngiltere',
      'Italy': 'İtalya',
      'Spain': 'İspanya',
      'Saudi Arabia': 'Suudi Arabistan',
      'UAE': 'BAE',
      'Egypt': 'Mısır',
      'Jordan': 'Ürdün',
      'Lebanon': 'Lübnan',
      'Japan': 'Japonya',
      'South Korea': 'Güney Kore',
      'China': 'Çin',
      'India': 'Hindistan',
      'Thailand': 'Tayland',
      'USA': 'ABD',
      'Canada': 'Kanada',
      'Mexico': 'Meksika',
      'Brazil': 'Brezilya',
      'Argentina': 'Arjantin',
      'Colombia': 'Kolombiya',
      'Chile': 'Şili',
      'South Africa': 'Güney Afrika',
      'Nigeria': 'Nijerya',
      'Kenya': 'Kenya',
      'Morocco': 'Fas',
      'Australia': 'Avustralya',
      'New Zealand': 'Yeni Zelanda'
    },
    en: {
      'Turkey': 'Turkey',
      'Germany': 'Germany',
      'France': 'France',
      'United Kingdom': 'United Kingdom',
      'Italy': 'Italy',
      'Spain': 'Spain',
      'Saudi Arabia': 'Saudi Arabia',
      'UAE': 'UAE',
      'Egypt': 'Egypt',
      'Jordan': 'Jordan',
      'Lebanon': 'Lebanon',
      'Japan': 'Japan',
      'South Korea': 'South Korea',
      'China': 'China',
      'India': 'India',
      'Thailand': 'Thailand',
      'USA': 'USA',
      'Canada': 'Canada',
      'Mexico': 'Mexico',
      'Brazil': 'Brazil',
      'Argentina': 'Argentina',
      'Colombia': 'Colombia',
      'Chile': 'Chile',
      'South Africa': 'South Africa',
      'Nigeria': 'Nigeria',
      'Kenya': 'Kenya',
      'Morocco': 'Morocco',
      'Australia': 'Australia',
      'New Zealand': 'New Zealand'
    },
    ar: {
      'Turkey': 'تركيا',
      'Germany': 'ألمانيا',
      'France': 'فرنسا',
      'United Kingdom': 'المملكة المتحدة',
      'Italy': 'إيطاليا',
      'Spain': 'إسبانيا',
      'Saudi Arabia': 'المملكة العربية السعودية',
      'UAE': 'الإمارات',
      'Egypt': 'مصر',
      'Jordan': 'الأردن',
      'Lebanon': 'لبنان',
      'Japan': 'اليابان',
      'South Korea': 'كوريا الجنوبية',
      'China': 'الصين',
      'India': 'الهند',
      'Thailand': 'تايلاند',
      'USA': 'الولايات المتحدة',
      'Canada': 'كندا',
      'Mexico': 'المكسيك',
      'Brazil': 'البرازيل',
      'Argentina': 'الأرجنتين',
      'Colombia': 'كولومبيا',
      'Chile': 'تشيلي',
      'South Africa': 'جنوب أفريقيا',
      'Nigeria': 'نيجيريا',
      'Kenya': 'كينيا',
      'Morocco': 'المغرب',
      'Australia': 'أستراليا',
      'New Zealand': 'نيوزيلندا'
    }
  },
  cities: {
    tr: {
      // Turkey
      'Istanbul': 'İstanbul', 'Ankara': 'Ankara', 'Izmir': 'İzmir', 'Antalya': 'Antalya',
      'Bursa': 'Bursa', 'Adana': 'Adana', 'Gaziantep': 'Gaziantep', 'Konya': 'Konya',
      // Saudi Arabia
      'Riyadh': 'Riyad', 'Jeddah': 'Cidde', 'Mecca': 'Mekke', 'Medina': 'Medine',
      'Dammam': 'Dammam', 'Khobar': 'Khobar',
      // UAE
      'Dubai': 'Dubai', 'Abu Dhabi': 'Abu Dabi', 'Sharjah': 'Sharjah',
      // Egypt
      'Cairo': 'Kahire', 'Alexandria': 'İskenderiye', 'Giza': 'Giza',
      // Others
      'Beijing': 'Pekin', 'Tokyo': 'Tokyo', 'Seoul': 'Seul',
      'New York': 'New York', 'Los Angeles': 'Los Angeles',
      'London': 'Londra', 'Paris': 'Paris', 'Rome': 'Roma', 'Berlin': 'Berlin'
    },
    en: {
      // All cities keep their English names
      'Istanbul': 'Istanbul', 'Ankara': 'Ankara', 'Izmir': 'Izmir', 'Antalya': 'Antalya',
      'Riyadh': 'Riyadh', 'Jeddah': 'Jeddah', 'Mecca': 'Mecca', 'Medina': 'Medina',
      'Dubai': 'Dubai', 'Abu Dhabi': 'Abu Dhabi',
      'Cairo': 'Cairo', 'Alexandria': 'Alexandria',
      'Beijing': 'Beijing', 'Tokyo': 'Tokyo', 'Seoul': 'Seoul',
      'New York': 'New York', 'Los Angeles': 'Los Angeles'
    },
    ar: {
      // Turkey
      'Istanbul': 'إسطنبول', 'Ankara': 'أنقرة', 'Izmir': 'إزمير', 'Antalya': 'أنطاليا',
      'Bursa': 'بورصة', 'Adana': 'أضنة', 'Gaziantep': 'غازي عنتاب', 'Konya': 'قونية',
      'Eskişehir': 'إسكي شهير', 'Trabzon': 'طرابزون',
      // Saudi Arabia
      'Riyadh': 'الرياض', 'Jeddah': 'جدة', 'Mecca': 'مكة', 'Medina': 'المدينة',
      'Dammam': 'الدمام', 'Khobar': 'الخبر', 'Tabuk': 'تبوك', 'Buraidah': 'بريدة',
      // UAE
      'Dubai': 'دبي', 'Abu Dhabi': 'أبو ظبي', 'Sharjah': 'الشارقة', 
      'Ajman': 'عجمان', 'Ras Al Khaimah': 'رأس الخيمة', 'Fujairah': 'الفجيرة', 'Al Ain': 'العين',
      // Egypt
      'Cairo': 'القاهرة', 'Alexandria': 'الإسكندرية', 'Giza': 'الجيزة',
      'Sharm El Sheikh': 'شرم الشيخ', 'Luxor': 'الأقصر', 'Aswan': 'أسوان',
      'Hurghada': 'الغردقة', 'Port Said': 'بورسعيد',
      // Jordan
      'Amman': 'عمان', 'Zarqa': 'الزرقاء', 'Irbid': 'إربد', 'Aqaba': 'العقبة',
      'Madaba': 'مادبا', 'Jerash': 'جرش', 'Petra': 'البتراء', 'Karak': 'الكرك',
      // Lebanon
      'Beirut': 'بيروت', 'Tripoli': 'طرابلس', 'Sidon': 'صيدا', 'Tyre': 'صور',
      'Jounieh': 'جونيه', 'Zahlé': 'زحلة', 'Baalbek': 'بعلبك', 'Byblos': 'جبيل',
      // Asia
      'Tokyo': 'طوكيو', 'Osaka': 'أوساكا', 'Kyoto': 'كيوتو', 'Yokohama': 'يوكوهاما',
      'Seoul': 'سيول', 'Busan': 'بوسان', 'Incheon': 'إنتشون',
      'Beijing': 'بكين', 'Shanghai': 'شنغهاي', 'Guangzhou': 'قوانغتشو',
      'Mumbai': 'مومباي', 'Delhi': 'دلهي', 'Bangalore': 'بنغالور',
      'Bangkok': 'بانكوك', 'Phuket': 'بوكيت',
      // Europe
      'London': 'لندن', 'Manchester': 'مانشستر', 'Birmingham': 'برمنغهام',
      'Paris': 'باريس', 'Marseille': 'مرسيليا', 'Lyon': 'ليون',
      'Berlin': 'برلين', 'Munich': 'ميونخ', 'Hamburg': 'هامبورغ',
      'Rome': 'روما', 'Milan': 'ميلانو', 'Naples': 'نابولي',
      'Madrid': 'مدريد', 'Barcelona': 'برشلونة', 'Valencia': 'فالنسيا',
      // Americas
      'New York': 'نيويورك', 'Los Angeles': 'لوس أنجلوس', 'Chicago': 'شيكاغو',
      'Houston': 'هيوستن', 'Phoenix': 'فينيكس', 'Philadelphia': 'فيلادلفيا',
      'Toronto': 'تورونتو', 'Montreal': 'مونتريال', 'Vancouver': 'فانكوفر',
      'Mexico City': 'مكسيكو سيتي', 'Guadalajara': 'غوادالاخارا',
      'São Paulo': 'ساو باولو', 'Rio de Janeiro': 'ريو دي جانيرو',
      'Buenos Aires': 'بوينس آيرس', 'Bogotá': 'بوغوتا',
      // Africa
      'Johannesburg': 'جوهانسبرغ', 'Cape Town': 'كيب تاون', 'Durban': 'ديربان',
      'Lagos': 'لاغوس', 'Abuja': 'أبوجا', 'Nairobi': 'نيروبي',
      'Casablanca': 'الدار البيضاء', 'Rabat': 'الرباط', 'Marrakech': 'مراكش',
      'Fes': 'فاس', 'Tangier': 'طنجة', 'Agadir': 'أكادير',
      // Oceania
      'Sydney': 'سيدني', 'Melbourne': 'ملبورن', 'Brisbane': 'بريسبان',
      'Auckland': 'أوكلاند', 'Wellington': 'ويلينغتون'
    }
  }
};

// Helper function to translate geography names
function translateGeo(type, name, lang) {
  const translations = geographyTranslations[type][lang];
  return translations && translations[name] ? translations[name] : name;
}

// ==================== SAMPLE DATA ====================
const sampleListings = [
  {
    id: '1',
    title: '2+1 Kiralık Daire - Merkez Konumda',
    description: 'Şehir merkezinde, toplu taşımaya yakın, yeni yapılı, ferah daire. Site içerisinde güvenlik, otopark mevcut. Eşyalı veya eşyasız kiralama seçeneği.',
    price: 12000,
    location: 'İstanbul, Kadıköy',
    category: 'kalacak-yer',
    categoryName: 'Kalacak Yer',
    date: new Date('2025-10-20'),
    contact: '0555 123 45 67',
    image: '🏠',
    featured: true
  },
  {
    id: '2',
    title: 'Yazılım Geliştirici Aranıyor',
    description: 'Full-stack geliştirici aranıyor. React, Node.js, TypeScript bilgisi şart. Uzaktan çalışma imkanı var. Esnek çalışma saatleri.',
    price: 45000,
    location: 'İstanbul, Şişli',
    category: 'is-ilanlari',
    categoryName: 'İş İlanları',
    date: new Date('2025-10-22'),
    contact: 'kariyer@sirket.com',
    image: '💼'
  },
  {
    id: '3',
    title: 'iPhone 15 Pro - Sıfır Ayarında',
    description: 'Hiç kullanılmadı, kutusunda tüm aksesuarları mevcut. Apple Türkiye faturası ve 2 yıl garanti. Renk: Titanyum Mavi.',
    price: 45000,
    location: 'Ankara, Çankaya',
    category: 'satilik',
    categoryName: 'Satılık',
    date: new Date('2025-10-23'),
    contact: '0532 987 65 43',
    image: '📱'
  },
  {
    id: '4',
    title: 'Profesyonel Web Tasarım Hizmeti',
    description: 'Modern, responsive, SEO uyumlu web siteleri tasarlıyoruz. E-ticaret çözümleri, kurumsal siteler, portfolyo siteleri. 10+ yıl deneyim.',
    price: 8000,
    location: 'İzmir, Bornova',
    category: 'hizmetler',
    categoryName: 'Hizmetler',
    date: new Date('2025-10-21'),
    contact: 'info@webtasarim.com',
    image: '🔧'
  },
  {
    id: '5',
    title: 'Gönüllü Öğretmen Aranıyor',
    description: 'Çocuklara ücretsiz İngilizce dersi verecek gönüllüler arıyoruz. Hafta sonu 2 saat. Okuma yazma bilen 7-12 yaş grubu çocuklar.',
    price: 0,
    location: 'Bursa, Nilüfer',
    category: 'topluluk',
    categoryName: 'Topluluk',
    date: new Date('2025-10-24'),
    contact: 'dernekbursa@email.com',
    image: '👥'
  },
  {
    id: '6',
    title: '2020 Model Volkswagen Golf - Hatasız',
    description: 'Tek elden, bakımlı, tam otomatik vites. 65.000 km de. Trafik sigortası yeni yapıldı. Boya-hasar yok. Takas yok.',
    price: 850000,
    location: 'Antalya, Muratpaşa',
    category: 'vasitalar',
    categoryName: 'Vasıtalar',
    date: new Date('2025-10-19'),
    contact: '0544 321 98 76',
    image: '🚗',
    featured: true
  },
  {
    id: '7',
    title: 'MacBook Pro M3 - Garantili',
    description: '16GB RAM, 512GB SSD, Apple Türkiye garantisi mevcut. 2 ay önce alındı, sıfır gibi. Kutusunda tüm aksesuarlar.',
    price: 65000,
    location: 'İstanbul, Beşiktaş',
    category: 'satilik',
    categoryName: 'Satılık',
    date: new Date('2025-10-23'),
    contact: '0533 456 78 90',
    image: '💻'
  },
  {
    id: '8',
    title: 'İngilizce - Almanca Özel Ders',
    description: 'Deneyimli öğretmen tarafından veriliyor. Online veya yüz yüze ders imkanı. Her seviyeye uygun program. YDS, TOEFL hazırlık.',
    price: 500,
    location: 'Ankara, Kızılay',
    category: 'hizmetler',
    categoryName: 'Hizmetler',
    date: new Date('2025-10-22'),
    contact: '0555 789 12 34',
    image: '📚'
  },
  {
    id: '9',
    title: 'Dijital Pazarlama Uzmanı - Remote',
    description: 'SEO, SEM, sosyal medya yönetimi deneyimi olan uzman aranıyor. Google Ads ve Meta Ads sertifikası tercih sebebi.',
    price: 35000,
    location: 'Remote / Uzaktan',
    category: 'is-ilanlari',
    categoryName: 'İş İlanları',
    date: new Date('2025-10-21'),
    contact: 'hr@dijitalajans.com',
    image: '📊'
  },
  {
    id: '10',
    title: 'Bisiklet - Trek Marlin 7',
    description: 'Az kullanılmış, mükemmel durumda dağ bisikleti. Tüm ekipmanlar dahil: kask, bidon, tamir kiti, kilit.',
    price: 18000,
    location: 'İzmir, Karşıyaka',
    category: 'satilik',
    categoryName: 'Satılık',
    date: new Date('2025-10-20'),
    contact: '0542 111 22 33',
    image: '🚴'
  },
  {
    id: '11',
    title: 'Stüdyo Daire - Öğrenciye Özel',
    description: 'Üniversiteye 5 dk yürüme mesafesi. Eşyalı, aidat dahil fiyat. Öğrenciye uygun. Internet dahil.',
    price: 7500,
    location: 'Eskişehir, Tepebaşı',
    category: 'kalacak-yer',
    categoryName: 'Kalacak Yer',
    date: new Date('2025-10-24'),
    contact: '0536 654 32 10',
    image: '🏡'
  },
  {
    id: '12',
    title: 'PS5 + 5 Oyun - Komple Set',
    description: 'Disk sürümlü PS5, 2 kol, şarj istasyonu ve 5 popüler oyun (FIFA, Spider-Man, God of War). Faturalı.',
    price: 28000,
    location: 'Adana, Seyhan',
    category: 'satilik',
    categoryName: 'Satılık',
    date: new Date('2025-10-23'),
    contact: '0545 987 65 43',
    image: '🎮'
  }
];

// ==================== STATE MANAGEMENT ====================
const state = {
  listings: [],
  filteredListings: [],
  bookmarks: [],
  currentSort: 'date-desc',
  currentCategory: 'all',
  searchQuery: '',
  locationQuery: '',
  darkMode: false,
  currentLang: 'tr',
  selectedCountry: null,
  selectedCity: null,
  dateFilter: {
    preset: 'all',
    from: null,
    to: null
  }
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing Enhanced Classified Ads App...');
  initializeApp();
});

function initializeApp() {
  loadFromStorage();
  
  if (state.listings.length === 0) {
    state.listings = [...sampleListings];
    saveToStorage();
  }
  
  applyTheme();
  applyLanguage();
  showSkeletonLoaders();
  
  setTimeout(() => {
    state.filteredListings = [...state.listings];
    renderListings();
    updateResultsCount();
  }, 800);
  
  setupEventListeners();
  updateFooterYear();
  updateBookmarkBadge();
  
  // Restore UI state with translations
  if (state.selectedCountry) {
    const translatedCountry = translateGeo('countries', state.selectedCountry, state.currentLang);
    const regionText = document.querySelector('.region-text');
    if (regionText) regionText.textContent = translatedCountry;
    
    const cityBtn = document.getElementById('cityBtn');
    if (cityBtn) cityBtn.style.display = 'flex';
  }
  
  if (state.selectedCity) {
    const translatedCity = translateGeo('cities', state.selectedCity, state.currentLang);
    const cityText = document.querySelector('.city-text');
    if (cityText) cityText.textContent = translatedCity;
  }
  
  showActiveFilters();
  
  console.log('✅ App initialized successfully!');
}

// ==================== STORAGE ====================
function loadFromStorage() {
  try {
    const saved = localStorage.getItem('classifiedAds');
    if (saved) {
      const data = JSON.parse(saved);
      state.listings = data.listings.map(listing => ({
        ...listing,
        date: new Date(listing.date)
      }));
      state.bookmarks = data.bookmarks || [];
      state.darkMode = data.darkMode || false;
      state.currentLang = data.currentLang || 'tr';
      state.selectedCountry = data.selectedCountry || null;
      state.selectedCity = data.selectedCity || null;
      state.dateFilter = data.dateFilter || { preset: 'all', from: null, to: null };
    }
  } catch (error) {
    console.error('❌ Error loading from storage:', error);
  }
}

function saveToStorage() {
  try {
    const dataToSave = {
      listings: state.listings,
      bookmarks: state.bookmarks,
      darkMode: state.darkMode,
      currentLang: state.currentLang,
      selectedCountry: state.selectedCountry,
      selectedCity: state.selectedCity,
      dateFilter: state.dateFilter
    };
    localStorage.setItem('classifiedAds', JSON.stringify(dataToSave));
  } catch (error) {
    console.error('❌ Error saving to storage:', error);
  }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  console.log('🎯 Setting up event listeners...');
  
  ['searchInput', 'searchInputMobile'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.addEventListener('input', debounce(handleSearch, 300));
  });
  
  const clearBtn = document.getElementById('clearSearch');
  if (clearBtn) clearBtn.addEventListener('click', clearSearch);
  
  ['locationInput', 'locationInputMobile'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.addEventListener('input', debounce(handleLocationFilter, 300));
  });
  
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', handleCategoryFilter);
  });
  
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', handleSort);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  
  const languageBtn = document.getElementById('languageBtn');
  const languageDropdown = document.getElementById('languageDropdown');
  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
      languageDropdown.classList.remove('active');
    });
  }
  
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      changeLanguage(lang);
    });
  });
  
  const regionBtn = document.getElementById('regionBtn');
  const regionPanel = document.getElementById('regionPanel');
  const regionPanelClose = document.getElementById('regionPanelClose');
  const regionPanelOverlay = document.getElementById('regionPanelOverlay');
  
  if (regionBtn) regionBtn.addEventListener('click', openRegionPanel);
  if (regionPanelClose) regionPanelClose.addEventListener('click', closeRegionPanel);
  if (regionPanelOverlay) regionPanelOverlay.addEventListener('click', closeRegionPanel);
  
  const cityBtn = document.getElementById('cityBtn');
  const cityPanel = document.getElementById('cityPanel');
  const cityPanelClose = document.getElementById('cityPanelClose');
  const cityPanelOverlay = document.getElementById('cityPanelOverlay');
  
  if (cityBtn) cityBtn.addEventListener('click', openCityPanel);
  if (cityPanelClose) cityPanelClose.addEventListener('click', closeCityPanel);
  if (cityPanelOverlay) cityPanelOverlay.addEventListener('click', closeCityPanel);
  
  const citySearchInput = document.getElementById('citySearchInput');
  if (citySearchInput) citySearchInput.addEventListener('input', debounce(filterCities, 200));
  
  const calendarBtn = document.getElementById('calendarBtn');
  const calendarPanel = document.getElementById('calendarPanel');
  const calendarPanelClose = document.getElementById('calendarPanelClose');
  const calendarPanelOverlay = document.getElementById('calendarPanelOverlay');
  
  if (calendarBtn) calendarBtn.addEventListener('click', openCalendarPanel);
  if (calendarPanelClose) calendarPanelClose.addEventListener('click', closeCalendarPanel);
  if (calendarPanelOverlay) calendarPanelOverlay.addEventListener('click', closeCalendarPanel);
  
  document.querySelectorAll('.date-preset-btn').forEach(btn => {
    btn.addEventListener('click', handleDatePreset);
  });
  
  const applyDateFilter = document.getElementById('applyDateFilter');
  const clearDateFilter = document.getElementById('clearDateFilter');
  if (applyDateFilter) applyDateFilter.addEventListener('click', handleApplyDateFilter);
  if (clearDateFilter) clearDateFilter.addEventListener('click', handleClearDateFilter);
  
  const postAdBtn = document.getElementById('postAdBtn');
  const postModal = document.getElementById('postModal');
  const postModalClose = document.getElementById('postModalClose');
  const postModalOverlay = document.getElementById('postModalOverlay');
  const cancelPostBtn = document.getElementById('cancelPostBtn');
  const postAdForm = document.getElementById('postAdForm');
  
  if (postAdBtn) postAdBtn.addEventListener('click', () => openModal('postModal'));
  if (postModalClose) postModalClose.addEventListener('click', () => closeModal('postModal'));
  if (postModalOverlay) postModalOverlay.addEventListener('click', () => closeModal('postModal'));
  if (cancelPostBtn) cancelPostBtn.addEventListener('click', () => closeModal('postModal'));
  if (postAdForm) postAdForm.addEventListener('submit', handlePostAd);
  
  const bookmarksBtn = document.getElementById('bookmarksBtn');
  const bookmarksModalClose = document.getElementById('bookmarksModalClose');
  const bookmarksModalOverlay = document.getElementById('bookmarksModalOverlay');
  
  if (bookmarksBtn) bookmarksBtn.addEventListener('click', openBookmarksModal);
  if (bookmarksModalClose) bookmarksModalClose.addEventListener('click', () => closeModal('bookmarksModal'));
  if (bookmarksModalOverlay) bookmarksModalOverlay.addEventListener('click', () => closeModal('bookmarksModal'));
  
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalClose) modalClose.addEventListener('click', () => closeModal('detailModal'));
  if (modalOverlay) modalOverlay.addEventListener('click', () => closeModal('detailModal'));
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput') || document.getElementById('searchInputMobile');
      if (searchInput) searchInput.focus();
    }
    if (e.key === 'b' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openBookmarksModal();
    }
  });
}

// ==================== LANGUAGE FUNCTIONS ====================
function changeLanguage(lang) {
  state.currentLang = lang;
  applyLanguage();
  saveToStorage();
  
  const flags = { tr: '🇹🇷', en: '🇬🇧', ar: '🇸🇦' };
  const currentLangFlag = document.getElementById('currentLangFlag');
  if (currentLangFlag) currentLangFlag.textContent = flags[lang];
  
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }
  
  // Update country and city names if they are selected
  if (state.selectedCountry) {
    const translatedCountry = translateGeo('countries', state.selectedCountry, state.currentLang);
    const regionText = document.querySelector('.region-text');
    if (regionText) regionText.textContent = translatedCountry;
  }
  
  if (state.selectedCity) {
    const translatedCity = translateGeo('cities', state.selectedCity, state.currentLang);
    const cityText = document.querySelector('.city-text');
    if (cityText) cityText.textContent = translatedCity;
  }
  
  // Update active filters display
  showActiveFilters();
  
  // Re-render listings to update time labels
  renderListings();
}

function applyLanguage() {
  const t = translations[state.currentLang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
}

// ==================== REGION PANEL FUNCTIONS ====================
function openRegionPanel() {
  const regionPanel = document.getElementById('regionPanel');
  const regionPanelBody = document.getElementById('regionPanelBody');
  
  if (!regionPanel || !regionPanelBody) return;
  
  regionPanelBody.innerHTML = '';
  
  Object.entries(regionsData).forEach(([continentName, continentData]) => {
    const section = document.createElement('div');
    section.className = 'continent-section';
    
    const translatedContinent = translateGeo('continents', continentName, state.currentLang);
    
    const header = document.createElement('div');
    header.className = 'continent-header';
    header.innerHTML = `
      <span class="continent-icon">${continentData.icon}</span>
      <span>${translatedContinent}</span>
    `;
    
    const countriesList = document.createElement('div');
    countriesList.className = 'countries-list';
    
    Object.entries(continentData.countries).forEach(([countryName, countryData]) => {
      const translatedCountry = translateGeo('countries', countryName, state.currentLang);
      
      const countryBtn = document.createElement('button');
      countryBtn.className = 'country-btn';
      countryBtn.innerHTML = `
        <span class="country-flag">${countryData.flag}</span>
        <span>${translatedCountry}</span>
      `;
      countryBtn.addEventListener('click', () => selectCountry(countryName, countryData));
      countriesList.appendChild(countryBtn);
    });
    
    section.appendChild(header);
    section.appendChild(countriesList);
    regionPanelBody.appendChild(section);
  });
  
  regionPanel.classList.add('active');
}

function closeRegionPanel() {
  const regionPanel = document.getElementById('regionPanel');
  if (regionPanel) regionPanel.classList.remove('active');
}

function selectCountry(countryName, countryData) {
  state.selectedCountry = countryName;
  state.selectedCity = null;
  
  const translatedCountry = translateGeo('countries', countryName, state.currentLang);
  
  const regionText = document.querySelector('.region-text');
  if (regionText) regionText.textContent = translatedCountry;
  
  const cityBtn = document.getElementById('cityBtn');
  if (cityBtn) {
    cityBtn.style.display = 'flex';
    const cityText = cityBtn.querySelector('.city-text');
    if (cityText) cityText.textContent = translations[state.currentLang].select_city;
  }
  
  saveToStorage();
  closeRegionPanel();
  showActiveFilters();
  applyFilters();
}

// ==================== CITY PANEL FUNCTIONS ====================
function openCityPanel() {
  if (!state.selectedCountry) return;
  
  const cityPanel = document.getElementById('cityPanel');
  const cityPanelBody = document.getElementById('cityPanelBody');
  
  if (!cityPanel || !cityPanelBody) return;
  
  let cities = [];
  Object.values(regionsData).forEach(continent => {
    if (continent.countries[state.selectedCountry]) {
      cities = continent.countries[state.selectedCountry].cities;
    }
  });
  
  renderCities(cities);
  cityPanel.classList.add('active');
}

function closeCityPanel() {
  const cityPanel = document.getElementById('cityPanel');
  if (cityPanel) cityPanel.classList.remove('active');
  
  const citySearchInput = document.getElementById('citySearchInput');
  if (citySearchInput) citySearchInput.value = '';
}

function renderCities(cities) {
  const cityPanelBody = document.getElementById('cityPanelBody');
  if (!cityPanelBody) return;
  
  cityPanelBody.innerHTML = '';
  
  const citiesGrid = document.createElement('div');
  citiesGrid.className = 'cities-grid';
  
  cities.forEach(city => {
    const translatedCity = translateGeo('cities', city, state.currentLang);
    
    const cityItem = document.createElement('div');
    cityItem.className = 'city-item';
    cityItem.textContent = translatedCity;
    cityItem.addEventListener('click', () => selectCity(city));
    citiesGrid.appendChild(cityItem);
  });
  
  cityPanelBody.appendChild(citiesGrid);
}

function selectCity(cityName) {
  state.selectedCity = cityName;
  
  const translatedCity = translateGeo('cities', cityName, state.currentLang);
  
  const cityText = document.querySelector('.city-text');
  if (cityText) cityText.textContent = translatedCity;
  
  saveToStorage();
  closeCityPanel();
  showActiveFilters();
  applyFilters();
}
selectedCountry = countryName;
  state.selectedCity = null;
  
  const regionText = document.querySelector('.region-text');
  if (regionText) regionText.textContent = countryName;
  
  const cityBtn = document.getElementById('cityBtn');
  if (cityBtn) {
    cityBtn.style.display = 'flex';
    const cityText = cityBtn.querySelector('.city-text');
    if (cityText) cityText.textContent = translations[state.currentLang].select_city;
  }
 { 
  saveToStorage();
  closeRegionPanel();
  showActiveFilters();
  applyFilters();
}

// ==================== CITY PANEL FUNCTIONS ====================
function openCityPanel() {
  if (!state.selectedCountry) return;
  
  const cityPanel = document.getElementById('cityPanel');
  const cityPanelBody = document.getElementById('cityPanelBody');
  
  if (!cityPanel || !cityPanelBody) return;
  
  let cities = [];
  Object.values(regionsData).forEach(continent => {
    if (continent.countries[state.selectedCountry]) {
      cities = continent.countries[state.selectedCountry].cities;
    }
  });
  
  renderCities(cities);
  cityPanel.classList.add('active');
}

function closeCityPanel() {
  const cityPanel = document.getElementById('cityPanel');
  if (cityPanel) cityPanel.classList.remove('active');
  
  const citySearchInput = document.getElementById('citySearchInput');
  if (citySearchInput) citySearchInput.value = '';
}

function renderCities(cities) {
  const cityPanelBody = document.getElementById('cityPanelBody');
  if (!cityPanelBody) return;
  
  cityPanelBody.innerHTML = '';
  
  const citiesGrid = document.createElement('div');
  citiesGrid.className = 'cities-grid';
  
  cities.forEach(city => {
    const cityItem = document.createElement('div');
    cityItem.className = 'city-item';
    cityItem.textContent = city;
    cityItem.addEventListener('click', () => selectCity(city));
    citiesGrid.appendChild(cityItem);
  });
  
  cityPanelBody.appendChild(citiesGrid);
}

function selectCity(cityName) {
  state.selectedCity = cityName;
  
  const cityText = document.querySelector('.city-text');
  if (cityText) cityText.textContent = cityName;
  
  saveToStorage();
  closeCityPanel();
  showActiveFilters();
  applyFilters();
}

function filterCities(e) {
  if (!state.selectedCountry) return;
  
  let cities = [];
  Object.values(regionsData).forEach(continent => {
    if (continent.countries[state.selectedCountry]) {
      cities = continent.countries[state.selectedCountry].cities;
    }
  });
  
  const query = e.target.value.toLowerCase();
  const filtered = cities.filter(city => {
    const translatedCity = translateGeo('cities', city, state.currentLang).toLowerCase();
    return city.toLowerCase().includes(query) || translatedCity.includes(query);
  });
  renderCities(filtered);
}

// ==================== CALENDAR FUNCTIONS ====================
function openCalendarPanel() {
  const calendarPanel = document.getElementById('calendarPanel');
  if (calendarPanel) calendarPanel.classList.add('active');
  
  updateDatePresetButtons();
}

function closeCalendarPanel() {
  const calendarPanel = document.getElementById('calendarPanel');
  if (calendarPanel) calendarPanel.classList.remove('active');
}

function updateDatePresetButtons() {
  document.querySelectorAll('.date-preset-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.preset === state.dateFilter.preset) {
      btn.classList.add('active');
    }
  });
}

function handleDatePreset(e) {
  const preset = e.currentTarget.dataset.preset;
  state.dateFilter.preset = preset;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  switch (preset) {
    case 'today':
      state.dateFilter.from = new Date(today);
      state.dateFilter.to = new Date(today);
      break;
    case 'yesterday':
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      state.dateFilter.from = yesterday;
      state.dateFilter.to = yesterday;
      break;
    case 'last7days':
      const last7 = new Date(today);
      last7.setDate(last7.getDate() - 7);
      state.dateFilter.from = last7;
      state.dateFilter.to = new Date(today);
      break;
    case 'last30days':
      const last30 = new Date(today);
      last30.setDate(last30.getDate() - 30);
      state.dateFilter.from = last30;
      state.dateFilter.to = new Date(today);
      break;
    case 'all':
      state.dateFilter.from = null;
      state.dateFilter.to = null;
      break;
  }
  
  updateDatePresetButtons();
  saveToStorage();
  showActiveFilters();
  applyFilters();
  closeCalendarPanel();
}

function handleApplyDateFilter() {
  const dateFrom = document.getElementById('dateFrom').value;
  const dateTo = document.getElementById('dateTo').value;
  
  if (dateFrom) {
    state.dateFilter.from = new Date(dateFrom);
  }
  if (dateTo) {
    state.dateFilter.to = new Date(dateTo);
  }
  
  if (dateFrom || dateTo) {
    state.dateFilter.preset = 'custom';
  }
  
  saveToStorage();
  showActiveFilters();
  applyFilters();
  closeCalendarPanel();
}

function handleClearDateFilter() {
  state.dateFilter = { preset: 'all', from: null, to: null };
  
  document.getElementById('dateFrom').value = '';
  document.getElementById('dateTo').value = '';
  
  updateDatePresetButtons();
  saveToStorage();
  showActiveFilters();
  applyFilters();
  closeCalendarPanel();
}

// ==================== ACTIVE FILTERS DISPLAY ====================
function showActiveFilters() {
  const activeFilters = document.getElementById('activeFilters');
  if (!activeFilters) return;
  
  activeFilters.innerHTML = '';
  let hasFilters = false;
  
  if (state.selectedCountry) {
    hasFilters = true;
    const translatedCountry = translateGeo('countries', state.selectedCountry, state.currentLang);
    const tag = createFilterTag(`📍 ${translatedCountry}`, () => {
      state.selectedCountry = null;
      state.selectedCity = null;
      const regionText = document.querySelector('.region-text');
      if (regionText) regionText.textContent = translations[state.currentLang].current_region;
      const cityBtn = document.getElementById('cityBtn');
      if (cityBtn) cityBtn.style.display = 'none';
      saveToStorage();
      showActiveFilters();
      applyFilters();
    });
    activeFilters.appendChild(tag);
  }
  
  if (state.selectedCity) {
    hasFilters = true;
    const translatedCity = translateGeo('cities', state.selectedCity, state.currentLang);
    const tag = createFilterTag(`🏙️ ${translatedCity}`, () => {
      state.selectedCity = null;
      const cityText = document.querySelector('.city-text');
      if (cityText) cityText.textContent = translations[state.currentLang].select_city;
      saveToStorage();
      showActiveFilters();
      applyFilters();
    });
    activeFilters.appendChild(tag);
  }
  
  if (state.dateFilter.preset !== 'all') {
    hasFilters = true;
    const t = translations[state.currentLang];
    let label = '';
    switch (state.dateFilter.preset) {
      case 'today': label = t.today; break;
      case 'yesterday': label = t.yesterday; break;
      case 'last7days': label = t.last_7_days; break;
      case 'last30days': label = t.last_30_days; break;
      case 'custom': label = t.custom_range; break;
    }
    const tag = createFilterTag(`📅 ${label}`, handleClearDateFilter);
    activeFilters.appendChild(tag);
  }
  
  activeFilters.style.display = hasFilters ? 'flex' : 'none';
}

function createFilterTag(text, onClose) {
  const tag = document.createElement('div');
  tag.className = 'filter-tag';
  tag.innerHTML = `
    <span>${text}</span>
    <button class="filter-tag-close">×</button>
  `;
  tag.querySelector('.filter-tag-close').addEventListener('click', onClose);
  return tag;
}

// ==================== SEARCH & FILTER FUNCTIONS ====================
function handleSearch(e) {
  state.searchQuery = e.target.value.toLowerCase();
  applyFilters();
}

function clearSearch() {
  state.searchQuery = '';
  ['searchInput', 'searchInputMobile'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = '';
  });
  applyFilters();
}

function handleLocationFilter(e) {
  state.locationQuery = e.target.value.toLowerCase();
  applyFilters();
}

function handleCategoryFilter(e) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  e.currentTarget.classList.add('active');
  state.currentCategory = e.currentTarget.dataset.category;
  applyFilters();
}

function applyFilters() {
  let filtered = [...state.listings];
  
  if (state.currentCategory !== 'all') {
    filtered = filtered.filter(listing => listing.category === state.currentCategory);
  }
  
  if (state.searchQuery) {
    filtered = filtered.filter(listing => 
      listing.title.toLowerCase().includes(state.searchQuery) ||
      listing.description.toLowerCase().includes(state.searchQuery)
    );
  }
  
  if (state.locationQuery) {
    filtered = filtered.filter(listing => 
      listing.location.toLowerCase().includes(state.locationQuery)
    );
  }
  
  if (state.selectedCity) {
    filtered = filtered.filter(listing => 
      listing.location.toLowerCase().includes(state.selectedCity.toLowerCase())
    );
  } else if (state.selectedCountry) {
    filtered = filtered.filter(listing => 
      listing.location.toLowerCase().includes(state.selectedCountry.toLowerCase())
    );
  }
  
  if (state.dateFilter.from || state.dateFilter.to) {
    filtered = filtered.filter(listing => {
      const listingDate = new Date(listing.date);
      listingDate.setHours(0, 0, 0, 0);
      
      if (state.dateFilter.from && state.dateFilter.to) {
        return listingDate >= state.dateFilter.from && listingDate <= state.dateFilter.to;
      } else if (state.dateFilter.from) {
        return listingDate >= state.dateFilter.from;
      } else if (state.dateFilter.to) {
        return listingDate <= state.dateFilter.to;
      }
      return true;
    });
  }
  
  state.filteredListings = filtered;
  sortListings();
  renderListings();
  updateResultsCount();
}

function handleSort(e) {
  state.currentSort = e.target.value;
  sortListings();
  renderListings();
}

function sortListings() {
  switch (state.currentSort) {
    case 'date-desc':
      state.filteredListings.sort((a, b) => b.date - a.date);
      break;
    case 'date-asc':
      state.filteredListings.sort((a, b) => a.date - b.date);
      break;
    case 'price-asc':
      state.filteredListings.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      state.filteredListings.sort((a, b) => b.price - a.price);
      break;
  }
}

// ==================== RENDER FUNCTIONS ====================
function showSkeletonLoaders() {
  const grid = document.getElementById('listingsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    skeleton.innerHTML = `
      <div class="skeleton-image"></div>
      <div class="skeleton-content">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    `;
    grid.appendChild(skeleton);
  }
}

function renderListings() {
  const grid = document.getElementById('listingsGrid');
  const emptyState = document.getElementById('emptyState');
  
  if (!grid || !emptyState) return;
  
  if (state.filteredListings.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  
  grid.style.display = 'grid';
  emptyState.style.display = 'none';
  grid.innerHTML = '';
  
  state.filteredListings.forEach(listing => {
    const card = createListingCard(listing);
    grid.appendChild(card);
  });
}

function createListingCard(listing) {
  const card = document.createElement('div');
  card.className = `listing-card${listing.featured ? ' featured' : ''}`;
  
  const isBookmarked = state.bookmarks.includes(listing.id);
  const t = translations[state.currentLang];
  const daysAgo = Math.floor((new Date() - listing.date) / (1000 * 60 * 60 * 24));
  const timeAgo = daysAgo === 0 ? t.today : 
                  daysAgo < 7 ? `${daysAgo} ${t.days_ago}` : 
                  `${Math.floor(daysAgo / 7)} ${t.weeks_ago}`;
  
  card.innerHTML = `
    <div class="listing-image">${listing.image}</div>
    <div class="listing-content">
      <div class="listing-header">
        <h3 class="listing-title">${listing.title}</h3>
        <button class="bookmark-btn${isBookmarked ? ' active' : ''}" data-id="${listing.id}">
          ${isBookmarked ? '⭐' : '☆'}
        </button>
      </div>
      <p class="listing-description">${listing.description}</p>
      <div class="listing-meta">
        <span class="meta-item">
          <span class="meta-icon">📍</span>
          <span>${listing.location}</span>
        </span>
        <span class="meta-item">
          <span class="meta-icon">🕒</span>
          <span>${timeAgo}</span>
        </span>
      </div>
      <div class="listing-footer">
        <div class="listing-price">${listing.price === 0 ? t.free : `₺${listing.price.toLocaleString()}`}</div>
        <span class="listing-category">${listing.categoryName}</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', (e) => {
    if (!e.target.classList.contains('bookmark-btn')) {
      showListingDetail(listing);
    }
  });
  
  const bookmarkBtn = card.querySelector('.bookmark-btn');
  bookmarkBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBookmark(listing.id);
  });
  
  return card;
}

function updateResultsCount() {
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) {
    const t = translations[state.currentLang];
    resultsCount.innerHTML = `${state.filteredListings.length} <span data-i18n="listings">${t.listings}</span>`;
  }
}

// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
  closeRegionPanel();
  closeCityPanel();
  closeCalendarPanel();
  document.body.style.overflow = '';
}

// function showListingDetail(listing) 

function showListingDetail(listing) {
  const t = translations[state.currentLang];
  const modalBody = document.getElementById('modalBody');
  
  if (!modalBody) return;
  
  const daysAgo = Math.floor((new Date() - listing.date) / (1000 * 60 * 60 * 24));
  const timeAgo = daysAgo === 0 ? t.today : 
                  daysAgo < 7 ? `${daysAgo} ${t.days_ago}` : 
                  `${Math.floor(daysAgo / 7)} ${t.weeks_ago}`;
  
  modalBody.innerHTML = `
    <div class="detail-image">${listing.image}</div>
    <div class="detail-header">
      <h2 class="detail-title">${listing.title}</h2>
      <div class="detail-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          <span>${listing.location}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🕒</span>
          <span>${timeAgo}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🏷️</span>
          <span>${listing.categoryName}</span>
        </div>
      </div>
      <div class="detail-price">${listing.price === 0 ? t.free : `₺${listing.price.toLocaleString()}`}</div>
    </div>
    <div class="detail-description">${listing.description}</div>
    <div class="contact-section">
      <h3 class="contact-title">${t.contact_info}</h3>
      <div class="contact-info">${listing.contact}</div>
    </div>
    
    <div class="detail-actions" style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border-light); display: flex; gap: 1rem;">
      <button class="btn-danger" id="deleteListingBtn" data-id="${listing.id}" style="flex: 1;">
        <span>🗑️</span>
        <span>${t.delete_ad}</span>
      </button>
    </div>
  `;
  
  // ربط زر الحذف بالدالة
  const deleteBtn = modalBody.querySelector('#deleteListingBtn');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      deleteListing(listing.id);
    });
  }
  
  openModal('detailModal');
}

// ==================== BOOKMARK FUNCTIONS ====================
function toggleBookmark(id) {
  const index = state.bookmarks.indexOf(id);
  if (index > -1) {
    state.bookmarks.splice(index, 1);
  } else {
    state.bookmarks.push(id);
  }
  saveToStorage();
  updateBookmarkBadge();
  renderListings();
}

function updateBookmarkBadge() {
  const badge = document.getElementById('bookmarkBadge');
  if (badge) {
    badge.textContent = state.bookmarks.length;
    badge.style.display = state.bookmarks.length > 0 ? 'flex' : 'none';
  }
}

function openBookmarksModal() {
  const bookmarksContent = document.getElementById('bookmarksContent');
  if (!bookmarksContent) return;
  
  const t = translations[state.currentLang];
  
  if (state.bookmarks.length === 0) {
    bookmarksContent.innerHTML = `
      <div class="bookmarks-empty">
        <div style="font-size: 4rem; margin-bottom: 1rem;">⭐</div>
        <p>${t.no_listings_found}</p>
      </div>
    `;
  } else {
    bookmarksContent.innerHTML = '';
    state.bookmarks.forEach(id => {
      const listing = state.listings.find(l => l.id === id);
      if (listing) {
        const item = createBookmarkItem(listing);
        bookmarksContent.appendChild(item);
      }
    });
  }
  
  openModal('bookmarksModal');
}

function createBookmarkItem(listing) {
  const t = translations[state.currentLang];
  const item = document.createElement('div');
  item.className = 'bookmark-item';
  
  item.innerHTML = `
    <div class="bookmark-image">${listing.image}</div>
    <div class="bookmark-content">
      <h4 class="bookmark-title">${listing.title}</h4>
      <div class="bookmark-meta">
        <span>📍 ${listing.location}</span>
        <span>💰 ${listing.price === 0 ? t.free : `₺${listing.price.toLocaleString()}`}</span>
      </div>
    </div>
    <button class="bookmark-remove" data-id="${listing.id}">×</button>
  `;
  
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('bookmark-remove')) {
      closeModal('bookmarksModal');
      showListingDetail(listing);
    }
  });
  
  const removeBtn = item.querySelector('.bookmark-remove');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBookmark(listing.id);
    openBookmarksModal();
  });
  
  return item;
}
// ==================== DELETE LISTING FUNCTIONS ====================
function deleteListing(listingId) {
  const t = translations[state.currentLang];
  
  // نافذة تأكيد الحذف
  if (!confirm(t.confirm_delete)) {
    return;
  }
  
  // حذف من المصفوفة الرئيسية
  const index = state.listings.findIndex(l => l.id === listingId);
  if (index > -1) {
    state.listings.splice(index, 1);
  }
  
  // حذف من المفضلة إذا كان موجوداً
  const bookmarkIndex = state.bookmarks.indexOf(listingId);
  if (bookmarkIndex > -1) {
    state.bookmarks.splice(bookmarkIndex, 1);
    updateBookmarkBadge();
  }
  
  // حفظ التغييرات
  saveToStorage();
  
  // تحديث العرض
  applyFilters();
  renderListings();
  updateResultsCount();
  
  // إغلاق نافذة التفاصيل إذا كانت مفتوحة
  closeModal('detailModal');
  
  // رسالة نجاح
  showNotification(t.ad_deleted, 'success');
  
  console.log(`✅ تم حذف الإعلان: ${listingId}`);
}

function showNotification(message, type = 'info') {
  // إنشاء عنصر الإشعار
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
    font-weight: 600;
  `;
  
  document.body.appendChild(notification);
  
  // إزالة الإشعار بعد 3 ثواني
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
// ==================== POST AD FUNCTIONS ====================
function handlePostAd(e) {
  e.preventDefault();
  
  const form = e.target;
  const newListing = {
    id: Date.now().toString(),
    title: form.adTitle.value,
    description: form.adDescription.value,
    price: parseInt(form.adPrice.value) || 0,
    location: form.adLocation.value,
    category: form.adCategory.value,
    categoryName: form.adCategory.selectedOptions[0].textContent,
    date: new Date(),
    contact: form.adContact.value,
    image: getCategoryIcon(form.adCategory.value),
    featured: false
  };
  
  state.listings.unshift(newListing);
  saveToStorage();
  
  state.filteredListings = [...state.listings];
  renderListings();
  updateResultsCount();
  
  form.reset();
  closeModal('postModal');
  
  setTimeout(() => {
    const firstCard = document.querySelector('.listing-card');
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstCard.style.animation = 'pulse 1s ease 3';
    }
  }, 100);
}

function getCategoryIcon(category) {
  const icons = {
    'kalacak-yer': '🏠',
    'is-ilanlari': '💼',
    'satilik': '🛍️',
    'hizmetler': '🔧',
    'topluluk': '👥',
    'vasitalar': '🚗'
  };
  return icons[category] || '📋';
}

// ==================== THEME FUNCTIONS ====================
function toggleTheme() {
  state.darkMode = !state.darkMode;
  applyTheme();
  saveToStorage();
}

function applyTheme() {
  const themeIcon = document.querySelector('.theme-icon');
  
  if (state.darkMode) {
    document.body.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.body.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }
}

// ==================== UTILITY FUNCTIONS ====================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function updateFooterYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ==================== SERVICE WORKER (Optional PWA Support) ====================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log('✅ ServiceWorker registered:', registration.scope);
      },
      err => {
        console.log('❌ ServiceWorker registration failed:', err);
      }
    );
  });
}

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%c🎉 Enhanced Classified Ads Platform', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%c✨ Features: Multilingual, Region/City Navigation, Calendar Filter', 'color: #ec4899; font-size: 14px;');
console.log('%c📚 Keyboard Shortcuts:', 'color: #14b8a6; font-size: 14px; font-weight: bold;');
console.log('%c  / - Focus search', 'color: #94a3b8; font-size: 12px;');
console.log('%c  b - Open bookmarks', 'color: #94a3b8; font-size: 12px;');
console.log('%c  Esc - Close modals', 'color: #94a3b8; font-size: 12px;');
console.log('%c🌍 Supported Languages: 🇹🇷 Turkish | 🇬🇧 English | 🇸🇦 Arabic', 'color: #f59e0b; font-size: 12px;');
console.log('%c📍 Geography Support: 7 Continents | 25+ Countries | 200+ Cities', 'color: #10b981; font-size: 12px;');

/*
  ========================================
  📝 NOTES FOR DEVELOPERS
  ========================================
  
  🌐 Adding New Languages:
  1. Add translations to the 'translations' object
  2. Add geography translations to 'geographyTranslations'
  3. Add language option in HTML (languageDropdown)
  4. Add flag emoji in 'changeLanguage' function
  
  🗺️ Adding New Countries/Cities:
  1. Add country to appropriate continent in 'regionsData'
  2. Add translations in 'geographyTranslations.countries'
  3. Add city translations in 'geographyTranslations.cities'
  4. Cities will automatically appear when country is selected
  
  📅 Date Filter Options:
  - Preset ranges: today, yesterday, last 7 days, last 30 days
  - Custom date range support
  - All filters are stored in localStorage
  
  💾 LocalStorage Structure:
  {
    listings: Array,
    bookmarks: Array,
    darkMode: Boolean,
    currentLang: String (tr|en|ar),
    selectedCountry: String,
    selectedCity: String,
    dateFilter: {preset, from, to}
  }
  
  ========================================
*/