class Media {
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false; 
    }
    get title(){ return this._title}
    get ratings(){ return this._ratings}
    get isCheckedOut(){ return this._isCheckedOut}
    getAverageRating(){
      return this._ratings.reduce((a,b) => a+b)/this._ratings.length || null;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating){
      if(rating > 0 && rating <=5){ 
        this._ratings.push(rating);
      } 
      else {
        console.log(rating+' invalid rating input (valid: 1-5)')
        // throw Error('invalid rating input (valid: 1-5)')
      }
    }
  }
  class Book extends Media{
    constructor(title,author,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){ return this._author}
    get pages(){ return this._pages}
  }
  class Movie extends Media{
    constructor(title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){ return this._director}
    get runTime(){ return this._runTime}
  }
  class CD extends Media{
    constructor(title,artist,songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){ return this._artist}
    get songs(){ return this._songs}
    shuffle(){
      let tempAlbum = new Array(...this._songs);
      let playlist = [];
      const playlistSize = tempAlbum.length;
      for(let i=0; i<playlistSize; i++){
        const currentSize = tempAlbum.length;
        const randIndex = Math.floor(Math.random()*currentSize);
        const selectedSong = tempAlbum.splice(randIndex,1)[0];
        playlist.push(selectedSong);
      }
    //   console.log(playlist);
      return playlist; 
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544)
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed','Jan de Bont',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  console.log('')
  console.log('')
  
  const cd1 = new CD('A Night at the Opera','Queens',
             [ '1. Death on Two Legs (Dedicated To...)',
              '2. Lazing on a Sunday Afternoon',
              '3. Im in Love with My Car',
              '4. Youre My Best Friend',
              '5. 39',
              '6. Sweet Lady',
              '7. Seaside Rendezvous',
              '8. The Prophets Song',
              '9. Love of My Life',
              '10. Good Company',
              '11. Bohemian Rhapsody',
              '12. God Save the Queen (instrumental)']
            );
            
console.log(cd1.shuffle())
console.log(cd1.songs)
  
  
  
  