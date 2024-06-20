/*!
* screenfull
* v5.0.2 - 2020-02-13
* (c) Sindre Sorhus; MIT License
*/

!function(){"use strict";var u="undefined"!=typeof window&&void 0!==window.document?window.document:{},e="undefined"!=typeof module&&module.exports,c=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,l=n.length,t={};r<l;r++)if((e=n[r])&&e[1]in u){for(r=0;r<e.length;r++)t[n[0][r]]=e[r];return t}return!1}(),l={change:c.fullscreenchange,error:c.fullscreenerror},n={request:function(t){return new Promise(function(e,n){var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var l=(t=t||u.documentElement)[c.requestFullscreen]();l instanceof Promise&&l.then(r).catch(n)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var l=u[c.exitFullscreen]();l instanceof Promise&&l.then(r).catch(n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=l[e];r&&u.addEventListener(r,n,!1)},off:function(e,n){var r=l[e];r&&u.removeEventListener(r,n,!1)},raw:c};c?(Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(u[c.fullscreenElement])}},element:{enumerable:!0,get:function(){return u[c.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(u[c.fullscreenEnabled])}}}),e?module.exports=n:window.screenfull=n):e?module.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}();
function addClass(element, name) {
  removeClass(element, name);
  element.setAttribute("class", element.className + " " + name);
}
function removeClass(element, name) {
  element.setAttribute("class", element.className.replace(' ' + name, '').replace(name, ''));
}
function parseURL(url) {
  if (!url) {
    return null;
  }
  var a=document.createElement('a');
  a.href=url;
  return a.hostname;
}
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}
function setCookie(cname, cvalue) {
  // delete old cookies
  document.cookie = cname + "=;max-age=0;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/e";
  
  var cookie = cname + "=" + cvalue + ";expires=Sun, 1 Apr 2069 00:00:00 GMT;path=/"
  
  document.cookie = cookie;
}
function getCookie(cname) {
  try {
    if (!document.cookie) {
      return null
    }
  } catch(e) {
    return null
  }
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}
var debugLog = "";
function log(message) {
  if (typeof console == "object") {
    console.log(message);
    debugLog = debugLog + message + "\n";
  }
}
function findElPosition(el) {
  var box;
  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }
  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }
  var docEl = document.documentElement;
  var body = document.body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}
function getPointerPosition(el, e) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;
  var boxY = box.top;
  var boxX = box.left;
  var pageY = e.pageY;
  var pageX = e.pageX;
  if (e.changedTouches) {
    pageX = e.changedTouches[0].pageX;
    pageY = e.changedTouches[0].pageY;
  }
  position.y = Math.max(0, Math.min(1, ((boxY - pageY) + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
  return position;
}
function calculateDistance(e, elem, vertical) {
  var position = getPointerPosition(elem, e);
  if (vertical) {
    return position.y;
  }
  return position.x;
}

function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  return false;
}
function isAndroid() {
  if( /Android/i.test(navigator.userAgent) ) {
    return true;
  }
  return false;
}

function getPageURL() {
  if (top !== self) {
    if (document.referrer) {
      return document.referrer
    }
    const ancestors = window.location.ancestorOrigins
    if (ancestors) {
      return ancestors[ancestors.length - 1]
    }
    return ''
  } else {
    return window.location.href
  }
}

// set up session 
var session = getCookie('session');

window.STM_TRANSPORT = window.STM_TRANSPORT || []
window.STM_PRELOADED_SOCKET = window.STM_PRELOADED_SOCKET || new WebSocket("wss://socket.streamable.com");
function userInteractionRequired() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
  var safari   = navigator.userAgent.indexOf("Safari") > -1;
  if ((chrome) && (safari)) safari = false;
  return safari || iOS
}
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    log('Copying text command was ' + msg);
  } catch (err) {
    log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

VideoPlayer = function(video, player, id, options) {
  this.options = options || {};
  this.video = video;
  this.player = player;
  this.id = id;
  this.onTimeUpdate = this.onTimeUpdate.bind(this)
  this.onProgress = this.onProgress.bind(this)
  this.update_player_controls = this.update_player_controls.bind(this)
  this.update_player_controls_loop = this.update_player_controls_loop.bind(this)
  this.update_player_progress = this.update_player_progress.bind(this)
  this.bufferCheckInterval = null;
  this.client_data = {};
  this.onFullScreenChange = this.onFullScreenChange.bind(this)
  this.session_id = session || Math.random().toString(36).substr(2, 16);
  this.saveVolume = true
  this.isMobile = isMobile()
  this.isAndroid = isAndroid()
};

VideoPlayer.prototype.setupMediaSession = function() {
  try {
    const artwork = []
    if (this.video.poster_url) {
      artwork.push({ src: this.video.poster_url,   sizes: `${this.video.width}x${this.video.height}`, type: 'image/jpg' })
    }
    if (this.video.thumbnail_url) {
      artwork.push({ src: this.video.thumbnail_url,   sizes: `${this.video.width}x${this.video.height}`, type: 'image/jpg' })
    }
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: this.video.title || 'Streamable Video',
        artwork: artwork
      });
    }
  } catch (e) {
    console.log("Failed to set up media session.", e)
  }
}

