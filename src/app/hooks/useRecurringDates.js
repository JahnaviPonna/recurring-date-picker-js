import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isBefore,
  isWeekend,
  isEqual,
} from 'date-fns';

function getNthWeekdayOfMonth(year, month, nth, weekday) {
  let count = 0;
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    if (date.getDay() === weekday) {
      count++;
      if (count === nth) return new Date(date);
    }
    date.setDate(date.getDate() + 1);
  }
  return null;
}

export default function useRecurringDates({
  type,
  interval,
  startDate,
  endDate,
  daysOfWeek,
  monthPattern,
  skipWeekends,
  excludeDates = [],
}) {
  if (!startDate) return [];

  let current = new Date(startDate);
  const end = endDate ?? addYears(current, 1);
  const dates = [];

  while (isBefore(current, end)) {
    let addDate = false;

    if (type === 'daily') {
      addDate = true;
      current = addDays(current, interval);
    } else if (type === 'weekly') {
      for (let i = 0; i < 7; i++) {
        const d = addDays(current, i);
        if (daysOfWeek.includes(d.getDay()) && isBefore(d, end)) dates.push(d);
      }
      current = addWeeks(current, interval);
      continue;
    } else if (type === 'monthly') {
      if (monthPattern) {
        const d = getNthWeekdayOfMonth(
          current.getFullYear(),
          current.getMonth(),
          monthPattern.week,
          monthPattern.day
        );
        if (d && isBefore(d, end)) dates.push(d);
      }
      current = addMonths(current, interval);
      continue;
    } else if (type === 'yearly') {
      addDate = true;
      current = addYears(current, interval);
    }

    if (addDate && isBefore(current, end)) dates.push(current);
  }

  return dates.filter((d) => {
    if (skipWeekends && isWeekend(d)) return false;
    if (excludeDates.some((ex) => isEqual(ex, d))) return false;
    return true;
  });
}
