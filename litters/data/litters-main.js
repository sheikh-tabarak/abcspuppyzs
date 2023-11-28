
function showLitter() {
    document.getElementById('litter-popup').classList.remove('hidden');
    document.getElementById('darkbackground').classList.remove('hidden');
    document.getElementById('body').classList.add('overflow-hidden')
}

function hideLitter() {
    document.getElementById('litter-popup').classList.add('hidden');
    document.getElementById('body').classList.remove('overflow-hidden')
    document.getElementById('darkbackground').classList.add('hidden');
}




function loadCards() {
    for (let index = 0; index < Litters.length; index++) {
        if (Litters[index].mode === 0) {
            document.getElementById('litter-container').innerHTML += '<div class="shadow m-8 py-10 border-[1px] rounded flex flex-wrap justify-center items-center  lg:divide-y-0 lg:divide-x-2"> <div class="w-[100%] md:w-[100%] lg:w-[70%] lg:px-10"> <div class="text-2xl font-extrabold px-10 lg:px-0 text-center lg:text-left ">' + Litters[index].name + '</div>  <table class="py-4 w-full mt-2"> <thead> </thead><tbody id="prices-container"></tbody> <tbody class="">  <tr class="even:bg-white odd:bg-gray-50  border-b border-t "> <th scope="row" class="px-4 py-2 w-[35%] font-bold text-gray-900 text-right "> Litter Type: </th> <td class="px-4 py-2 text-left">' + Litters[index].type + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900 text-right "> Average Weight: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].avg_weight + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Litter Status: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].status.text + '</td> </tr>         <tr id="expected-or-born" class="even:bg-white odd:bg-gray-50  border-b "> </tr>             <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Go-Home Weekend: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].goHome + ' </td> </tr></tbody> </table> </div> <div class="w-[100%] lg:w-[30%] px-5"> <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-300"> <li class="py-3 sm:py-4"> <div class="flex flex-wrap justify-center lg:justify-start items-center"> <div class="relative"> <div onclick="showMainPopup(' + index + ')" class="absolute flex justify-center items-center right-10 top-10 cursor-pointer"> <div class=" absolute w-10 h-10 bg-white  rounded-full animate-ping"> </div> <div class="absolute"><svg class="hover:scale-[1.1] transition duration-1000" width="40px" height="40px" viewBox="0 0 24 24" fill="gray" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" fill="none" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 11.4477 7.44772 11 8 11H8.01C8.56228 11 9.01 11.4477 9.01 12C9.01 12.5523 8.56228 13 8.01 13H8C7.44772 13 7 12.5523 7 12ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H16.01C16.5623 13 17.01 12.5523 17.01 12C17.01 11.4477 16.5623 11 16.01 11H16ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="white" /> </svg> </div> </div> <img class="w-96 rounded-lg" src="' + Litters[index].image + '" alt="Neil image"> </div> </li> </ul> </div> </div>';

            for (let inner_index = 0; inner_index < Litters[index].prices.length; inner_index++) {
                if (Litters[index].prices[inner_index].price != "") {
                    document.getElementById('prices-container').innerHTML += '<tr class="even:bg-white odd:bg-gray-50  border-b border-t"> <th scope="row" class="px-4 py-2 font-bold text-gray-900 text-right "> ' + Litters[index].prices[inner_index].title + ' </th> <td class="px-4 py-2 text-left">' + Litters[index].prices[inner_index].price + '<span class="text-wrap pl-2" id="availability-badge-' + inner_index + '"></span> </td> </tr>'
                    if (Litters[index].prices[inner_index].priority != "" && Litters[index].prices[inner_index].price != "") {
                        document.getElementById('availability-badge-' + inner_index).innerHTML += '<span class="inline-flex items-center gap-x-1.5 py-[3px] px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-600">' + Litters[index].prices[inner_index].priority + ' </span>'
                    }
                }

            }

            if (Litters[index].status.mode == 'expecting') {

                document.getElementById('expected-or-born').innerHTML = '<th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Expecting: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].expected + ' </td> '
            }
            else {
                document.getElementById('expected-or-born').innerHTML += '<th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Birthday: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].birthday.text + '<br>(' + calculateWeeksOld(Litters[index].birthday.value) + ' Weeks old)</td> '

            }
        }
        else {
            document.getElementById('litter-container').innerHTML += '<div class="shadow m-8 py-10 border-[1px] rounded flex flex-wrap justify-center divide-y-2 lg:divide-y-0 lg:divide-x-2"> <div class="w-[100%] md:w-[100%] lg:w-[55%] lg:px-10"> <div class="text-2xl font-extrabold px-10 lg:px-0 text-center lg:text-left ">' + Litters[index].name + '</div>  <table class=" my-4 w-full"> <thead> </thead> <tbody class=""> <tr class="even:bg-white odd:bg-gray-50  border-b border-t "> <th scope="row" class="w-[35%] px-4 py-2 font-bold text-gray-900  text-right"> Litter Type: </th> <td class="px-4 py-2 text-left">' + Litters[index].type + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b border-t"> <th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Average Weight: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].avg_weight + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Litter Status: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].status.text + '</td> </tr>  <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  text-right"> Go-Home Weekend: </th> <td class="px-4 py-2 text-left"> ' + Litters[index].goHome + ' </td> </tr></tbody> </table> <div class="px-4 pb-4" id="thumbnail-container"></div> </div> <div class="w-[100%] lg:w-[45%] "><div class="text-2xl font-extrabold px-10  py-5 text-left "> All Puppies </div> <ul id="multiple-litters" class="divide-y divide-gray-200 "></ul> </div> </div>'

            for (let innerindex = 0; innerindex < Litters[index].puppies.length; innerindex++) {
                document.getElementById('multiple-litters').innerHTML += '<li onclick="showSubPopup(' + index + ',' + innerindex + ')" class="px-8 mx-2 py-3 sm:py-4 cursor-pointer hover:bg-gray-100 rounded-lg"> <div class="flex items-center"> <div class="flex-shrink-0"> <img class="w-24 h-24 rounded-full" src="' + Litters[index].puppies[innerindex].image + '" alt="' + Litters[index].puppies[innerindex].name + '"> </div> <div class="flex-1 min-w-0 ms-4"> <p class="text-sm font-extrabold  text-gray-900 ">' + Litters[index].puppies[innerindex].name + ' </p> <p id="availability-badge' + innerindex + '" class="text-sm text-gray-500 truncate py-2"></p> <p class="text-sm text-gray-600">' + calculateWeeksOld(Litters[index].puppies[innerindex].birthday.value) + ' Weeks old </p></div> <div> <div class="inline-flex items-center text-sm lg:text-lg font-semibold text-gray-900">  ' + Litters[index].puppies[innerindex].price + ' </div> </div> </div> </li>'

                // Availability Badge !
                if (Litters[index].puppies[innerindex].availablity == "Available") {
                    document.getElementById('availability-badge' + innerindex).innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-600">' + Litters[index].puppies[innerindex].availablity + '</span>'

                }
                else {
                    document.getElementById('availability-badge' + innerindex).innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-red-100 text-red-600">' + Litters[index].puppies[innerindex].availablity + '</span>'

                }
            }
            if (Litters[index].thumbnail.type == "video") {
                document.getElementById('thumbnail-container').innerHTML = ' <video controls poster="' + Litters[index].thumbnail.poster + '" class="w-full h-48 md:h-[19rem] lg:h-[19rem] object-cover rounded-lg"> <source src=' + Litters[index].thumbnail.link + ' type="video/mp4"> Your browser does not support the video tag. </video>'
            }
        }
    }
}
loadCards();


