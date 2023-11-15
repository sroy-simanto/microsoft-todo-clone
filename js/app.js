window.onload = function () {

    const appsButton = document.getElementById("apps-button");
    const appsDropDwn = document.getElementById("apps-dropdown");
    const appBtn = document.getElementById("appBtn");

    const settingsBtn = document.getElementById("settings-btn");
    const helpBtn = document.getElementById("help-btn");
    const announceBtn = document.getElementById("announce-btn");
    const avatarBtn = document.getElementById("avatar-btn");
    const settingsDrpDwn = document.getElementById("settings-drpdwn");
    const helpDrpDwn = document.getElementById("help-drpdwn");
    const announceDrpDwn = document.getElementById("announce-drpdwn");
    const avatarDrpDwn = document.getElementById("avatar-drpdwn");

    appsButton.addEventListener('click', function(){
        appsDropDwn.classList.add('active');
    });

    appBtn.addEventListener('click', function() {
        appsDropDwn.classList.remove('active')
    });

    settingsBtn.addEventListener('click', function() {
        settingsDrpDwn.classList.toggle('active')
    });

    helpBtn.addEventListener('click', function() {
        helpDrpDwn.classList.toggle('active')
    });

    announceBtn.addEventListener('click', function() {
        announceDrpDwn.classList.toggle('active')
    });

    avatarBtn.addEventListener('click', function() {
        avatarDrpDwn.classList.toggle('active')
    });

}