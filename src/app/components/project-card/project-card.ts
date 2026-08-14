import {
  Component,
  HostListener,
  Input,
  OnDestroy
} from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';


export interface ProjectMedia {

  type: 'image' | 'video';

  url: string;

  thumbnail?: string;

}


export interface Project {

  title: string;

  subtitle?: string;

  category: string;

  media: ProjectMedia[];

  url?: string;

}


@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard implements OnDestroy {

  @Input({ required: true })
  project!: Project;


  currentMedia = 0;

  isViewerOpen = false;


  constructor(
    private sanitizer: DomSanitizer
  ) {}


  get current(): ProjectMedia {

    return this.project.media[this.currentMedia];

  }


  get safeVideoUrl(): SafeResourceUrl {

    return this.sanitizer
      .bypassSecurityTrustResourceUrl(
        this.current.url
      );

  }


  /*
   * Bunny thumbnail fallback.
   *
   * If a custom thumbnail exists,
   * the HTML uses that instead.
   */

  getBunnyThumbnail(url: string): string {

    const videoId =
      url.split('/').pop();

    if (!videoId) {
      return '';
    }

    return `https://vz-727165.b-cdn.net/${videoId}/thumbnail.jpg`;

  }


  openViewer(): void {

    if (this.isViewerOpen) {
      return;
    }

    this.isViewerOpen = true;

  }


  closeViewer(): void {

    this.isViewerOpen = false;

  }


  next(event?: Event): void {

    event?.stopPropagation();

    if (this.project.media.length <= 1) {
      return;
    }

    this.currentMedia =
      (this.currentMedia + 1) %
      this.project.media.length;

  }


  previous(event?: Event): void {

    event?.stopPropagation();

    if (this.project.media.length <= 1) {
      return;
    }

    this.currentMedia =
      (
        this.currentMedia -
        1 +
        this.project.media.length
      ) %
      this.project.media.length;

  }


  selectMedia(
    index: number,
    event?: Event
  ): void {

    event?.stopPropagation();

    this.currentMedia = index;

  }


  @HostListener('document:keydown.escape')
  handleEscape(): void {

    if (this.isViewerOpen) {
      this.closeViewer();
    }

  }


  @HostListener('document:keydown.arrowright')
  handleRight(): void {

    if (this.isViewerOpen) {
      this.next();
    }

  }


  @HostListener('document:keydown.arrowleft')
  handleLeft(): void {

    if (this.isViewerOpen) {
      this.previous();
    }

  }


  ngOnDestroy(): void {}

}