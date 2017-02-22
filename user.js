 /*** STARTUP ***/
// Warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");
// Set start page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 3);



/*** GEOLOCATION ***/
// Disable location-aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
// Disable GeoIP-based search results
user_pref("browser.search.countryCode", "US"); // (hidden pref)
user_pref("browser.search.region", "US"); // (hidden pref)
// Disable using OS locale, force APP locale
user_pref("intl.locale.matchOS", false);
// Set APP local
user_pref("general.useragent.locale", "en-US");
// Disable geographically specific results/search engines eg: "browser.search.*.US"
// i.e ignore all of Mozilla's multiple deals with multiple engines in multiple locales
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
// Set language to match
user_pref("intl.accept_languages", "en-US, en");
// Enforce US English locale regardless of the system locale
user_pref("javascript.use_us_english_locale", true); // (hidden pref)



/*** QUIET FOX ***/
// Options>Advanced>Update>Never check for updates
user_pref("app.update.enabled", false);
// Options>Advanced>Update>Use a background service to install updates
user_pref("app.update.service.enabled", false);
// Ensure update information is not suppressed
user_pref("app.update.silent", false);
// Disable background update staging
user_pref("app.update.staging.enabled", false);
// Disable browser auto installing update when you do a manual check
user_pref("app.update.auto", false);
// Disable search update (Options>Advanced>Update>Automatically update: search engines)
user_pref("browser.search.update", false);
// Disable add-ons auto checking for new versions
user_pref("extensions.update.enabled", false);
// Disable add-ons auto update
user_pref("extensions.update.autoUpdateDefault", false);
// Disable add-on metadata updating
user_pref("extensions.getAddons.cache.enabled", false);
// Disable auto updating of personas (themes)
user_pref("lightweightThemes.update.enabled", false);
// Disable sending Flash crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable sending the URL of the website where a plugin crashed
user_pref("dom.ipc.plugins.reportCrashURL", false);
// Disable extension discovery
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// Set unifiedIsOptIn to make sure telemetry respects OptIn choice
user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
// Remove url of server telemetry pings are sent to
user_pref("toolkit.telemetry.server", "");
// Disable archiving pings locally
user_pref("toolkit.telemetry.archive.enabled", false);
// Disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", ""); // (hidden pref)
user_pref("datareporting.healthreport.service.enabled", false); // (hidden pref)
// Disable about:healthreport page
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
// Disable new data submission, master kill switch
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// Remove a telemetry clientID
user_pref("toolkit.telemetry.cachedClientID", "");
// Disable "Heartbeat" (Mozilla user rating telemetry)
user_pref("browser.selfsupport.enabled", false); // (hidden pref)
user_pref("browser.selfsupport.url", "");
// Disable experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// Disable Mozilla permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// Disable crash reports
user_pref("breakpad.reportURL", "");
// Disable sending of crash reports (FF44+)
user_pref("browser.tabs.crashReporting.sendReport", false);
// Disable new tab tile ads & preload & marketing junk
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// Disable "Snippets" (Mozilla content shown on about:home screen)
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// Disable "Pocket" (third party "save for later" service) & remove urls for good measure
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// Disable "social" integration
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.enabled", false); // (hidden pref)
// Disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// Disable FlyWeb, a set of APIs for advertising and discovering local-area web servers
user_pref("dom.flyweb.enabled", false);
// Disable sync
user_pref("services.sync.enabled", false); // (hidden pref)
// DON'T disable extension blocklist, but sanitize blocklist url
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
// Disable/enable various Kinto blocklist updates
user_pref("services.blocklist.update_enabled", true);
user_pref("services.blocklist.signing.enforced", true);
user_pref("services.blocklist.onecrl.collection", "certificates");
user_pref("services.blocklist.addons.collection", "addons");
user_pref("services.blocklist.plugins.collection", ""); 
user_pref("services.blocklist.gfx.collection", "");
// Disable "Block dangerous and deceptive content" 
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
// Disable "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.enabled", false);
// Disable "Warn me about unwanted and uncommon software"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
// Disable Google safebrowsing downloads, updates
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); 
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
// Disable mozilla safebrowsing downloads, updates
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
// Disable binaries NOT in local lists being checked by Google
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// Disable reporting URLs
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
// Hide the 'ignore this warning' on Safe Browsing warnings
user_pref("browser.safebrowsing.allowOverride", false);
// Disable tracking protection
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);
// Enable more Tracking Protection choices under Options>Privacy>Use Tracking Protection
user_pref("privacy.trackingprotection.ui.enabled", true);
// Disable SSL Error Reporting
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
// Disable Mozilla's blocklist for known Flash tracking/fingerprinting (48+)
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
// Disable link prefetching
user_pref("network.prefetch-next", false);
// Disable dns prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
// Disable Seer/Necko
user_pref("network.predictor.enabled", false);
// Disable more Necko/Captive Portal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // (FF52+?)
// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
// Disable pings (but enforce same host in case)
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
// Stop links launching Windows Store on Windows 8/8.1/10
user_pref("network.protocol-handler.external.ms-windows-store", false);
// Disable predictor / prefetching
user_pref("network.predictor.enable-prefetch", false);
// Disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false);
// Display all parts of the url
user_pref("browser.urlbar.trimURLs", false);
// Limit history leaks via enumeration
user_pref("browser.sessionhistory.max_entries", 6);
// Disable css querying page history - css history leak
user_pref("layout.css.visited_links_enabled", false);
// Disable displaying javascript in history URLs
user_pref("browser.urlbar.filter.javascript", true);
// Disable live search suggestions in the urlbar and toggle off the Opt-In prompt 
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
// Disable Jumplist (Windows7+)
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// Disable taskbar preview
user_pref("browser.taskbar.previews.enable", false);
// Disable one-off searches from the addressbar (FF51+)
user_pref("browser.urlbar.oneOffSearches", false);
// Disable search reset (about:searchreset) (FF51+)
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");



