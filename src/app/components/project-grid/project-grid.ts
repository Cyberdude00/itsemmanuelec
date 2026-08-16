





import { Component } from '@angular/core';

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
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753468/Captura_de_pantalla_2026-08-15_082251_fmd89y.png',
          //url: 'https://player.mediadelivery.net/play/727165/c4ad171d-d3bc-4533-a015-9296d61e558a',
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
          //url: 'https://player.mediadelivery.net/play/727165/7d3c49f2-ad51-46a6-bdbb-b99e81e6a5cf',
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
          url:'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753467/Captura_de_pantalla_2026-08-15_082312_tsbetj.png',          
          //url: 'https://player.mediadelivery.net/play/727165/7156e9a1-c8e3-4f56-8396-6d647a2fcf01',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753467/Captura_de_pantalla_2026-08-15_082312_tsbetj.png'
        }
      ]
    },
    {
    title: 'ALEXANDER WANG',
    subtitle: 'FW',
    category: 'Film',
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
    category: 'Campaign',
    media: [
      {
        type: 'video',
        url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_082000_bjlsya.png',
        //url: 'https://player.mediadelivery.net/play/727165/d1d1911a-f2bd-486c-8d2b-c6de2338bb1d',
        thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_082000_bjlsya.png'
      }
    ]
    },
    {
    title: 'ALEXANDER WANG',
    subtitle: 'FW',
    category: 'Film',
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
      category: 'Campaign',
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
      category: 'Campaign',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699823/Jordan_Pearl_4_dsjrj3.jpg',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699823/Jordan_Pearl_4_dsjrj3.jpg'
        }
      ]
    },
    {
      title: 'NIKE',
      subtitle: 'PEARL',
      category: 'Campaign',
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
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Jordan_Gamma_2_dqejgw.jpg'          
          //thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753461/Captura_de_pantalla_2026-08-15_082117_dqowzo.png'

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
          //url: 'https://player.mediadelivery.net/play/727165/6a7e7d70-497f-4969-a5b6-3c91fbf11d50',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699823/Jordan_Gamma_1_ul4r50.mp4',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786800245/Captura_de_pantalla_2026-08-15_212323_tc3qbo.png' 
        }
      ]
    },


    {
      title: 'JORDAN',
      subtitle: 'GAMMA',
      category: 'Campaign',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753464/Captura_de_pantalla_2026-08-15_082158_ux2fow.png',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753464/Captura_de_pantalla_2026-08-15_082158_ux2fow.png' 
        }
      ]
    },
    {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699841/MOFT_3_ae9fig.mp4',
          //url: 'https://player.mediadelivery.net/play/727165/5161f738-a200-42a9-8851-51b0c3021bea',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_081740_xr7ezk.png'
        }
      ]
    },
        {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699831/MOFT_1_znc7sa.mp4',
          //url: 'https://player.mediadelivery.net/play/727165/5161f738-a200-42a9-8851-51b0c3021bea',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786753463/Captura_de_pantalla_2026-08-15_081715_awn4am.png'
        }
      ]
    },
      {
      title: 'SHEIN',
      subtitle: 'MOTF',
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/djpi5yzlu/video/upload/v1786699831/MOFT_2_olroqz.mp4',
          //url: 'https://player.mediadelivery.net/play/727165/5161f738-a200-42a9-8851-51b0c3021bea',
          thumbnail: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786763700/Captura_de_pantalla_2026-08-15_091933_qkz3ph.png'
        }
      ]
      }  
  ]


  filteredProjects = this.projects;

  expandedProject: Project | null = null;


  openProject(project: Project): void {
    this.expandedProject = project;

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  closeProject(): void {
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
