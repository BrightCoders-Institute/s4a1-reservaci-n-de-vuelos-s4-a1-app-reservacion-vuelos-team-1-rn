import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Entypo';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January ',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan ',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: 'Today',
};

LocaleConfig.defaultLocale = 'fr';

// Si me voy a retirar
// como asi?

const CalendarComponent = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: '#5f73ed',
        },
      }}
      style={{
        height: 350,
        borderRadius: 10,
        backgroundColor: 'transparent',
      }}
      theme={{
        calendarBackground: 'transparent',
        monthTextColor: '#000',
        textSectionTitleColor: '#000',
        selectedDayBackgroundColor: '#000',
        selectedDayTextColor: '#000',
        todayTextColor: '#000',
        dayTextColor: '#000',
        textDisabledColor: '#B6B7BA',

        textMonthFontWeight: 'bold',
        textMonthFontSize: 20,
      }}
      minDate={'2024-01-30'}
      renderArrow={directions => (
        <Icon name={`chevron-${directions}`} size={30} color="#5f73ed" />
      )}
    />
  );
};

export default CalendarComponent;
