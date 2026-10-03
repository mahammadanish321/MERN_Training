function Experience({ title, right, children }) {
    return (
        <div className="experience-item">
            <div className="item-title-row">
                <span className="item-title"><b>{title}</b></span>
                <span className="item-right"><b>{right}</b></span>
            </div>
            <ul>{children}</ul>
        </div>
    )
}

export default Experience
