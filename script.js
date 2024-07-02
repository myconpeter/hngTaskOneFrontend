    const updateTime = () => {
    const now = new Date();

    const CurrentDateTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
    });

    const dayOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const Day = dayOfTheWeek[now.getDay()];

    console.log(Day);

    document.querySelector(
        ".Time"
    ).innerHTML = `Current Time: ${CurrentDateTime}`;

    document.querySelector(".Day").innerHTML = `Current Day: ${Day}`;
    };

    updateTime();

    setInterval(updateTime, 1000);
