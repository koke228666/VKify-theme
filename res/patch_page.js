function createLoader() {
    const iconFrames = [
        "data:image/gif;base64,R0lGODlhEAAQAPEDAEVojoSctMHN2QAAACH5BAEAAAMALAAAAAAQABAAAAItnI9pwW0A42rsRTipvVnt7kmDE2LeiaLCeq6C4bbsEHu1e+MvrcM9j/MFU4oCADs=", // prgicon1.gif в Base64
        "data:image/gif;base64,R0lGODlhEAAQAPEDAEVojoSctMHN2QAAACH5BAEAAAMALAAAAAAQABAAAAIrnI9pwm0B42rsRTipvVnt7kmDE2LeiaKkArQg646V1wIZWdf3nMcU30t5CgA7", // prgicon2.gif в Base64
        "data:image/gif;base64,R0lGODlhEAAQAPEDAEVojoSctMHN2QAAACH5BAEAAAMALAAAAAAQABAAAAIxnI9pwr3NHpRuwGivVDsL7nVKBZZmAqRgwBopsLbDGwfuqw7sbs84rOP1fkBh74QoAAA7", // prgicon3.gif в Base64
        "data:image/gif;base64,R0lGODlhEAAQAPEDAEVojoSctMHN2QAAACH5BAEAAAMALAAAAAAQABAAAAItnI9pwG0C42rsRTipvVnt7kmDE2LeiaLBeopr0JpvLBjvPFzyDee6zduIUokCADs=", // prgicon4.gif в Base64
    ];

    let step = 0;
    let timer = null;
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);

    const updateFavicon = () => {
        step = (step + 1) % 4;
        favicon.href = iconFrames[step];
        timer = setTimeout(updateFavicon, 150);
    };

    const gifFavicon = () => {
        favicon.href = 'data:image/gif;base64,R0lGODlhEAAQAPEDAEVojoSctMHN2QAAACH5BA0KAAMAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAACLZyPacFtAONq7EU4qb1Z7e5JgxNi3omiwnquguG27BB7tXvjL63DPY/zBVOKAgAh+QQNCgADACwAAAAAEAAQAAACK5yPacJtAeNq7EU4qb1Z7e5JgxNi3omipAK0IOuOldcCGVnX95zHFN9LeQoAIfkEDQoAAwAsAAAAABAAEAAAAjGcj2nCvc0elG7AaK9UOwvudUoFlmYCpGDAGimwtsMbB+6rDuxuzzis4/V+QGHvhCgAACH5BA0KAAMALAAAAAAQABAAAAItnI9pwG0C42rsRTipvVnt7kmDE2LeiaLBeopr0JpvLBjvPFzyDee6zduIUokCADs=';
    };

    return {
        start() {
            document.body.style.cursor = 'progress';
			if (/firefox/i.test(navigator.userAgent.toLowerCase())) {
				gifFavicon();
			} else {
				updateFavicon();
			}
        },
        stop() {
            clearTimeout(timer);
            document.body.style.cursor = 'default';
            favicon.href = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKOBYiGjgWKVo4Fi1aOBYt2jgWJxAAAAAKOBYimjgWLUo4Fi76OBYu6jgWLYAAAAAAAAAAAAAAAAAAAAAKOBYlqjgWL3o4Fi/6OBYv+jgWL/o4FiwKOBYhijgWLeo4Fi/6OBYv+jgWL/o4FizAAAAAAAAAAAAAAAAKOBYkujgWL8o4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWL6o4Fi/6OBYv+jgWL/o4Fi/qOBYlIAAAAAAAAAAKOBYh6jgWLuo4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWL/o4Fi/6OBYocAAAAAAAAAAAAAAACjgWK5o4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWL/o4Fi/6OBYv+jgWIMAAAAAAAAAACjgWJco4Fi/6OBYv+jgWL/o4Fiq6OBYv+jgWL/o4Fi/6OBYv+jgWKyo4Fi/6OBYv+jgWL/o4FiVwAAAACjgWINo4Fi6KOBYv+jgWL/o4FivwAAAACjgWL1o4Fi/6OBYv+jgWL7o4FiB6OBYumjgWL/o4Fi/6OBYuOjgWIJo4FigqOBYv+jgWL/o4Fi/6OBYjqjgWICo4Fi9aOBYv+jgWL/o4Fi+AAAAACjgWKTo4Fi/6OBYv+jgWL/o4FicKOBYvWjgWL/o4Fi/6OBYtwAAAAAo4FiQaOBYv+jgWL/o4Fi/6OBYv4AAAAAo4FiMaOBYv+jgWL/o4Fi/6OBYt6jgWLeo4Fi/6OBYv+jgWKFAAAAAKOBYsijgWL/o4Fi/6OBYu+jgWK9AAAAAAAAAACjgWK6o4Fi/6OBYv+jgWLVAAAAAAAAAACjgWIFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo4FiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDAAAALYAAAAAAADDAgAAAAIAAB7/AAAAAAAA4AAAAP/gAAAAAAAAeAAAAP8AAAD//wAAAB4AAAAAAAAAAA==';
        },
    };
}

window.favloader = createLoader();

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

window.showBlueWarning = function(content) {
document.querySelector('.toTop').insertAdjacentHTML('afterend', `<div class="top_info_bar_blue">
<div class="info">
    <div class="hide_button" onclick="slideBlueWarn(this)"></div>
		${content}
    </div>
</div>
`)
}

function slideBlueWarn(el) {
    $(el).closest(".top_info_bar_blue").slideUp(100, function() {
        $(this).remove();
    });
}

let friendson;
async function updateOnline() {
	friendson = (await window.OVKAPI.call("friends.get", {"user_id": window.openvk.current_id, "count": 99999})).items.filter(user => user.online === 1).length
	if (Number(friendson) > 0) {
		if (Number(friendson) > 99) {
			document.querySelector('.friends_online').textContent = "99+"
		} else {
			document.querySelector('.friends_online').textContent = friendson
		}
		document.querySelector('.friendslink').style.display = "block";
	} else {
		document.querySelector('.friendslink').style.display = "none";
	}
}
updateOnline();
setInterval(() => updateOnline(), 300000);

