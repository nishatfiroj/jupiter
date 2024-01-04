export function Arrow() {
  return (
    <button
      style={{
        height: "32px",
        width: "28px",
        backgroundColor: "transparent",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "1px solid var(--color-off-black)",
      }}
    >
      <svg
        width="28"
        height="8"
        viewBox="0 0 28 8"
        fill="var(--color-off-black)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64644L24.1716 0.464464C23.9763 0.269202 23.6597 0.269202 23.4645 0.464464C23.2692 0.659726 23.2692 0.976309 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.73079 23.9763 7.73079 24.1716 7.53553L27.3536 4.35355ZM4.37114e-08 4.5L27 4.5L27 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
          fill="#011212"
        />
      </svg>
    </button>
  )
}
