import React, { useState, useEffect } from "react";
import { Button, DatePicker, message, Alert, Badge, Calendar } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import moment from "moment";
import dayjs from "dayjs";

const RegisterSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableDates, setAvailableDates] = useState([]); // Store available schedule dates

  // Get staffId from localStorage when logged in
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const staffId = storedUserInfo ? storedUserInfo.id : null;

  // Fetch available dates when component mounts
  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await api.get("/slot/staff", {
          params: { month: 11, year: 2024 },
        });
        // Assuming the data received is in the format { staff: ["2024-11-05", "2024-11-06", ...] }
        setAvailableDates(response.data.staff.map(date => dayjs(date, "YYYY-MM-DD")));
      } catch (error) {
        console.error("Unable to load schedule:", error);
        toast.error("Unable to load schedule.");
      }
    };

    fetchAvailableDates();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRegisterSchedule = async () => {
    if (!staffId) {
      toast.error("Stylist ID not found. Please log in again.");
      return;
    }

    if (!selectedDate) {
      toast.error("Please select a date!");
      return;
    }

    setLoading(true);
    try {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      const response = await api.post(`/slot/${staffId}`, null, {
        params: { date: formattedDate },
      });
      if (response.status === 200) {
        message.success("Successfully registered work schedule!");
        // Update availableDates to reflect the new scheduled date
        setAvailableDates([...availableDates, dayjs(formattedDate, "YYYY-MM-DD")]);
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to register work schedule!");
    } finally {
      setLoading(false);
    }
  };

  // Check if the date is in the availableDates list
  const isAvailableDate = (date) => {
    return availableDates.some(availableDate => availableDate.isSame(date, "day"));
  };

  const getListData = (value) => {
    if (isAvailableDate(value)) {
      return [{ type: 'success', content: 'Available Work Day' }];
    }
    return [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <Badge key={item.content} status={item.type} text={item.content} />
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Register Work Schedule</h2>

      <DatePicker
        onChange={handleDateChange}
        value={selectedDate}
        format="YYYY-MM-DD"
        placeholder="Select Date"
        disabledDate={(current) => !isAvailableDate(current) || current < moment().endOf("day")}
        style={{ marginBottom: 16 }}
      />

      <Button
        type="primary"
        onClick={handleRegisterSchedule}
        loading={loading}
        style={{ marginLeft: 8 }}
      >
        Register Schedule
      </Button>

      <Alert
        message={`You selected: ${selectedDate ? selectedDate.format('YYYY-MM-DD') : 'No date selected'}`}
        style={{ marginBottom: 16 }}
      />

      <Calendar
        value={selectedDate ? dayjs(selectedDate) : dayjs()}
        onSelect={handleDateChange}
        dateCellRender={dateCellRender}
      />
    </div>
  );
};

export default RegisterSchedule;
