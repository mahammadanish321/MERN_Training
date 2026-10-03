import Experience from './Experience'

function HackathonExperience() {
    return (
        <section className="section">
            <h2>Hackathon Experience</h2>
            <Experience title="HACK2UK 2026 – 1st Place" right="PixelCraft">
                <li>Participated as a solo developer with Merge – Workspace.</li>
                <li>Given a 2-hour challenge to integrate Firebase, dashboard functionality, and two-factor authentication into the existing project.</li>
                <li>Created a user-flow diagram and implemented the required features under strict time constraints.</li>
                <li>Presented the project directly to judges and explained the technical implementation and design decisions.</li>
            </Experience>
            <Experience title="Smart India Hackathon 2025 – 1st Runner-Up (College Level)" right="Team Lead – CodeKnights">
                <li>Led the development of SachaBazaar, an agri-tech marketplace connecting farmers, aggregators, and customers.</li>
                <li>Built the prototype with a focus on transparent product pricing and QR-based price tracking.</li>
                <li>Coordinated development and contributed to the system design and implementation.</li>
                <li><a href="#">Live Demo</a> &nbsp;—&nbsp; <a href="#">GitHub</a></li>
            </Experience>
        </section>
    )
}

export default HackathonExperience
