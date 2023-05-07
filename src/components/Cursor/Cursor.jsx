import React from 'react'
import './Cursor.css'

function Cursor() {

    // Cursor Function
    const cursorDotRef = React.useRef(null);
    const cursorOutlineRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const posX = event.clientX;
            const posY = event.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${posX}px`
                cursorDotRef.current.style.top = `${posY}px`


                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, {
                    duration: 500,
                    fill: "forwards"
                })
            }
        });

        // document.body.addEventListener("mouseenter", () => {
        //     cursorDotRef.current.style.transform = "scale(1.5)";
        // });

        // document.body.addEventListener("mouseleave", () => {
        //     cursorDotRef.current.style.transform = "scale(1)";
        // });

    });

    return (
        <>
            <div className='cursor-dot' ref={cursorDotRef}></div>
            <div className='cursor-outline' ref={cursorOutlineRef}></div>
        </>
    )
}

export default Cursor