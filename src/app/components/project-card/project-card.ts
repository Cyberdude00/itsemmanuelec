import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  HostBinding,
  ViewChild,
  ElementRef
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
  @Input({ required: true }) project!: Project;

  @Output() requestOpen = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @HostBinding('class.is-expanded')
  get hostExpanded(): boolean { return this.isViewerOpen; }

  currentMedia = 0;
  isViewerOpen = false;
  isVideoPlaying = false;
  
  @ViewChild('videoPlayer', { static: false }) videoPlayer?: ElementRef<HTMLVideoElement>;

  constructor(private sanitizer: DomSanitizer) {}

  get current(): ProjectMedia {
    return this.project.media[this.currentMedia];
  }

  get safeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.current.url);
  }

  getBunnyThumbnail(url: string): string {
    const videoId = url.split('/').pop();
    if (!videoId) return '';
    return `https://vz-727165.b-cdn.net/${videoId}/thumbnail.jpg`;
  }

  openViewer(): void {
    if (this.isViewerOpen) return;
    this.isViewerOpen = true;
    this.opened.emit();
  }

  closeViewer(): void {
    try {
      const v = this.videoPlayer?.nativeElement;
      if (v && !v.paused) v.pause();
    } catch (e) {}
    this.isVideoPlaying = false;
    this.isViewerOpen = false;
    this.closed.emit();
  }

  // ✅ MÉTODO FALTANTE - notifyOpen
  notifyOpen(event?: Event): void {
    event?.stopPropagation();
    this.requestOpen.emit();
  }

  next(event?: Event): void {
    event?.stopPropagation();
    if (this.project.media.length <= 1) return;
    this.currentMedia = (this.currentMedia + 1) % this.project.media.length;
  }

  previous(event?: Event): void {
    event?.stopPropagation();
    if (this.project.media.length <= 1) return;
    this.currentMedia = (this.currentMedia - 1 + this.project.media.length) % this.project.media.length;
  }

  selectMedia(index: number, event?: Event): void {
    event?.stopPropagation();
    this.currentMedia = index;
  }

  // ✅ MÉTODO FALTANTE - playVideo
  playVideo(event?: Event): void {
    event?.stopPropagation();
    try {
      const v = this.videoPlayer?.nativeElement;
      if (v) {
        v.play().catch(() => {});
      }
    } catch (e) {}
  }

  // ✅ MÉTODOS FALTANTES - onVideoPlay y onVideoPause
  onVideoPlay(): void {
    this.isVideoPlaying = true;
  }

  onVideoPause(): void {
    this.isVideoPlaying = false;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.isViewerOpen) this.closeViewer();
  }

  @HostListener('document:keydown.arrowright')
  handleRight(): void {
    if (this.isViewerOpen) this.next();
  }

  @HostListener('document:keydown.arrowleft')
  handleLeft(): void {
    if (this.isViewerOpen) this.previous();
  }

  ngOnDestroy(): void {}
}