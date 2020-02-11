import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { LocalStoreService } from '../services/local-store.service';
import { MatDialog } from '@angular/material/dialog';
import { SnapshotModelComponent } from '../snapshot-model/snapshot-model.component';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.scss']
})
export class WardrobeComponent implements OnInit {

  @ViewChild("wardrobeUpload", {static: false}) wardrobeUpload: ElementRef;

  user: SocialUser;
  userData:any;
  topsCount = 0;
  bottomsCount = 0;
  fileUploadTo: String;
  topSrc: any;
  bottomSrc: any;
  isFav: Boolean = false;
  recommendedArr: number[];

  constructor(
    private storageService: LocalStoreService,
    private snapDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.userData = this.storageService.getUserData();
  }

  
  openDialog(imageType): void {
    const dialogRef = this.snapDialog.open(SnapshotModelComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addToUserData(imageType, result);
      }
    });
  }

  uploadFile(imageType){
    this.fileUploadTo = imageType;
    this.wardrobeUpload.nativeElement.click();
  }
  
  onFileChange(event){
    let file:File = event.target.files[0];
    if(file.type.includes('image/')) {
      this.getBase64(file).then((result) =>{
        this.addToUserData(this.fileUploadTo, result);
      })
    }
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  addToUserData(imageType, file) {
    this.userData[imageType].push(file);
    this.storageService.setUserData(this.userData);
    this.topsCount = this.userData['tops'].length;
    this.bottomsCount = this.userData['bottoms'].length;
  }
}
