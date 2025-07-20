import useDatePickerStore from '../store/useDatePickerStore';

export default function CustomRecurrence() {
  const { interval, setInterval, recurrenceType } = useDatePickerStore();

  return (
    <div>
      <label htmlFor="interval" className="block font-medium">Repeat every:</label>
      <input
        id="interval"
        type="number"
        value={interval}
        min={1}
        onChange={(e) => setInterval(Number(e.target.value))}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />{' '}
      {recurrenceType}
    </div>
  );
}
