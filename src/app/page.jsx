'use client';

import React from 'react';
import RecurrenceOptions from './components/RecurrenceOptions';
import CustomRecurrence from './components/CustomRecurrence';
import DateRangeSelector from './components/DateRangeSelector';
import CalendarPreview from './components/CalendarPreview';
import ExcludeDatesPanel from './components/ExcludeDatesPanel';
import MiniCalendarGrid from './components/MiniCalendarGrid';
import DayOfWeekSelector from './components/DayOfWeekSelector';
import MonthDaySelector from './components/MonthDaySelector';
import SkipWeekendsToggle from './components/SkipWeekendsToggle';
import useDatePickerStore from './store/useDatePickerStore';

export default function Home() {
  const recurrenceType = useDatePickerStore((state) => state.recurrenceType);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-white text-gray-800 font-sans p-6">
      <h1 className="text-4xl font-semibold mb-10 flex items-center gap-2 justify-center">
        <span role="img" aria-label="calendar">📅</span>
        <span className="tracking-tight">Recurring Date Picker</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Panel */}
        <section
          className="bg-white shadow-md rounded-xl p-6 space-y-6 border border-gray-100"
          aria-labelledby="form-controls"
        >
          <RecurrenceOptions />
          <CustomRecurrence />
          {recurrenceType === 'weekly' && <DayOfWeekSelector />}
          {recurrenceType === 'monthly' && <MonthDaySelector />}
          <DateRangeSelector />
          <SkipWeekendsToggle />
          <ExcludeDatesPanel />
        </section>

        {/* Right Panel */}
        <section className="space-y-6" aria-labelledby="calendar-section">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <MiniCalendarGrid />
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <CalendarPreview />
          </div>
        </section>
      </div>
    </main>
  );
}
