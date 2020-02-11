import { Component, OnInit } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-snapshot-model',
  templateUrl: './snapshot-model.component.html',
  styleUrls: ['./snapshot-model.component.scss']
})
export class SnapshotModelComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<SnapshotModelComponent>) { }

  // toggle webcam on/off
  public showWebcam = false;
  public errors: WebcamInitError[] = [];

  public videoOptions: MediaTrackConstraints = {
    width: 400,
  };

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  ngOnInit() {
  }


  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public saveImage():void {
    this.dialogRef.close(this.webcamImage.imageAsDataUrl);
  }

  public cancelSnap():void {
    this.dialogRef.close();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
