import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

function Cursor({ hover }) {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConf = { damping: 50, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConf)
    const cursorYSpring = useSpring(cursorY, springConf)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.addEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <motion.div
            className={`cursor ${hover ? 'bigCursor' : ''}`}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        />
    )
}

export default Cursor
