import useDatePickerStore from '../store/useDatePickerStore';

export default function DateRangeSelector() {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  return (
    <div className="flex gap-4">
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-white/30"
        />
      </div>
      <div>
        <label htmlFor="end-date">End Date (optional)</label>
        <input
          type="date"
          id="end-date"
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
          className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-white/30"
        />
      </div>
    </div>
  );
}
