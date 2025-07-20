import useDatePickerStore from '../store/useDatePickerStore';

export default function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useDatePickerStore();

  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex gap-4" role="radiogroup" aria-label="Recurrence Type">
      {options.map((opt) => (
        <button
        key={opt}
        onClick={() => setRecurrenceType(opt)}
        className={`px-4 py-2 rounded-full transition text-sm font-medium ${
            recurrenceType === opt
            ? 'bg-blue-500 text-white shadow hover:bg-blue-600'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
        >
        {opt}
        </button>
      ))}
    </div>
  );
}
