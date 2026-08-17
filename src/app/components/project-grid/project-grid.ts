

import { Component, ViewChildren, QueryList } from '@angular/core';

import {
  Project,
  ProjectCard
} from '../project-card/project-card';


@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.scss'
})
export class ProjectGrid {

  projects: Project[] = [

    {
      title: 'RELEASE',
      subtitle: 'EDITORIAL',
      category: 'Editorial',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786886051/RELEASE_FINAL_FINAL_rtfkny.mov',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753468/Captura_de_pantalla_2026-08-15_082251_fmd89y.png'
        }
      ]
    },
    
    {
      title: 'COEVAL',
      subtitle: 'FALLING',
      category: 'Editorial',
      media: [
        {
          type: 'video',
          url: '//res.cloudinary.com/djpi5yzlu/video/upload/v1786699855/falling1_ksmsbo.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753465/Captura_de_pantalla_2026-08-15_082335_txjk3m.png'
        }
      ]
    },
    {
      title: 'SHOWPONY',
      subtitle: 'CAMPAIGN',
      category: 'Film',
      media: [
        {
          type: 'video',
          url:'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786886093/VID-20250816-WA0019_wavzlm.mp4',          
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753467/Captura_de_pantalla_2026-08-15_082312_tsbetj.png'
        }
      ]
    },
    {
    title: 'ALEXANDER WANG',
    subtitle: 'FW',
    category: 'Commercial',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699820/Alexander_Wang_FW_2_bx8wul.jpg'
      },
    ]
    },
    {
    title: 'ALEXANDER WANG',
    subtitle: 'FW',
    category: 'Commercial',
    media: [
      {
        type: 'video',
        url:'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786886256/Alexander_Wang_FW_1_iktyei.mp4',          
        thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_082000_bjlsya.png'
      }
    ]
    },
    {
    title: 'ALEXANDER WANG',
    subtitle: 'FW',
    category: 'Commercial',
    media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Alexander_Wang_FW_3_mvzmcu.jpg'
        }
      ]
    },
    
    {
      title: 'NIKE',
      subtitle: 'PEARL',
      category: 'Commercial',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699823/Jordan_Pearl_5_tt40mm.jpg'
        },
      ]
    },
    

    {
      title: 'NIKE',
      subtitle: 'PEARL',
      category: 'Commercial',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699823/Jordan_Pearl_4_dsjrj3.jpg',
        }
      ]
    },
    {
      title: 'NIKE',
      subtitle: 'PEARL',
      category: 'Commercial',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Jordan_Pearl_3_wlb82d.jpg'
        }
      ]
    },
    
    {
      title: 'JORDAN',
      subtitle: 'GAMMA',
      category: 'Commercial',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Jordan_Gamma_2_dqejgw.jpg',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786800242/Captura_de_pantalla_2026-08-15_212300_w4glmh.png'

        }
      ]
    },
    
    {
      title: 'JORDAN ',
      subtitle: 'GAMMA',
      category: 'Commercial',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699823/Jordan_Gamma_1_ul4r50.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786800245/Captura_de_pantalla_2026-08-15_212323_tc3qbo.png' 
        }
      ]
    },


    {
      title: 'JORDAN',
      subtitle: 'GAMMA',
      category: 'Commercial',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753464/Captura_de_pantalla_2026-08-15_082158_ux2fow.png',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753464/Captura_de_pantalla_2026-08-15_082158_ux2fow.png'
        }
      ]
    },
    {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Commercial',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699841/MOFT_3_ae9fig.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_081740_xr7ezk.png'
        }
      ]
    },
        {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Commercial',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699831/MOFT_1_znc7sa.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_081715_awn4am.png'
        }
      ]
    },
      {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Commercial',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699831/MOFT_2_olroqz.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786763700/Captura_de_pantalla_2026-08-15_091933_qkz3ph.png'
        }
      ]
      }  
  ]


  filteredProjects = this.projects;

  expandedProject: Project | null = null;


  @ViewChildren(ProjectCard) cardComponents!: QueryList<ProjectCard>;


  openProject(project: Project): void {

    // If the same project is already expanded, close it.
    if (this.expandedProject === project) {
      this.closeProject();
      return;
    }

    // Close previously expanded project if any
    if (this.expandedProject) {
      const prev = this.cardComponents.find(c => c.project === this.expandedProject);
      prev?.closeViewer();
    }

    this.expandedProject = project;

    // Allow DOM to update, then open the viewer on the matching card instance
    setTimeout(() => {
      const card = this.cardComponents.find(c => c.project === project);
      card?.openViewer();
    }, 0);
  }


  closeProject(): void {
    if (!this.expandedProject) {
      return;
    }

    const prev = this.cardComponents.find(c => c.project === this.expandedProject);
    prev?.closeViewer();
    this.expandedProject = null;
  }


  getRemainingProjects(): Project[] {

    if (!this.expandedProject) {
      return this.filteredProjects;
    }

    return this.filteredProjects.filter(
      project => project !== this.expandedProject
    );
  }


  setFilter(category: string): void {

    this.expandedProject = null;

    if (category === 'all') {

      this.filteredProjects =
        this.projects;

      return;
    }

    this.filteredProjects =
      this.projects.filter(
        project =>
          project.category.toLowerCase() ===
          category.toLowerCase()
      );
  }

}
