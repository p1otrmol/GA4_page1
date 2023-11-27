window.dataLayer = window.dataLayer || [];
    	function gtag(){dataLayer.push(arguments);}

        function setConsent(consent) {
            const consentMode = {
                'functionality_storage': consent.necessary ? 'granted' : 'denied',
                'security_storage': consent.necessary ? 'granted' : 'denied',
                'ad_storage': consent.marketing ? 'granted' : 'denied',
                'analytics_storage': consent.analytics ? 'granted' : 'denied',
                'personalization': consent.preferences ? 'granted' : 'denied',
            };
            gtag('consent', 'update', consent);  
            localStorage.setItem('consentMode', JSON.stringify(consentMode));
            hideBanner();
        }

        function hideBanner() {
            document.getElementById('cookieConsentBanner').style.display = 'none';
        }

        function initializeConsent() {
            if (localStorage.getItem('consentMode') === null) {
                document.getElementById('btnAcceptAll').addEventListener('click', function () {
                    setConsent({
                        necessary: true,
                        analytics: true,
                        preferences: true,
                        marketing: true
                    });
                });
                document.getElementById('btnAcceptSelection').addEventListener('click', function () {
                    setConsent({
                        necessary: true,
                        analytics: document.getElementById('consentAnalytics').checked,
                        preferences: document.getElementById('consentPreferences').checked,
                        marketing: document.getElementById('consentMarketing').checked
                    });
                });
                document.getElementById('btnRejectAll').addEventListener('click', function () {
                    setConsent({
                        necessary: false,
                        analytics: false,
                        preferences: false,
                        marketing: false
                    });
                });
                document.getElementById('cookieConsentBanner').style.display = 'block';
            }
        }