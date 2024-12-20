// prettier-ignore
export default function PersonalCard({ width = "24", height = "24", className = "" }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        <path d="M14 8H19" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        <path d="M15 12H19" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        <path d="M17 16H19" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        <path d="M8.5 11.29C9.5 11.29 10.31 10.48 10.31 9.48C10.31 8.48 9.5 7.67 8.5 7.67C7.5 7.67 6.69 8.48 6.69 9.48C6.69 10.48 7.5 11.29 8.5 11.29Z" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        <path d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33" 
              stroke="#292D32" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
      </svg>
    );
  }
