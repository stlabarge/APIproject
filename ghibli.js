const baseURL = ('https://ghibliapi.herokuapp.com/films');


let url;

let filmList = document.querySelector('#show');

fetch('https://ghibliapi.herokuapp.com/films')
    .then(function(response) {
        return response.json();
    })

    //.then(json => getFilms(json))  ///
    .then(function(json) {
        getFilms(json);
           console.log(json);
    })

function getFilms(films){
   // let movieTitle = (films.title);
    //let movieDescript = (films.description);
    let movies = films
    console.log(movies)

        for(f of movies){
            let movieTitle = (movies.title);
            let movieDescript = (movies.description);
            let movieRelease = (movies.release_date);

            

            let box = document.createElement('div');

            let title = document.createElement('h4');
            let descriptions = document.createElement('p')
            let release_date = document.createElement('h6')

            box.setAttribute('id',f.title)

            descriptions.innerText = f.description;
            title.innerText = (f.title); 
            release_date.innerText = ('Release Date: ' + f.release_date);
            
            console.log(title)
            // listItem.innerHTML = ('<p>' + films.description + '</p>');

            box.appendChild(title); //-->lost title of movie on the site
            //title.appendChild(div);
            box.appendChild(release_date);
            box.appendChild(descriptions);
            filmList.appendChild(box);
    
            // results.appendChild(movieDescript);
    }
}
    




        // let films = json.results;
        // console.log(films)
        // for(f in films){
        //     let listItem = document.createElement('li');
        //     listItem.innerHTML = '<p>' + f.name + '</p>';
        //     sgFilmList.appendChild(listItem);
        // }

