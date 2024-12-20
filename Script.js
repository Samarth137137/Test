clevertap.init("Z44-Z4K-K65Z"); // Replace with your CleverTap Account ID

document.getElementById("login-button").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = new Date(document.getElementById("dob").value);

    clevertap.onUserLogin.push({
        "Site": { Name: name, Email: email, Phone: phone, DOB: dob }
    });
    alert("User logged in!");
});

document.getElementById("profile-push-button").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = new Date(document.getElementById("dob").value);

    clevertap.profile.push({
        "Site": { Name: name, Email: email, Phone: phone, DOB: dob }
    });
    alert("Profile updated!");
});

document.getElementById("ask-push-button").addEventListener("click", () => {
    clevertap.notifications.push({
        titleText: 'Would you like to receive Push Notifications?',
        bodyText: 'We promise to only send you relevant content and updates.',
        okButtonText: 'Sign me up!',
        rejectButtonText: 'No thanks',
        askAgainTimeInSeconds: 5,
        okButtonColor: '#f28046'
    });
});

document.getElementById("event-button").addEventListener("click", () => {
    clevertap.event.push("Test Event", {
        stringProp: "Sample String",
        numberProp: 42,
        floatProp: 3.14,
        dateTimeProp: new Date()
    });
    alert("Event raised!");
});