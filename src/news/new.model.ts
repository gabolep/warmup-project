export class New {
    constructor(
        public created_at: Date,
        public title: string,
        public story_title: string,
        public url: string,
        public story_url: string,
        public author: string,
        public story_id: number,
        public state: boolean,
    ) {};
}