import { useCurrentIssue } from "@/utils/hooks"

export function MenuButton() {
  const issue = useCurrentIssue()
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2.07143C20 2.35559 19.8888 2.62811 19.6908 2.82904C19.4929 3.02997 19.2244 3.14286 18.9444 3.14286H2.05556C1.7756 3.14286 1.50712 3.02997 1.30917 2.82904C1.11121 2.62811 1 2.35559 1 2.07143C1 1.78727 1.11121 1.51475 1.30917 1.31381C1.50712 1.11288 1.7756 1 2.05556 1H18.9444C19.2244 1 19.4929 1.11288 19.6908 1.31381C19.8888 1.51475 20 1.78727 20 2.07143ZM20 8.5C20 8.78416 19.8888 9.05668 19.6908 9.25761C19.4929 9.45855 19.2244 9.57143 18.9444 9.57143H2.05556C1.7756 9.57143 1.50712 9.45855 1.30917 9.25761C1.11121 9.05668 1 8.78416 1 8.5C1 8.21584 1.11121 7.94332 1.30917 7.74239C1.50712 7.54145 1.7756 7.42857 2.05556 7.42857H18.9444C19.2244 7.42857 19.4929 7.54145 19.6908 7.74239C19.8888 7.94332 20 8.21584 20 8.5ZM18.9444 16C19.2244 16 19.4929 15.8871 19.6908 15.6862C19.8888 15.4853 20 15.2127 20 14.9286C20 14.6444 19.8888 14.3719 19.6908 14.171C19.4929 13.97 19.2244 13.8571 18.9444 13.8571H2.05556C1.7756 13.8571 1.50712 13.97 1.30917 14.171C1.11121 14.3719 1 14.6444 1 14.9286C1 15.2127 1.11121 15.4853 1.30917 15.6862C1.50712 15.8871 1.7756 16 2.05556 16H18.9444Z"
        fill={
          issue === 1
            ? "var(--color-article-purple-accent)"
            : "var(--color-dark-green)"
        }
        stroke={
          issue === 1
            ? "var(--color-article-purple-accent)"
            : "var(--color-dark-green)"
        }
        strokeWidth="2"
      />
    </svg>
  )
}
