import useDatePickerStore from '../store/useDatePickerStore';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DayOfWeekSelector() {
  const { daysOfWeek, setDaysOfWeek } = useDatePickerStore();

  const toggle = (idx) => {
    if (daysOfWeek.includes(idx)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== idx));
    } else {
      setDaysOfWeek([...daysOfWeek, idx]);
    }
  };

  return (
    <div className="flex gap-2">
      {days.map((d, idx) => (
        <button
          key={idx}
          onClick={() => toggle(idx)}
          aria-pressed={daysOfWeek.includes(idx)}
          className={`px-3 py-2 text-sm rounded-full border ${
            daysOfWeek.includes(idx) ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
