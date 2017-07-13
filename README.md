# Options
These are highly subjective and are the preferences that I use, feel free to change any of them to suit your needs. 

To get to the options click the hamburger menu in the top right and select Options:     
    
![Options in menu](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/options.PNG)

## General
### Startup
I use Firefox as my default but I still disable `Always check if Nightly is your default browser`.

I like to have my session restored after I close the window so I choose `Show your windows and tabs from last time` from the dropdown.    

![Startup Prefs](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/prefs1.PNG)

### Default Search Engine
Later we will setup a default search engine not in this list. For now I delete all the defaults (Except for Google) by selecting each one and hitting the *DELETE* key on my keyboard. I prefer to add them myself as Mozilla will put in affiliate links in some of their search engines.

### Tabs
I always enable `Ctrl+Tab cycles through tabs in recently used order`, it is a pretty convenient feature.

### Accessibility
I enable `Warn you when websites try to redirect or reload the page` as a security measure. It is good to know if you are being redirected or thepage is reloading.

![Tabs and accessibility prefs](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/prefs2.PNG)

## Privacy and Security
### History
I choose to `Use custom settings for history` and I `Never` `Accept third-party cookies`.   
    
![Custom Settings](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/custom-history.PNG)
![No Third Party Cookies](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/never-third.PNG)

### Security
I uncheck all possible boxes here, and I start from the bottom and go up as if you check the top first the bottom ones will be unable to be unchecked. Starting with `Warn you about unwanted and uncommon software`, then, `Block dangerous downloads` and finally `Block dangerous and deceptive content`.    
    
![Disable safe browsing](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/security.PNG)

### DRM Content
I uncheck the `Play DRM content` box on principle (also I do not watch Netflix or play video games in my browser). If you watch Netflix / hulu you may want to keep this enabled.   
    
![Disable DRM](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/drm.PNG)

### Cached Web Content
I check `Override automatic cache management` and then `Limit cache to` 0MB `of space`. Cache can be a privacy issue. In addition as a Web Developer it occasionally messed things up for me.   
    
![No cached content](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/cache.PNG) 
       
### Reports
#### Telemetry
I start at the bottom and work up to ensure all boxes are unchecked, first deselecting `Share Additional Data (i.e., Telemetry)` and then `Enable Nightly Health Report`. 

#### Crash Reports
`Allow Nightly to send backlogged crash reports on your behalf` is unchecked.   
    
![No cached content](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/reports.PNG) 


## Updates
I disable all automatic updates and update checking. I prefer to check for updates myself and also use Linux so it updates auotmatically when I update my computer. Keep in mind that if this is disabled you will need to manually check to stay up to date with most recent version.  
    
![No automatic updates](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/updates.PNG) 

# Addons

## Disabling automatic updates
, I disable automatic addon updates. To do this click on the hamburger menu in the top right of the browser and select Add-ons (or press Ctrl+Shift+A). Once on the page click the gear in the top right next to search box and uncheck `Update Add-ons Automatically`:     
        
![Get to addons](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/addons.PNG) 
![No automatic updates](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/addons-auto.PNG) 

## Install addons
### Violentmonkey – Gerald
Violentmonkey provides userscripts support for browsers.
No configuration needed yet, we will add a few scripts later on.

### Link Cleaner – Erwan Ameil
Clean URLs that are about to be visited:
Removes utm_* parameters, tracking parameters, skips redirect pages (on certain main websites).
Simply download the addon, no configuration necessary.

### URL Tracking Protector - G/R – Smartfon
No configuration needed, just install. Note this is also available as two separate userscripts if that is preferred.

### Decentraleyes – Thomas Rientjes
Protects you against tracking through "free", centralized, content delivery. It prevents a lot of requests from reaching networks like Google Hosted Libraries, and serves local files to keep sites from breaking. Complements regular content blockers.
Install the addon. There are no configuration steps needed, except to add the rules (found here) to uMatrix, which will be covered when installing uMatrix.

### Don't touch my tabs! (rel=noopener) – RandomDomain.Name
Prevent tabs opened by a hyperlink from hijacking the previous tab by adding the rel=noopener attribute to all hyperlinks (excluding same-domain hyperlinks).
Just install the addon, no further configuration.

### MixedContentHunter - _ghost_
Resloves some mixedcontent blocking. Attempts to fetch blocked insecure resources of https.
Download the addon and then navigate to: about:config?filter=security.mixed_content.block_display_content 
Modify it to look like this (set it to true):
 

### Cookie AutoDelete - Kenny Do
Control your cookies! This WebExtension is inspired by Self Destructing Cookies. When a tab closes, any cookies not being used are automatically deleted. Whitelist the ones you trust while deleting the rest.
Once installed click the newly added toolbar icon and click the gear in the top right corner to get to the settings page. Once on the settings page modify the settings to match the picture:
  

The two settings enable active mode and set the amount of time between cookie cleanings. It is set to clean cookies for no longer open tabs every 15 seconds, default is 1 minute. The next setting changed is to not display notifications for cookies cleaned, it can be nice but I feel like it can become annoying after a while.


### Smart HTTPS (revived) – ilGur
Automatically changes HTTP addresses to the secure HTTPS, and if loading encounters error, reverts it back to HTTP.
Occasionally this addon will break sites. In that case simply click the blue lock and select the red unlocked lock that says ‘Back to HTTP’ and the site will stop trying to connect over HTTP. It will also add it to the whitelist so it will not be connected to over HTTPS again. Example below:
  
You can also manually add entries by going to settings page or adjust the amount of pages saved for editing (clicking the ‘Open Settings Page’ in the picture referenced before):
The highlighted number is the amount of entries to show here, for more privacy it may be set to 0 or left at 50 for convenience of being able to see recently accessed sites. The bottom two entries are how to whitelist or blacklist sites manually. Simply enter the domain name of the website you wish to add and click the blue plus button.


