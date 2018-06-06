import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AddReviewComponent } from "../../components/add-review/add-review";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http } from "@angular/http";
/**
 * Generated class for the MovieReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-review',
  templateUrl: 'movie-review.html',
})
export class MovieReviewPage {
  imgUrl;
  private imgSrc: string = "url('assets/imgs/image-pre-load.jpg')";
  imgHeight = "40vh";
  img: HTMLImageElement;
  movie = {};
  contentLoaded = false;
  constructor(public dialog: MatDialog, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private http: Http) {
    this.navParams.get('url')
  }

  ionViewDidLoad() {


    this.img = new Image();
    this.img.src = this.navParams.get('url'); // Load image to IMG Element to find the Height

    this.img.onload = () => {
      this.imgHeight = this.img.height / 10 + "vh";
      console.log(this.imgHeight);
    }

    setTimeout(() => {
      this.imgSrc = `url('${this.navParams.get('url')}')`; // Actual Image to Load in View
      this.http.get(`http://192.168.225.250:3000/get-movie-details-by-id/${this.navParams.get('id')}`).subscribe((movie) => {
        console.log(movie.json());
        this.movie = movie.json();
        this.contentLoaded = true;
      });
    }, 3000)
  }

  openReviewModal() {
    let dialogRef = this.dialog.open(AddReviewComponent, {
      // width: '250px',
      data: { movieName: "Dark Knight" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
