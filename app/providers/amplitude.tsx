"use client";
import { useEffect, createContext } from "react";
import { init, track } from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
export const AmplitudeContext = createContext({trackAmplitudeEvent:(eventname:string,eventproperties:Record<string,any>)=>{}});

export default function AmplitudeContextProvider({children}:{children:React.ReactNode}){
  useEffect(() => {
      init(AMPLITUDE_API_KEY!, undefined, {
        defaultTracking: {
          sessions: true,
        },
      });
  }, []);

  function trackAmplitudeEvent(eventname:string,eventproperties:Record<string,any>){
    track(eventname,eventproperties)
  }
  const value = {trackAmplitudeEvent};
  return (
    <AmplitudeContext.Provider value={value}>
      {children}
    </AmplitudeContext.Provider>
  )

}