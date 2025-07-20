import useDatePickerStore from '../store/useDatePickerStore';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function MonthDaySelector() {
  const { setMonthPattern } = useDatePickerStore();

  return (
    <div className="flex gap-2 items-center mb-4">
      <label htmlFor="pattern-select">Pattern:</label>
      <select
        id="pattern-select"
        onChange={(e) => {
          const [week, day] = e.target.value.split('-').map(Number);
          setMonthPattern({ week, day });
        }}
        className="border px-2 py-1 rounded"
      >
        <option value="">-- select --</option>
        {[1, 2, 3, 4].map((w) =>
          days.map((_, d) => (
            <option key={`${w}-${d}`} value={`${w}-${d}`}>
              {`${w} ${days[d]}`}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
