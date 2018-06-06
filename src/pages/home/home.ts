import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NavController, NavParams, Searchbar } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('si') searchInput: Searchbar;
  showSearch: Boolean = false;
  moviesList = [];
  public loaded = false;
  placeholder = "assets/imgs/image-pre-load.jpg";
  constructor(private renderer: Renderer2, public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard, private http: Http) {
    this.http.get("http://192.168.225.250:3000/get-all-movie-images").subscribe((movies) => {
      console.log(movies.json());
      this.moviesList = movies.json();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieListPage');
  }

  openReview(url, id) {
    this.navCtrl.push("MovieReviewPage", { url, id });
  }

  openSearch() {
    this.showSearch = true;
    setTimeout(() => {
      this.searchInput.setFocus();
      this.keyboard.show();
    }, 300);
  }

  onCancel() {
    this.showSearch = false;
    this.keyboard.close();
  }

  isLoaded(lowRes: ElementRef) {
    this.renderer.setStyle(lowRes, 'display', 'none');
  }



}
