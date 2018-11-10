hexo.extend.tag.register('spotify', function(args) {
	var url = args[0];
	var src = 'https://embed.spotify.com/?uri=';
	var isTrack = true;
	var size = null;

	var config = hexo.config.spotify || {};
	config.size = config.size || 'large';
	config.theme = config.theme || 'dark';
	config.view = config.view || 'list';

	if(url.indexOf('http://open.spotify.com/') === 0) {
		url = url.replace('http://open.spotify.com/', '');
		url = url.replace('/', ':');
		url = 'spotify:' + url;
	}

	size = config.size;
	if(config.size === 'large') {
		size = '300x380';
	} else if(size === 'compact') {
		size = '300x80';
	}
	size = size.split('x');

	isTrack = url.split(':')[1] === 'track';
	src += encodeURIComponent(url);

	if(!isTrack && config.theme === 'light') {
		src += '&amp;theme=white';
	}

	if(!isTrack && config.view === 'cover') {
		src += '&amp;view=coverart';
	}

	var tag = '<iframe src="' + src + '"';
	tag += ' width="' + size[0] + '" height="' + size[1] + '"';
	tag += ' frameborder="0" allowtransparency="true"';
	tag += ' class="spotify">';
	tag += '</iframe>';

	return tag;
});