function showMainPopup(MainItemId) {
    console.log(MainItemId);
    document.getElementById('litter-popup-view').innerHTML = '<div id="litter-popup" data-tabs-toggle="{parentTabContentSelector}" class="hidden fixed bg-white z-20 top-16 right-8 lg:right-40 left-8 lg:left-40 bottom-16 rounded-lg flex justify-center items-center shadow-lg overflow-y-auto"> <div class="absolute right-5 top-5"> <svg onclick="hideLitter()" class="text-white fill-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 50 50"> <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"> </path> </svg> </div> <div class="absolute left-auto top-4 lg:top-0 flex flex-wrap my-10 justify-center  w-full  px-8"> <div class="w-[100%] lg:w-[45%] text-center lg:text-left  pb-4"> <img class=" rounded" src="' + Litters[MainItemId].image + '" alt=""> </div> <div class=" w-[100%] lg:w-[55%]  lg:px-4"> <div class=" items-center"> <div> <h2 class="text-2xl py-2 lg:text-5xl">' + Litters[MainItemId].name + '</h2> </div> </div> </div> <div class="pt-4 w-full" id="litter-tabs"> <div x-data=" { openTab: 2, activeClasses: \'bg-[#186C91] text-white\', inactiveClasses: \'text-body-color bg-white hover:bg-[#186C91] hover:text-white\', } " class="w-full mb-14"> <div class="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4 sm:flex-row">  <a href="javascript:void(0)" @click="openTab = 2" :class="openTab === 2 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Meet Mom </a> <a href="javascript:void(0)" @click="openTab = 3" :class="openTab === 3 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Meet Dad </a><a href="javascript:void(0)" @click="openTab = 1" :class="openTab === 1 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Previous Litters </a> </div> <div>  <div x-show="openTab === 1" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div id="previous-litter-gallery" class="flex gap-1 lg:gap-4 flex-wrap py-4 justify-stretch"> </div> </div> <div x-show="openTab === 2" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div class=""> <table class="text-left my-4 w-full"> <thead> </thead> <tbody class=""> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Name: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].mname + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Height: </th> <td class="px-4 py-2">' + Litters[MainItemId].mheight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Weight: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].mweight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Genetics: </th> <td class="px-4 py-2"> <div class="flex flex-wrap gap-4"><a href="' + Litters[MainItemId].mdna + '"> <button class=" flex gap-1 bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Mother\'s DNA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> <a href="' + Litters[MainItemId].mofa + '"> <button class="flex gap-1  bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Mother\'s OFA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> </div> </td> </tr> </tbody> </table> <div id="mom-image-container" class="flex flex-wrap gap-1 lg:gap-4 justify-center"> </div> </div> </div> <div x-show="openTab === 3" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div class=""> <table class="text-left my-4 w-full"> <thead> </thead> <tbody class=""> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Name: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].fname + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Height: </th> <td class="px-4 py-2">' + Litters[MainItemId].fheight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Weight: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].fweight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Genetics: </th> <td class="px-4 py-2"> <div class="flex flex-wrap gap-4"><a href="' + Litters[MainItemId].fdna + '"> <button class=" flex gap-1 bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Father\'s DNA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> <a href="' + Litters[MainItemId].fofa + '"> <button class="flex gap-1  bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Father\'s OFA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> </div> </td> </tr> </tbody> </table> <div id="dad-image-container" class="flex flex-wrap gap-1 lg:gap-4 justify-center"> </div> </div> </div> </div> </div> </div> <div class="fixed bg-white z-20 right-8 lg:right-40 left-8 lg:left-40 bottom-16 px-8 py-4 rounded-lg"> <a href="pages/chat.html"><button class="w-full bg-[#186C91] p-4 text-white">INQUIRE NOW</button> </div> </div></a>'

    for (let index = 0; index < Litters[MainItemId].previousLitter.length; index++) {
        document.getElementById('previous-litter-gallery').innerHTML += '<div class="   w-[48%] md:w-[23%] lg:w-[23%]"> <img class="rounded-t-lg"  src="' + Litters[MainItemId].previousLitter[index].image + '" alt=""> <div class= "p-2 rounded bg-white text-black shadow-lg text-center" >' + Litters[MainItemId].previousLitter[index].text + '</div></div>'
    }

    for (let index = 0; index < Litters[MainItemId].mimages.length; index++) {
        document.getElementById('mom-image-container').innerHTML += '<img class="rounded-t-lg w-[48%] md:w-[23%] lg:w-[23%]"  src="' + Litters[MainItemId].mimages[index] + '" alt="">'
    }

    for (let index = 0; index < Litters[MainItemId].fimages.length; index++) {
        document.getElementById('dad-image-container').innerHTML += '<img class="rounded-t-lg w-[48%] md:w-[23%] lg:w-[23%]"  src="' + Litters[MainItemId].fimages[index] + '" alt="">'
    }

    // if (Litters[MainItemId].available == "Available") {
    //     document.getElementById('availability-badge').innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-600">' + Litters[MainItemId].available + '</span>'
    // }
    // else {
    //     document.getElementById('availability-badge').innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-red-100 text-red-600">' + Litters[MainItemId].available + '</span>'

    // }
    showLitter();
}


