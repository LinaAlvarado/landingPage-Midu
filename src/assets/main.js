const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be2fbb20f6mshdb47a5061d929e9p1fdfb7jsn48d0e3fbf88e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function getvideos (urlApi, optionsApi){
        const response = await fetch(urlApi, optionsApi);
        const result = await response.json();
        return result;
}

(async ()=>{
    try{
        const videos = await getvideos(url, options)
        let view = `
        ${videos.items.map( video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>`).slice(0,4).join('')}
       `
       content.innerHTML = view
    }
    
    catch (error){
    console.log(error)
    }

})();