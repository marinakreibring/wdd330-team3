// Add class Alert and export it as default
export default class Alert {
    constructor(alertData) {
        this.alertData = alertData;
    }

    createAlert() {
        // Check if alertData exists and has items
        if (this.alertData && this.alertData.length > 0) {
            // Create the <section> element
            const section = document.createElement("section");
            section.className = "alert-list";

            // Loop through each alert in alertData
            this.alertData.forEach(alert => {
                const p = document.createElement("p");
                p.textContent = alert.message;
                p.style.backgroundColor = alert.background;
                p.style.color = alert.color;
                section.appendChild(p);
            });

            // Prepend the section to the <main> element
            const mainElement = document.querySelector("main");
            if (mainElement) {
                mainElement.prepend(section);
            }
        }
    }
}