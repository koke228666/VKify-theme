let locales = {
	'en': {
		"headmusic": "music",
		"headpeople": "people",
		"headgroups": "groups",
		"headgames": "games",
		"currentlyplaying": "Currently playing: ",
		"loadmore": "Load more",
		"graffitiflushhistory": "Clear",
		"graffitibackhistory": "Cancel",
		"graffiticolor": "Color:",
		"graffitiopacity": "Opacity:",
		"graffitithickness": "Thickness:",
		"usetruegraffiti": "Use graffiti from VKontakte",
		"ovkhat": "Use OpenVK logo in header",
		"httpwarn": "This OpenVK instance uses insecure <b>http</b> protocol.<br>Please, migrate to <b>https</b>.",
		"httpwarnovk": "You are using an insecure protocol: <b>http</b>. Please always use <b>https</b>.<br><a href='https://ovk.to'>Switch to https »</a>",
		"postremoved": "Message removed.",
		"postremove": "Are you sure you want to remove that message?"
	},
	'ru': {
		"headmusic": "музыка",
		"headpeople": "люди",
		"headgroups": "сообщества",
		"headgames": "игры",
		"currentlyplaying": "Сейчас воспроизводится: ",
		"loadmore": "Загрузить ещё",
		"graffitiflushhistory": "Очистить",
		"graffitibackhistory": "Отменить",
		"graffiticolor": "Цвет:",
		"graffitiopacity": "Интенсивность:",
		"graffitithickness": "Толщина:",
		"usetruegraffiti": "Использовать граффити из ВКонтакте",
		"ovkhat": "Использовать лого OpenVK в шапочке",
		"httpwarn": "Этот инстанс использует небезопасный протокол <b>http</b>.<br>Пожалуйста, смените его на <b>https</b>.",
		"httpwarnovk": "Вы используете небезопасный протокол <b>http</b>. Пожалуйста, всегда используйте <b>https</b>.<br><a href='https://ovk.to'>Перейти на https »</a>",
		"postremoved": "Сообщение удалено.",
		"postremove": "Вы действительно хотите удалить это сообщение?"
	}
}

window.vkifylocalize = function(langcode) {
	if (!(langcode in locales)) {
		try {
		fetch(`/themepack/vkify/2.0.0.0/resource/langs/${langcode}.json`)
			.then(response => {
				if (!response.ok) {
					console.error('failed to load vkify theme localization:', response.status, ' using en...');
					langcode = 'en';
					patchpage(langcode);
					return;
				}
				return response.json();
			})
			.then(data => {
				if (data) {
					locales[langcode] = data;
					patchpage(langcode);
				}
			})
		} catch(error) {
			console.error('failed to load vkify theme localization:', error)
			langcode = 'en';
			patchpage(langcode);
		}
	} else {
		patchpage(langcode);
	}
}

function patchpage(langcode) {
	window.vkifylang = locales[langcode];
	document.querySelector('vkifyloc[name="people"]').outerHTML = locales[langcode].headpeople;	
	document.querySelector('vkifyloc[name="groups"]').outerHTML = locales[langcode].headgroups;	
	document.querySelector('vkifyloc[name="games"]').outerHTML = locales[langcode].headgames;	
	document.querySelector('vkifyloc[name="music"]').outerHTML = locales[langcode].headmusic;
	if (document.querySelector('vkifyloc[name="graffitiswitch"]')) {
		document.querySelector('vkifyloc[name="graffitiswitch"]').outerHTML = locales[langcode].usetruegraffiti;
	}
	if (document.querySelector('vkifyloc[name="ovkhat"]')) {
		document.querySelector('vkifyloc[name="ovkhat"]').outerHTML = locales[langcode].ovkhat;
	}
	if (location.protocol.includes('http:')) {
		if (location.host.includes('openvk.xyz')) {
			showBlueWarning(window.vkifylang.httpwarnovk);
		} else {
			showBlueWarning(window.vkifylang.httpwarn);
		}
	}
}
