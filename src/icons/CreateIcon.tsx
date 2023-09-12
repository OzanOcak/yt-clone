export const CreateIcon = () => {
  return (
    <div className="p-1 bg-gray-500/0 hover:bg-gray-500 rounded-full">
      <svg
        height="24"
        width="24"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "24px",
          height: "24px",
        }}
        viewBox="0 0 24 24"
        focusable="false"
      >
        <path
          fill="white"
          d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
        ></path>
      </svg>
    </div>
  );
};
export default CreateIcon;