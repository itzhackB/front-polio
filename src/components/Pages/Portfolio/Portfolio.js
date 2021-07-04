import React, { useContext } from 'react'
import barberProject from '../../../Images/barber.png'
import moviesProject from '../../../Images/movies.png'
import officeProject from '../../../Images/officeProject.png'
import calculatorProject from '../../../Images/calculator.png'
import weatherProject from '../../../Images/weather.png'
import gamesProject from '../../../Images/games.png'
import './Portfolio.scss'
import { MyDataContext } from '../../Contex/Contex'
import Convert from '../../Convert/Convert'

const projects = [
    { projectName: "Barber Web Project", details: "My first project, building web app for barber-shop.", img: barberProject },
    { projectName: "Movies Search App Project", details: "Movies app search engine using API.", img: moviesProject },
    { projectName: "Office Project App", details: "Office app managment, build with react framework.", img: officeProject },
    { projectName: "Calculator App", details: "Real calculator app using pure Java Script.", img: calculatorProject },
    { projectName: "Weather App", details: "Weather updated from around the world using API.", img: weatherProject },
    { projectName: "Games App", details: "Games news and updated using API.", img: gamesProject }

]

console.clear();



function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % projects.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? projects.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ project, offset, h1 }) {
    const { translate, setTranslate } = useContext(MyDataContext)
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (

        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <h1 style={{ color: "black", backgroundColor: "white" }} style={{ visibility: translate ? "hidden" : "visible" }}>{h1}</h1>
            <h1 style={{ color: "black", backgroundColor: "white" }} style={{ visibility: translate ? "visible" : "hidden" }}>

                <Convert
                    text={h1}
                    language="heb"
                />
            </h1>
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${project.img}')`
                }}
            />

            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${project.img}')`
                }}
            >

            </div>


        </div>
    );
}

export default function Portfolio() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })} style={{ width: "150px" }} >‹</button>
            
            {[...projects, ...projects, ...projects].map((project, i) => {
                let offset = projects.length + (state.slideIndex - i);
                return <>  <Slide project={project} offset={offset} key={i} h1="My Project:" /></>;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
    );
}


