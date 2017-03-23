/**
 * @file Contains all strings used by index.js
 */

const languageStrings = {
  'en-GB': {
    translation: {
      SKILL_NAME: "Room Finder",
      BUSINESS_NAME: "the Turing",
      WELCOME_MESSAGE: "Would you like to book a meeting room at %s?",
      WELCOME_REPROMPT: "I'm %s. My job is to book meeting rooms! If you need further instructions, just ask me for help.",
      HELP_MESSAGE: "I look through all the meeting rooms here, see if one is available for a specified length of time, then book it for you! Say 'yes', or 'book a room', to continue.",
      HELP_REPROMPT: "Would you like me to book a meeting room for you? Say 'yes', or 'book me a meeting', to continue.",
      UNHANDLED_MESSAGE: "Sorry, I didn't get that. Would you like me to book a meeting room?",
      UNHANDLED_REPROMPT: "Say something like <break strength='weak'/> 'book me a meeting' <break strength='weak'/> or <break strength='weak'/> 'yes' <break strength='weak'/> if you'd like to book a meeting.",
      ROOM_AVAILABLE_MESSAGE: "%s is available. Would you like me to book it?",
      ROOM_AVAILABLE_REPROMPT: "Would you like me to book %s for you?",
      ROOM_BOOKED: "Great. I've booked %s for %s minutes.",
      CARD_ROOM_BOOKED_TITLE: "%s booked.",
      CARD_ROOM_BOOKED_CONTENT: "I've booked %s for %s minutes.",
      BOOKING_HELP_MESSAGE: "I checked all the meeting rooms, and %s is available. Do you want me to book it?",
      BOOKING_HELP_REPROMPT: "Say 'yes', or something like <break strength='weak'/> 'book it' <break strength='weak'/> if you want to book %s. You can also say 'no', or 'cancel', if you don't want the room.",
      BOOKING_UNHANDLED_MESSAGE: "Sorry, I didn't get that. Did you want to book that meeting?",
      BOOKING_UNHANDLED_REPROMPT: "Say 'yes', or something like <break strength='weak'/> 'book it' <break strength='weak'/> if you want to book %s. You can also say 'no', or 'cancel', if you don't want the room.",
      TIME_UNHANDLED_MESSAGE: "Sorry, I didn't get that. How long do you want the meeting to be?",
      TIME_UNHANDLED_REPROMPT: "How long do you want the meeting room for?",
      TIME_HELP_MESSAGE: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours, but you can say any duration under that.",
      TIME_HELP_REPROMPT: "Please say how long you'd like the meeting to be, or just say <break strength='weak'/> 'cancel', or 'stop', to quit.",
      TIME_DURATION_MESSAGE: "How long would you like the meeting to be?",
      TIME_DURATION_REPROMPT: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours.",
      TIME_UNAVAILABLE_MESSAGE: "Sorry, no rooms were available for a %s minute meeting. Maybe say a shorter time, or say 'cancel' if you're done.",
      TIME_UNAVAILABLE_REPROMPT: "No rooms were available for a %s minute meeting. You can say a shorter time, or say 'cancel' if you're done.",
      TIME_TOO_LONG_MESSAGE: "Sorry, I can only book meetings for up to 2 hours. Please say a shorter time, or say <break strength='weak'/> 'cancel' <break strength='weak'/> if you'd like to quit.",
      TIME_TOO_LONG_REPROMPT: "Please say a time shorter than 2 hours, and I'll try to book you a meeting.",
      ERROR: "There was an error. The intern who made this skill has been notified.",
      ERROR_CARD_TITLE: "Error occurred",
      STOP_MESSAGE: "Alright. Goodbye!"
    },
  },
  'en-US': {
    translation: {
      SKILL_NAME: "Room Finder",
      BUSINESS_NAME: "the Turing",
      WELCOME_MESSAGE: "Would you like to book a meeting room at %s?",
      WELCOME_REPROMPT: "I'm %s. My job is to book meeting rooms! If you need further instructions, just ask me for help.",
      HELP_MESSAGE: "I look through all the meeting rooms here, see if one is available for a specified length of time, then book it for you! Say 'yes', or 'book a room', to continue.",
      HELP_REPROMPT: "Would you like me to book a meeting room for you? Say 'yes', or 'book me a meeting', to continue.",
      UNHANDLED_MESSAGE: "Sorry, I didn't get that. Would you like me to book a meeting room?",
      UNHANDLED_REPROMPT: "Say something like <break strength='weak'/> 'book me a meeting' <break strength='weak'/> or <break strength='weak'/> 'yes' <break strength='weak'/> if you'd like to book a meeting.",
      ROOM_AVAILABLE_MESSAGE: "%s is available. Would you like me to book it?",
      ROOM_AVAILABLE_REPROMPT: "Would you like me to book %s for you?",
      ROOM_BOOKED: "Great. I've booked %s for %s minutes.",
      CARD_ROOM_BOOKED_TITLE: "%s booked.",
      CARD_ROOM_BOOKED_CONTENT: "I've booked %s for %s minutes.",
      BOOKING_HELP_MESSAGE: "I checked all the meeting rooms, and %s is available. Do you want me to book it?",
      BOOKING_HELP_REPROMPT: "Say 'yes', or something like <break strength='weak'/> 'book it' <break strength='weak'/> if you want to book %s. You can also say 'no', or 'cancel', if you don't want the room.",
      BOOKING_UNHANDLED_MESSAGE: "Sorry, I didn't get that. Did you want to book that meeting?",
      BOOKING_UNHANDLED_REPROMPT: "Say 'yes', or something like <break strength='weak'/> 'book it' <break strength='weak'/> if you want to book %s. You can also say 'no', or 'cancel', if you don't want the room.",
      TIME_UNHANDLED_MESSAGE: "Sorry, I didn't get that. How long do you want the meeting to be?",
      TIME_UNHANDLED_REPROMPT: "How long do you want the meeting room for?",
      TIME_HELP_MESSAGE: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours, but you can say any duration under that.",
      TIME_HELP_REPROMPT: "Please say how long you'd like the meeting to be, or just say <break strength='weak'/> 'cancel', or 'stop', to quit.",
      TIME_DURATION_MESSAGE: "How long would you like the meeting to be?",
      TIME_DURATION_REPROMPT: "Please tell me how long you'd like the meeting to be. The maximum is 2 hours.",
      TIME_UNAVAILABLE_MESSAGE: "Sorry, no rooms were available for a %s minute meeting. Maybe say a shorter time, or say 'cancel' if you're done.",
      TIME_UNAVAILABLE_REPROMPT: "No rooms were available for a %s minute meeting. You can say a shorter time, or say 'cancel' if you're done.",
      TIME_TOO_LONG_MESSAGE: "Sorry, I can only book meetings for up to 2 hours. Please say a shorter time, or say <break strength='weak'/> 'cancel' <break strength='weak'/> if you'd like to quit.",
      TIME_TOO_LONG_REPROMPT: "Please say a time shorter than 2 hours, and I'll try to book you a meeting.",
      ERROR: "There was an error. The intern who made this skill has been notified.",
      ERROR_CARD_TITLE: "Error occurred",
      STOP_MESSAGE: "Alright. Goodbye!"
    },
  }
};

module.exports.languageStrings = languageStrings;
