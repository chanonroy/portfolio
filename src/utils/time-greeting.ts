const timeGreeting = () => {
  const date = new Date();
  const hour = date.getHours();
  let greeting;

  if (hour > 2 && hour < 12) {
    // 2AM - 12PM
    greeting = 'Good morning!';
  } else if (hour > 11 && hour < 17) {
    // 12PM - 5PM
    greeting = 'Good afternoon!';
  } else if (hour > 16 && hour < 22) {
    // 5PM - 10PM
    greeting = 'Good evening!';
  } else {
    greeting = 'Greetings!'; // 10PM - 2AM
  }

  return greeting;
};

export default timeGreeting;
