let mentorsListScrollTimer;
const scrollSpeed = 1; // Adjust this value for the scrolling speed

function scrollMentorsList() {
    const list = document.querySelector(".mentors-list");

    // Scroll in the current direction
    list.scrollLeft += scrollSpeed;

    // Check if we've hit the right edge, then reset to the start
    if (list.scrollLeft >= list.scrollWidth - list.clientWidth) {
        list.scrollLeft = 0; // Reset scroll position to the start
    }

    // Continue the scrolling loop
    mentorsListScrollTimer = requestAnimationFrame(scrollMentorsList);
}

function startScrolling() {
    if (!mentorsListScrollTimer) { // Prevent multiple timers
        mentorsListScrollTimer = requestAnimationFrame(scrollMentorsList);
    }
}

function stopScrolling() {
    if (mentorsListScrollTimer) {
        cancelAnimationFrame(mentorsListScrollTimer);
        mentorsListScrollTimer = null; // Clear the timer reference
    }
}

window.onload = function () {
    const list = document.querySelector(".mentors-list");

    // Start scrolling when the window loads
    startScrolling();

    // Stop scrolling on mouse enter
    list.addEventListener("mouseenter", stopScrolling);

    // Resume scrolling on mouse leave
    list.addEventListener("mouseleave", startScrolling);
};

// Optional: Clean up when the component is removed from the DOM
window.addEventListener("beforeunload", stopScrolling);

export default {
    startScrolling,
    stopScrolling,
};