VideoPlayer.prototype.recordStat = function(name, data) {
  data = data || {};
  data.type = name;
  data.shortcode = this.video.shortcode;
  data.timestamp = Math.floor(Date.now() / 1000);
  data.id = this.session_id; //cookie loaded in common 
  data.referrer = encodeURIComponent(document.referrer)
  data.embedid = this.id
  for (var a in this.client_data ) { data[a] = this.client_data[a]; }
  data.ad = data.ad ? data.ad.tag : null
  window.STM_TRANSPORT.push(data)
}

VideoPlayer.prototype.onFullScreenChange = function () {
  if (screenfull.isFullscreen) {
    addClass(this.playerDiv, "fullscreen");
  } else {
    removeClass(this.playerDiv, "fullscreen");
  }
};

VideoPlayer.prototype.initialize = function() {
  var self = this;
  var video = this.video;
  this.scrubTime = null
  var files = video.files;
  var bufferingDetected = null;
  var player = this.player;
  var playerDiv = this.player.parentNode;
  this.playerDiv = playerDiv;
  this.spinner = playerDiv.getElementsByClassName('player-spinner')[0];
  this.paused = !this.started
  this.lastTime = null;
  this.lastReportedLoop = -1;
  this.lastProgressReport = 0;
  this.loops = 0;
  this.settingsOpen = false;
  document.body.addEventListener("keyup", this.onKeyPress.bind(this));
  
  this.playerDiv.addEventListener("fullscreenchange", this.onFullScreenChange)

  this.setupMediaSession();

  var playPauseInput = document.getElementById('player-play-pause-button-input')

  if (player.hasAttribute('autoplay')) {
    //force autoplay
    this.play();
  }

  if (userInteractionRequired()) {
    removeClass(playerDiv, "playing");
  }

  var playing = false;
  player.onpause = function() {
    if (self.scrubTime) return;
    if (playPauseInput) {
      playPauseInput.checked = true;
    }
  }
  player.onplay = function() {
    if (playPauseInput) {
      playPauseInput.checked = false;
    }

    if (playOverlay) {
      playOverlay.style.display = "none"
    }

    playing = true;
    self.paused_ = false
    self.started = true
  };
  player.oncanplay = function() {
    if (self.spinner) {
      self.spinner.style.display = 'none';
    }
    
    setTimeout(function() {
      if (!playing && !self.paused) {
        log("Video can play, forcing play")
        onUserActivity()
        self.play()
      }
    }, 100);
  };  

  var menu = document.getElementById('context-menu');
  menu.addEventListener("mousedown", function(e) {
    e.stopPropagation();
  });

  var closeContextMenu = function(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    menu.style.display = "none";
    self.player.removeEventListener("mousedown", closeContextMenu);
    document.removeEventListener("mousedown", closeContextMenu);
  }

  var downloadButton = document.getElementById("download")
  if (downloadButton) {
    downloadButton.addEventListener("click", function() {
      closeContextMenu();
    })
  }

  var copyUrlButton = document.getElementById("copyurl")
  if (copyUrlButton) {
    copyUrlButton.addEventListener("click", function() {
      var quality = getQueryVariable('quality');
      if (quality) {
        copyTextToClipboard("https://streamable.com/" + self.video.shortcode + "?quality=" + quality);
      } else {
        copyTextToClipboard("https://streamable.com/" + self.video.shortcode);
      }
      closeContextMenu();
    })
  }

  var copyEmbedButton = document.getElementById("copyembed")
  if (copyEmbedButton) {
    copyEmbedButton.addEventListener("click", function() {
      self.copyEmbedCodeToClipboard();
      closeContextMenu();
    })
  }

  var speedButtons = document.getElementsByClassName('speed-button');
  for (var i = 0; i < speedButtons.length; i++) {
    var speedButton = speedButtons[i];
    speedButton.addEventListener("click", function(e) {
      var speed = parseFloat(e.target.getAttribute("data-speed"))
      player.playbackRate = speed
      for (var x = 0; x < speedButtons.length; x++) {
        var sb2 = speedButtons[x];
        removeClass(sb2, "active");
      }
      addClass(e.target, "active");
      player.play()
    })
  }

  var downloadButtons = document.getElementsByClassName('download-button');
  for (var i = 0; i < downloadButtons.length; i++) {
    var downloadButton = downloadButtons[i];
    downloadButton.addEventListener("click", function(e) {
      var url = e.target.getAttribute("data-url")
      if (!url) {
        url = 'https://ajax.streamable.com/videos/' + video.shortcode + '/download'
      }
      window.open(url, 'Download')
    })
  }

  var fullScreenButton = playerDiv.getElementsByClassName('player-fullscreen-button')[0];
  var settingsButton = playerDiv.getElementsByClassName('player-settings-button')[0];
  var settingsOverlay = playerDiv.getElementsByClassName('player-settings-overlay')[0];
  var playButton = document.getElementById('play-button')
  var playOverlay = document.getElementById('play-overlay')

  if (this.isMobile && this.options.noControls) {
    player.addEventListener('click', function(){
      if (player.paused) {
        this.play();
      } else {
        this.pause();
      }
    });  
  }

  playerDiv.onmousemove = function(e) {
    self.mouseOverControls = playerDiv.clientHeight - e.clientY < 50
  }

  var hideSettings = function() {
    if (self.settingsOpen) {
      self.settingsOpen = false;
      removeClass(settingsButton, 'open')
      settingsOverlay.style.display = "none";
      return true;
    }
    return false;
  }

  player.addEventListener('play', function(){
    if (playOverlay) {
      playOverlay.style.display = "none";
    }
  });

  if (playButton) {
    playOverlay.onclick = function(e) {
      if (playOverlay) {
        playOverlay.style.display = "none"
      }
      self.play();
      e.stopPropagation()
    }
    playButton.onclick = function(e) {
      if (playOverlay) {
        playOverlay.style.display = "none"
      }
      self.play();
      e.stopPropagation()
    }
    playButton.onmousemove = function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  player.addEventListener("ended", function() {
    console.log("Play ended")
    if (playOverlay) {
      playOverlay.style.display = "block"
    }
  })
  
  this.player.addEventListener("ended", function(e) {
    removeClass(playerDiv, "user-activity");
  });

  var showContextMenu = function(e) {
    if (!self.isMobile) {
      self.player.addEventListener("mousedown", closeContextMenu);
      document.addEventListener("mousedown", closeContextMenu);
      
      if (e.offsetX + 200 > self.player.offsetWidth) {
        menu.style.left = e.offsetX - 200 + "px";
      } else {
        menu.style.left = e.offsetX + "px";
      }
      if (e.offsetY + 150 > self.player.offsetHeight) {
        menu.style.top = e.offsetY - 150 + "px";
      } else {
        menu.style.top = e.offsetY + "px";
      }

      menu.style.display = "block";
    }
    
    e.preventDefault();
    return false;
  }

  if (playButton) {
    playButton.addEventListener('contextmenu', showContextMenu);
  }
  this.player.addEventListener('contextmenu', showContextMenu);

  player.addEventListener("timeupdate", self.onTimeUpdate);
  player.addEventListener("progress", self.onProgress);
  player.addEventListener("canplaythrough", self.onProgress);

  var vol = parseFloat(getCookie("volume") || .51);
  var muted = getCookie("muted") || "false";

  if (vol) {
    player.volume = vol;
  }
  if (muted == "true") {
    player.muted = muted;
  }

  player.addEventListener("error", function(e) {
    var code = -1;
    if (e.target.error && e.target.error.code) {
      code = e.target.error.code;
    }
    self.recordStat("error", {
      code: code,
      src: e.target.src,
      networkState: player.networkState,
      currentTime: player.currentTime,
      readyState: player.readyState,
      type: 'video'
    })
  });
  var loadedMetadata = function() {
    if (self.scrubTime != null) {
      player.currentTime = self.scrubTime;
      self.scrubTime = null;
    }
    var time = getQueryVariable('t');
    if (time) {
      player.currentTime = time;
    }

    if (!self.isMobile) {
      window.requestAnimationFrame(self.update_player_progress);
    }
  }
  if (player.duration) {
    loadedMetadata()
  } else {
    player.addEventListener("loadedmetadata", loadedMetadata);
  }
  player.onvolumechange = function() {
    if (player.hasAttribute("muted")) {
      return;
    }

    if (self.saveVolume) {
      if (!player.muted) {
        setCookie("volume", player.volume);
      }
      setCookie("muted", player.muted);
    }

    self.update_player_controls();
  };

  var activityTimeout = null;
  var setHideTimeout = function(duration) {
    duration = duration || 2000;
    activityTimeout = setTimeout(function() {
      if (self.settingsOpen || self.mouseOverControls) {
        setHideTimeout();
        return;
      }
      if (self.scrubTime != null) {
        return;
      }
      removeClass(playerDiv, "user-activity");
    }, duration)
  }
  var onUserActivity = function(e) {
    if (!self.started) {
      return
    }
    if (activityTimeout) {
      clearTimeout(activityTimeout);
    }

    if (self.options.noControls) {
      return
    }
    addClass(playerDiv, "user-activity");
    setHideTimeout();
  }
  
  setHideTimeout();

  var watermarkShown = false;
  player.addEventListener("playing", function(e) {
    canShowBuffering = true;
    if (!watermarkShown) {
      
      var watermarkContainers = playerDiv.getElementsByClassName('watermark');
      for (var i = 0; i < watermarkContainers.length; i++) {
        var watermark = watermarkContainers[i]

        if (watermark.getAttribute('data-animated')) {
          watermark.style.right = '-120px'
          setTimeout(function() {
            watermark.style.visibility = 'visible'
            var right = watermark.getAttribute('data-right');
            if (!right) {
              right = '10px';
            }
            watermark.style.right = right;
          }, 500);
        } else {
          watermark.style.visibility = 'visible'
        }
      }
      watermarkShown = true;
    }
  })


  if (this.isMobile) {
    if (this.isAndroid) {
      var settingsButtonMobile = playerDiv.getElementsByClassName('player-settings-button-mobile')[0];
      var settingsOverlayMobile = playerDiv.getElementsByClassName('player-settings-overlay-mobile')[0];
      var settingsButtonMobileClose = playerDiv.getElementsByClassName('player-settings-button-mobile-close')[0];
      playerDiv.addEventListener("touchstart", onUserActivity);
      if (settingsButtonMobile) {
        settingsButtonMobile.onclick = function(e) {
          settingsOverlayMobile.style.display = "block";
        }
        settingsButtonMobileClose.onclick = function(e) {
          settingsOverlayMobile.style.display = "none";
        }

        var qualityOptions = playerDiv.getElementsByClassName('player-settings-quality-option-mobile');
        for (var i = 0; i < qualityOptions.length; i++) {
          qualityOptions[i].onclick = function(e) {
            var preset = e.target.getAttribute("data-quality")
            e.stopPropagation();
            e.preventDefault();
            for (var i2 = 0; i2 < qualityOptions.length; i2++) {
              removeClass(qualityOptions[i2], "checked");

              if (qualityOptions[i2].getAttribute("data-quality") == preset) {
                addClass(qualityOptions[i2], "checked");

                var currentTime = self.player.currentTime;
                self.player.src = files[preset].url
                self.player.currentTime = currentTime;
                self.player.play()
                hideSettings();
              }
            }
          }
        }
      }
    }
  } else {
    playerDiv.addEventListener("mouseleave", function() {
      removeClass(playerDiv, "user-activity");
    })

    var showBufferingTimeout = null;
    var canShowBuffering = false;
    var lastPlayPos = 0;
    this.bufferCheckInterval = setInterval(function() {
      if (!player) {
        return;
      }
      currentPlayPos = player.currentTime;
      if ((self.spinner.style.display == 'none' ||
          self.spinner.style.display == '')
        && player.currentTime == lastPlayPos
        && !player.paused) {
          if (canShowBuffering) {
            self.spinner.style.display = 'block';
            bufferingDetected = true;
          }
      }
      if (self.spinner.style.display == 'block'
        && player.currentTime > lastPlayPos
        && !player.paused) {
          self.spinner.style.display = 'none';
          bufferingDetected = false;
      }
      lastPlayPos = player.currentTime
    }, 500.0);

    player.addEventListener("playing", function(e) {
      canShowBuffering = true;
    })

    this.update_player_controls_loop();

    //this must be click for ie
    if (fullScreenButton) {
      fullScreenButton.onclick = function(e) {
        hideSettings();
        if (screenfull.isEnabled) {
          screenfull.toggle(playerDiv);
          setTimeout(function() {
            player.style.maxHeight = document.body.offsetHeight + "px";
          }, 1000);
        }
      }
      fullScreenButton.onmousedown = function(e) {
        e.stopPropagation();
      }
    }

    if (settingsButton) {
      settingsButton.onclick = function(e) {
        if (self.settingsOpen) {
          removeClass(settingsButton, 'open')
          settingsOverlay.style.display = "none";
        } else {
          addClass(settingsButton, 'open')
          settingsOverlay.style.display = "block";
        }
        self.settingsOpen = !self.settingsOpen;
      }

      var qualityOptions = playerDiv.getElementsByClassName('player-settings-quality-option');
      for (var i = 0; i < qualityOptions.length; i++) {
        qualityOptions[i].onmousedown = function(e) {
          e.stopPropagation();
          e.preventDefault();
        }
        qualityOptions[i].onclick = function(e) {
          e.stopPropagation();
          e.preventDefault();
          for (var i2 = 0; i2 < qualityOptions.length; i2++) {
            removeClass(qualityOptions[i2], "checked");
          }
          addClass(e.target, "checked");
          var currentTime = self.player.currentTime;
          
          var preset = e.target.getAttribute("data-quality")
          self.player.src = files[preset].url
          self.player.currentTime = currentTime;
          self.player.play()
          hideSettings();
        }
      }
    }

    playerDiv.addEventListener("mousemove", onUserActivity);

    this.player.addEventListener("mousedown", function(e) {

      onUserActivity(e);
      var button = e.which || e.button;

      if (button == 3) {
        return;
      }

      if (hideSettings()) {
        return;
      }
      
      if (player.paused) {
        var promise = player.play()
        if (promise !== undefined) {
          promise.then(function() {
          }).catch(function(err) {
            console.log("Play blocked: " + err)
          });
        }
        self.update_player_controls();
      } else {
        player.pause();
        self.update_player_controls();
      }
    })

    if (screenfull.isEnabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, self.onFullScreenChange)
    } else {
      if (fullScreenButton) {
        fullScreenButton.style.display = "none";
      }
    }

    if (playPauseInput) {
      playPauseInput.onchange = function(e) {
        if (e.target.checked) {
          player.pause();
        } else {
          player.play();
        }
      }
    }

    var muteButton = playerDiv.getElementsByClassName('player-mute-button')[0];
    if (muteButton) {
      muteButton.onmousedown = function(e) {
        hideSettings();
        if (player.muted) {
          player.muted = false;
        } else {
          player.muted = true;
        }
        e.stopPropagation();
      }
    }

    var wasPaused;
    var handleMouseMove = function(e) {
      log("Mouse move pause")
      player.pause();
      var newTime = calculateDistance(e, playerDiv.getElementsByClassName('player-progress')[0]) * player.duration;

      // Don't let video end while scrubbing.
      if (newTime === player.duration) { newTime = newTime - 0.1; }

      if (!isNaN(newTime)) {
        // Set new time (tell player to seek to new time)
        player.currentTime = newTime;
        self.scrubTime = newTime;
      }
      self.update_player_controls();
    }
    var handleMouseUp = function(e) {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
      self.scrubTime = null;
      if (!wasPaused) {
        log("Playing after progress change")
        player.play()
        var promise = player.play()
        if (promise !== undefined) {
          promise.then(function() {
          }).catch(function(err) {
            console.log("Play blocked: " + err)
          });
        }
      }
    }

    var progressBar = playerDiv.getElementsByClassName('player-progress')[0]
    var progressBarHover = document.getElementById('player-progress-hover')
    var progressBarTrackHover = document.getElementById('player-progress-value-hover')
    progressBar.onmousedown = function(e)  {
      hideSettings();
      wasPaused = player.paused;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);
      handleMouseMove(e);
      //so we don't trigger mousedown on player
      e.stopPropagation();
    }
    progressBar.onmousemove = function(e) {
      var newTime = calculateDistance(e, progressBar) * player.duration;
      // Don't let video end while scrubbing.
      if (newTime === player.duration) { newTime = newTime - 0.1; }

      if (!isNaN(newTime)) {
        var percent = newTime / player.duration * 100;
        var left = newTime / player.duration * progressBar.offsetWidth;
        var right = progressBar.offsetWidth - left;

        if (left < 100) {
          progressBarHover.style.right = null;
          progressBarHover.style.left = left - (percent / 2) + "px";
          progressBarHover.style.textAlign = "left"
        } else if (right < 100) {
          progressBarHover.style.left = null;
          progressBarHover.style.right = right - (50 - percent / 2) + "px";
          progressBarHover.style.textAlign = "right"
        } else {
          progressBarHover.style.right = null;
          progressBarHover.style.left = (left - 50) + "px";
          progressBarHover.style.textAlign = "center"
        }
        
        var minutes = Math.floor(newTime / 60)
        var seconds = Math.round(newTime - minutes * 60)
        if (seconds < 10) {
          seconds = "0" + seconds.toString()
        }
        progressBarHover.innerHTML = minutes + ":" + seconds.toString()
        progressBarHover.style.opacity = 1

        var width = percent.toFixed(2);
        if (width > 100) {
          width = 100;
        }
        progressBarTrackHover.style.width = width + "%";
        progressBarTrackHover.style.opacity = 1

      } else {
        progressBarHover.style.opacity = 0
        progressBarTrackHover.style.opacity = 0
      }
    }
    progressBar.onmouseleave = function(e) {
      progressBarHover.style.opacity = 0
      progressBarTrackHover.style.opacity = 0
    }

    var volumeBar = playerDiv.getElementsByClassName('player-volume')[0];
    if (volumeBar) {
      var handleVolumeMouseMove = function(e) {
        var distance = calculateDistance(e, volumeBar);
        if (distance < .25) {
          return;
        }
        var volume = calculateDistance(e, playerDiv.getElementsByClassName('player-volume-track')[0]);
        player.volume = volume;
        if (volume == 0) {
          player.muted = true;
        } else {
          player.muted = false;
        }
        self.update_player_controls();
      }
      var handleVolumeMouseUp = function(e) {
        document.removeEventListener("mousemove", handleVolumeMouseMove);
        document.removeEventListener("mouseup", handleVolumeMouseUp);
        document.removeEventListener("touchmove", handleVolumeMouseMove);
        document.removeEventListener("touchend", handleVolumeMouseUp);
      }
      playerDiv.getElementsByClassName('player-volume')[0].onmouseleave = function(e) {
        handleVolumeMouseUp(e);
      }
      playerDiv.getElementsByClassName('player-volume')[0].onmousedown = function(e)  {
        hideSettings();
        document.addEventListener("mousemove", handleVolumeMouseMove);
        document.addEventListener("mouseup", handleVolumeMouseUp);
        document.addEventListener("touchmove", handleVolumeMouseMove);
        document.addEventListener("touchend", handleVolumeMouseUp);
        handleVolumeMouseMove(e);
        //so we don't trigger mousedown on player
        e.stopPropagation();
      }
    }
    
    self.update_player_controls();
  }
}

