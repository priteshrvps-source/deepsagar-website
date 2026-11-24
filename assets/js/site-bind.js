
document.addEventListener("DOMContentLoaded", function () {

    function getConfigValue(path) {
        return path.split(".").reduce((obj, key) => obj?.[key], SITE_CONFIG);
    }

    document.querySelectorAll("[data-config-text]").forEach(element => {
        element.textContent = getConfigValue(element.dataset.configText) || "";
    });

    document.querySelectorAll("[data-config-href]").forEach(element => {
        const path = element.dataset.configHref;
        const value = getConfigValue(path);

        if (value) {
            element.href = value;
        }
    });

    document.querySelectorAll("[data-config-src]").forEach(element => {
        element.src = getConfigValue(element.dataset.configSrc) || "";
    });

    // WhatsApp floating button
    const whatsappButton = document.getElementById("whatsapp-float");
    const whatsappNumber = SITE_CONFIG.contact.whatsapp;

    if (whatsappButton && whatsappNumber) {
        whatsappButton.href = "https://wa.me/" + whatsappNumber.replace(/\D/g, "");
    }

    // Call floating button
    const callButton = document.getElementById("call-float");
    const phoneNumber = SITE_CONFIG.contact.phone;

    if (callButton && phoneNumber) {
        callButton.href = "tel:" + phoneNumber.replace(/\s/g, "");
    }

});
