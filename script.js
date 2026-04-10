function updateClock() {
    
    const now = new Date();
    
    let hours = now.getHours();
    const formattedHours = hours.toString().padStart(2, "0");
    const minutes = now.getMinutes();
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const seconds = now.getSeconds();
    const formattedSeconds = seconds.toString().padStart(2, "0");
    
    
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    
   
    // const formattedHours = hours.toString().padStart(2, "0");
    // const formattedMinutes = minutes.toString().padStart(2, "0");
    // const formattedSeconds = seconds.toString().padStart(2, "0");
    
    
    document.getElementById("hour").innerText = formattedHours;
    document.getElementById("minutes").innerText = formattedMinutes;
    document.getElementById("second").innerText = formattedSeconds;
    document.getElementById("ampm").innerText = ampm;
  }
  setInterval(updateClock, 1000);
  
  
  updateClock();