import { HTMLAttributes } from "react"

type IconProps = HTMLAttributes<SVGElement>

export const Logo = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="1em"
    height="1em"
    {...props}
  >
    <rect fill="#f8de40" x="1" y="1" width="22" height="22" rx="7.656" />
    <path
      fill="#e7c930"
      d="M23,13.938a14.69,14.69,0,0,1-12.406,6.531c-5.542,0-6.563-1-9.142-2.529A7.66,7.66,0,0,0,8.656,23h6.688A7.656,7.656,0,0,0,23,15.344Z"
    />
    <path
      fill="#864e20"
      d="M19.2,13.794a5.027,5.027,0,0,1-3.035-1.927,2.629,2.629,0,0,0-3.2-.64A2.948,2.948,0,0,0,12,12.379a2.957,2.957,0,0,0-.964-1.152,2.631,2.631,0,0,0-3.2.64A5.024,5.024,0,0,1,4.8,13.794a.441.441,0,0,0-.371.67A3.659,3.659,0,0,0,8,16.264c2.374-.139,3.532-.979,4-1.833.466.854,1.624,1.694,4,1.833a3.661,3.661,0,0,0,3.58-1.812A.439.439,0,0,0,19.2,13.794Z"
    />
    <path
      fill="#101820"
      d="M21.554,5.693c-.063-.289-2.888-.829-4.871-.829a5.584,5.584,0,0,0-3.3.7A3.125,3.125,0,0,1,12,5.919a3.125,3.125,0,0,1-1.381-.352,5.584,5.584,0,0,0-3.3-.7c-1.983,0-4.808.54-4.871.829s-.113,1.217.088,1.381.439.025.477.6.477,2.976,1.808,3.767,3.741.163,4.6-.365A4.3,4.3,0,0,0,11.3,8.568c.138-.892.351-1.507.7-1.507s.565.615.7,1.507a4.3,4.3,0,0,0,1.883,2.51c.854.528,3.264,1.155,4.6.365s1.77-3.189,1.808-3.767.276-.439.477-.6S21.617,5.981,21.554,5.693Z"
    />
  </svg>
)