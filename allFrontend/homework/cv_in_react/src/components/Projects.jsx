import Project from './Project'

function Projects() {
    return (
        <section className="section">
            <h2>Projects</h2>
            <Project title="Merge – Workspace">
                <li>Built a full-stack workspace platform for managing academic and collaborative activities in one place.</li>
                <li>Designed a multi-service architecture with separate frontend, backend, AI, and mobile applications.</li>
                <li>Implemented role-based authentication, dashboard workflows, notifications, and collaborative features.</li>
                <li>Developed and integrated AI-powered functionality to assist users within the workspace.</li>
                <li>Repositories: <a href="#">Frontend-Desktop/Web</a> &nbsp;—&nbsp; <a href="#">Backend</a> &nbsp;—&nbsp; <a href="#">AI</a> &nbsp;—&nbsp; <a href="#">Mobile</a></li>
            </Project>
            <Project title="Soon – AI-Powered Career Management Dashboard">
                <li>Built an AI-assisted platform for managing job applications, resumes, interviews, and career activities.</li>
                <li>Developed the application using React, Node.js, Express, MongoDB, OpenAI API, and Google Gemini.</li>
                <li>Built an AI service layer for processing resumes and generating structured career insights.</li>
                <li>Integrated Google OAuth 2.0 and Gmail workflows to identify interview-related emails.</li>
                <li>Repositories: <a href="#">Frontend</a> &nbsp;—&nbsp; <a href="#">Backend</a></li>
            </Project>
            <Project title="Shift – AI Image Manipulation Platform">
                <li>Built a full-stack AI-powered image manipulation platform using React, Node.js, Express, MongoDB, and Cloudinary.</li>
                <li>Integrated Google Vertex AI for image transformation and perspective correction.</li>
                <li>Developed backend APIs to handle image-processing requests and manage application data.</li>
                <li>Used Cloudinary for image storage, processing, and delivery.</li>
                <li>Repositories: <a href="#">Frontend</a> &nbsp;—&nbsp; <a href="#">Backend</a></li>
            </Project>
        </section>
    )
}

export default Projects
