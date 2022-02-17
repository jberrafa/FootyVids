var mainContainer = document.getElementById("container");

// Serie A Videos

function getseriea(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (i in response){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "ITALY: Serie A") {
                
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')


                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }

         } 
    }
    
}

// La Liga Videos

function getlaliga(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (i in response){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "SPAIN: La Liga") {
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')

                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }
         } 
    }
    
}


// Ligue 1 Videos

function getligue1(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (i in response){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "FRANCE: Ligue 1") {
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')

                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }
         } 
    }
    
}



// Prem Videos

function getprem(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (i in response){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "ENGLAND: Premier League") {
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')

                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }
         } 
    }
    
}



// Bundes Videos

function getbundes(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (i in response){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "GERMANY: Bundesliga") {
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')

                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }
         } 
    }
    
}







// Recent Videos

function getrecent(){
    const link = 'https://www.scorebat.com/video-api/v3/feed/?token=[MTM2OTJfMTY0NDk1MDAwOV9kYWQ0ODQ2ZTE2ZjlkNTU0YmFlYjk5YTVlZTkxZGI5NjI1ZDBiNmIz]';
    // var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.send();
    request.onload = ()=>{
        data = JSON.parse(request.response)
        response = data['response']

        let j = 0;
        for (let i = 0; i < 30; i++){
            // Check for Top 5 leagues
            league = response[i]['competition']
            // console.log(league)

            if (league == "ITALY: Serie A" || league == "GERMANY: Bundesliga" || league == "SPAIN: La Liga" || league == "FRANCE: Ligue 1" || league == "ENGLAND: Premier League") {
                game = response[i]['title']
                video = response[i]['videos'][0]['embed']
                date = response[i]['date']

                // Fixing Date
                tempdate = JSON.stringify(date).split('T')
                fixeddate = tempdate[0].split('"')
                newdate = fixeddate[1]

                // Grabbing Video Link
                tempvid = JSON.stringify(video).split('>')
                temp1 = tempvid[1].split('src')
                temp2 = temp1[1].split("'")
                vidlink = temp2[1].split(',')

                // Creating HTML Elements from JSON Objects
                var div = document.createElement("div");
                div.innerHTML = '<h2>'+game+'</h2><h3>'+newdate+'</h3><iframe src="'+vidlink+'"allow="fullscreen"</iframe>"';
                mainContainer.appendChild(div);

                j++;
            }

            else {
                // Do nothing
            }

            if (j >= 9) {
                break
            }
         } 
    }
    
}




// if (league == "ITALY: Serie A" || league == "GERMANY: Bundesliga" || league == "SPAIN: La Liga" || league == "FRANCE: Ligue 1" || league == "ENGLAND: Premier League"){
            //     game = response[i]['title']
            //     video = response[i]['videos'][0]['embed']
            //     thumbnail = response[i]['thumbnail']
            //     // console.log(game)
            //     // console.log(video)
                
            //     var div = document.createElement("div");
            //     div.innerHTML = '<h2>'+game+'</h2><img src="'+thumbnail+'">';
            //     mainContainer.appendChild(div);
            // }