VideoPlayer.prototype.onKeyPress = function(e) {
  if (e.keyCode == 102 || e.keyCode == 70) {
    if (screenfull.isEnabled) {
      screenfull.toggle(this.playerDiv);
    }
  } else if (e.keyCode == 109 || e.keyCode == 77) {
    if (this.player.muted) {
      this.player.muted = false;
    } else {
      this.player.muted = true;
    }
  } else if (e.keyCode == 32 || e.keyCode == 75) {
    if (this.player.paused) {
      this.play();
    } else {
      this.pause();
    }
  } else if (e.keyCode == 38) {
    var volume = this.player.volume + .1;
    if (volume > 1) volume = 1;
    this.player.volume = volume;
    this.player.muted = false;
  } else if (e.keyCode == 40) {
    var volume = this.player.volume - .1;
    if (volume < 0) {
      volume = 0;
      this.player.muted = true;
    }
    this.player.volume = volume;
  } else if (e.keyCode == 37 || e.keyCode == 74) {
    if (!this.player.duration) return;
    var time = this.player.currentTime - 5;
    if (time > this.player.duration || time < 0) {
      time = 0;
    }
    this.player.currentTime = time;
  } else if (e.keyCode == 39 || e.keyCode == 76) {
    if (!this.player.duration) return;
    var time = this.player.currentTime + 5;
    if (time > this.player.duration || time < 0) {
      time = 0;
    }
    this.player.currentTime = time;
  } else if (e.keyCode >= 48 && e.keyCode <= 57) {
    if (!this.player.duration) return;
    var percent = (e.keyCode - 48) / 10;
    this.player.currentTime = percent * this.player.duration
  }
}

