import '@/Styles/TeamPage.css'






export default function TeamPage() {
    return (
        <div className='team-page'>
            <div className= 'main-header'>
            <h1>הצוות של Archweb</h1>

            <p>אנחנו ArchWeb — סטודיו לעיצוב ופיתוח אתרים ואפליקציות רשת שנולד מתוך אהבה לטכנולוגיה, אסתטיקה וחוויית משתמש מדויקת.</p>
            <p>
            אנחנו לא עוד סוכנות. אנחנו יוצרים שחיים את הרשת — בונים, מעצבים וכותבים קוד שמספר סיפור ויוצר רושם אמיתי.
            </p>

            </div>

            <div className='team-content'>
                <h2  >מי אנחנו</h2>
                <div className='developer-section'>
                    <h3 >מיקי זיזוב - מייסד ומוביל טכנולוגי</h3>
                    <div className='image-content-split'>
                    <div className='text-content'>
                        <p>
                        מיקי אחראי על הכיוון הטכנולוגי והיצירתי של ArchWeb. עם רקע עמוק בפיתוח תוכנה ותשוקה לעיצוב חכם ונקי, הוא דואג שכל פרויקט יהיה מהיר, יציב ומדויק עד הפיקסל האחרון.
                        </p>
                    </div>
                    <div className='text-image'>
                        <img src='team-image-main' alt='main team image'/>
                    </div>
                </div>
                </div>
                <div className='developer-section'>
                    <h3>תומר שילדר — מייסד ומעצב קריאייטיב</h3>
                    <div className='image-content-split'>
                    <div className='text-content'>
                    <p>
                    תומר מביא את הצד החזותי והאסטרטגי. הוא זה שמתרגם רעיונות לזהות עיצובית, צבעונית וייחודית שמבליטה כל מותג בעולם הדיגיטלי.
                    </p>
                    </div>
                    <div className='text-image'>
                        <img src='team-image-main' alt='main team image'/>
                    </div>
                </div>
                </div>
                <div className='developer-section'>
                    <h3>החזון שלנו</h3>
                    <p >
                    ליצור יישומי רשת חיים — כאלה שלא רק נראים מדהים, אלא גם עובדים חכם.
                    בין אם מדובר בחנות אונליין, אתר תדמית או מערכת חכמה — אנחנו כאן כדי להפוך רעיון למוצר דיגיטלי שמרגיש נכון.
                    </p>
                    </div>

            </div>

        </div>
    );
}