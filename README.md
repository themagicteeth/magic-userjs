# Options
These are highly subjective and are the preferences that I use, feel free to change any of them to suit your needs. 

To get to the options click the hamburger menu in the top right and select Options:

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

## Privacy and Security
### History
I choose to `Use custom settings for history` and I `Never` `Accept third-party cookies`.

### Security
I uncheck all possible boxes here, and I start from the bottom and go up as if you check the top first the bottom ones will be unable to be unchecked. Starting with `Warn you about unwanted and uncommon software`, then, `Block dangerous downloads` and finally `Block dangerous and deceptive content`.    
    
![Custom Settings](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/custom-history.PNG)
![No Third Party Cookies](https://github.com/themagicteeth/magic-userjs/blob/master/prefs/never-third.PNG)


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

# Search Engine
By default Firefox uses Yahoo, and comes with a few other search engines such as Google and DuckDuckGo. I try to avoid Google and dislike DuckDuckGo. I use searx for my default search engine, the following will guide you through the process of adding a new search engine to Firefox and setting it as the default.

## Adding a new engine
Navigate to searx.me. **Be sure that you have the Firefox search bar on your toolbar.** Click the small magnifying glass with the green plus sign on it and click `Add searx.me`.

## A new default
Click the `Change search settings` option on the bottom of that same menu. This will bring you to the search preferences page. Under Default Search Engine open the dropdown and select `searx.me`.

## Allowing searx with addons
We can make searx even better by changing some of the preferences. But first we must allow searx in uMatrix and choose to keep the cookies so that searx can store our preferences.    

First whitelist the cookies by clicking the CookieAuto Delete icon and selecting `Never Clean (WhiteList)`:

The click the uMatrix grid and make it look like the picture (all images get whitelisted so that during an image search they will all show as they are not all 1st party images):

## Preferences for searx
In the top right corner click `preferences`:

### General
On the `General` tab the only thing I change is that I enable the **Image proxy**:

### Engines
This tab has more search engines that can be added. I added **reddit**, **startpage**, and **ddg definitions**, you can add as many as you want:

### Plugins
There are a few neat plugins available in this tab. I chose to enable **DOAI rewrite**, and **Infinite scroll**, but feel free to add more:


