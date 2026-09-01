'use client'
import '@/Styles/Project.css'

export default function Project({ params }: { params: { project_name: string } }) {
    const { project_name } = params;
    const imagePath = `/projects/images/${project_name}.png`;
    const url = `https://www.${project_name}.co.il`;

    return (
        <div className='project-showcase-page'>
            <div className='project-showcase-container'>
                <img
                    className='project-showcase-image'
                    src={imagePath}
                    alt={`image showcasing ${project_name}`}
                />
            </div>
            <div className='project-showcase-description'>
                <h1>{project_name}</h1>
                <button onClick={() => window.open(url)}>
                    בקרו ב- {project_name}
                </button>
            </div>
        </div>
    );
}