"use client"
import React, { useEffect, useRef, useState } from "react"

interface Point {
    lifetime: number
    x: any
    y: any
}

const Canvas: React.FC = () => {
    const [cHeight, setCHeight] = useState(0)
    const [cWidth, setCWidth] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // Set height and width on load because if set in state body isn't defined yet.
        setCHeight(window.innerHeight)
        setCWidth(window.innerWidth)

        const handleResize = () => {
            setCHeight(window.innerHeight)
            setCWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        // If the device supports cursors, start animation.
        if (matchMedia("(pointer:fine)").matches) {
            startAnimation()
        }

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const startAnimation = () => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")

        const points: Point[] = []

        const addPoint = (x: number, y: number) => {
            const point: Point = { x, y, lifetime: 0 }
            points.push(point)
        }

        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            if (canvas) {
                addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop)
            }
        }

        document.addEventListener("mousemove", handleMouseMove)

        const animatePoints = () => {
            if (ctx) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            }
            const duration = (0.7 * (1 * 1000)) / 60 // Last 80% of a frame per point

            for (let i = 0; i < points.length; ++i) {
                const point = points[i]
                let lastPoint

                if (points[i - 1] !== undefined) {
                    lastPoint = points[i - 1]
                } else lastPoint = point

                point.lifetime += 1

                if (point.lifetime > duration) {
                    // If the point dies, remove it.
                    points.shift()
                } else {
                    // Otherwise animate it:

                    // As the lifetime goes on, lifePercent goes from 0 to 1.
                    const lifePercent = point.lifetime / duration
                    const spreadRate = 7 * (1 - lifePercent)

                    if (ctx) {
                        ctx.lineJoin = "round"
                        ctx.lineWidth = spreadRate

                        // As time increases decrease r and b, increase g to go from purple to green.
                        const red = Math.floor(190 - 190 * lifePercent)
                        const green = 0
                        const blue = Math.floor(210 + 210 * lifePercent)
                        ctx.strokeStyle = `rgb(${red},${green},${blue}`

                        ctx.beginPath()

                        ctx.moveTo(lastPoint.x, lastPoint.y)
                        ctx.lineTo(point.x, point.y)

                        ctx.stroke()
                        ctx.closePath()
                    }
                }
            }
            requestAnimationFrame(animatePoints)
        }

        animatePoints()
    }

    return (
        <canvas
            ref={canvasRef}
            width={cWidth}
            height={cHeight}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                pointerEvents: "none" // Allow interaction with elements below
            }}
        />
    )
}

export default Canvas