window.changeLangPopup = function() {
    window.langPopup = new CMessageBox({
            title: tr('select_language'),
            body: `<a href="/language?lg=ru&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}">
<div class="langSelect"><img src="/themepack/vkify/1.0.0.0/resource/lang_flags/ru.png" style="margin-right: 14px;"><b>Русский</b></div>
</a>
<a href="/language?lg=uk&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}">
   <div class="langSelect"><img style="margin-right: 14px;" src="/themepack/vkify/1.0.0.0/resource/lang_flags/uk.png"><b>Україньска</b></div>
</a>
<a href="/language?lg=en&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}">
   <div class="langSelect"><img src="/themepack/vkify/1.0.0.0/resource/lang_flags/en.png" style="margin-right: 14px;"><b>English</b></div>
</a>
<a href="/language?lg=ru_sov&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}">
   <div class="langSelect"><img src="/themepack/vkify/1.0.0.0/resource/lang_flags/sov.png" style="margin-right: 14px;"><b>Советский</b></div>
</a>
<a href="/language?lg=ru_old&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}">
   <div class="langSelect"><img style="margin-right: 14px;" src="/themepack/vkify/1.0.0.0/resource/lang_flags/imp.png"><b>Дореволюціонный</b></div>
</a>
<a href="/language" onclick="langPopup.close(); allLangsPopup(); preventDefault(); return false;">
   <div class="langSelect"><b style="padding: 2px 2px 2px 48px;">All languages »</b></div>
</a>`,
            buttons: [tr('close')],
            callbacks: [() => {langPopup.close()}]
    });
}

window.allLangsPopup = function() {
    const container = document.createElement("div");
    let ul;
    Object.entries(window.openvk.locales).forEach(([langCode, nativeName], index) => {
        if (index % 26 === 0) {
            ul = document.createElement("ul");
            container.appendChild(ul);
        }
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `/language?lg=${langCode}&hash=${encodeURIComponent(window.router.csrf)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}`;
        link.textContent = nativeName;
        li.appendChild(link);
        ul.appendChild(li);
    });

    window.langPopup = new CMessageBox({
            title: tr('select_language'),
            body: container.innerHTML,
            buttons: [tr('close')],
            callbacks: [() => {langPopup.close()}]
    });
}

