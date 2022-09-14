import "./Home.css";

export default function Home() {
    return (
        <>
        <div className="banner silkscreen">Welcome to Ryan's Profolio!</div>
        <div className="m-5 jetbrainsmono subtitle">Check what's here</div>
        <hr />

        <ul className="mt-5 list-group home-list jetbrainsmono">
            <li className="pr-5 mb-5">
                <span className="home-desc">
                More info about myself 
                    </span>
                <i className="bi bi-arrow-right bs-arrow"></i>
                <a className="btn-home-link silkscreen" href="/about">HERE</a>
            </li>
            <li className="mb-5">
                <span className="home-desc">
                Take a look at my work
                    </span>
                <i className="bi bi-arrow-right bs-arrow"></i>
                <a className="btn-home-link silkscreen" href="/projects">HERE</a>
            </li>
            <li className="mb-5">
                <span className="home-desc">
                My working history
                    </span>
                <i className="bi bi-arrow-right bs-arrow"></i>
                <a className="btn-home-link silkscreen" href="/work">HERE</a>
            </li>
            <li className="mb-5">
                <span className="home-desc">
                Contact Me
                    </span>
                <i className="bi bi-arrow-right bs-arrow"></i>
                <a className="btn-home-link silkscreen" href="mailto:okamoto.ryan.dev@gmail.com?subject=Hello from, [YOURNAMEHERE]">HERE</a>
            </li>

        </ul>
            </>
    )
    
}