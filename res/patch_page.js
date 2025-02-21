function setTip(obj, text, interactive=false) {
	tippy(obj, {
		content: `<text style="font-size: 11px;">${text}</text>`,
		allowHTML: true,
		placement: 'top',
		theme: 'light vk',
		animation: 'shift-away',
		interactive: interactive
	});
}

function toggleMusic() {
		const headerMusicBtn = document.querySelector('.headerMusicBtn');

		if (headerMusicBtn) {
			headerMusicBtn.addEventListener('click', function() {
				if (headerMusicBtn.classList.contains('paused')) {
					window.player.play();
					headerMusicBtn.classList.remove('paused');
				} else {
					window.player.pause();
					headerMusicBtn.classList.add('paused');
				}
			});
		}

		if (window.player && window.player.audioPlayer) {
			const headerMusicBtn = document.querySelector('.headerMusicBtn');
			setInterval(() => {
				if (window.player.is_closed == true) {
					headerMusicBtn.classList.add('closed');
				}
				if (window.player.audioPlayer.paused == true) {
					headerMusicBtn.classList.add('paused');
				}
				else {
					headerMusicBtn.classList.remove('paused');
				}
			}, 50);
		}
	}

function minifyajplayer() {
	document.querySelectorAll("#aj_player_internal_controls").forEach(function (element) {
		element.innerHTML = `
					<div id="aj_player_play">
						<div id="aj_player_play_btn" class="paused"></div>
					</div>
					<div id="aj_player_track" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;transform: translateY(-2px);">
						<div id="aj_player_track_name">
							<a id="aj_player_track_title" class="noOverflow" style="max-width: 300px;user-select: none;cursor: unset;">
								<b>?</b>
								<br>
								<span>?</span>
							</a>
						</div>
					</div>
`;
	});
	window.player.__updateFace();
}

