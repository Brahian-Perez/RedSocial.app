import React from 'react'
import GeneralOption from './GeneralOption'
import PrivacyOption from './PrivacyOption'
import NotificationOption from './NotificationOption'

function AccountConfig() {

    const openTab = (evt, tabName) => {
        var i, x, tablinks;
        x = document.getElementsByClassName("tabcontent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-theme-d1", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " w3-theme-d1";
    }

    return (




        <div>

            <div className="w3-container w3-content" style={{ maxWidth: '1000px', marginTop: '80px' }}>
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding-16 w3-theme-d2">
                        <h2><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
                    </div>



                    <div className="w3-bar w3-theme-l4">
                        <button className="w3-bar-item w3-button tablink w3-theme-d1" onClick={(e) => openTab(e, 'General')}>General</button>
                        <button className="w3-bar-item w3-button tablink" onClick={(e) => openTab(e, 'Privacidad')}>Privacidad</button>
                        <button className="w3-bar-item w3-button tablink" onClick={(e) => openTab(e, 'Notificaciones')}>Notificaciones</button>
                    </div>


                    

                    <div className="tabcontent" id="General" style={{ display: 'block' }}>
                        <GeneralOption id="general" />
                    </div>
                    <div className="tabcontent" id="Privacidad" style={{ display: 'none' }}>
                        <PrivacyOption id="privacy" />
                    </div>
                    <div className="tabcontent" id="Notificaciones" style={{ display: 'none' }}>
                        <NotificationOption id="notifications" />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default AccountConfig