window.showAudioUploadPopup = function() {
window.audioUploadPopup = new CMessageBox({
        title: tr('upload_audio'),
        body: `
<div id="upload_container">
            <div id="firstStep" style="width: 500px;margin-right: 20px;">
                <b><a href="javascript:void(0)">${tr('limits')}</a></b>
                <ul>
                    <li>${tr("audio_requirements", 1, 30, 25)}</li>
                    <li>${tr("audio_requirements_2")}</li>
                </ul>
					<div id="audio_upload">
						<input id="audio_input" multiple="" type="file" name="blob" accept="audio/*" style="display:none">
						<input value="${tr('upload_button')}" class="button" type="button" onclick="document.querySelector('#audio_input').click()">
					</div>
				</div>

            <div id="lastStep" style="display:none;width: 500px;margin-right: 20px;">
                <div id="lastStepContainers"></div>
                <div id="lastStepButtons" style="text-align: center;margin-top: 10px;">
                    <input class="button" type="button" id="uploadMusicPopup" value="${tr('upload_button')}">
                    <input class="button" type="button" id="backToUpload" onclick="document.querySelector('#audio_input').click()" value="${tr('select_another_file')}">
                </div>
            </div>
        </div>`,
        buttons: [tr('close')],
        callbacks: [() => {audioUploadPopup.close()}]
});

setTimeout(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
	import * as id3 from "/assets/packages/static/openvk/js/node_modules/id3js/lib/id3.js";

	window.__audio_upload_page = new class {
		files_list = []

		hideFirstPage() {
			u('#firstStep').attr('style', 'display:none')
			u('#lastStep').attr('style', 'display:block;width: 500px;margin-right: 20px;')
		}

		showFirstPage() {
			u('#firstStep').attr('style', 'display:block;width: 500px;margin-right: 20px;')
			u('#lastStep').attr('style', 'display:none')
		}

		async detectTags(blob) {
			const return_params = {
				performer: '',
				name: '',
				genre: '',
				lyrics: '',
				explicit: 0,
				unlisted: 0,
			}

			function fallback() {
				console.info('Tags not found, setting default values.')
				return_params.name = remove_file_format(blob.name)
				return_params.genre = 'Other'
				return_params.performer = tr('track_unknown')
			}

			let tags = null
			try {
				tags = await id3.fromFile(blob)
			} catch(e) {
				console.error(e)
			}

			console.log(tags)
			if(tags != null) {
				console.log("ID" + tags.kind + " detected, setting values...")
				if(tags.title) {
					return_params.name = tags.title
				} else {
					return_params.name = remove_file_format(blob.name)
				}

				if(tags.artist) {
					return_params.performer = tags.artist
				} else {
					return_params.performer = tr('track_unknown')
					// todo: split performer and title from filename
				}

				if(tags.genre != null) {
					if(tags.genre.split(', ').length > 1) {
						const genres = tags.genre.split(', ')

						genres.forEach(genre => {
							if(window.openvk.audio_genres[genre]) {
								return_params.genre = genre;
							}
						})
					} else {
						if(window.openvk.audio_genres.indexOf(tags.genre) != -1) {
							return_params.genre = tags.genre
						} else {
							console.warn("Unknown genre: " + tags.genre)
							return_params.genre = 'Other'
						}
					}
				} else {
					return_params.genre = 'Other'
				}

				if(tags.comments != null)
					return_params.lyrics = tags.comments
			} else {
				fallback()
			}

			return return_params
		}

		async appendFile(appender) 
		{
			appender.info = await this.detectTags(appender.file)
			const audio_index = this.files_list.push(appender) - 1
			this.appendAudioFrame(audio_index)
		}

		appendAudioFrame(audio_index) {
			const audio_element = this.files_list[audio_index]
			if(!audio_element) {
				return
			
			}
			const template = u(\`
			<div class='upload_container_element' data-index="\${audio_index}">
				<div class='upload_container_name'>
					<span>\${ovk_proc_strtr(escapeHtml(audio_element.file.name), 63)}</span>
					<div id="small_remove_button"></div>
				</div>
				<table cellspacing="7" cellpadding="0" border="0" align="center">
					<tbody>
						<tr>
							<td width="120" valign="top"><span class="nobold">\${tr('performer')}:</span></td>
							<td><input value='\${escapeHtml(audio_element.info.performer)}' name="performer" type="text" autocomplete="off" maxlength="80" /></td>
						</tr>
						<tr>
							<td width="120" valign="top"><span class="nobold">\${tr('audio_name')}:</span></td>
							<td><input type="text" value='\${escapeHtml(audio_element.info.name)}' name="name" autocomplete="off" maxlength="80" /></td>
						</tr>
						<tr>
							<td width="120" valign="top"><span class="nobold">\${tr('genre')}:</span></td>
							<td>
								<select name="genre"></select>
							</td>
						</tr>
						<tr>
							<td width="120" valign="top"><span class="nobold">\${tr('lyrics')}:</span></td>
							<td><textarea name="lyrics" style="resize: vertical;max-height: 300px;">\${escapeHtml(audio_element.info.lyrics)}</textarea></td>
						</tr>
						<tr>
							<td width="120" valign="top"></td>
							<td>
								<label style='display:block'><input type="checkbox" name="explicit">\${tr('audios_explicit')}</label>
								<label><input type="checkbox" name="unlisted">\${tr('audios_unlisted')}</label>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			\`)
			window.openvk.audio_genres.forEach(genre => {
				template.find('select').append(\`
					<option \${genre == audio_element.info.genre ? 'selected': ''} value='\${genre}'>\${genre}</option>
				\`)
			})
			u('#lastStep #lastStepContainers').append(template)
		}
	}

	u(\`#audio_upload input\`).on('change', (e) => {
		const files = e.target.files
		if(files.length <= 0) {
			return
		}

		Array.from(files).forEach(async file => {
			let has_duplicates = false
			const appender = {
				'file': file
			}

			if(!file.type.startsWith('audio/')) {
				makeError(tr('only_audios_accepted', escapeHtml(file.name)))
				return
			}

			window.__audio_upload_page.files_list.forEach(el => {
				if(el && file.name == el.file.name) {
					has_duplicates = true
				}
			})

			if(!has_duplicates) {
				window.__audio_upload_page.appendFile(appender)
			}
		})
		window.__audio_upload_page.hideFirstPage()
	})
    `;
    document.querySelector('.ovk-diag-action').appendChild(script);
	document.querySelector('.ovk-diag-action').insertAdjacentHTML('afterbegin', `<a href="/search?section=audios" style="float: left;margin-top: 6px;margin-left: 5px;">${tr('audio_search')}</a>`)
}, 0);
}

window.player.ajCreate = function() {
	const previous_time_x = localStorage.getItem('audio.lastX') ?? 100
	const previous_time_y = localStorage.getItem('audio.lastY') ?? scrollY
	const miniplayer_template = u(`
		<div id='ajax_audio_player' class='ctx_place'>
			<div id="aj_player">
				<div id="aj_player_internal_controls">
					<div id="aj_player_play">
						<div id="aj_player_play_btn" class="paused"></div>
					</div>
					<div id="aj_player_track" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;transform: translateY(-2px);">
						<div id="aj_player_track_name">
							<a id="aj_player_track_title" class="noOverflow" style="max-width: 300px;user-select: none;cursor: unset;">
								<b>Unknown</b>
								<br>
								<span>Untitled</span>
							</a>
						</div>
					</div>
				  </div>
				<div id="aj_player_close_btn"></div>
			</div>
		</div>
	`)
	u('body').append(miniplayer_template)
	miniplayer_template.attr('style', `left:${previous_time_x}px;top:${previous_time_y}px`)
	miniplayer_template.find('#aj_player_close_btn').on('click', (e) => {
		this.ajClose()
	})
	$('#ajax_audio_player').draggable({
		cursor: 'grabbing', 
		containment: 'window',
		cancel: '#aj_player_track .selectableTrack, #aj_player_volume .selectableTrack, #aj_player_buttons',
		stop: function(e) {
			if(window.player.ajaxPlayer.length > 0) {
				const left = parseInt(window.player.ajaxPlayer.nodes[0].style.left)
				const top  = parseInt(window.player.ajaxPlayer.nodes[0].style.top)

				localStorage.setItem('audio.lastX', left)
				localStorage.setItem('audio.lastY', top)
			}
		}
	})
}

window.addEventListener('load', () => {document.querySelector('#searchBoxFastTips').innerHTML = `<div class="fastpreload"></div>`;});
function stataj() {
    function statAjPlayer() {
        const header = document.querySelector('.page_header');
        const ajPlayer = document.getElementById('ajax_audio_player');
        const headerRect = header.getBoundingClientRect();
        const headerBottomRightX = headerRect.right;
		const ajplayerscr = document.createElement("style");
		ajplayerscr.type = 'text/css';
		ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: 15px !important;}`;
		document.head.appendChild(ajplayerscr);
        if (document.documentElement.clientWidth - header.getBoundingClientRect().right < 170) {
            document.querySelector('#ajax_audio_player').style = `left: ${headerBottomRightX - 815}px;top: ${document.documentElement.clientHeight - 50}px;`;
            ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: ${document.documentElement.clientHeight - 50}px !important;}`;
            localStorage.setItem('audio.lastX', headerBottomRightX - 815);
        } else {
            document.querySelector('#ajax_audio_player').style = `left: ${headerBottomRightX + 2}px;top: 49px;`;
            ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: 15px !important;}`;
            localStorage.setItem('audio.lastX', headerBottomRightX + 2);
        }
    }
    statAjPlayer();
    window.addEventListener('load', statAjPlayer);
    window.addEventListener('load', () => {document.querySelector('#searchBoxFastTips').innerHTML = `<div class="fastpreload"></div>`;});
    window.addEventListener('resize', statAjPlayer);
    $('#ajax_audio_player').draggable("destroy")
}
if (document.getElementById('ajax_audio_player')) {
    stataj();
} else {
    const observer = new MutationObserver((mutationsList, observer) => {
        const element = document.querySelector('#ajax_audio_player');
        if (element) {
            stataj();
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

async function loadMoreAudio() {
    if (window.musHtml) {
        window.musHtml.querySelector('.audiosContainer .loadMore').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==" />`;
        await window.player.loadContext(Number(Math.max(...window.player.context["playedPages"])) + 1, true);
        window.player.dump();
        let parsedaud = parseAudio(true).scrollContainer;
        let tmp = document.createElement('div');
        tmp.innerHTML = parsedaud;
        window.musHtml.querySelectorAll('.scroll_container .scroll_node [data-realid]').forEach(scrollNode => {
            const realId = scrollNode.getAttribute('data-realid');
            tmp.querySelectorAll('.scroll_node [data-realid]').forEach(node => {
                if (node.getAttribute('data-realid') === realId) node.closest('.scroll_node').remove();
            });
        });
        parsedaud = tmp.innerHTML;
        window.musHtml.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer .loadMore_node').outerHTML = parsedaud;
        window.musHtml.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();}
        u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
        u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying');
    }
}

function cleanUpAudioList() {
    let ldump = localStorage.getItem('audio.lastDump');
    if (ldump) {
        let data = JSON.parse(ldump);
        if (data.tracks && data.tracks.length > 20) {
            data.tracks = data.tracks.slice(-20);
            localStorage.setItem('audio.lastDump', JSON.stringify(data));
            console.log('playlist context cleaned up!');
        }
    }
}

