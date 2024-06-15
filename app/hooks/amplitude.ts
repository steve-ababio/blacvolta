import { useContext } from "react";
import { AmplitudeContext } from "@/app/providers/amplitude";

export function useAmplitudeContext(){
    const context = useContext(AmplitudeContext);
    if(context === undefined){
        throw new Error("useAmplitudeContext must be used within a AmplitudeContextProvider");
    }
    return context;
}