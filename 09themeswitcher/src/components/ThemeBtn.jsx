import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { ThemeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={ThemeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700
        peer-checked:after:translate-x-full after:absolute after:top-[2px]
        after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full
        after:transition-all peer-checked:bg-blue-600">
      </div>
      <span className="ml-3 text-sm font-medium">Toggle Theme</span>
    </label>
  );
}