VideoPlayer.prototype.copyEmbedCodeToClipboard = function(source) {
  var self = this;
  var padding = (self.video.height / self.video.width * 100).toFixed(3);
  if (self.video.shortcode) {
    var code = '<div' + ' style="width: 100%; height: 0px; position: relative; padding-bottom: ' + padding + '%;"><' + 'iframe src="https://streamable.com/e/' + self.video.shortcode + '?quality=highest" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"><' + '/iframe></div>';
  } else {
    var code = '<div' + ' style="width: 100%; height: 0px; position: relative; padding-bottom: ' + padding + '%;"><' + 'iframe src="' + window.location + '" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"><' + '/iframe></div>';
  }
  copyTextToClipboard(code);  
}

VideoPlayer.prototype.onProgress = function(e) {
  this.updateBuffered()
}

VideoPlayer.prototype.updateBuffered = function(e) {
  var loaded = 0
  for (var i = 0; i < this.player.buffered.length; i++) {
    loaded += (this.player.buffered.end(i) - this.player.buffered.start(i))
  }
  var percent = 0
  if (this.player.duration) {
    percent = loaded / this.player.duration * 100 
  }
}

VideoPlayer.prototype.onTimeUpdate = function() {
  var self = this
  var player = this.player

  var reportProgress = function(seeking) {
    if (seeking) {
      seeking = 1;
    } else {
      seeking = 0;
    }
    self.recordStat("progress", {
      "seeking": seeking,
      "progress": (player.currentTime / player.duration).toFixed(2),
      "loops": self.loops
    })
    self.lastProgressReport = player.currentTime;
  }

  if (player.currentTime - self.lastProgressReport >= 30) {
    reportProgress(player.seeking);
  }

  //ignore if seeking, unless its a loop
  if (player.seeking && player.currentTime != 0) {
    self.lastTime = player.currentTime;
    return;
  }
  if (self.spinner && player.currentTime != 0) {
    self.spinner.style.display = "none";
  }
  //reset on returning to beginning
  if (self.lastTime > player.currentTime && player.currentTime == 0) {
    self.loops += 1;
    self.lastTime = null;
  }

  //if we returned to beginning, or it's been 5 seconds
  if (self.loops > self.lastReportedLoop) {
    if (self.loops <= 10) {
      self.recordStat("play", {
        loops: self.loops,
        progress: player.duration ? (player.currentTime / player.duration).toFixed(2) : 0
      })
      self.lastReportedLoop = self.loops;
    }
    self.lastProgressReport = player.currentTime;
  }
  self.update_player_controls();
  self.lastTime = player.currentTime;
}

