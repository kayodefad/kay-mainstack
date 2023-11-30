const InvoicingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#1E1E1E" />
    <path d="M-48 -470C-48 -478.837 -40.8366 -486 -32 -486H9386C9394.84 -486 9402 -478.837 9402 -470V877C9402 885.837 9394.84 893 9386 893H-31.9999C-40.8365 893 -48 885.837 -48 877V-470Z" fill="#EDE5FE" />
    <g clipPath="url(#clip0_0_1)">
      <rect width="1440" height="1266" transform="translate(-28 -466)" fill="white" />
      <g filter="url(#filter0_dd_0_1)">
        <rect x="-12" y="-156" width="48" height="192" rx="24" fill="white" shapeRendering="crispEdges" />
        <g style={{ mixBlendMode: 'luminosity' }}>
          <path
            d="M20.5202 6.64998V21.05C20.5202 21.63 20.0502 22.1 19.4702 22.1H9.29023C8.71023 22.1 8.24023 21.63 8.24023 21.05V20.16L17.3402 16.72C17.7002 16.58 17.9402 16.24 17.9402 15.85V5.59998H19.4702C20.0502 5.59998 20.5202 6.06998 20.5202 6.64998Z"
            fill="url(#paint0_linear_0_1)"
          />
          <path d="M17.9402 5.59998V15.86C17.9402 16.25 17.7002 16.59 17.3402 16.73L8.24023 20.17V6.64998C8.24023 6.06998 8.71023 5.59998 9.29023 5.59998H17.9402Z" fill="url(#paint1_linear_0_1)" />
          <path
            d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z"
            fill="url(#paint2_linear_0_1)"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_0_1" x="-24" y="-162" width="72" height="216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.45098 0 0 0 0 0.513726 0 0 0 0.08 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.360938 0 0 0 0 0.451678 0 0 0 0 0.514063 0 0 0 0.08 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_0_1" x1="8.2422" y1="13.8522" x2="20.5182" y2="13.8522" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCFF1C" />
        <stop offset="1" stopColor="#FF9D0A" />
      </linearGradient>
      <linearGradient id="paint1_linear_0_1" x1="8.2422" y1="12.8857" x2="17.9372" y2="12.8857" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDDCD" />
        <stop offset="1" stopColor="#FF5403" />
      </linearGradient>
      <linearGradient id="paint2_linear_0_1" x1="3.48199" y1="11.7778" x2="17.937" y2="11.7778" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E7CFFF" />
        <stop offset="1" stopColor="#870FFF" />
      </linearGradient>
      <clipPath id="clip0_0_1">
        <rect width="1440" height="1266" fill="white" transform="translate(-28 -466)" />
      </clipPath>
    </defs>
  </svg>
);

export default InvoicingIcon;