/*** PASSWORDS ***/
// Disable saving passwords
User_pref("signon.rememberSignons", true);
// Set how often Mozilla should ask for the master password
// 0=the first time, 1=every time it's needed, 2=every n minutes (as per the next pref)
user_pref("security.ask_for_password", 2);
// How often in minutes Mozilla should ask for the master password (see pref above)
user_pref("security.password_lifetime", 5);
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// Ignore websites' autocomplete="off"
user_pref("signon.storeWhenAutocompleteOff", true);
// Force warnings for logins on non-secure (non HTTPS) pages
user_pref("security.insecure_password.ui.enabled", true);
// When attempting to fix an entered URL, do not fix an entered password along with it
user_pref("browser.fixup.hide_user_pass", true);
// Disabling for now (FF51+)
user_pref("signon.formlessCapture.enabled", false);



/*** CACHE ***/
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// Disable disk caching of SSL pages
user_pref("browser.cache.disk_cache_ssl", false);
// Disable memory cache as well IF you're REALLY paranoid
user_pref("browser.cache.memory.enable", false);
// Disable offline cache
user_pref("browser.cache.offline.enable", false);
// Disable storing extra session data 0=all 1=http-only 2=none
user_pref("browser.sessionstore.privacy_level", 2);
 user_pref("browser.sessionstore.interval", 30000);
// DNS cache and expiration time (default 400 and 60 - same as TBB)
// user_pref("network.dnsCacheEntries", 400);
// user_pref("network.dnsCacheExpiration", 60);
// Disable randomized FF HTTP cache decay experiments
user_pref("browser.cache.frecency_experiment", -1);
// Disable permissions manager from writing to disk (requires restart)
// user_pref("permissions.memory_only", true); // (hidden pref)



/*** SSL / OCSP / CERTS / ENCRYPTION / HSTS/HPKP/HTTPS ***/
// Block rc4 fallback
user_pref("security.tls.unrestricted_rc4_fallback", false);
// Enable OCSP stapling
user_pref("security.ssl.enable_ocsp_stapling", true);
// Display warning (red padlock) for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Require certificate revocation check through OCSP protocol
user_pref("security.OCSP.require", false);
// Query OCSP responder servers to confirm current validity of certificates
user_pref("security.OCSP.enabled", 1);
// Enforce strict pinning
user_pref("security.cert_pinning.enforcement_level", 2);
// Disable 1024-DH Encryption
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// Disable or limit SHA-1
user_pref("security.pki.sha1_enforcement_level", 1);
// Disable SSL session tracking
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)
// Disable 3DES (effective key size < 128)
user_pref("security.ssl3.rsa_des_ede3_sha", false);
// Disable 128 bits
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// Disable Microsoft Family Safety cert (Windows 8.1)
user_pref("security.family_safety.mode", 0);



/*** FONTS ***/
// Allow icon fonts (glyphs) (FF41+)
user_pref("gfx.downloadable_fonts.enabled", true);
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// Disable woff2
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
// Remove special underline handling for a few fonts which you will probably never use.
user_pref("font.blacklist.underline_offset", "");
// Disable graphite which FF49 turned back on by default
user_pref("gfx.font_rendering.graphite.enabled", false);



