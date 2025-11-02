import useCountdown from "@/hooks/useCountdown";
import CountdownDisplay from "../../ui/CountdownDisplay";

function Countdown({ targetDate }) {
  const timeLeft = useCountdown(targetDate);
  return <CountdownDisplay {...timeLeft} />;
}

export default Countdown;
