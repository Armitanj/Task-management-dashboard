import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, IconButton, Typography, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // دریافت روزهای هفته
  const getWeekDays = (date: dayjs.Dayjs) => {
    const startOfWeek = date.startOf("week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  };

  const weekDays = getWeekDays(currentDate);

  // تغییر هفته‌ها
  const nextWeek = () => setCurrentDate((prev) => prev.add(7, "day"));
  const prevWeek = () => setCurrentDate((prev) => prev.subtract(7, "day"));

  return (
    <Box sx={{ textAlign: "center", padding: "25px", backgroundColor: "#f5f5f5", borderRadius: "12px" }}>
        <div className="bg-white p-[10px]! mt-1! rounded-2xl">
      {/* هدر: ماه، سال و دکمه‌های جابجایی */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <IconButton onClick={prevWeek}><ChevronLeft /></IconButton>
        <Typography variant="h6">{currentDate.format("MMMM YYYY")}</Typography>
        <IconButton onClick={nextWeek}><ChevronRight /></IconButton>

       
      </Box>

      {/* نمایش روزهای هفته */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
        {weekDays.map((day) => (
          <Box key={day.toString()} sx={{ textAlign: "center" }}>
            <Typography variant="caption" sx={{ color: "#666" }}>{day.format("dd")}</Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                padding: "10px",
                minWidth: "44px",
                marginTop:"0.5rem",
                backgroundColor: day.isSame(dayjs(), "day") ? "#000" : "#fff",
                color: day.isSame(dayjs(), "day") ? "#fff" : "#000",
                boxShadow: day.isSame(dayjs(), "day") ? "0px 4px 10px rgba(0,0,0,0.2)" : "none",
              }}
            >
              {day.format("DD")}
            </Button>
          </Box>
        ))}
      </Box>
       </div>
    </Box>
  );
};

export default Calendar;