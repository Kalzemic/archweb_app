export type Project = {
    slug: string;
    displayName: string;
    category: string;
    description: string;
    overview: string;
    services: string[];
    image: string | null;
    logo: string;
    imageFit: "cover" | "contain";
    accentColor: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "minimalbody",
      displayName: "Minimal Body",
  
      category: "אתר תדמית בתחום הבריאות והכושר",
  
      description:
        "אתר תדמית שנבנה כדי להציג את המותג, השירותים והגישה המקצועית של Minimal Body בצורה ברורה, רגועה ונגישה.",
  
      overview:
        "הפרויקט התמקד ביצירת נוכחות דיגיטלית נקייה שתואמת את האופי של המותג. מבנה העמודים, הטיפוגרפיה והצבעים נבחרו כדי להוביל את המשתמש דרך השירותים השונים ולעודד יצירת קשר, תוך שמירה על חוויית שימוש טובה בכל גודל מסך.",
  
      services: [
        "אפיון",
        "עיצוב ממשק",
        "פיתוח אתר",
        "התאמה למובייל",
      ],
  
  
      image: "/projects/images/minimalbody.png",
      logo: "/projects/logos/minimalbody.png",
      imageFit: "cover",
  
      accentColor: "#ff7b00",
    },
  
    {
      slug: "moodlight",
      displayName: "Mood Light",
  
      category: "מערכת להזמנת שלטי ניאון בהתאמה אישית",
  
      description:
        "אתר אינטראקטיבי שמאפשר ללקוחות לעצב שלט ניאון אישי, לצפות בתוצאה ולשלוח את העיצוב ישירות לקבלת הצעת מחיר.",
  
      overview:
        "במרכז הפרויקט נמצא כלי עיצוב אינטראקטיבי שמאפשר לבחור טקסט, צבע וסגנון ולראות תצוגה מקדימה של השלט בזמן אמת. הממשק נבנה כדי להפוך תהליך מורכב להזמנה פשוטה וברורה, גם במחשב וגם בטלפון.",
  
      services: [
        "אפיון חוויית משתמש",
        "עיצוב ממשק",
        "פיתוח אינטראקטיבי",
        "טופס הזמנה",
      ],
  
  
      image: "/projects/images/moodlight.png",
      logo: "/projects/logos/moodlight.png",
      imageFit: "cover",
  
      accentColor: "#ff8fe1",
    },
  
    {
      slug: "metro-training",
      displayName: "Metro Training",
  
      category: "מערכת אימונים דיגיטלית",
  
      description:
        "מערכת דיגיטלית להצגת תוכניות אימון, תרגילים ומידע מקצועי בצורה מסודרת ונוחה לשימוש.",
  
      overview:
        "המערכת נבנתה כדי לארגן תוכן מקצועי בתחום האימונים בתוך ממשק ברור ונגיש. המשתמשים יכולים לעבור בין רמות, טכניקות ותוכניות שונות ולמצוא במהירות את המידע המתאים לאימון שלהם.",
  
      services: [
        "אפיון מערכת",
        "עיצוב ממשק",
        "פיתוח אפליקציית רשת",
        "התאמה למובייל",
      ],
      image: null,
      logo: "/projects/logos/metro-training.png",
      imageFit: "contain",
  
      accentColor: "#f5f7fa",
    },
  ];