import useDatePickerStore from '../store/useDatePickerStore';

export default function SkipWeekendsToggle() {
  const { skipWeekends, toggleWeekendSkip } = useDatePickerStore();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={skipWeekends}
          onChange={toggleWeekendSkip}
          className="mr-2"
        />
        Skip weekends
      </label>
    </div>
  );
}
