function Project({title, desc, href}) {
    
    const handleClick = () => {window.open(href, '_blank', 'noopener,noreferrer')}

    return (
        <div className="project" onClick={handleClick} role="link" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Project