function parseAudio(onlyscnodes = false) {
    cleanUpAudioList();
    const audioDump = localStorage.getItem('audio.lastDump');
    const nothingtemplate = `<div class="vkifytracksplaceholder" style=""><center style="background: white;border: #DEDEDE solid 1px;font-size: 11px;margin-top: 9px;margin-bottom: 3px;height: 362px;width: 430px;">
                                <span style="color: #707070;margin: 172px 0;display: block;">
                                    ${tr('no_data_description')}
                                </span>
                            </center></div>`
    if (audioDump) {
        try {
            if (JSON.parse(audioDump)) {
            let adump = JSON.parse(audioDump);
            adump.tracks = Array.from(new Map(adump.tracks.map(track => [track.id, track])).values());
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
            const loadmore = document.createElement('div');
            loadmore.classList.add('scroll_node');
            loadmore.classList.add('loadMore_node');
            loadmore.innerHTML = `<a class="loadMore">${window.vkifylang.loadmore}</a>`
            scrollContainer.appendChild(loadmore);
            if (onlyscnodes) {
                return {'scrollContainer': `${scrollContainer.innerHTML}`, 'nowPlayingUrl': adump.context.object.url};
            } else {
                return {'scrollContainer': `<div class="audiosContainer audiosSideContainer audiosPaddingContainer">
                        <div class="scroll_container">
                            ${scrollContainer.innerHTML}
                        </div>
                    </div>`, 'nowPlayingUrl': adump.context.object.url};
            }
            } else {
            return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
            }
          }
        } catch (error) {
            console.error(error)
            return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
        }
    } else {
        return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
}

const vkfavicon = {
    "fav": "/themepack/vkify/1.0.0.0/resource/favicon_vk.ico",
	"fav_chat": "/themepack/vkify/1.0.0.0/resource/fav_chat.ico",
    "playiconnew": "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAvkQAAL/4AADBsAAAw2wAAMUoAADG6AAAyKgAAMpsAADMNAAAzfwAAM/EAADRlAAA02AAANU0AADXCAAA2Nw==",
    "pauseiconnew": "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
}

if (window.location.href.includes('im?sel=')) {
    document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["fav_chat"])
}

window.initVKGraffiti = function(event) {
	var msgbox = new CMessageBox({
		title: tr("draw_graffiti"),
 		body: `<iframe style="width: 100%; height: 100%; border: medium;" srcdoc="
<!DOCTYPE html>
<html lang=&quot;en&quot;>
<head>
    <meta charset=&quot;UTF-8&quot;>
    <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;>
    <link rel=&quot;stylesheet&quot; href=&quot;${window.location.origin + "/themepack/vkify/2.0.0.0/resource/vkgraffiti/graffiti.css"}&quot;>
    <link rel=&quot;stylesheet&quot; href=&quot;${window.location.origin + "/themepack/vkify/2.0.0.0/resource/vkgraffiti/common.css"}&quot;>
</head>
<body>
    <div style=&quot;margin: 10px&quot;><a onclick=&quot;Graffiti.flushHistory();&quot;>${window.vkifylang.graffitiflushhistory}</a> | <a onclick=&quot;Graffiti.backHistory();&quot;>${window.vkifylang.graffitibackhistory}</a></div>
    <div style=&quot;background-color: #F7F7F7; padding-top: 20px; padding-bottom: 1px;&quot;>
        <div id=&quot;graffiti_aligner&quot;>
            <canvas id=&quot;graffiti_common&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
            <canvas id=&quot;graffiti_overlay&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
            <canvas id=&quot;graffiti_helper&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
        </div>
        <div id=&quot;graffiti_resizer&quot; style=&quot;margin-top: 5px;&quot;></div>
    </div>
    <div>
        <canvas id=&quot;graffiti_controls&quot; width=&quot;586&quot; height=&quot;70&quot;></canvas>
    </div>
    <canvas id=&quot;graffiti_hist_helper&quot; width=&quot;1172&quot; height=&quot;586&quot; style=&quot;display:none;&quot;></canvas>
    <div id=&quot;graffiti_cpwrap&quot; style=&quot;display:none; top:-210px;&quot;>
        <canvas id=&quot;graffiti_cpicker&quot; width=&quot;252&quot; height=&quot;168&quot;></canvas>
    </div>
    <script src=&quot;${window.location.origin + "/themepack/vkify/2.0.0.0/resource/vkgraffiti/graffiti.js"}&quot;></script>
    <script>
        var cur = {&quot;lang&quot;: {&quot;graffiti_flash_color&quot;: &quot;${window.vkifylang.graffiticolor} &quot;, &quot;graffiti_flash_opacity&quot;: &quot;${window.vkifylang.graffitiopacity} &quot;, &quot;graffiti_flash_thickness&quot;: &quot;${window.vkifylang.graffitithickness} &quot;, &quot;graffiti_normal_size&quot;: &quot;Оконный режим&quot;, &quot;graffiti_full_screen&quot;: &quot;Полноэкранный режим&quot;}}; /* последние два не используются, так что пока нет смысла переводить */
        window.onload = function() {
            Graffiti.init();
        };
    </script>
</body>
</html>
"></iframe>`,
            		close_on_buttons: false,
            		warn_on_exit: true,
            		buttons: [tr("save"), tr("cancel")],
            		callbacks: [function() {
            			msgbox.getNode().find('iframe').nodes[0].contentWindow.Graffiti.getImage(function(dataURL) {
            				// ваще кому нужен этот комментарий лол
            				var blob = dataURLtoBlob(dataURL);
            				let fName = "Graffiti-" + Math.ceil(performance.now()).toString() + ".jpeg";
            				let image = new File([blob], fName, {
            					type: "image/jpeg",
            					lastModified: new Date().getTime()
            				});
            				__uploadToTextarea(image, u(event.target).closest('#write'))
            			});
            			msgbox.close()
            		}, async function() {
            			const res = await msgbox.__showCloseConfirmationDialog()
            			if (res === true) {
            				msgbox.close()
            			}
            		}]
            	})
            	var msgboxsel = document.querySelector(`.ovk-diag-cont.ovk-msg-all[data-id="${msgbox.id}"]`)
            	msgboxsel.style.width = '800px';
            	msgbox.getNode().find('.ovk-diag-body').attr('style', 'height:550px;')

            	function dataURLtoBlob(dataURL) {
            		var arr = dataURL.split(','),
            			mime = arr[0].match(/:(.*?);/)[1],
            			bstr = atob(arr[1]),
            			n = bstr.length,
            			u8arr = new Uint8Array(n);
            		while (n--) {
            			u8arr[n] = bstr.charCodeAt(n);
            		}
            		return new Blob([u8arr], {
            			type: mime
   		});
	}
};

window.toggle_comment_textarea = function(id) {
    var el = document.getElementById('commentTextArea'+id);
    var wi = document.getElementById('wall-post-input'+id);
		if (el.style.display === "block") {
    	el.style.display = "none";
    	wi.blur();
    } else {
  	  el.style.display = "block";
  	  wi.focus();
		}
}