VideoPlayer.prototype.update_player_controls_loop = function() {
  var player = this.player
  var self = this
  setTimeout(function() {
    self.update_player_controls();
    self.update_player_controls_loop();
  }, 2000);
};

VideoPlayer.prototype.update_player_controls = function() {
  var player = this.player
  var playerDiv = this.playerDiv
  var muteButton = playerDiv.getElementsByClassName('player-mute-button')[0];
  if (muteButton) {
    removeClass(muteButton, "muted");
    removeClass(muteButton, "low");
    if (player.muted) {
      addClass(muteButton, "muted");
    } else if (player.volume < .5) {
      addClass(muteButton, "low");
    }
  }
  var volumeBar = playerDiv.getElementsByClassName('player-volume-value')[0];
  if (volumeBar) {
    var volume = (player.volume * 80).toFixed();
    if (player.muted) {
      volume = 0;
    }
    volumeBar.style.clip = "rect(0px," + volume / 2 + "px,40px,0px)"
  }
}

VideoPlayer.prototype.update_player_progress = function() {
  var self = this
  var player = this.player
  var playerDiv = this.playerDiv
  var currentTime = player.currentTime;
  if (self.scrubTime != null) {
    currentTime = self.scrubTime;
  }
  var progressBar = playerDiv.getElementsByClassName('player-progress-value')[0];
  if (player.duration && progressBar) {
    var width = (currentTime / player.duration * 100).toFixed(2);
    if (width > 100) {
      width = 100;
    }
    progressBar.style.width = width + "%";
  }
  window.requestAnimationFrame(self.update_player_progress);
}

