import { Component } from '@angular/core';
import { Post } from './models/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Posts = [];
  numberPosts = 3;


  ngOnInit() {
    this.changeNumberPosts();
  }

  randomDate  (from, to) {
    from = from.getTime();
    to = to.getTime();
    return new Date(from + Math.random() * (to - from)); 
  }

  async changeNumberPosts() {
    this.Posts = [];
    let i = 0;
     while (i < this.numberPosts) {
      let post: Post = await  new Post("Loreum Lipsum Title"
        , "Lorem ipsum dolor sit amet, nec no iudico dicant insolens. Duo et regione eripuit contentiones. Conceptam elaboraret ea mea, ullum fabellas assentior eu cum. Usu eripuit delectus id, ad nam brute saepe electram. Animal interesset voluptatibus mea ad, ferri utamur consulatu ea mei, an dico saepe utroque ius. No inimicus repudiandae pro, in nam magna novum dicunt."
        , Math.floor(Math.random() * 7) - 3,
        this.randomDate(new Date("2018-01-15T03:24:00"), new Date())
      );
       this.Posts.push(post);
      i++
    }
   
  }
}