$(document).ready(function() {
  $(document).on('mousedown focus click', 'select', function(e) {
    e.preventDefault();
    showCustomMenu($(this));
  });
  
  function showCustomMenu($select) {
    $('.vkdropdown').remove();
    const rect = $select[0].getBoundingClientRect();
    const $menu = $('<div class="vkdropdown">')
      .css({
        position: 'absolute',
        left: (rect.left + scrollX - 1) + 'px',
        top: (rect.bottom + scrollY - 2) + 'px',
        width: rect.width + 'px',
        background: '#fff',
        border: '1px solid #ddd',
        'z-index': 9999,
        'max-height': '200px',
        'overflow-y': 'auto'
      })
      .appendTo('body');

    $select.find('option').each(function() {
      const $option = $(this);
      $('<div class="vkdropopt">')
        .text($option.text())
        .toggleClass('selected', $option.prop('selected'))
        .appendTo($menu);
    });

    $menu.on('click', '.vkdropopt', function() {
      const index = $(this).index();
	  $select.find('option').eq(index).prop('selected', true)
	  /* jquery для лохов */
	  $select[0].dispatchEvent(new Event('change', { bubbles: true }));
      $menu.remove();
    });

    setTimeout(() => {
      $(document).one('click', function(e) {
        if (!$(e.target).closest('.vkdropdown').length) {
          $menu.remove();
        }
      });
    }, 0);
  }
});

