import { Component, Input, inject } from '@angular/core';
import * as saveAs from 'file-saver';
import { SetadRepositoryService } from '../../services/setad-repository.service';
@Component({
  selector: 'jam-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {
  private readonly _setadRepository=inject(SetadRepositoryService)
  @Input() imageId: string;
  @Input() name: string;
  @Input() family: string;
  @Input() nationalCode: string;
  onDownloadImage() {
    this._setadRepository.getImage(this.imageId).subscribe(c => {
      saveAs(new Blob([c]), `${this.name}-${this.family}-${this.nationalCode}-${this.imageId}.jpg`);
    });
  }
}
