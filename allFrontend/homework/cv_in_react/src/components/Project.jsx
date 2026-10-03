function Project({ title, children }) {
    return (
        <div className="project-item">
            <div className="item-title-row">
                <span className="item-title"><b>{title}</b></span>
                <span className="item-link"><a href="#" target="_blank">Live Demo</a></span>
            </div>
            <ul>{children}</ul>
        </div>
    )
}

export default Project
