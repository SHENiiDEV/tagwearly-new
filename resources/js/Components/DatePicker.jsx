import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function DatePicker({ value, onChange, error }) {
    // Parse Date string (YYYY-MM-DD) into Date object
    const selectedDate = value ? new Date(value + 'T00:00:00') : null;

    const handleDateChange = (date) => {
        if (!date) {
            onChange('');
            return;
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        onChange(`${year}-${month}-${day}`);
    };

    // Custom Input button component for react-datepicker
    const CustomInput = forwardRef(({ value: displayValue, onClick }, ref) => (
        <button
            type="button"
            ref={ref}
            onClick={onClick}
            className={`w-full cursor-pointer flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 border transition text-left text-sm hover:bg-slate-900/80 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${
                error
                    ? 'border-rose-500 text-rose-300'
                    : 'border-slate-800 hover:border-slate-700 text-slate-200'
            }`}
        >
            <span className={displayValue ? 'font-semibold text-white' : 'text-slate-500'}>
                {displayValue || 'Select Date of Birth'}
            </span>
            <CalendarIcon className="w-4 h-4 text-indigo-400 shrink-0 ml-2" />
        </button>
    ));

    CustomInput.displayName = 'DatePickerCustomInput';

    return (
        <div className="relative w-full custom-react-datepicker">
            <ReactDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                customInput={<CustomInput />}
                dateFormat="MMMM d, yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                yearDropdownItemNumber={90}
                scrollableYearDropdown
                maxDate={new Date()}
                wrapperClassName="w-full"
            />
        </div>
    );
}