### uBlock Origin – Raymond Hill
Once installed click the red shield and select the two gears to go to the settings page. On the first tab (Settings) check the third box under privacy regarding WebRTC. Then go to the ‘3rd-part filters’ tab and make your list look the the picture:

  

Once finished click the yellowish ‘Apply Changes’ button in the top right, and then the ‘Update now’ button in the top left. 
•	The lists that were disabled were disabled because they are also used in uMatrix, so it is redundant to have them here. 
•	uBlock Protector is only compatible with Chrome, so it is not checked. 
•	All of the Easy lists and Fanboy lists are merged in the Merged Ultimate list, so the individual ones can be disabled.

Next we will add some custom filters from filterlists.com. Once on the website on the front page there should be a ‘uBlock Filters Plus’ list displayed. Click the ‘Add’ button and then click ‘OK’ on the resulting popup:
  

Nest search for: I don’t care about cookies and repeat the process above:

 

Finally go here to get the newer and improved Anti-Adblock Killer Continued. Just click the text that says ‘uBlock Origin’ and click ‘OK’ in the resulting popup. 

Now when you look at the very bottom of the uBlock 3rd party filters tab you should see this:
 
To complete the setup of AntiAdBlock Killer Continued go here and scroll down to ‘Step 2: Install Userscript’, click the first bullet for using uBlock Origin:
 

This will take you to a page (if you have Violentmonkey installed) that should look like the picture below. Click the ‘Confirm Installation’ button in the top right corner to install the script.

 

### uMatrix – Raymond Hill
Download the addon and once installed click the grid added to the toolbar and click the black bar on top of the grid.
 

The initial settings page I always check collapse placeholder because I think it looks nicer:

 
The privacy tab I choose not to delete non-blocked cookied because I would like to keep the cookies that I whitelist with CookieAuto Delete. I also do not choose to spoof the user agent or require strict HTTPS (already did that in about:config).

 
Hosts files tab should stay the same but be sure to click the yellowish Update now button. I also check the Auto-update hosts files box.

 

On the My rules tab we will need to whitelist the domains that are being served with Decentraleyes. Click Edit, and then paste the following after the last line:

* ajax.aspnetcdn.com script allow
* ajax.googleapis.com script allow
* ajax.microsoft.com script allow
* cdn.jsdelivr.net script allow
* cdnjs.cloudflare.com script allow
* code.jquery.com script allow
* lib.sinaapp.com script allow
* libs.baidu.com script allow
* upcdn.b0.upaiyun.com script allow
* yandex.st script allow
* yastatic.net script allow

It will look like the picture below:
 

Then click Save, and then Commit to add it to your permanent ruleset. It will look like this after hitting save, once you commit the rules they will be permanent

:


Finally I configure uMatrix by only allowing CSS and Images on first party sites and blocking everything else, click the blue box in the top left and select the *. This will change it so that the changes are applied globally instead of per domain.

 
Once in the global scope the blue bar should turn black. I then set it to look like this:
 

To save the settings click the black lock in the top white bar. Then be sure to go back to domain settings by click the black bar and then selecting the website name beneath the star.
 

The results should look like this on the domain scope:
 


# Search Engine
By default Firefox uses Yahoo, and comes with a few other search engines such as Google and DuckDuckGo. I try to avoid Google and dislike DuckDuckGo. I use searx for my default search engine, the following will guide you through the process of adding a new search engine to Firefox and setting it as the default.

## Adding a new engine
Navigate to searx.me. **Be sure that you have the Firefox search bar on your toolbar.** Click the small magnifying glass with the green plus sign on it and click `Add searx.me`.   
    
![Add searx.me](https://github.com/themagicteeth/magic-userjs/blob/master/searx/searx.PNG) 
 
## A new default
Click the `Change search settings` option on the bottom of that same menu. This will bring you to the search preferences page. Under Default Search Engine open the dropdown and select `searx.me`.     
    
![Set as default](https://github.com/themagicteeth/magic-userjs/blob/master/searx/default.PNG)

## Allowing searx with addons
We can make searx even better by changing some of the preferences. But first we must allow searx in uMatrix and choose to keep the cookies so that searx can store our preferences.    

First whitelist the cookies by clicking the CookieAuto Delete icon and selecting `Never Clean (WhiteList)`:     
    
![WhiteList cookies](https://github.com/themagicteeth/magic-userjs/blob/master/searx/whitelistsearx.PNG)

The click the uMatrix grid and make it look like the picture (all images get whitelisted so that during an image search they will all show as they are not all 1st party images):       
        
![Allow in uMatrix](https://github.com/themagicteeth/magic-userjs/blob/master/searx/searx-umatrix.PNG)

## Preferences for searx
In the top right corner click `preferences`:    
    
![Get to preferences](https://github.com/themagicteeth/magic-userjs/blob/master/searx/prefs.PNG)

### General
On the `General` tab the only thing I change is that I enable the **Image proxy**:  
    
![General prefs](https://github.com/themagicteeth/magic-userjs/blob/master/searx/searx-gen.PNG)

### Engines
This tab has more search engines that can be added. I added **reddit**, **startpage**, and **ddg definitions**, you can add as many as you want:    
    
![More engines](https://github.com/themagicteeth/magic-userjs/blob/master/searx/searx-prefs.PNG)

### Plugins
There are a few neat plugins available in this tab. I chose to enable **DOAI rewrite**, and **Infinite scroll**, but feel free to add more:
    
![Plugins for searx](https://github.com/themagicteeth/magic-userjs/blob/master/searx/searx-plugins.PNG)

