import React, { useState, useEffect } from "react";
import "./Appoinments.css";
import Select from "react-dropdown-select";
function Appoinments() {
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const SLOTS = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "4:00 PM",
    "4:30 PM", "5:00 PM"
  ];

  const UNAVAILABLE = [2, 5, 9];

  const today = new Date();

  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [paymentMode, setPaymentMode] = useState("cash");

  const [name, setName] = useState("");

  // 📅 Generate Calendar Days
  const renderCalendar = () => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();

    let daysArr = [];

    for (let i = 0; i < firstDay; i++) {
      daysArr.push(<div key={"empty" + i} className="cal-day empty"></div>);
    }

    for (let d = 1; d <= totalDays; d++) {
      const isPast =
        new Date(viewYear, viewMonth, d) <
        new Date(today.getFullYear(), today.getMonth(), today.getDate());

      const isToday =
        d === today.getDate() &&
        viewMonth === today.getMonth() &&
        viewYear === today.getFullYear();

      const isSelected =
        selectedDate &&
        d === selectedDate.d &&
        viewMonth === selectedDate.m &&
        viewYear === selectedDate.y;

      let cls = "cal-day";
      if (isPast) cls += " past";
      else if (isSelected) cls += " selected";
      else if (isToday) cls += " today";

      daysArr.push(
        <div
          key={d}
          className={cls}
          onClick={() => !isPast && handleSelectDate(d)}
        >
          {d}
        </div>
      );
    }

    return daysArr;
  };

  // 📆 Select Date
  const handleSelectDate = (d) => {
    setSelectedDate({ d, m: viewMonth, y: viewYear });
  };

  // ⏰ Select Slot
  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  // 🔁 Change Month
  const changeMonth = (dir) => {
    let newMonth = viewMonth + dir;
    let newYear = viewYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setViewMonth(newMonth);
    setViewYear(newYear);
  };

  // 📄 Format Date
  const formattedDate = selectedDate
    ? new Date(selectedDate.y, selectedDate.m, selectedDate.d).toLocaleDateString(
      "en-IN",
      {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    )
    : "—";

  // ✅ Confirm Booking
  const confirmBooking = () => {
    if (!name) return alert("Enter name");
    if (!selectedDate) return alert("Select date");
    if (!selectedSlot) return alert("Select slot");

    alert(
      `✅ Appointment Confirmed!
      
Dr. Priya Sharma
${formattedDate} · ${selectedSlot}
Payment: ${paymentMode}`
    );
  };


  const options = [
    {
      value: 1,
      label: 'Male'
    },
    {
      value: 2,
      label: 'Female'
    },
    {
      value: 3,
      label: 'Other'
    }
  ];
  return (
    <div>
      <p className="page-title">
        Book Your <span>Appointment</span>
      </p>

      <div className="appointment-grid">
        {/* LEFT */}
        <div className="d-flex flex-wrap">
          {/* Calendar */}
          <div className="card card1">
            <div className="section-label">Select Date</div>

            <div className="calendar-header">
              <button onClick={() => changeMonth(-1)}>‹</button>
              <span>
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <button onClick={() => changeMonth(1)}>›</button>
            </div>

            <div className="cal-grid">
              {DAYS.map((d) => (
                <div key={d} className="cal-day-name">
                  {d}
                </div>
              ))}
              {renderCalendar()}
            </div>
          </div>

          {/* Slots */}
          <div className="card card2">
            <div className="section-label">Available Slots</div>

            <div className="slots-grid">
              {SLOTS.map((slot, i) => {
                const unavailable = UNAVAILABLE.includes(i);
                const selected = selectedSlot === slot;

                return (
                  <div
                    key={slot}
                    className={`slot ${unavailable
                      ? "unavailable"
                      : selected
                        ? "selected"
                        : ""
                      }`}
                    onClick={() => !unavailable && handleSelectSlot(slot)}
                  >
                    {slot}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card card3">
            <div className="section-label">Booking Summary</div>

            <p>Doctor: Dr. Priya Sharma</p>
            <p>Patient: {name || "—"}</p>
            <p>Date: {formattedDate}</p>
            <p>Time: {selectedSlot || "Not selected"}</p>
            <p>Fee: ₹400</p>

            {/* Payment */}
            <div>
              <button
                className={paymentMode === "cash" ? "active" : ""}
                onClick={() => setPaymentMode("cash")}
              >
                Cash
              </button>

              <button
                className={paymentMode === "online" ? "active" : ""}
                onClick={() => setPaymentMode("online")}
              >
                Online
              </button>
            </div>

            <button onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-col">
          <div className="card">
            <div className="section-label">Patient Details</div>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="age"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select name="" id="" className="SelectBox">
              <option value="" defaultChecked > Select Gender</option>
              {options.map((e) => {
                return (
                  <option value={e.label}>{e.label}</option>
                )
              })}
            </select>

          </div>

          {/* Summary */}

        </div>
      </div>
    </div>
  );
}

export default Appoinments;