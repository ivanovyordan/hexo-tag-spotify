function getUrl(url) {
  [_, type, key] = url.replace(/(^\w+:|^)\/\//, '').replace('/', ':').split(':');

  return `https://open.spotify.com/embed/${type}/${key}`;
}

function getSize(config) {
  let size = config.size || 'large';

  if(config.size === 'large') {
    size = '300x380';
  } else if(size === 'compact') {
    size = '300x80';
  }

  return size.split('x');
}

function renderSpotify(args) {
  const config = hexo.config.spotify || {};
  const url = getUrl(args[0]);
  const [width, height] = getSize(config);

  return `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowtransparency="allowtransparency" allow="encrypted-media"></iframe>`;
}

hexo.extend.tag.register('spotify', renderSpotify);
