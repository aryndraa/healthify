import { useEffect, useRef, useState } from "react";

export default function SmoothInvertedCursor() {
	const cursorRef = useRef(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		const animate = () => {
			// Lerp function: buat gerakannya smooth
			setCursorPos((prev) => ({
				x: prev.x + (mousePos.x - prev.x) * 1,
				y: prev.y + (mousePos.y - prev.y) * 1,
			}));

			requestAnimationFrame(animate);
		};

		animate(); 

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [mousePos]);

	return (
		<div>
			<div
				ref={cursorRef}
				style={{
					
					position: "fixed",
					top: cursorPos.y,
					left: cursorPos.x,
					width: "25px",
					height: "25px",
					backgroundColor: "white",
					borderRadius: "50%",
					transform: "translate(-50%, -50%)",
					pointerEvents: "none",
					mixBlendMode: "difference",
					transition: "background-color 0.3s ease",
					zIndex: 9999,
				}}
			/>
		</div>
	);
}
