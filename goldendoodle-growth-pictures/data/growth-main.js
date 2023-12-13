
for (let index = 0; index < GrowthGallery.length; index++) {
    document.getElementById('swiper-wrapper').innerHTML += '<div class="swiper-slide p-4 "> <div class="flex flex-col rounded-lg shadow-lg overflow-hidden border-2"> <div class="flex-shrink-0"> <a @click="$dispatch(\'lightbox\',  {  imgModalSrc: \'' + GrowthGallery[index] + '\', imgModalAlt: \'First Image\', imgModalDesc: \'Random Image One Description\' })" class="cursor-pointer"> <img class="h-full w-full object-cover" src="' + GrowthGallery[index] + '" alt=""> </a> </div> </div> </div>'
}