VideoPlayer.prototype.pause = function() {
  log('Pausing');
  this.paused_ = true
  this.player.pause();
}

VideoPlayer.prototype.setVolume = function(volume, save) {
  log('Set volume ' + volume.toString() + " save: " + save.toString());

  // don't store if we're silently muting
  if (volume || save) {
    this.player.volume = volume
  }
  if (volume == 0) {
    this.player.muted = true;
  } else {
    this.player.muted = false;
  }

  this.saveVolume = save
  setTimeout(function() {
    self.saveVolume = true
  }, 100)
}

// returns whether player should pause for ad
VideoPlayer.prototype.adOpportunity = function() {
  if (window.STM_PLAYERS) {
    for (var i = 0; i < window.STM_PLAYERS.length; i++) {
      if (typeof window.STM_PLAYERS[i].adOpportunity === 'function') {
        return window.STM_PLAYERS[i].adOpportunity()
      }
    }
  }
  return false
}

VideoPlayer.prototype.play = function(noads, retried) {
  var self = this

  if (this.isMobile && !this.options.noControls) {
    this.player.controls = true;
  }

  var playOverlay = document.getElementById('play-overlay')

  var play = true;
  if (!noads && !this.started) {
    play = !this.adOpportunity()
  }
  
  this.paused_ = false
  this.started = true

  if (play) {
    if (this.player.prepHls) {
      this.player.prepHls()
    }
    var promise = this.player.play()
    if (promise !== undefined) {
      promise.then(function() {
        // Autoplay started!
      }).catch(function(err) {      
        console.log("Play blocked: " + err)
        if (self.options.autoPlayMute && !retried) {
          self.setVolume(0, false);
          self.play(noads, true)
        } else {
          if (playOverlay) {
            playOverlay.style.display = "block"
          }
          self.paused_ = true
          self.started = false
        }
      });
    }
  } else {
    log("Got ad, not playing")
    //playOverlay.style.display = "block"
    this.spinner.style.display == 'block'
  }
}

