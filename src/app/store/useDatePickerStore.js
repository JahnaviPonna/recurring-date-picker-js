import { create } from 'zustand';

const useDatePickerStore = create((set) => ({
  recurrenceType: 'weekly',
  interval: 1,
  startDate: null,
  endDate: null,
  daysOfWeek: [],
  monthPattern: { week: 2, day: 2 },
  skipWeekends: false,
  excludeDates: [],

  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setInterval: (val) => set({ interval: val }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
  setMonthPattern: (pattern) => set({ monthPattern: pattern }),
  toggleWeekendSkip: () => set((s) => ({ skipWeekends: !s.skipWeekends })),
  setExcludeDates: (dates) => set({ excludeDates: dates }),
}));

export default useDatePickerStore;