function parseAudio() {
	const audioDump = localStorage.getItem('audio.lastDump');
	const nothingtemplate = `<div class="vkifytracksplaceholder"><center style="background: white;border: #DEDEDE solid 1px;font-size: 11px;">
								<span style="color: #707070;margin: 60px 0;display: block;">
									${tr('no_data_description')}
								</span>
							</center></div>`
	if (audioDump) {
		try {
			if (JSON.parse(audioDump)) {
			let adump = JSON.parse(audioDump);
			adump.tracks = Array.from(new Map(JSON.parse(audioDump).tracks.map(track => [track.id, track])).values());
			const scrollContainer = document.createElement('div');
			scrollContainer.classList.add('scroll_container');
			adump.tracks.forEach(track => {
				const scrollNode = document.createElement('div');
				scrollNode.classList.add('scroll_node');
				scrollNode.innerHTML = `
				<div id="audioEmbed-${track.id}" data-realid="${track.id}" data-name="${track.performer} — ${track.name}" data-genre="Other" data-length="${track.length}" data-keys='${JSON.stringify(track.keys)}' data-url="${track.url}" class="audioEmbed ctx_place">
					<audio class="audio"></audio>
					<div id="miniplayer" class="audioEntry">
						<div class="audioEntryWrapper" draggable="true">
							<div class="playerButton">
								<div class="playIcon"></div>
							</div>
							<div class="status">
								<div class="mediaInfo noOverflow">
									<div class="info">
										<strong class="performer">
											<a draggable="false" href="/search?section=audios&amp;order=listens&amp;only_performers=on&amp;q=${encodeURIComponent(track.performer)}">${track.performer}</a>
										</strong>
										—
										<span draggable="false" class="title">${track.name}</span>
									</div>
								</div>
							</div>
							<div class="mini_timer">
								<span class="nobold hideOnHover" data-unformatted="${track.length}">${formatTime(track.length)}</span>
								<div class="buttons">
									<div class="report-icon musicIcon" data-id="6690"></div>
									<div class="remove-icon musicIcon" data-id="${track.id}"></div>
									<div class="add-icon-group musicIcon hidden" data-id="${track.id}"></div>
								</div>
							</div>
						</div>
						<div class="subTracks" draggable="false">
							<div class="lengthTrackWrapper">
								<div class="track lengthTrack">
									<div class="selectableTrack">
										<div class="selectableTrackLoadProgress">
											<div class="load_bar"></div>
										</div>
										<div class="selectableTrackSlider">
											<div class="slider"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="volumeTrackWrapper">
								<div class="track volumeTrack">
									<div class="selectableTrack">
										<div class="selectableTrackSlider">
											<div class="slider"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
				scrollContainer.appendChild(scrollNode);
			});
			if (scrollContainer.innerHTML) {
			return `<div class="audiosContainer audiosSideContainer audiosPaddingContainer">
						<div class="scroll_container">
							${scrollContainer.innerHTML}
						</div>
					</div>`
			} else {
			return nothingtemplate
			}
		  }
		} catch (error) {
			console.error(error)
			return nothingtemplate
		}
	} else {
		return nothingtemplate
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
	}
	return nothingtemplate
}

document.addEventListener("DOMContentLoaded", (event) => {
	player.__setFavicon = function (state = 'playing') {
		if(state == 'playing') {
				document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAvkQAAL/4AADBsAAAw2wAAMUoAADG6AAAyKgAAMpsAADMNAAAzfwAAM/EAADRlAAA02AAANU0AADXCAAA2Nw==")
		} else {
				document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
		}
	}
	setTip('img.name-checkmark', tr('page_verified'))
            const hdrmusbtn = document.querySelector('#headerMusicBtn');
            tippy(hdrmusbtn, {
                content: `
<div class="bigPlayer ctx_place">
    <div class="bigPlayerWrapper">
        <div class="playButtons">
            <div onmousedown="this.classList.add('pressed')" onmouseup="this.classList.remove('pressed')" class="playButton musicIcon" data-tip="simple" data-title=`+tr('play_tip')+`></div>
            <div class="arrowsButtons">
                <div class="nextButton musicIcon" data-tip="simple" data-title="?"></div>
                <div class="backButton musicIcon" data-tip="simple" data-title="?"></div>
            </div>
        </div>

        <div class="trackPanel">
            <div class="trackInfo">
                <div class="trackName">
                    <span class="trackPerformers"><a href="/">?</a></span> —
                    <span>?</span>
                </div>

                <div class="timer">
                    <span class="time">00:00</span>
                    <span>/</span>
                    <span class="elapsedTime">-00:00</span>
                </div>
            </div>

            <div class="track">
                <div class="selectableTrack">
                    <div id="bigPlayerLengthSliderWrapper">&nbsp;
                        <div class="slider"></div>
                    </div>
                    <div class="selectableTrackLoadProgress">
                        <div class="load_bar"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="volumePanel">
            <div class="volumePanelTrack">
                <div class="selectableTrack">
                    <div id="bigPlayerVolumeSliderWrapper">&nbsp;
                        <div class="slider" style="padding-left:122%"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="additionalButtons">
            <div class="repeatButton musicIcon" data-tip="simple" data-title=`+tr('repeat_tip')+`></div>
            <div class="shuffleButton musicIcon" data-tip="simple" data-title=`+tr('shuffle_tip')+`></div>
            <div class="deviceButton musicIcon" data-tip="simple" data-title=`+tr('mute_tip')+`></div>
        </div>
    </div>
</div>
<div class="vkifytracksplaceholder"></div>

`,
       allowHTML: true,
       interactive: true,
       placement: 'bottom',
       theme: 'musicpopup',
       arrow: true,
       maxWidth: 520,
       offset: [-147, 17],
       appendTo: document.body,
       onMount(instance) {
           const placeholder = instance.popper.querySelector('.vkifytracksplaceholder') || instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
           if (placeholder) {
               const trackList = `${parseAudio()}`;
               placeholder.outerHTML = trackList;
           }
           u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
           u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
           window.player.__updateFace();
           window.player.audioPlayer.onvolumechange();
       }});
    window.player.__highlightActiveTrack = function() {
        u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
    }
        const originalInitEvents = window.player.initEvents;
        window.player.initEvents = function() {
            originalInitEvents.call(this);
            this.audioPlayer.ontimeupdate = () => {
                const current_track = this.currentTrack;
                if (!current_track) {
                    return;
                }
                /* я не умею считать так что пусть будет пиксель пёрфект) */
                const time = this.audioPlayer.currentTime;
                const ps = ((time * 104) / current_track.length).toFixed(3);
                this.uiPlayer.find(".time").html(fmtTime(time));
                this.__updateTime(time);

                if (ps <= 104) {
                    this.uiPlayer.find(".track .selectableTrack .slider").attr('style', `padding-left:${ps}%`);

                    if (this.linkedInlinePlayer) {
                        this.linkedInlinePlayer.find(".subTracks .lengthTrackWrapper .slider").attr('style', `padding-left:${ps}%`);
                        this.linkedInlinePlayer.find('.mini_timer .nobold').html(fmtTime(time));
                    }

                    if (this.ajaxPlayer) {
                        this.ajaxPlayer.find('#aj_player_track_length .slider').attr('style', `padding-left:${ps}%`);
                        this.ajaxPlayer.find('#aj_player_track_name #aj_time').html(fmtTime(time));
                    }
                }
            };
            this.audioPlayer.onvolumechange = () => {
                const volume = this.audioPlayer.volume;
                const ps = Math.ceil((volume * 132) / 1);

                if (ps <= 132) {
                    this.uiPlayer.find(".volumePanel .selectableTrack .slider").attr('style', `padding-left:${ps}%`);

                    if (this.linkedInlinePlayer) {
                        this.linkedInlinePlayer.find(".subTracks .volumeTrackWrapper .slider").attr('style', `padding-left:${ps}%`);
                    }

                    if (this.ajaxPlayer) {
                        this.ajaxPlayer.find('#aj_player_volume .slider').attr('style', `padding-left:${ps}%`);
                    }
                }

                localStorage.setItem('audio.volume', volume);
            };
        };
        window.player.initEvents();
	toggleMusic();
	minifyajplayer();
	/* я украл эту хрень из исходников, хз как оно работает лол */
	u(`#search_box form input[type="search"]`).on('focus', (e) => {
		u('.page_header').addClass('search_expanded')
	})

	u(`#search_box form input[type="search"]` || `#search_and_one_more_wrapper select`).on('blur', (e) => { {
		setTimeout(() => {
			const focusedElement = document.activeElement;
			if (!u(focusedElement).is('#search_box form input[type="search"], #search_and_one_more_wrapper select')) {
				u('.page_header.search_expanded:not(.search_expanded_at_all)').removeClass('search_expanded');
			}
		}, 0);
	} /* ладно я понял как оно работает и поэтому я в целом убрал время ОЖИДания */});
});


document.addEventListener("load", (event) => {

});