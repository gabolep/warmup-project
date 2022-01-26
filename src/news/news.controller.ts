import { Controller, Post, Body } from "@nestjs/common";
import { StringSchemaDefinition } from "mongoose";
import { NewsService } from "./news.service";


@Controller('news')
export class NewsController {
    
    constructor(private readonly newsService: NewsService){}

    @Post()
    addNew(
        @Body('created_at') created_at: Date,
        @Body('title') title: string,
        @Body('story_title') story_title: string,
        @Body('url') url: string,
        @Body('story_url') story_url: string,
        @Body('author') author: string,
        @Body('story_id') story_id: number,
        @Body('state') state: boolean,
        
        ): any {
        this.newsService.insertNew(
            created_at,
            title,
            story_title,
            url,
            story_url,
            author,
            story_id,
            state
        );
        
    }
}