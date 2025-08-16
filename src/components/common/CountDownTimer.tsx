
import { useState,useEffect} from "react";

interface Timerprops {
  Duration:number;
  onExpire :() =>void;
}

const CountDownTimer :React.FC<Timerprops> =({Duration,onExpire}) =>{
  const [timeLeft,setTimeLeft] = useState(Duration);
  useEffect(()=>{
    if(timeLeft<=0){
      return onExpire();
    }

  })
  const timer = setInterval(()=>{
    setTimeLeft(()=>{

    })
  })
}
export default  CountDownTimer;