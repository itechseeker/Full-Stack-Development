import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=[
    {
        "name": "home",
        "weight": 3
    },
    {
        "name": "he",
        "weight": 2
    },
    {
        "name": "park",
        "weight": 1
    }]
    sentences={
      'home':['Shop online for all your home improvement needs: appliances, bathroom decorating ideas, kitchen remodeling, patio furniture, power tools',
              "Tom sneaks back home one night to observe the commotion and after a brief moment of remorse at his loved ones' suffering, he is struck by the grand idea of appearing at his funeral",
              "The novel is set around Twain's actual boyhood home of Hannibal, near St. Louis, and many of the places in it are real and today support a tourist industry as a result"],
      'he':['He had previously written contemporary autobiographical narratives',
            ' He owned a large house in Hartford, Connecticut but needed another success to support himself, with a wife and two daughters'],
      'park':["Let's go to the Central Park"]
    }
  constructor() { }
  getData(){
    return this.data;
  }

  getSentences(word){
    return this.sentences[word]
  }
}
