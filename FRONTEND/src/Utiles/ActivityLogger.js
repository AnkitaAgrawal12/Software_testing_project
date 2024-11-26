export const logActivity = (activity, additionalDetails = {}) => {
  try {
    // Retrieve existing activities from sessionStorage
    let activities = JSON.parse(sessionStorage.getItem('userActivities') || '[]');

    // Create a new activity object
    const newActivity = {
      activity,
      timestamp: new Date().toISOString(),
      additionalDetails, // Include any additional details about the activity
    };

    // Add the new activity to the list
    activities.push(newActivity);

    // Update sessionStorage
    sessionStorage.setItem('userActivities', JSON.stringify(activities));

    console.log('Activity logged:', newActivity);
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};

export const clearActivities = () => {
  try {
    sessionStorage.removeItem('userActivities');
    console.log('All user activities cleared');
  } catch (error) {
    console.error('Error clearing activities:', error);
  }
};

// Function to retrieve logged activities
export const getActivities = () => {
  try {
    const activities = JSON.parse(sessionStorage.getItem('userActivities') || '[]');
    console.log('Retrieved activities:', activities);
    return activities;
  } catch (error) {
    console.error('Error retrieving activities:', error);
    return [];
  }
};

// Example function to capture page load
export const logPageLoad = () => {
  const pageDetails = {
    url: window.location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
  };
  logActivity('Page loaded', pageDetails);
};

// Example function to capture user clicks
export const logClick = (event) => {
  const clickDetails = {
    element: event.target.tagName,
    id: event.target.id || null,
    className: event.target.className || null,
    coordinates: { x: event.clientX, y: event.clientY },
  };
  logActivity('Element clicked', clickDetails);
};

// Call this to initialize listeners
export const initializeSessionTracking = () => {
  // Log page load
  logPageLoad();

  // Add event listener for click tracking
  document.addEventListener('click', logClick);
};
