"use client";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";

function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  function formatToDate(datetime: moment.MomentInput, format?: string) {
    if (!format) {
      return moment(datetime).format("DD/MM/YYYY");
    }
    return moment(datetime).format(format);
  }

  function handleChange(datetime: any) {
    setSelectedDate(datetime);
  }

  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div className="col-span-2 mb-5">
          This page will test on Material UI datepicker with moment.js
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker value={selectedDate} onChange={handleChange} />
          </LocalizationProvider>
        </div>
        {!selectedDate ? (
          <div className="ml-5">Date not chosen</div>
        ) : (
          <div className="ml-5">Chosen Date:{formatToDate(selectedDate)}</div>
        )}
      </div>
    </>
  );
}

export default DatePickerPage;