function showSubPopup(MainItemId, SubItemId) {
    console.log(MainItemId);
    document.getElementById('litter-popup-view').innerHTML = '<div id="litter-popup" data-tabs-toggle="{parentTabContentSelector}" class="hidden fixed bg-white z-20 top-16 right-8 lg:right-40 left-8 lg:left-40 bottom-16 rounded-lg flex justify-center items-center shadow-lg overflow-y-auto"> <div class="absolute right-5 top-5"><div class="cursor-pointer" onclick="hideLitter()"> <svg   class="text-white fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="35px" viewBox="0 0 50 50"> <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"> </path> </svg></div> </div> <div class="absolute left-auto top-4 lg:top-0 flex flex-wrap my-10 justify-center items-center w-full  px-8"> <div class="w-[100%] lg:w-[45%] text-center lg:text-left  pb-4"> <img class=" rounded" src="' + Litters[MainItemId].puppies[SubItemId].image + '" alt=""> </div> <div class=" w-[100%] lg:w-[55%]  lg:px-4"> <div class="lg:flex gap-4 items-center"> <div> <h2 class="text-2xl py-2 lg:py-0 lg:text-4xl">' + Litters[MainItemId].puppies[SubItemId].name + '</h2> </div> <div id="availability-badge"></div> </div> <div id="price-of-litter-container' + SubItemId + '"></div><div class="px-6  border-[1px] rounded"> <p class="py-2"><strong> Birthday:</strong> ' + Litters[MainItemId].puppies[SubItemId].birthday.text + '</p> <p class="py-2"><strong> Age:</strong> ' + calculateWeeksOld(Litters[MainItemId].puppies[SubItemId].birthday.value) + ' Weeks' + '</p> <p class="py-2"><strong> Average Weight:</strong> ' + Litters[MainItemId].avg_weight + '</p> <div id="go-home-if-not-available"></div> </div> </div> <div class="pt-4 w-full" id="litter-tabs"> <div x-data=" { openTab: 2, activeClasses: \'bg-[#186C91] text-white\', inactiveClasses: \'text-body-color hover:bg-[#186C91] hover:text-white\', } " class="w-full mb-14"> <div class="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4 sm:flex-row">  <a href="javascript:void(0)" @click="openTab = 2" :class="openTab === 2 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Meet Mom </a> <a href="javascript:void(0)" @click="openTab = 3" :class="openTab === 3 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Meet Dad </a>  <a href="javascript:void(0)" @click="openTab = 1" :class="openTab === 1 ? activeClasses : inactiveClasses" class="px-4 py-3 text-sm font-medium rounded-md md:text-base lg:px-6"> Previous Litters </a></div> <div> <div x-show="openTab === 1" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div id="previous-litter-gallery" class="flex gap-1 lg:gap-4 flex-wrap py-4 justify-stretch"> </div> </div> <div x-show="openTab === 2" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div class=""> <table class="text-left my-4 w-full"> <thead> </thead> <tbody class=""> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Name: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].mname + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Height: </th> <td class="px-4 py-2">' + Litters[MainItemId].mheight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Weight: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].mweight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Genetics: </th> <td class="px-4 py-2"> <div class="flex flex-wrap gap-4"><a href="' + Litters[MainItemId].mdna + '"> <button class=" flex gap-1 bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Mother\'s DNA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> <a href="' + Litters[MainItemId].mofa + '"> <button class="flex gap-1  bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Mother\'s OFA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> </div> </td> </tr> </tbody> </table> <div id="mom-image-container" class="flex flex-wrap gap-1 lg:gap-4 justify-center"> </div> </div> </div> <div x-show="openTab === 3" class="py-6 mb-20 text-base leading-relaxed text-body-color dark:text-dark-6"> <div class=""> <table class="text-left my-4 w-full"> <thead> </thead> <tbody class=""> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Name: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].fname + ' </td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Height: </th> <td class="px-4 py-2">' + Litters[MainItemId].fheight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Weight: </th> <td class="px-4 py-2"> ' + Litters[MainItemId].fweight + '</td> </tr> <tr class="even:bg-white odd:bg-gray-50  border-b "> <th scope="row" class="px-4 py-2 font-bold text-gray-900  "> Genetics: </th> <td class="px-4 py-2"> <div class="flex flex-wrap gap-4"><a href="' + Litters[MainItemId].fdna + '"> <button class=" flex gap-1 bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Father\'s DNA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> <a href="' + Litters[MainItemId].fofa + '"> <button class="flex gap-1  bg-[#186C91] px-2 py-1 rounded text-white text-sm lg:text-base">Father\'s OFA<span> <svg class="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g> </svg></span> </button></a> </div> </td> </tr> </tbody> </table> <div id="dad-image-container" class="flex flex-wrap gap-1 lg:gap-4 justify-center"> </div> </div> </div> </div> </div> </div> <div class="fixed bg-white z-20 right-8 lg:right-40 left-8 lg:left-40 bottom-16 px-8 py-4 rounded-lg"> <a href="pages/chat.html"><button class="w-full bg-[#186C91] p-4 text-white">INQUIRE NOW</button> </div> </div></a>';

    if (Litters[MainItemId].status.mode == "ready") {
        document.getElementById('go-home-if-not-available').innerHTML = ' <p class="py-2"><strong> Litter Status::</strong> ' + Litters[MainItemId].status.text + '</p>'

    }
    else {
        // document.getElementById('go-home-if-not-available').innerHTML = ' <p class="py-2"><strong> Go Home:</strong> ' + Litters[MainItemId].goHome + '</p>'

    }

    for (let index = 0; index < Litters[MainItemId].previousLitter.length; index++) {
        document.getElementById('previous-litter-gallery').innerHTML += '<div class="   w-[48%] md:w-[23%] lg:w-[23%]"> <img class="rounded-t-lg"  src="' + Litters[MainItemId].previousLitter[index].image + '" alt=""> <div class= "p-2 rounded bg-white text-black shadow-lg text-center" >' + Litters[MainItemId].previousLitter[index].text + '</div></div>'
    }

    for (let index = 0; index < Litters[MainItemId].mimages.length; index++) {
        document.getElementById('mom-image-container').innerHTML += '<img class="rounded-t-lg w-[48%] md:w-[23%] lg:w-[23%]"  src="' + Litters[MainItemId].mimages[index] + '" alt="">'
    }

    for (let index = 0; index < Litters[MainItemId].fimages.length; index++) {
        document.getElementById('dad-image-container').innerHTML += '<img class="rounded-t-lg w-[48%] md:w-[23%] lg:w-[23%]"  src="' + Litters[MainItemId].fimages[index] + '" alt="">'
    }



    if (Litters[MainItemId].puppies[SubItemId].availablity == "Available") {
        document.getElementById('availability-badge').innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-600">' + Litters[MainItemId].puppies[SubItemId].availablity + '</span>'
        document.getElementById('price-of-litter-container' + SubItemId).innerHTML = '<div class="px-6 py-2 my-4 border-[1px] rounded">  <p class="text-lg"><strong> Price:</strong> ' + Litters[MainItemId].puppies[SubItemId].price + '</p> </div>'
    }
    else {
        document.getElementById('availability-badge').innerHTML = '    <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-red-100 text-red-600">' + Litters[MainItemId].puppies[SubItemId].availablity + '</span>'
        document.getElementById('price-of-litter-container' + SubItemId).innerHTML = '<div class="pt-5"></div>'

    }

    showLitter();

}


