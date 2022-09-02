import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={333} width={234} {...props}>
    <title>{"Abstract Clouds"}</title>
    <defs>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="q"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="p"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="o"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="n"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="m"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="l"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="k"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="j"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="i"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="h"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="g"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        style={{
          colorInterpolationFilters: "sRGB",
        }}
        height={1}
        width={1}
        y={0}
        x={0}
        id="f"
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        height={1}
        width={1}
        y={0}
        x={0}
        id="d"
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        height={1}
        width={1}
        y={0}
        x={0}
        id="b"
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        height={1}
        width={1}
        y={0}
        x={0}
        id="e"
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <filter
        height={1}
        width={1}
        y={0}
        x={0}
        id="c"
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feColorMatrix result="fbSourceGraphic" values={1} type="saturate" />
        <feColorMatrix
          values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          in="fbSourceGraphic"
        />
      </filter>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <rect
          rx={28.421}
          ry={28.413}
          y={-3.26}
          x={186.578}
          height={1055.244}
          width={743.244}
          style={{
            fill: "#fff",
            fillOpacity: 1,
            stroke: "gray",
            strokeWidth: 0.755906,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </clipPath>
    </defs>
    <g
      style={{
        strokeWidth: 3.17258,
      }}
      transform="matrix(.31484 0 0 .31557 -58.741 1.029)"
      clipPath="url(#a)"
    >
      <rect
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "gray",
          strokeWidth: 2.39817,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        width={743.244}
        height={1055.244}
        x={179.407}
        y={-3.26}
        ry={28.413}
        rx={28.421}
      />
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .7666 -31.754 -333.712)"
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 112.884 -377.447)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#b)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 36.94 -305.266)"
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 495.259 -367.472)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#c)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 357.271 -365.81)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#d)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 232.584 -379.11)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#e)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 297.63 -305.266)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#f)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .8478 167.285 -305.266)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#g)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .7666 628.259 -310.437)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 556.572 -305.266)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .8478 427.977 -305.266)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .8478 -95.06 -305.266)"
        />
      </g>
      <g
        transform="matrix(.78463 0 0 .7666 60.94 -204.08)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#h)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .7666 321.63 -204.08)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 191.285 -204.08)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.78463 0 0 .7666 580.572 -204.08)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 451.977 -204.08)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.78463 0 0 .7666 -71.06 -204.08)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 -167.748 -206.548)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 154.093 -206.548)"
        />
      </g>
      <g
        transform="matrix(.96868 0 0 .94642 -6.828 -206.548)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#i)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 473.774 -206.548)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(.96868 0 0 .94642 315.014 -206.548)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -132.513 -181.881)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 225.088 -181.881)"
        />
      </g>
      <g
        transform="matrix(1.0763 0 0 1.05157 46.288 -181.881)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#j)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.0763 0 0 1.05157 -246.513 -93.95)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.0763 0 0 1.05157 403.89 -181.881)"
        />
      </g>
      <g
        transform="matrix(1.0763 0 0 1.05157 111.088 -93.95)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#k)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 -67.712 -93.95)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.0763 0 0 1.05157 466.29 -93.95)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.0763 0 0 1.05157 289.89 -93.95)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.1959 0 0 1.16842 -228.03 -46.784)"
        />
      </g>
      <g
        transform="matrix(1.1959 0 0 1.16842 169.306 -46.784)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#l)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 -29.362 -46.784)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.16842 367.973 -46.784)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -334.03 25.94)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 63.306 25.94)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.1959 0 0 1.24961 -135.362 25.94)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.1959 0 0 1.24961 457.973 25.94)"
        />
      </g>
      <g
        transform="matrix(1.1959 0 0 1.24961 261.973 25.94)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#m)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.32878 0 0 1.4877 -296.38 44.823)"
        />
      </g>
      <g
        transform="matrix(1.32878 0 0 1.4877 145.102 44.823)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#n)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 -75.64 44.823)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4877 365.844 44.823)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 -220.38 181.182)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.4065 293.844 181.182)"
        />
      </g>
      <g
        transform="matrix(1.32878 0 0 1.4065 32.732 181.182)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#o)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -296.38 299.331)"
        />
      </g>
      <g
        transform="matrix(1.32878 0 0 1.39297 145.102 299.331)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#p)",
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.32878 0 0 1.39297 -75.64 299.331)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.32878 0 0 1.29824 -220.38 434.643)"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          transform="matrix(1.32878 0 0 1.39297 365.844 299.331)"
        />
      </g>
      <g
        transform="matrix(1.32878 0 0 1.29824 293.844 434.643)"
        style={{
          strokeWidth: 3.20967,
          filter: "url(#q)",
        }}
      >
        <path
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
        />
        <path
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
        />
        <path
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
        />
        <path
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
        />
        <path
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
        />
      </g>
      <g
        style={{
          strokeWidth: 3.20967,
        }}
      >
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.656 355.781c-66.587 0-120.637 53.612-121.344 120.031h242.72c-.707-66.42-54.789-120.03-121.376-120.03z"
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          d="M400.658 367.784c-59.928 0-108.574 48.25-109.21 108.029h218.447c-.636-59.778-49.309-108.029-109.237-108.029Z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          style={{
            fill: "#c6a148",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.66 378.587c-53.936 0-97.717 43.426-98.29 97.226h196.603c-.572-53.8-44.378-97.226-98.314-97.226z"
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          d="M400.66 388.31c-48.541 0-87.944 39.083-88.46 87.502h176.943c-.515-48.42-39.94-87.502-88.483-87.502z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.662 397.06c-43.688 0-79.15 35.175-79.614 78.752h159.248c-.464-43.577-35.947-78.752-79.634-78.752z"
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          d="M400.663 411.235c-35.823 0-64.903 28.844-65.283 64.578h130.583c-.38-35.734-29.476-64.578-65.3-64.578z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          style={{
            fill: "#c59e42",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          d="M400.665 425.442c-27.942 0-50.624 22.498-50.92 50.37h101.854c-.296-27.872-22.991-50.37-50.934-50.37z"
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
        <path
          d="M400.667 438.035c-20.957 0-37.968 16.873-38.19 37.777h76.39c-.222-20.904-17.243-37.777-38.2-37.777z"
          style={{
            fill: "#e6e6e6",
            fillOpacity: 1,
            strokeWidth: 3.20967,
          }}
          transform="matrix(1.32878 0 0 1.29824 32.732 434.643)"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;