import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = { start: number; end: number };

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 200px;
  }

  .startData {
    color: ${({ theme }) => theme.colors.primary};
  }

  .endData {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function animateNumber(
	from: number,
	to: number,
	duration: number,
	onChange: (v: number) => void,
) {
	let raf = 0;
	const t0 = performance.now();

	const tick = (t: number) => {
		const p = Math.min(1, (t - t0) / duration);
		const v = Math.round(from + (to - from) * p);
		onChange(v);

		if (p < 1) raf = requestAnimationFrame(tick);
	};

	raf = requestAnimationFrame(tick);
	return () => cancelAnimationFrame(raf);
}

function DateRange({ start, end }: Props) {
	const [s, setS] = useState(start);
	const [e, setE] = useState(end);

	const prev = useRef({ start, end });

	useEffect(() => {
		const cancelS = animateNumber(prev.current.start, start, 500, setS);
		const cancelE = animateNumber(prev.current.end, end, 500, setE);

		prev.current = { start, end };
		return () => {
			cancelS();
			cancelE();
		};
	}, [start, end]);

	return (
		<Container>
			<h1 className="startData">{s}</h1>
			<h1 className="endData">{e}</h1>
		</Container>
	);
}

export { DateRange };