/*** MEDIA / CAMERA / MIKE ***/
// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
// Disable video capability for WebRTC
user_pref("media.navigator.video.enabled", false);
// Improves the WebRTC IP Leak issue, as opposed to completely
user_pref("media.peerconnection.ice.default_address_only", true); // (FF41-FF50)
user_pref("media.peerconnection.ice.no_host", true); // (FF51+)
// Disable WebGL, force bare minimum feature set if used & disable WebGL extensions
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// Don't make WebGL debug info available to websites
user_pref("webgl.enable-debug-renderer-info", false);
// Two more webgl preferences (FF51+)
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
// Disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
// Disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// Disable camera stuff
user_pref("camera.control.face_detection.enabled", false);
// MSE (Media Source Extensions)
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.mp4.enabled", true);
user_pref("media.mediasource.webm.audio.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
// Disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// Disable camera image capture
user_pref("dom.imagecapture.enabled", false);
// Disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);



/*** SERVICE WORKERS ***/
// Disable workers API and service workers API
user_pref("dom.workers.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
// Disable service workers cache and cache storage
user_pref("dom.caches.enabled", false);
// Disable push notifications 
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
// Disable web/push notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);



/*** DOM & JAVASCRIPT ***/
// Disable website access to clipboard events/content
user_pref("dom.event.clipboardevents.enabled", false);
// Disable clipboard commands (cut/copy) from "non-priviledged" content
user_pref("dom.allow_cut_copy", false); // (hidden pref)
// Disable JS storing data permanently
user_pref("dom.indexedDB.enabled", false);
// Telephony
user_pref("dom.telephony.enabled", false);
// Disable User Timing API
user_pref("dom.enable_user_timing", false);
// Disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// Disable timing attacks - javascript performance fingerprinting
user_pref("dom.enable_performance", false);
// Disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// Max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// Limit events that can cause a popup
user_pref("dom.popup_allowed_events", "click dblclick");
// Disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// Disable full-screen API
user_pref("full-screen-api.enabled", false);
// Disable support for asm.js
user_pref("javascript.options.asmjs", false);
// Disable ArchiveAPI i.e reading content of archives
user_pref("dom.archivereader.enabled", false);
// Force FF to tell you if a website asks to store data for offline use
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.offline-apps.notify", true);



/*** 2500: HARDWARE FINGERPRINTING ***/
// Disable gamepad API - USB device ID enumeration
user_pref("dom.gamepad.enabled", false);
// Disable Battery Status API. Initially a Linux issue (high precision readout) that is now fixed.
user_pref("dom.battery.enabled", false);
// Disable giving away network info
user_pref("dom.netinfo.enabled", false);
// Disable virtual reality devices
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.osvr.enabled", false); // (FF49+)
user_pref("dom.vr.openvr.enabled", false); // (FF51+)
// Disable media device enumeration (FF29+)
user_pref("media.navigator.enabled", false);
// Disable video statistics - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// Disable keyboard fingerprinting (FF38+) (physical keyboards)
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// Disable graphics fingerprinting (the loss of hardware acceleration is negligible)
user_pref("gfx.direct2d.disabled", true);
user_pref("layers.acceleration.disabled", true);
// Disable touch events
user_pref("dom.w3c_touch_events.enabled", 0);
// Disable Web Audio API (FF51+)
user_pref("dom.webaudio.enabled", false);
// Disable MediaDevices change detection (FF51+) (enabled by default starting FF52+)
user_pref("media.ondevicechange.enabled", false);



/*** MISC - LEAKS / FINGERPRINTING / PRIVACY / SECURITY ***/
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// Delete temp files
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// Don't integrate activity into windows recent documents
user_pref("browser.download.manager.addToRecentDocs", false);
// Disable hiding mime types (Options>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// Disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
// Disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// Disable WebIDE to prevent remote debugging and add-on downloads
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// Disable SimpleServiceDiscovery - which can bypass proxy settings - eg Roku
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// Disable device sensor API - fingerprinting vector
user_pref("device.sensors.enabled", false);
// Disable SPDY as it can contain identifiers
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
// Disable http2 for now as well
user_pref("network.http.spdy.enabled.http2", false);
// Disable pdf.js as an option to preview PDFs within Firefox
user_pref("pdfjs.disabled", false);
// When using SOCKS have the proxy server do the DNS lookup - dns leak issue
user_pref("network.proxy.socks_remote_dns", true);
// Limit HTTP redirects (this does not control redirects with HTML meta tags or JS) Default is 20
user_pref("network.http.redirection-limit", 10);
// Disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// ensure you have a security delay when installing add-ons (milliseconds)
user_pref("security.dialog_enable_delay", 1000);
// Ensure Strict File Origin Policy on local files
user_pref("security.fileuri.strict_origin_policy", true);
// Enforce Subresource Integrity (SRI) (FF43+)
user_pref("security.sri.enable", true);
// Applications [non Tor protocol] SHOULD generate an error
user_pref("network.dns.blockDotOnion", true);
// Strip optional user agent token, default is false, included for completeness
user_pref("general.useragent.compatMode.firefox", false);
// Build ID
user_pref("general.buildID.override", "20100101"); // (hidden pref)
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// Disable remote JAR files being opened, regardless of content type
user_pref("network.jar.block-remote-files", true);
// Start the browser in e10s mode (48+)
   // After restarting the browser, you can check whether it's enabled by visiting
   // about:support and checking that "Multiprocess Windows" = 1
   // use force-enable and extensions.e10sblocksenabling if you have add-ons
user_pref("browser.tabs.remote.autostart", true);
user_pref("browser.tabs.remote.autostart.2", true); // (FF49+)
user_pref("browser.tabs.remote.force-enable", true); // (hidden pref)
user_pref("extensions.e10sBlocksEnabling", false);
// Control e10s number of container processes
user_pref("dom.ipc.processCount", 1);
// Enable console shim warnings for extensions that don't have the flag
user_pref("dom.ipc.shims.enabledWarnings", true);
// Enforce separate content process for file://URLs (FF53+?)
user_pref("browser.tabs.remote.separateFileUriProcess", true);
// Disable MathML (FF51+)
user_pref("mathml.disabled", true);
// Disable DeviceStorage API
user_pref("device.storage.enabled", false);
// Sanitize webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// Disable HTTP Alternative Services
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
// Disable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);
// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 1); // (hidden pref)
user_pref("extensions.autoDisableScopes", 15);
// Strip paths when sending URLs to PAC scripts (FF51+)
user_pref("network.proxy.autoconfig_url.include_path", false);
// Close bypassing of CSP via image mime types (FF51+)
user_pref("security.block_script_with_wrong_mime", true);
// Hide the contents of navigator.plugins and navigator.mimeTypes
user_pref("privacy.resistFingerprinting", true); // (hidden pref)


/*** COOKIES & DOM STORAGE ***/
// Ensure that third-party cookies (if enabled, see above pref) are session-only
user_pref("network.cookie.thirdparty.sessionOnly", true);
// Disable Storage API (FF51+) which gives sites' code the ability to find out how much space
user_pref("dom.storageManager.enabled", false);
// Clear localStorage and UUID when a WebExtension is uninstalled
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);



/*** PERSONAL SETTINGS ***/
// Disable annoying warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// Disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Disable backspace (0 = previous page, 1 = scroll up, 2 = do nothing)
user_pref("browser.backspace_action", 0);
// Disable autocopy default
user_pref("clipboard.autocopy", false);
// Open new windows in a new tab instead
user_pref("browser.link.open_newwindow", 3);
// Disable "Do you really want to leave this site?" popups
user_pref("dom.disable_beforeunload", true);
// Turn on APZ (Async Pan/Zoom) - requires e10s
user_pref("layers.async-pan-zoom.enabled", true);
// Enable ctrl-tab previews
user_pref("browser.ctrlTab.previews", true);
// Don't open "page/selection source" in a tab. 
user_pref("view_source.tab", false);
// Spellchecking: 0=none, 1-multi-line controls, 2=multi-line & single-line controls
user_pref("layout.spellcheckDefault", 1);
// Disable automatic "Work Offline" status
user_pref("network.manage-offline-status", false);
// Disable tab animation, speed things up a little
user_pref("browser.tabs.animate", false);
// Disable fullscreeen animation. Test using F11.
user_pref("browser.fullscreen.animate", false);
// SUbmenu in milliseconds.
user_pref("ui.submenuDelay", 75); // (hidden pref)
// Maximum number of daily bookmark backups to keep (default is 15)
user_pref("browser.bookmarks.max_backups", 2);
// Urlbar click behaviour (with defaults)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
// Tab behaviours (with defaults)
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
user_pref("browser.tabs.selectOwnerOnClose", true);
user_pref("browser.tabs.loadInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
// Hide recently bookmarked items (you still have the original bookmarks) (FF49+)
user_pref("browser.bookmarks.showRecentlyBookmarked", false);
// Disable automigrate, current default is false but may change (FF49+)
user_pref("browser.migrate.automigrate.enabled", false);
//Dark devtools
user_pref("devtools.theme", "dark");
