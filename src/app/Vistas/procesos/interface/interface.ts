export interface RespuestaTopHeadLines{
    status: string;
    totalresults: number;
    articles: Article[];
}

export interface Article{
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    
}

export interface Source {
 id?: string;
 name: string;
}