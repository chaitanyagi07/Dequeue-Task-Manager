import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCXJ7FL1817rJui_AN-nzDU4ScXYPnVetk";
let calendars = [
  {
    calendarId: "",
    color: "#B241D1",
  }, //add a color field to specify the color of a calendar
  { calendarId: "" }, //without a specified color, it defaults to blue (#4786ff)
  {
    calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com",
    color: "rgb(63, 191, 63)",
  }, //accepts hex and rgb strings (doesn't work with color names)
];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `,
};

const language = "ENM";

 export const TaskAndProject=()=>{
    return (
      <div>
        <Calendar
          apiKey={API_KEY}
          calendars={calendars}
          styles={styles}
          language={language}
        />
      </div>
    );
  }
