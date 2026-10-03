import profileImage from '../assets/1781108619738.png'

function Header() {
    return (
        <>
            <div className="header">
                <img className="profile-image" src={profileImage} alt="Mahammad Anish" />
                <div className="header-content">
                    <p className="eyebrow">FULL-STACK DEVELOPER · AI BUILDER</p>
                    <h1>MAHAMMAD ANISH</h1>
                    <p className="intro">Building practical digital products at the intersection of web development and artificial intelligence.</p>
                    <p className="contact-info">
                        Baruipur, Kolkata &nbsp;·&nbsp; +91 7029681832 &nbsp;·&nbsp;{' '}
                        <a href="mailto:anish130905@gmail.com">anish130905@gmail.com</a>
                    </p>
                    <p className="links">
                        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                        <a href="https://github.com" target="_blank">GitHub</a>
                        <a href="#" target="_blank">Portfolio</a>
                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header