function calculateWeeksOld(dateOfBirth) {

    // if (!dateOfBirth || typeof dateOfBirth !== 'string') {
    //     console.error('Invalid input. Please provide a valid date of birth in MM-DD-YYYY format.');
    //     return null; // or handle the error as needed
    // }

    // const dateParts = dateOfBirth.split('-');

    // if (dateParts.length !== 3) {
    //     console.error('Invalid date format. Please use MM-DD-YYYY.');
    //     return null; // or handle the error as needed
    // }

    // const [month, day, year] = dateParts;
    // const dob = new Date(`${month}-${day}-${year}`);

    // if (isNaN(dob.getTime())) {
    //     console.error('Invalid date. Please provide a valid date in MM-DD-YYYY format.');
    //     return null; // or handle the error as needed
    // }

    // const currentDate = new Date();
    // const timeDiff = currentDate - dob;
    // const weeksOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

    // return weeksOld;

    // function calculateWeeksOld(dateOfBirth) {
    // Parse the input date string into a Date object
    // const dob = new Date(dateOfBirth);

    // // Get the current date
    // const currentDate = new Date();

    // // Calculate the time difference in milliseconds
    // const timeDiff = currentDate - dob;

    // // Calculate the number of weeks
    // const weeksOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

    // return weeksOld;
    // }

    const [month, day, year] = dateOfBirth.split('-');

    // Create a Date object using the components
    const dob = new Date(`${year}-${month}-${day}`);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - dob;

    // Calculate the number of weeks
    const weeksOld = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    console.log(dateOfBirth + " -> " + weeksOld)

    return weeksOld;
}

function showGallery() {

    document.getElementById('gallery-popup').classList.remove('hidden');

}

function hideGallery() {
    document.getElementById('gallery-popup').classList.add('hidden');
}

