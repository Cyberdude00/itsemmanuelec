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
      title: 'JORDAN GAMMA',
      subtitle: 'COMMERCIAL',
      category: 'Commercial',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/6a7e7d70-497f-4969-a5b6-3c91fbf11d50',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'JORDAN GAMMA',
      subtitle: 'CAMPAIGN',
      category: 'Campaign',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/8e98cdb3-01a7-48b6-b873-7a8789119c5b'
        }
      ]
    },


    {
      title: 'ALEXANDER WANG',
      subtitle: 'CAMPAIGN',
      category: 'Campaign',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/d1d1911a-f2bd-486c-8d2b-c6de2338bb1d',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'RELEASE',
      subtitle: 'EDITORIAL',
      category: 'Editorial',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/c4ad171d-d3bc-4533-a015-9296d61e558a',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'COEVAL MAGAZINE',
      subtitle: 'EDITORIAL',
      category: 'Editorial',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/7d3c49f2-ad51-46a6-bdbb-b99e81e6a5cf',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'SHORPONY',
      subtitle: 'FILM',
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/7156e9a1-c8e3-4f56-8396-6d647a2fcf01',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'MOTF SHEIN',
      subtitle: 'FILM',
      category: 'Film',
      media: [
        {
          type: 'video',
          url: 'https://player.mediadelivery.net/play/727165/5161f738-a200-42a9-8851-51b0c3021bea',
          // thumbnail: 'AQUI_PONES_LA_URL_DE_TU_IMAGEN'
        }
      ]
    },


    {
      title: 'NIKE JORDAN',
      subtitle: 'GAMMA',
      category: 'Campaign',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699823/Jordan_Pearl_5_tt40mm.jpg'
        },
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Jordan_Pearl_3_wlb82d.jpg'
        }
      ]
    },


    {
      title: 'NIKE JORDAN',
      subtitle: 'GAMMA',
      category: 'Film',
      media: [
        {
          type: 'image',
          url: 'https://res.cloudinary.com/djpi5yzlu/image/upload/v1786699821/Jordan_Gamma_2_dqejgw.jpg'
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
    }

  ];


  filteredProjects = this.projects;


  setFilter(category: string): void {

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