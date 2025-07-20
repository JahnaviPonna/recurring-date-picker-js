# 📅 Recurring Date Picker (Next.js + Zustand + Tailwind)

A highly customizable recurring date picker UI component built using **React**, **Next.js**, **Tailwind CSS**, and **Zustand** — inspired by the flexible recurrence pattern editor in the **TickTick app**.

---

## ✨ Features

- 🔁 **Recurrence Options**: Daily, Weekly, Monthly, Yearly
- 🎯 **Custom Intervals**: Every X days/weeks/months/years
- 📆 **Start & End Dates**: Select a start date and optional end date
- 🧠 **Day & Pattern Selection**:
  - Select specific weekdays
  - "The second Tuesday of every month"-style logic
- 📤 **Exclusions**: Ability to skip weekends and exclude specific dates
- 🖼️ **Live Preview**: See recurring dates in a visual calendar
- 🎨 **Responsive UI**: Beautifully styled with Tailwind CSS and custom theme
- ⚙️ **State Management**: Powered by Zustand for global state

---

## 🛠️ Tech Stack

- ⚛️ [Next.js](https://nextjs.org/) — React framework
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — styling
- 🧠 [Zustand](https://github.com/pmndrs/zustand) — state management

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/JahnaviPonna/recurring-date-picker-js.git
cd recurring-date-picker-js

# Install dependencies
npm install

## Run dev server
npm run dev


## Visit: http://localhost:3000
```
---

## 📸 UI Preview

📦 Folder Structure

src/
├── app/
│   ├── components/
│   │   ├── CalendarPreview.jsx
│   │   ├── CustomRecurrence.jsx
│   │   ├── DateRangeSelector.jsx
│   │   ├── DayOfWeekSelector.jsx
│   │   ├── MonthDaySelector.jsx
│   │   ├── RecurrenceOptions.jsx
│   │   ├── SkipWeekendsToggle.jsx
│   │   └── ExcludeDatesPanel.jsx
│   ├── hooks/
│   │   └── useRecurringDates.js
│   ├── store/
│   │   └── useDatePickerStore.js
│   └── page.jsx

---

## ✅ Accessibility

- Fully keyboard navigable
- ARIA roles used where appropriate
- Screen reader friendly

---

## 📄 License
MIT © Jahnavi Ponna

---

## 🌐 Live Demo

https://recurring-date-picker-js.vercel.app/