VideoPlayer.prototype.paused = function() {
  return !!this.paused_ 
}

VideoPlayer.prototype.destroy = function(callback) {
  if (this.bufferCheckInterval) {
    clearInterval(this.bufferCheckInterval);
  }
  if (this.progressUpdateInterval) {
    clearInterval(this.progressUpdateInterval);
  }

  this.player.removeEventListener("timeupdate", this.onTimeUpdate)
  this.player.removeEventListener("progress", this.onProgress)
  this.player.removeEventListener("canplaythrough", this.onProgress)

  //replace player to kill all event listeners
  var clone = this.player.cloneNode();
  while (this.player.firstChild) {
    clone.appendChild(this.player.lastChild);
  }
  this.player.parentNode.replaceChild(clone, this.player);
  this.playerDiv.removeEventListener("fullscreenchange", this.onFullScreenChange);

  this.player.pause();
  while (this.player.firstChild) {
    this.player.removeChild(this.player.firstChild);
  }
  this.player.load(); //forces unloading of video
  if (callback) {callback();}

  if (screenfull.isEnabled) {
    document.removeEventListener(screenfull.raw.fullscreenchange, this.onFullScreenChange)
  }
  window.removeEventListener("message", this.onMessage);

  document.removeEventListener("keyup", this.onKeyPress);

}