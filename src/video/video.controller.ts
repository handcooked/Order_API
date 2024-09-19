/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('video')
export class VideoController {
  private videos = [
    {
      id: 1,
      previewUrl: process.env.VIDEO_1_PREVIEW_URL,
      videoUrl: process.env.VIDEO_1_URL,
    },
    {
      id: 2,
      previewUrl: process.env.VIDEO_2_PREVIEW_URL,
      videoUrl: process.env.VIDEO_2_URL,
    },
    {
      id: 3,
      previewUrl: process.env.VIDEO_2_PREVIEW_URL,
      videoUrl: process.env.VIDEO_2_URL,
    },
    {
      id: 4,
      previewUrl: process.env.VIDEO_2_PREVIEW_URL,
      videoUrl: process.env.VIDEO_2_URL,
    },
    {
      id: 5,
      previewUrl: process.env.dVIDEO_2_PREVIEW_URL,
      videoUrl: process.env.VIDEO_2_URL,
    },
    {
      id: 6,
      previewUrl: process.env.VIDEO_2_PREVIEW_URL,
      videoUrl: process.env.VIDEO_2_URL,
    },
  ];

  @Get(':id/preview')
  getVideoPreview(@Param('id') id: string) {
    const video = this.videos.find(v => v.id === parseInt(id));
    if (video) {
      return { url: video.previewUrl };
    } else {
      return { error: 'Video not found' };
    }
  }

  @Get(':id/video')
  getVideo(@Param('id') id: string) {
    const video = this.videos.find(v => v.id === parseInt(id));
    if (video) {
      return { url: video.videoUrl };
    } else {
      return { error: 'Video not found' };
    }
  }
  @Get('previews')
  getAllPreviews() {
    const previews = this.videos.map(video => ({
      id: video.id,
      previewUrl: video.previewUrl,
      videoUrl: video.videoUrl,
    }));
    return { previews };
  }
}