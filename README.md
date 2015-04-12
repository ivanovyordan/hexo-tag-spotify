# About #

A [Hexo](http://hexo.io/) tag plugin which makes it easy to embed any type of [Spotify](https://www.spotify.com) content.


# Installation #

```sh
npm install --save hexo-tag-spotify
```


# Usage #

Add the tag markup to a post with the url of the content you want to embed.

1. Example with Spotify URI:

```
{% spotify spotify:track:7kkRhGDCAVd5YVoieTChxG %}
```

2. Example with HTTP link:

```
{% spotify http://open.spotify.com/artist/5p9CTsn5ueGU4oScNX1axu %}
```

# Configuration #

You can configure the size, theme and view of the widgets.

Allowed values are:

1. size
	* `large` (default)
	* `compact`
	* `<width>x<height>`
2. theme
	* `dark` (default)
	* `light`
3. view
	* `list` (default)
	* `cover`

Example configuration:

```yml
spotify:
  size: 'large'
  theme: 'light'
  view: 'list'
```