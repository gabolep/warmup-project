import { Injectable } from "@nestjs/common";
import { New } from './new.model';


@Injectable()
export class NewsService {
    news: New[] = [];
    
    insertNew(created_at: Date, title: string, story_title: string, url: string, story_url: string, author: string, story_id: number, state: boolean){
        const newNew = new New(created_at,title,story_title,url,story_url,author,story_id,state);
        this.news.push(newNew);
        return 'agregue noticia!';
    }

}