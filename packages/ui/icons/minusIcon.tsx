import { iconProps, sizeClasses } from "./iconProperties.js";


export function MinusIcon ({size}: iconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={sizeClasses[size]}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
  
}