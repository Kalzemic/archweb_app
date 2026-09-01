'use client'
import '@/Styles/Portfolio.css'
import projects from '@/public/projects/projects.json'
import { useRouter } from 'next/navigation';


export default function Portfolio() {

    const router = useRouter();
    return (
        <div className='portfolio-page'>
            <h1>כמה מהלקוחות שלנו</h1>
            <div className='projects-grid'>

                {projects.map((project, index) => {
                    const imagepath = `/projects/images/${project.image}`
                    const logopath = `/projects/logos/${project.logo}`
                    return (
                        <div className='project-card' key={index}>

                            <img className='project-card-background' src={imagepath} alt={`${project.name} project image`} />
                            <img className='project-card-logo' src={logopath} alt={`${project.name} logo image`} />
                            <button className='project-card-button'
                                aria-label={''}
                                style={{ backgroundColor: "rgba(0,0,0,0.9)", color: project.color, boxShadow: `0 0 10px ${project.color}` }}
                                onClick={() => { router.push(`/projects/${project.name}`) }}>לצפייה</button>


                        </div>
                    );
                })}

            </div>
        </div>
    );
}