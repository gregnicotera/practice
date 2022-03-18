function domainName(url){
	return url.replace(/.*\/\/|www.|\..+/gi,'')
}