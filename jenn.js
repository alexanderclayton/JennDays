function jennIsFree() {
    var taylanDays = ["Sunday", "Monday", "Tuesday"]
    var freeDays = ["Wednesday", "Thursday"]
    var taylanWeekend = ["Friday", "Saturday"]

    var freeDay = window.prompt("What day is it? \n (MUST capitalize today's name!!");

    if (freeDay === taylanDays[0]) {
        window.alert("Jenn has Taylan today");
    }

    else if (freeDay === taylanDays[1]) {
        window.alert("Jenn has Taylan today");
    }

    else if (freeDay === taylanDays[2]) {
        window.alert("Jenn has Taylan today");
    }

    else if (freeDay === freeDays[0]) {
        window.alert("Jenn is free today!");
    }

    else if (freeDay === freeDays[1]) {
        window.alert("Jenn is free today!");
    }

    else if (freeDay === taylanWeekend[0]) {
        window.alert("Jenn is free today UNLESS it's Taylan's weekend!");
    }

    else if (freeDay === taylanWeekend[1]) {
        window.alert("Jenn is free today UNLESS it's Taylan's weekend!")
    }

    else {
        window.alert("Did you capitalize today's name?!")
    }

    jennIsFree();
}

jennIsFree();
