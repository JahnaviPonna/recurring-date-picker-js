import useDatePickerStore from '../store/useDatePickerStore';

export default function ExcludeDatesPanel() {
  const { excludeDates, setExcludeDates } = useDatePickerStore();

  const addDate = (e) => {
    const date = new Date(e.target.value);
    setExcludeDates([...excludeDates, date]);
  };

  return (
    <div>
      <label>Exclude Date</label>
      <input
  type="date"
  onChange={addDate}
  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
</div>
  );
}