window.addEventListener('DOMContentLoaded', async () => {
u(document).on('click', `.ovk-diag-body #upload_container #uploadMusicPopup`, async (e) => {
    const current_upload_page = '/player/upload'
    let error = null
	let end_redir = ''
    u('.ovk-diag-body #lastStepButtons').addClass('lagged')
    for(const elem of u('.ovk-diag-body #lastStepContainers .upload_container_element').nodes) {
        if(!elem) {
			return
        }
        const elem_u = u(elem)
        const index = elem.dataset.index
        const file  = window.__audio_upload_page.files_list[index]
        if(!file || !index) {
            return
        }

        elem_u.addClass('lagged').find('.upload_container_name').addClass('uploading')
        // Upload process
        const fd = serializeForm(elem)
        fd.append('blob', file.file)
        fd.append('ajax', 1)
        fd.append('hash', window.router.csrf)
        const result = await fetch(current_upload_page, {
            method: 'POST',
            body: fd,
        })
        const result_text = await result.json()
        if(result_text.success) {
            end_redir = result_text.redirect_link
        } else {
            await makeError(escapeHtml(result_text.flash.message))
        }
        await sleep(6000)
        elem_u.remove()
    }
	audioUploadPopup.close();
	router.route(end_redir);
	
})
window.player.__highlightActiveTrack = function() {
    if(!window.player.isAtCurrentContextPage()) {
        if (u(`.tippy-content .audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}']`).length > 0) {
			u(`.tippy-content .audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
		}
    } else {
  	  u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
	}
}

$(document).on('mouseenter', '.menu_toggler_vkify', function(e) {
    const post_buttons = $(e.target).closest('.post-buttons')
    const wall_attachment_menu = post_buttons.find('#wallAttachmentMenu')
    if(wall_attachment_menu.is('.hidden')) {
        wall_attachment_menu.css({ opacity: 0 });
        wall_attachment_menu.toggleClass('hidden').fadeTo(250, 1);
		wall_attachment_menu.addClass('small');
    }
});
$(document).on('mouseenter', '.menu_toggler', function(e) {
    const post_buttons = $(e.target).closest('.post-buttons')
    const wall_attachment_menu = post_buttons.find('#wallAttachmentMenu')
    if(wall_attachment_menu.is('.hidden')) {
        wall_attachment_menu.css({ opacity: 0 });
        wall_attachment_menu.toggleClass('hidden').fadeTo(250, 1);
		wall_attachment_menu.addClass('small');
    }
});
$(document).on('mouseenter', '#wallAttachmentMenu #__audioAttachment', function(e) {
    const wall_attachment_menu = $(e.target).closest('#wallAttachmentMenu')
	wall_attachment_menu.addClass('full');
});
$(document).on('mouseleave', '#wallAttachmentMenu', function(e) {
    const wall_attachment_menu = $(e.target).closest('#wallAttachmentMenu')
    if(!wall_attachment_menu.is('.hidden')) {
		wall_attachment_menu.fadeTo(250, 0, function () {
			$(this).toggleClass('hidden');
			wall_attachment_menu.removeClass('full');
			wall_attachment_menu.removeClass('small');
		});
    }
});

window.vkifyGraffiti = function(e) {
	if (localStorage.getItem('vkify.graffitiType') == "1") {
		window.initVKGraffiti(e);
	} else {
		initGraffiti(e)
	}
}

player.__setFavicon = function (state = 'playing') {
    if(state == 'playing') {
        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["playiconnew"])
    } else {
        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["pauseiconnew"])
	}
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
        const nowplaying = document.querySelectorAll('.audioEntry.nowPlaying');
        if (window.player.is_closed == true) {
            headerMusicBtn.classList.add('closed');
			document.querySelector('#headerMusicLinkDiv a').style.color = "rgb(218, 225, 232)"
            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.remove('nowPaused')})};
        }
        if (window.player.audioPlayer.paused == true) {
            headerMusicBtn.classList.add('paused');
			document.querySelector('#headerMusicLinkDiv a').style.color = "rgb(218, 225, 232)"
            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.add('nowPaused')})};
        }
        else {
            headerMusicBtn.classList.remove('paused');
			document.querySelector('#headerMusicLinkDiv a').style.color = "#FFF"
            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.remove('nowPaused')})};
        }
    }, 50);
}
const friendsd = await window.OVKAPI.call("friends.get", {"user_id": window.openvk.current_id, "fields": "first_name,last_name,photo_50", "count": 100})
const friendsmap = friendsd.items
.slice(0, friendsd.count)
.map(item => ({
   id: item.id,
   photo_50: item.photo_50,
   first_name: item.first_name,
   last_name: item.last_name
}));
let friendshtml = ''
friendsmap.forEach((user, index) => {
   friendshtml += `
    <a onclick="tippy.hideAll();" href="/audios${user.id}">
        <div class="elem">
            <img src="${user.photo_50}">
            <div class="additionalInfo">
                <span class="name noOverflow">${escapeHtml(user.first_name)} ${escapeHtml(user.last_name)}</span>
            </div>
        </div>
    </a>
  `;
});

const mushtml = `
<div style="" class="rightlist">
    <div class="verticalGrayTabs">
        <div class="with_padding">
            <a onclick="tippy.hideAll();" href="/audios${window.openvk.current_id}">${tr('my_music')}</a>
            <a onclick="tippy.hideAll();" href="/player/upload">${tr('upload_audio')}</a>
            <a onclick="tippy.hideAll();" href="/search?section=audios" id="ki">${tr('audio_new')}</a>
            <a onclick="tippy.hideAll();" href="/search?section=audios&order=listens" id="ki">${tr('audio_popular')}</a>
            <hr>
            <a onclick="tippy.hideAll();" href="/playlists${window.openvk.current_id}" id="ki">${tr('my_playlists')}</a>
            <a onclick="tippy.hideAll();" href="/audios/newPlaylist">${tr('new_playlist')}</a>
        </div>
        <div class="friendsAudiosList">
        ${friendshtml}
        </div>
    </div>
</div>
<div class="bigPlayer ctx_place">
    <div class="bigPlayerWrapper">
        <div class="playButtons">
            <div onmousedown="this.classList.add('pressed')" onmouseup="this.classList.remove('pressed')" class="playButton musicIcon" data-tip="simple-black" data-title=`+tr('play_tip')+`></div>
            <div class="arrowsButtons">
                <div class="nextButton musicIcon" data-tip="simple-black" data-title=""></div>
                <div class="backButton musicIcon" data-tip="simple-black" data-title=""></div>
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
            <div class="repeatButton musicIcon" data-tip="simple-black" data-title=`+tr('repeat_tip')+`></div>
            <div class="shuffleButton musicIcon" data-tip="simple-black" data-title=`+tr('shuffle_tip')+`></div>
            <div class="deviceButton musicIcon" data-tip="simple-black" data-title=`+tr('mute_tip')+`></div>
        </div>
    </div>
</div>
<div class="vkifytracksplaceholder"></div>
    <div class="musfooter"><span class="playingNow"></span>
    <input onclick="tippy.hideAll();" value="${tr('close')}" class="button" type="submit">
</div>
`

tippy(document.querySelector('#headerMusicLinkDiv'), {
content: mushtml,
allowHTML: true,
trigger: 'click',
interactive: true,
placement: 'bottom',
theme: 'musicpopup',
width: 627,
arrow: true,
getReferenceClientRect: () => document.querySelector('#headerMusicBtn').getBoundingClientRect(),
maxWidth: 627,
offset: [-192, 17],
appendTo: document.body,
onHidden(instance) {
   window.musHtml = undefined;
},
async onMount(instance) {
window.musHtml = instance.popper;
   const placeholder = instance.popper.querySelector('.vkifytracksplaceholder') || instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
   let playingNowLnk
   if (placeholder) {
       const parsedAudio = parseAudio();
       const trackList = `${parsedAudio.scrollContainer}`;
       placeholder.outerHTML = trackList;
       playingNowLnk = parsedAudio.nowPlayingUrl.replace(/^\//, '');
       if (instance.popper.querySelector('.loadMore')) {
           instance.popper.querySelector('.musfooter .playingNow').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==">`;
           instance.popper.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();};
       }
   }
   u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
   u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
   window.player.__updateFace();
   window.player.audioPlayer.onvolumechange();
   const acont = instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
   const aplaying = acont?.querySelector('.audioEntry.nowPlaying');
   if (acont && aplaying) {
       const aplayingRect = aplaying.getBoundingClientRect();
       const acontRect = acont.getBoundingClientRect();
       acont.scrollTo({
           top: aplayingRect.top - acontRect.top + acont.scrollTop - (acont.clientHeight / 2) + (aplayingRect.height / 2),
           behavior: 'smooth'
       });
   }
   if (/^(playlist\d+_\d+|audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
       if (/^(audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
           try {
               let plName = (await window.OVKAPI.call("users.get", {"user_ids": Number(playingNowLnk.match(/[^\d]*(\d+)/)[1]), "fields": "first_name"}))[0].first_name ;
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${window.vkifylang.currentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('audios')} <b>${escapeHtml(plName)}</b></a>`
           } catch(error)
           {
               console.error('failed to load playing now', error)
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
           }
       } if (/^(playlist\d+_\d+)(\?.*)?$/.test(playingNowLnk)) {
           try {
               let plName = (await window.OVKAPI.call("audio.getAlbums", {"owner_id": Number(playingNowLnk.match(/(\d+)_(\d+)/)[1])})).items.find(item => item.id === Number(playingNowLnk.match(/(\d+)_(\d+)/)[2])).title;
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${window.vkifylang.currentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('playlist')} <b>${escapeHtml(plName)}</b></a>`
           } catch(error)
           {
               console.error('failed to load playing now', error)
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
           }
       }
   } else {
       instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
   }
}});

function bindajtip(mushtml) {
tippy.delegate("body", {target: '#aj_player_track',
   content: mushtml,
   allowHTML: true,
   trigger: 'click',
   interactive: true,
   placement: 'left',
   theme: 'musicpopup',
   arrow: true,
   getReferenceClientRect: () => document.querySelector('#ajax_audio_player').getBoundingClientRect(),
   maxWidth: 627,
   width: 627,
   offset: [220, 19],
   appendTo: document.body,
   popperOptions: {
       strategy: 'fixed'
   },
   onHidden(instance) {
       window.musHtml = undefined;
   },
   async onMount(instance) {
    window.musHtml = instance.popper;
    const style = document.createElement("style");
    style.id = "fullajplayerstyles";
    style.textContent = `
            #ajax_audio_player {
                background-color: #66819e !important;
                opacity: 1 !important;
            }
            #aj_player_track_name * {
                color: #FFF !important;
            }
            #ajax_audio_player #aj_player_play #aj_player_play_btn.paused {
              background-position: -203px -28px !important;
            }
            #ajax_audio_player #aj_player_play #aj_player_play_btn {
              background-position: -183px -28px !important;
            }
			#ajax_audio_player #aj_player_close_btn {
			  filter: brightness(100);
			}
        `;
    document.head.appendChild(style);
       instance.popperInstance.update()
       const placeholder = instance.popper.querySelector('.vkifytracksplaceholder') || instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
       let playingNowLnk
       if (placeholder) {
           const parsedAudio = parseAudio();
           const trackList = `${parsedAudio.scrollContainer}`;
           placeholder.outerHTML = trackList;
           playingNowLnk = parsedAudio.nowPlayingUrl.replace(/^\//, '');
           if (instance.popper.querySelector('.loadMore')) {
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==">`;
               instance.popper.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();};
           }
       }
       u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
       u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying');
       window.player.__updateFace();
       window.player.audioPlayer.onvolumechange();
       const acont = instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
       const aplaying = acont?.querySelector('.audioEntry.nowPlaying');
       if (acont && aplaying) {
           const aplayingRect = aplaying.getBoundingClientRect();
           const acontRect = acont.getBoundingClientRect();
           acont.scrollTo({
               top: aplayingRect.top - acontRect.top + acont.scrollTop - (acont.clientHeight / 2) + (aplayingRect.height / 2),
               behavior: 'smooth'
           });
       }
       if (/^(playlist\d+_\d+|audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
           if (/^(audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
               try {
                   let plName = (await window.OVKAPI.call("users.get", {"user_ids": Number(playingNowLnk.match(/[^\d]*(\d+)/)[1]), "fields": "first_name"}))[0].first_name;
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${window.vkifylang.currentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('audios')} <b>${escapeHtml(plName)}</b></a>`
               } catch(error)
               {
                   console.error('failed to load playing now', error)
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
               }
           } if (/^(playlist\d+_\d+)(\?.*)?$/.test(playingNowLnk)) {
               try {
                   let plName = (await window.OVKAPI.call("audio.getAlbums", {"owner_id": Number(playingNowLnk.match(/_(\d+)$/)[0])})).items.find(item => item.id === Number(playingNowLnk.match(/_(\d+)$/)[1])).title;
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${window.vkifylang.currentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('playlist')} <b>${escapeHtml(plName)}</b></a>`
               } catch(error)
               {
                   console.error('failed to load playing now', error)
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
               }
           }
       } else {
           instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
       }
   },
   onHide(instance) {
       document.querySelector("#fullajplayerstyles").remove()
   }
    });
};
bindajtip(mushtml);

$(document).on("click", ".statusButton.musicIcon", function (event) {
	event.preventDefault();
	$(this).toggleClass("pressed");
	const formData = new FormData();
	formData.append("status", document.forms['status_popup_form'].status.value);
	formData.append("broadcast", $(this).hasClass("pressed") ? 1 : 0);
	formData.append("hash", document.forms['status_popup_form'].hash.value);

	// Отправляем AJAX-запрос
	$.ajax({
		url: "/edit?act=status",
		method: "POST",
		processData: false,
		contentType: false,
		data: formData,
	});
});

CMessageBox.prototype.__getTemplate = function() {
        return u(
`<div class="ovk-diag-cont ovk-msg-all" data-id="${this.id}">
      <div class="ovk-diag">
         <div class="ovk-diag-head">${this.title}<div class="ovk-diag-head-close" onclick="CMessageBox?.prototype.__close2()">${tr('close')}</div></div>
         <div class="ovk-diag-body">${this.body}</div>
         <div class="ovk-diag-action"></div>
      </div>
 </div>`)
};

CMessageBox.prototype.__close2 = async function() {
   const msg = window.messagebox_stack[window.messagebox_stack.length - 1]
   if(!msg) {
      return
   }
   if(msg.close_on_buttons) {
      msg.close()
      return
   }
   if(msg.warn_on_exit) {
      const res = await msg.__showCloseConfirmationDialog()
      if(res === true) {
         msg.close()
      }
   }
}
u(document).on('mouseover mousemove mouseout', `div[data-tip='simple-black']`, (e) => {
    if(e.target.dataset.allow_mousemove != '1' && e.type == 'mousemove') {
        return
    }

    if (e.type === 'mouseout') {
		$('.tip_result_black_el').removeClass('shown');
		setTimeout(() => {u('.tip_result_black_el').remove();}, 50)
        return;
    }

    const target = u(e.target);
    const title  = target.attr('data-title')
    if(title == '') {
        return
    }
	const offset = target.nodes[0].getBoundingClientRect()
  u('body').nodes[0].insertAdjacentHTML('afterbegin', `
	<div class='tip_result_black_el' style='left:${offset.left-(offset.width/2)+window.scrollX}px;top:${offset.top-25+window.scrollY}px;'>
        <div class='tip_result_black'>
            ${escapeHtml(title)}
        </div>
	</div>
    `)
	setTimeout(() => {$('.tip_result_black_el').addClass('shown');}, 0)
})

window.router.route = async function(params = {}) {
	if(typeof params == 'string') {
		params = {
			url: params
		}
	}

	const old_url = location.href
	let url = params.url
	if(url.indexOf(location.origin)) {
		url = location.origin + url
	}

	if((localStorage.getItem('ux.disable_ajax_routing') ?? 0) == 1 || window.openvk.current_id == 0) {
		window.location.assign(url)
		return
	}
	
	window.favloader.start();

	if(this.prev_page_html && this.prev_page_html.pathname != location.pathname) {
		this.prev_page_html = null
	}
	
	const push_url = params.push_state ?? true
	const next_page_url = new URL(url)
	if(push_url) {
		history.pushState({'from_router': 1}, '', url)
	} else {
		history.replaceState({'from_router': 1}, '', url)
	}

	const parser = new DOMParser
	const next_page_request = await fetch(next_page_url, {
		method: 'AJAX',
		referrer: old_url,
		headers: {
			'X-OpenVK-Ajax-Query': '1',
		}
	})
	const next_page_text = await next_page_request.text()
	const parsed_content = parser.parseFromString(next_page_text, 'text/html')
	if(next_page_request.redirected) {
		history.replaceState({'from_router': 1}, '', next_page_request.url)
	}
	
	this.__closeMsgs()
	this.__unlinkObservers()

	try {
		this.__appendPage(parsed_content)
		await this.__integratePage()
	} catch(e) {
		console.error(e)
		next_page_url.searchParams.delete('al', 1)
		location.assign(next_page_url)
	}
	window.favloader.stop();
}
});

const searchbox = document.querySelector('#search_box form input[type="search"]');
var searchTimeout;
var fri
searchbox.onfocus = function() {if (!(searchbox.value.length < 3)) {document.querySelector('#searchBoxFastTips').style.display = "block";}
                                else {document.querySelector('#searchBoxFastTips').style.display = "none";}}
searchbox.onblur = function() {
    if (searchbox.value == "") {if (friendson > 0) {document.querySelector('.friendslink').style.display = "unset";}}
    else {document.querySelector('.friendslink').style.display = "none";}}
searchbox.oninput = async function() {
    if (!(searchbox.value.length < 3)) {document.querySelector('#searchBoxFastTips').style.display = "block";
                                        document.querySelector('.friendslink').style.display = "none";
                                        clearTimeout(searchTimeout);
                                        searchTimeout = setTimeout(async () => {
                                            const srq = document.querySelector('#search_box form input[type="search"]').value;
                                            document.querySelector('#searchBoxFastTips').innerHTML = `<div class="fastpreload"></div>`;
                                            try {
                                            const groupsd = await window.OVKAPI.call("groups.search", {"q": srq})
                                            const usersd = await window.OVKAPI.call("users.search", {"q": srq, "fields": "photo_50"})
                                            const audiosd = await window.OVKAPI.call("audio.search", {"q": srq})
                                            const docsd = await window.OVKAPI.call("docs.search", {"q": srq})
                                            if (usersd.count > 5 ) {
                                                var minusers = usersd.items
                                                .slice(0, 5)
                                                .map(item => ({
                                                    id: item.id,
                                                    photo_50: item.photo_50,
                                                    first_name: item.first_name
                                                }));
                                            } else {
                                                var minusers = usersd.items
                                                .slice(0, usersd.count)
                                                .map(item => ({
                                                    id: item.id,
                                                    photo_50: item.photo_50,
                                                    first_name: item.first_name
                                                }));
                                            }
                                            let fastusers = ""
                                            minusers.forEach((user, index) => {
                                                fastusers += `
                                                            <a class="fastavatarlnk" href="/id${user.id}">
                                                              <img class="fastavatar" src="${user.photo_50}">
                                                              <span>${escapeHtml(user.first_name)}</span>
                                                            </a>
                                                          `;
                                            });
                                            document.querySelector('#searchBoxFastTips').innerHTML = `
                                <div>
                                    <div class="useravas">
                                        ${fastusers}
                                    </div>
                                    <a href="/search?section=users&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('users')} <b>${escapeHtml(srq)}</b> (${usersd.count})
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=groups&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('groups')} <b>${escapeHtml(srq)}</b> (${groupsd.count})
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=audios&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('audios')} <b>${escapeHtml(srq)}</b> (${audiosd.count})
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=docs&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('documents')} <b>${escapeHtml(srq)}</b> (${docsd.count})
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                            `} catch (error) {
                                console.error('failed to load search tip results, using simple template:', error)
                                document.querySelector('#searchBoxFastTips').innerHTML = `
                                <div>
                                    <a href="/search?section=users&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('users')} <b>${escapeHtml(srq)}</b>
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=groups&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('groups')} <b>${escapeHtml(srq)}</b>
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=audios&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('audios')} <b>${escapeHtml(srq)}</b>
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="/search?section=docs&q=${srq}">
                                        <div class="fastresult">
                                            ${tr('documents')} <b>${escapeHtml(srq)}</b>
                                            <div class="arrow"></div>
                                        </div>
                                    </a>
                                </div>
                            `}
                                        }, 1500);}
    else {document.querySelector('#searchBoxFastTips').style.display = "none";
	if (friendson > 0) {document.querySelector('.friendslink').style.display = "unset";}}}
/* я украл эту хрень из исходников, хз как оно работает лол */
u(`#search_box form input[type="search"]` || `#search_box #searchBoxFastTips a`).on('blur', (e) => { {
    setTimeout(() => {
        const focusedElement = document.activeElement;

        if (!u(focusedElement).is('#search_box form input[type="search"]')) {
            $('#searchBoxFastTips').css("display", "none")
        }
    }, 250);
} /* ладно я понял как оно работает и поэтому я в целом убрал время ОЖИДания */
                                                                                                 })
u(`#search_box form input[type="search"]`).off('focus');


async function changeStatus() {
    const status = document.status_popup_form.status.value;
    const broadcast = document.status_popup_form.broadcast.checked;

    document.status_popup_form.submit.innerHTML = "<div class=\"button-loading\"></div>";
    document.status_popup_form.submit.disabled = true;

    const formData = new FormData();
    formData.append("status", status);
    formData.append("broadcast", Number(broadcast));
    formData.append("hash", document.status_popup_form.hash.value);
    const response = await ky.post("/edit?act=status", {body: formData});

    if(!parseAjaxResponse(await response.text())) {
        document.status_popup_form.submit.innerHTML = tr("send");
        document.status_popup_form.submit.disabled = false;
        return;
    }

    if(document.status_popup_form.status.value === "") {
        document.querySelector("#page_status_text").innerHTML = `${tr("change_status")}`;
        document.querySelector("#page_status_text").className = "edit_link page_status_edit_button";
    } else {
        document.querySelector("#page_status_text").innerHTML = escapeHtml(status);
        document.querySelector("#page_status_text").className = "page_status page_status_edit_button";
    }

    setStatusEditorShown(false);
    document.status_popup_form.submit.innerHTML = tr("send");
    document.status_popup_form.submit.disabled = false;
}

function switchProfileInfo() {
	const infoblock = document.querySelector('.profileinfoblock')
	const infobtn = document.querySelector('#showFullInfoButton')
	if (infoblock && infobtn) {
		if (infoblock.style.display === "none") {
			infoblock.style.display = "block"
			infobtn.text = tr('close_comments')
		} else {
			infoblock.style.display = "none"
			infobtn.text = tr('show_comments')
		}
	}
}

const today = new Date();
if (today.getDate() === 1 && today.getMonth() === 3) {
	const doge = document.createElement('script');
	doge.setAttribute('src','/themepack/vkify/2.0.0.0/resource/doge.js');
	document.head.appendChild(doge);
	u(document).on('click', '.post-like-button', function () {
		if (u(this).find('#liked').length) {Doge.show();}
	});
}

window.openJsSettings = function() {
    const CURRENT_AUTO_SCROLL = Number(localStorage.getItem('ux.auto_scroll') ?? 1)
    const CURRENT_DISABLE_AJAX = Number(localStorage.getItem('ux.disable_ajax_routing') ?? 0)
		let settings_main = document.querySelector("#_js_settings_main");

		if (settings_main) {settings_main.remove()} else {

   		 document.querySelector("#_js_settings").insertAdjacentHTML('beforeend', `
	<tbody id="_js_settings_main">
        <tr>
            <td width="120" valign="top">
                <span class="nobold">
                    <input type='checkbox' data-act='localstorage_item' data-inverse="1" name='ux.disable_ajax_routing' id="ux.disable_ajax_routing" ${CURRENT_DISABLE_AJAX == 0 ? 'checked' : ''}>
                </span>
            </td>
            <td>
                <label for='ux.disable_ajax_routing'>${tr('ajax_routing')}</label>
            </td>
        </tr>
        <tr>
            <td width="120" valign="top">
                <span class="nobold">
                    <input type='checkbox' data-act='localstorage_item' name='ux.auto_scroll' id="ux.auto_scroll" ${CURRENT_AUTO_SCROLL == 1 ? 'checked' : ''}>
                </span>
            </td>
            <td>
                <label for='ux.auto_scroll'>${tr('auto_scroll')}</label>
            </td>
        </tr>    
	</tbody>`
  	 	 )
  }
}

window.router.applyTweaks = function() {
	//сори мрильюев кнш, но так надо
}

u(document).on('click', '.post a.delete', function (e) {
    e.preventDefault();
	e.stopPropagation();
	
    MessageBox(tr("confirm"), `
        ${window.vkifylang.postremove}
    `, [tr("yes"), tr("cancel")], [
        () => {
			const url = this.getAttribute('href');
			fetch(url, {
				method: 'POST'
			})
			.then(() => {
				this.closest(".post").outerHTML = `<div class="post_removed">${window.vkifylang.postremoved}</div>`;
			})
			.catch(err => {
				console.error(err);
			});
        },
        Function.noop
    ]);
});
