import { format } from 'date-fns';
import useDatePickerStore from '../store/useDatePickerStore';
import useRecurringDates from '../hooks/useRecurringDates';

export default function CalendarPreview() {
  const {
    recurrenceType,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    monthPattern,
    skipWeekends,
    excludeDates,
  } = useDatePickerStore();

  const dates = useRecurringDates({
    type: recurrenceType,
    interval,
    startDate,
    endDate,
    daysOfWeek,
    monthPattern,
    skipWeekends,
    excludeDates,
  });

  return (
    <div>
      <h3 className="font-semibold mb-2">Preview</h3>
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-white/30">

        {dates.slice(0, 30).map((d, i) => (
          <div
            key={i}
            tabIndex={0}
            className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-sm text-blue-800 shadow-sm text-center"
          >
            {format(d, 'EEE, MMM d yyyy')}
          </div>
        ))}
      </div>
      {dates.length > 30 && (
        <p className="text-xs text-gray-500 mt-2">
          Showing first 30 of {dates.length} generated dates.
        </p>
      )}
    </div>
  );
}
