import Alert from './Alert.js';

// Fetch the alert data from the alerts.json file
fetch('./alerts.json')
    .then(response => response.json())
    .then(data => {
        // Create an instance of Alert and generate the alerts
        const alert = new Alert(data);
        alert.createAlert();
    })
    .catch(error => {
        console.error('Error fetching alerts:', error);
    });